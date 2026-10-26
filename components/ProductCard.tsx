import type { CatalogConfig, Product } from "../types";
import { formatPrice } from "../lib/format";
import { buildMessage, whatsappLink } from "../lib/whatsapp";
import { ProductImage } from "./ProductImage";
import { WhatsAppButton } from "./WhatsAppButton";

interface Props {
  product: Product;
  config: CatalogConfig;
}

export function ProductCard({ product, config }: Props) {
  const message = buildMessage(config.mensaje, product, config.moneda);
  const canOrder = product.disponible && Boolean(config.whatsapp);

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-square overflow-hidden">
        <ProductImage foto={product.foto} nombre={product.nombre} muted={!product.disponible} />
        {!product.disponible && (
          <span className="absolute left-3 top-3 rounded-full bg-coral px-3 py-1 text-xs font-semibold text-black-soft">
            Agotado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex-1">
          <p className="text-xs text-text-muted">{product.categoria}</p>
          <h3 className="mt-1 text-base! font-semibold! leading-snug! tracking-normal! text-foreground!">
            {product.nombre}
          </h3>
          {product.descripcion && (
            <p className="mt-2 line-clamp-3 text-sm text-text-muted">{product.descripcion}</p>
          )}
        </div>

        <p className="text-xl font-bold text-text-primary">
          {formatPrice(product.precio, config.moneda)}
        </p>

        <WhatsAppButton
          href={whatsappLink(config.whatsapp, message)}
          label={product.disponible ? "Pedir por WhatsApp" : "No disponible"}
          disabled={!canOrder}
        />
      </div>
    </article>
  );
}
