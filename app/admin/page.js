import prisma from "../../lib/prisma";

// Server Action pour ajouter un produit
export async function addProduct(formData) {
  "use server"; // DOIT être ici, au début de la fonction
  const name = formData.get("name");
  const price = parseFloat(formData.get("price"));
  if (!name || isNaN(price)) return;

  await prisma.product.create({
    data: { name, price },
  });
}

export const dynamic = "force-dynamic"; // désactive le cache

export default function AdminPage() {
  return (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <h1>Admin</h1>

      <form action={addProduct} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input name="name" placeholder="Nom du produit" />
        <input name="price" type="number" placeholder="Prix" step="0.01" />
        <button type="submit">Ajouter</button>
      </form>
    </main>
  );
}
