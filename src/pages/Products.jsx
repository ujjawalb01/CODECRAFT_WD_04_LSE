import React, { useState } from "react";
import { PRODUCT_LIST } from "../utils/data";
import ProductCard from "../components/ProductCard";
import SortFilter from "../components/SortFilter";

export default function Products() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  let filtered = PRODUCT_LIST.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
    && (minPrice === "" || p.price >= +minPrice)
    && (maxPrice === "" || p.price <= +maxPrice)
  );

  if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <h2>Products</h2>
      <SortFilter
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
