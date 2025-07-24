import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (!products?.length) return <p>No products found.</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {products.map(prod => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
}
