"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  async function addProduct(e) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("product")
      .insert([{ name, price: parseFloat(price) }]);

    if (error) {
      setMessage("Erreur : " + error.message);
    } else {
      setMessage("Produit ajouté !");
      setName("");
      setPrice("");
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Admin</h1>
      <form onSubmit={addProduct}>
        <input
          name="name"
          placeholder="Nom du produit"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="price"
          type="number"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Ajouter produit</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
