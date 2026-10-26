export interface Product {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number | null;
  foto: string;
  disponible: boolean;
}

export interface CatalogConfig {
  negocio: string;
  eslogan: string;
  whatsapp: string;
  moneda: string;
  mensaje: string;
}

export interface Catalog {
  config: CatalogConfig;
  products: Product[];
}
