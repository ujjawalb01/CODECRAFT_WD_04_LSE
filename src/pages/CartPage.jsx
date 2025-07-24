import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQty, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} style={{ marginBottom: 12 }}>
            <b>{item.name}</b> — ₹{item.price} × 
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={e => updateQty(item.id, +e.target.value)}
              style={{ width: 50, margin: "0 8px" }}
            />
            = ₹{item.qty * item.price}
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 8 }}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}
