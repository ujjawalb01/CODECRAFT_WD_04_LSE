import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_LIST } from "../utils/data";
import { useCart } from "../contexts/CartContext";
import ReviewSection from "../components/ReviewSection";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCT_LIST.find(p => String(p.id) === id);
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;
  return (
    <div style={{ display: "flex", gap: 24 }}>
      <img src={product.image} alt={product.name} width={230} height={170} />
      <div>
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <div>⭐ {product.rating}</div>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <ReviewSection productId={product.id} />
      </div>
    </div>
  );
}
