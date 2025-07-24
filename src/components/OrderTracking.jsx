import React from "react";

export default function OrderTracking({ status }) {
  const steps = ["Processing", "Packed", "Shipped", "Delivered"];
  const currentIndex = steps.indexOf(status);

  return (
    <div>
      <h4>Order Status: {status}</h4>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {steps.map((step, i) => (
          <li
            key={step}
            style={{
              color: i <= currentIndex ? "green" : "gray",
              fontWeight: i <= currentIndex ? "bold" : "normal",
            }}
          >
            {i + 1}. {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
