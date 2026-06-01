const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// SOCKET CHAT
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", (data) => {
    io.emit("receive_message", data);
  });
});

// BASIC ROUTE
app.get("/", (req, res) => {
  res.send("Linkora API running...");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
