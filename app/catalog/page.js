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
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Mini Catalog Test CI/CD
      </h1>

      {products.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>
          Aucun produit pour le moment
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <h2 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem" }}>
                {p.name}
              </h2>
              <p style={{ margin: 0, fontWeight: "bold" }}>
                {p.price.toFixed(2)} DT
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
