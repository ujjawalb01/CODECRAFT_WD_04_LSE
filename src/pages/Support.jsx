import React, { useState } from "react";

export default function Support() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Customer Support</h2>
      <h4>FAQs</h4>
      <ul>
        <li>Q: How do I track my order? <br/><i>A: Go to Orders page after login.</i></li>
        <li>Q: How do I return a product? <br/><i>A: Contact support with your order ID.</i></li>
      </ul>
      <h4>Contact Us</h4>
      {submitted
        ? <div>Your message has been sent!</div>
        : (
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Describe your issue..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              required
              rows={3}
            />
            <br/>
            <button type="submit">Send</button>
          </form>
        )
      }
    </div>
  );
}
