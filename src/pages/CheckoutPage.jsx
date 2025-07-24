import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Normally: submit to backend and get orderId, then redirect
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => navigate("/orders"), 1500);
  }

  if (orderPlaced) return <div>Order placed! Redirecting to Orders...</div>;

  if (cart.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Delivery Address: <br/>
          <textarea value={address} onChange={e => setAddress(e.target.value)} required rows={3} />
        </label>
        <br/>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
