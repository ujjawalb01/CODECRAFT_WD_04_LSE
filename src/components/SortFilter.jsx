import React from "react";

export default function SortFilter({ search, setSearch, sort, setSort, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <label>
        Sort:
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="name">Name</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <input
        type="number"
        placeholder="Min ₹"
        value={minPrice}
        onChange={e => setMinPrice(e.target.value)}
        style={{ width: 80, marginLeft: 8 }}
      />
      <input
        type="number"
        placeholder="Max ₹"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        style={{ width: 80 }}
      />
    </div>
  );
}
