import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

export default function Checkout({ onDone }) {
  const { cart, clearCart } = useCart();
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  function handleSubmit(e) {
    e.preventDefault();
    if (!address) return;
    setSubmitted(true);
    clearCart();
    setTimeout(() => {
      onDone();
    }, 2000);
  }

  if (submitted) return <h4>Your order has been placed!</h4>;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Order Summary</h3>
      {cart.map(item => (
        <p key={item.id}>
          {item.qty}× {item.name} - ₹{item.price * item.qty}
        </p>
      ))}
      <h4>Total: ₹{total}</h4>
      <textarea
        value={address}
        onChange={e => setAddress(e.target.value)}
        required
        placeholder="Enter your delivery address"
        rows={3}
      />
      <br />
      <button type="submit">Submit & Place Order</button>
    </form>
  );
}
