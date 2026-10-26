import "server-only";

import type { Catalog, CatalogConfig, Product } from "../types";
import { normalize, parsePrice } from "./format";

const DEFAULT_CONFIG: CatalogConfig = {
  negocio: "Mi catálogo",
  eslogan: "",
  whatsapp: "",
  moneda: "COP",
  mensaje: "Hola, me interesa {producto} ({precio}). ¿Está disponible?",
};

type Row = unknown[];

function toText(value: unknown): string {
  return value === null || value === undefined ? "" : String(value).trim();
}

/**
 * Convierte un CSV en filas, respetando comas, comillas
 * y saltos de línea dentro de los campos.
 */
function parseCSV(csv: string): Row[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];

    if (char === '"') {
      if (quoted && csv[i + 1] === '"') {
        field += '"';
        i++;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && csv[i + 1] === "\n") i++;

      row.push(field);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);

      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  if (field !== "" || row.length > 0) {
    row.push(field);
    if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  }

  return rows;
}

function parseConfig(data: Row[] | undefined): CatalogConfig {
  const config = { ...DEFAULT_CONFIG };

  for (const row of data ?? []) {
    const key = normalize(row[0]) as keyof CatalogConfig;
    const value = toText(row[1]);

    if (key in config && value) {
      config[key] = value;
    }
  }

  return config;
}

function parseProducts(data: Row[] | undefined): Product[] {
  if (!data || data.length < 2) return [];

  const headers = data[0].map(normalize);
  const col = (name: string) => headers.indexOf(name);

  const idx = {
    nombre: col("nombre"),
    categoria: col("categoria"),
    descripcion: col("descripcion"),
    precio: col("precio"),
    foto: col("foto"),
    disponible: col("disponible"),
  };

  if (idx.nombre === -1) {
    throw new Error(
      'La hoja "Productos" necesita una columna llamada "Nombre".',
    );
  }

  const get = (row: Row, index: number) =>
    index === -1 ? undefined : row[index];

  return data
    .slice(1)
    .filter((row) => toText(get(row, idx.nombre)))
    .map((row, index) => {
      const disponible = normalize(get(row, idx.disponible));

      return {
        id: String(index),
        nombre: toText(get(row, idx.nombre)),
        categoria: toText(get(row, idx.categoria)) || "General",
        descripcion: toText(get(row, idx.descripcion)),
        precio: parsePrice(get(row, idx.precio)),
        foto: toText(get(row, idx.foto)),
        disponible: !["no", "0", "false", "agotado"].includes(disponible),
      };
    });
}

async function fetchCSV(url: string | undefined, sheetName: string): Promise<Row[]> {
  if (!url) {
    throw new Error(
      `Falta configurar la variable de entorno de la hoja "${sheetName}".`,
    );
  }

  let response: Response;

  try {
    response = await fetch(url, { cache: "no-store" });
  } catch {
    throw new Error(`No se pudo conectar con la hoja "${sheetName}".`);
  }

  if (!response.ok) {
    throw new Error(
      `No se pudo leer la hoja "${sheetName}" (HTTP ${response.status}).`,
    );
  }

  const csv = await response.text();

  if (
    !csv.trim() ||
    csv.trimStart().startsWith("<!DOCTYPE html") ||
    csv.trimStart().startsWith("<html")
  ) {
    throw new Error(
      `La URL de "${sheetName}" no devolvió CSV. Verifica la publicación de Google Sheets.`,
    );
  }

  return parseCSV(csv);
}

/**
 * Carga el catálogo desde las hojas CSV publicadas en Google Sheets.
 * No requiere reconstruir la aplicación al cambiar los datos.
 */
export async function loadCatalog(): Promise<Catalog> {
  const [productsData, configData] = await Promise.all([
    fetchCSV(process.env.GOOGLE_SHEETS_PRODUCTS_CSV_URL, "Productos"),
    fetchCSV(process.env.GOOGLE_SHEETS_CONFIG_CSV_URL, "Configuracion"),
  ]);

  return {
    config: parseConfig(configData),
    products: parseProducts(productsData),
  };
}
