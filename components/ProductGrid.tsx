import type { CatalogConfig, Product } from "../types";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
  config: CatalogConfig;
}

export function ProductGrid({ products, config }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <li key={product.id} className="flex">
          <ProductCard product={product} config={config} />
        </li>
      ))}
    </ul>
  );
}
