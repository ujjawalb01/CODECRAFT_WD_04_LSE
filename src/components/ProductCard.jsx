import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div style={{ border: "1px solid #ccc", width: 200, padding: 8 }}>
      <img src={product.image} alt={product.name} width={180} height={130} />
      <h4>{product.name}</h4>
      <div>₹{product.price}</div>
      <div>⭐ {product.rating}</div>
      <p>{product.description.slice(0, 45)}...</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <br />
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}
