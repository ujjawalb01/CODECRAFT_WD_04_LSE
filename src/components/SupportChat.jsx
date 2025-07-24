import React, { useState } from "react";

export default function SupportChat() {
  const [messages, setMessages] = useState([
    { sender: "bot", msg: "Hey! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input) return;
    setMessages([...messages, { sender: "user", msg: input }]);
    setMessages(prev => [
      ...prev,
      { sender: "user", msg: input },
      { sender: "bot", msg: "Thank you! A support agent will reach out shortly." },
    ]);
    setInput("");
  }

  return (
    <div style={{ border: "1px solid #aaa", padding: 10, maxWidth: 300 }}>
      <h4>Live Chat</h4>
      <div style={{ maxHeight: 200, overflowY: "auto", marginBottom: 10 }}>
        {messages.map((m, i) => (
          <p key={i} style={{ textAlign: m.sender === "user" ? "right" : "left" }}>
            <b>{m.sender === "bot" ? "Support" : "You"}:</b> {m.msg}
          </p>
        ))}
      </div>
      <input
        value={input}
        placeholder="Type a message..."
        onChange={e => setInput(e.target.value)}
        style={{ width: "80%" }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
