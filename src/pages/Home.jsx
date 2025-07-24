import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Welcome to Local Store</h2>
      <p>Your hometown marketplace. Shop local, fast delivery!</p>
      <Link to="/products">Browse Products</Link>
    </div>
  );
}
