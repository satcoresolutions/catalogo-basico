/** Configuración central de SEO. Define NEXT_PUBLIC_SITE_URL en producción. */
export const SITE = {
  name: "Catálogo digital",
  brand: "SatCore Solutions",
  description:
    "Catálogo digital de productos con fotos, precios, disponibilidad y pedidos por WhatsApp. Administra fácilmente la información de tu negocio desde un archivo Excel.",
  shortDescription:
    "Catálogo digital de productos con precios, fotos, disponibilidad y pedidos por WhatsApp.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "es_CO",
  language: "es-CO",
  themeColor: "#132a8e",
  keywords: [
    "catálogo digital",
    "catalogo digital",
    "catálogo de productos",
    "catalogo de productos",
    "catálogo con WhatsApp",
    "pedidos por WhatsApp",
    "productos con precios",
    "catálogo para negocios",
    "catálogo para pequeñas empresas",
    "catálogo online",
    "catálogo web",
    "productos online",
    "menú digital",
    "ventas por WhatsApp",
    "SatCore Solutions",
  ],
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
