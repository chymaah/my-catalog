import prisma from "../../lib/prisma";

export const dynamic = "force-dynamic"; // pour désactiver le cache ISR

export default async function CatalogPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Retourne JSX directement
  return (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <h1>Mini Catalog</h1>
      <p>Liste des produits :</p>

      <ul style={{ marginTop: 20 }}>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: 10 }}>
            <b>{p.name}</b> — {p.price.toFixed(2)} DT
          </li>
        ))}
      </ul>
    </main>
  );
}
