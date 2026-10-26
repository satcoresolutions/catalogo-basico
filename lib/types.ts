/**
 * Producto del catálogo.
 *
 * Corresponde a la hoja "Productos" del archivo catalogo.xlsx:
 * Nombre, Categoria, Descripcion, Precio, Foto, Disponible.
 */
export interface Product {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  foto: string;
  disponible: boolean;
}

/**
 * Configuración general del catálogo.
 *
 * Corresponde a la hoja "Configuracion" del archivo catalogo.xlsx:
 * negocio, eslogan, whatsapp, moneda y mensaje.
 */
export interface CatalogConfig {
  negocio: string;
  eslogan: string;
  whatsapp: string;
  moneda: string;
  mensaje: string;
}

/**
 * Catálogo completo cargado desde Excel.
 */
export interface Catalog {
  config: CatalogConfig;
  products: Product[];
}
