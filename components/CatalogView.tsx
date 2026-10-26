"use client";

import { useMemo, useState } from "react";
import type { Catalog } from "../types";
import { normalize } from "../lib/format";
import { CategoryFilter } from "./CategoryFilter";
import { ProductGrid } from "./ProductGrid";
import { SearchBar } from "./SearchBar";
import { StateMessage } from "./StateMessage";

export function CatalogView({ catalog }: { catalog: Catalog }) {
  const { config, products } = catalog;
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => [...new Set(products.map((p) => p.categoria))], [products]);

  const visible = useMemo(() => {
    const q = normalize(query);
    return products.filter(
      (p) =>
        (category === "Todos" || p.categoria === category) &&
        (!q || normalize(`${p.nombre} ${p.descripcion} ${p.categoria}`).includes(q)),
    );
  }, [products, category, query]);

  return (
    <>
      <div className="sticky top-0 z-(--z-sticky) border-b border-border bg-background/90 backdrop-blur">
        <div className="satcore-container flex flex-col gap-3 py-4 md:flex-row md:items-center md:gap-6">
          <div className="md:w-72 md:shrink-0">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <div className="min-w-0 flex-1">
            <CategoryFilter categories={categories} active={category} onChange={setCategory} />
          </div>
        </div>
      </div>

      <main className="satcore-container py-8">
        {products.length === 0 ? (
          <StateMessage
            title="Aún no hay productos"
            detail='Agrega filas en la hoja "Productos" de data/catalogo.xlsx y recarga la página.'
          />
        ) : visible.length === 0 ? (
          <StateMessage title="Sin resultados" detail="Prueba con otra palabra o elige otra categoría." />
        ) : (
          <ProductGrid products={visible} config={config} />
        )}
      </main>
    </>
  );
}
