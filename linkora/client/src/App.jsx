import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function App() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!msg) return;
    socket.emit("send_message", { msg });
    setMsg("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data.msg]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 LINKORA</h1>

      {/* CHAT */}
      <div>
        {chat.map((c, i) => (
          <p key={i}>💬 {c}</p>
        ))}
      </div>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Mesaj yaz..."
      />
      <button onClick={sendMessage}>Gönder</button>
    </div>
  );
}
