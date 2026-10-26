import type { Product } from "../types";
import { formatPrice } from "./format";

/** Arma el enlace de WhatsApp. El número va con indicativo, solo dígitos (ej. 573001234567). */
export function whatsappLink(number: string, message: string): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Reemplaza {producto} y {precio} en el mensaje definido en el Excel. */
export function buildMessage(template: string, product: Product, currency: string): string {
  return template
    .replaceAll("{producto}", product.nombre)
    .replaceAll("{precio}", formatPrice(product.precio, currency));
}
