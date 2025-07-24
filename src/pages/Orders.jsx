import React, { useState } from "react";

const DUMMY_ORDERS = [
  { id: 1, status: "Delivered", items: ["Product A", "Product B"], date: "2025-07-21" },
  { id: 2, status: "Shipped", items: ["Product C"], date: "2025-07-22" },
];

export default function Orders() {
  const [orders] = useState(DUMMY_ORDERS); // Replace with backend data

  return (
    <div>
      <h2>My Orders</h2>
      {orders.length === 0 && <div>No orders yet.</div>}
      <ul>
        {orders.map(ord => (
          <li key={ord.id} style={{ marginBottom: 10 }}>
            <b>Order #{ord.id}</b> – {ord.status} <br/>
            <i>{ord.date}</i> <br/>
            Items:
            <ul>
              {ord.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
