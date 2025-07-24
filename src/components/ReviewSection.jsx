import React, { useState } from "react";
import { REVIEWS, addReview } from "../utils/data";

export default function ReviewSection({ productId }) {
  const [reviews, setReviews] = useState(REVIEWS[productId] || []);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = { rating, text, date: new Date().toLocaleString() };
    setReviews(r => [...r, newReview]);
    addReview(productId, newReview); // For demo, pushes to dummy data
    setRating(5);
    setText("");
  }

  return (
    <div>
      <hr />
      <h4>Reviews</h4>
      <ul>
        {reviews.map((r, i) => (
          <li key={i}>
            <b>{r.rating}★</b> {r.text} <small>– {r.date}</small>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Rating: 
          <select value={rating} onChange={e => setRating(Number(e.target.value))}>
            {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <input
          placeholder="Write your review"
          value={text}
          onChange={e => setText(e.target.value)}
          required
          style={{ marginLeft: 8 }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
