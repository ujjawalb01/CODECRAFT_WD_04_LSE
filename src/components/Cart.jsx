import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h4>Your Cart Summary</h4>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            [{item.qty}×] {item.name} - ₹{item.price * item.qty}
          </li>
        ))}
      </ul>
      <h5>Total: ₹{total}</h5>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
