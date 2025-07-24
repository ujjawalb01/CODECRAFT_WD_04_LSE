import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav style={{ display: "flex", gap: 20, padding: 10, borderBottom: "1px solid #bbb" }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      <Link to="/orders">My Orders</Link>
      <Link to="/support">Support</Link>
    </nav>
  );
}
