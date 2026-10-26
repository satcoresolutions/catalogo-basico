import { CatalogView } from "../components/CatalogView";
import  Header  from "../components/Header";
import { StateMessage } from "../components/StateMessage";
import { loadCatalog } from "../lib/excel";
import type { Catalog } from "../types";

// Lee el Excel en cada visita: al guardar el .xlsx y recargar, ves los cambios sin recompilar.
export const dynamic = "force-dynamic";

export default async function Page() {
  let catalog: Catalog;
  try {
    catalog = await loadCatalog();
  } catch (error) {
    return (
      <main className="satcore-container py-24">
        <StateMessage
          tone="error"
          title="No se pudo cargar el catálogo"
          detail={error instanceof Error ? error.message : undefined}
        />
      </main>
    );
  }

  return (
    <>
      <Header config={catalog.config} />
      <CatalogView catalog={catalog} />
    </>
  );
}
