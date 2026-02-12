"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function CatalogPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .order("createdat", { ascending: false });

      if (error) console.error(error);
      else setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Mini Catalog Test CI/CD</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <b>{p.name}</b> — {p.price.toFixed(2)} DT
          </li>
        ))}
      </ul>
    </main>
  );
}
