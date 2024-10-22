const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const dotenv = require("dotenv");

dotenv.config();

// App setup
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// MongoDB Collection
const Chat = require("./models");

// Frontend
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Socket.io connection
io.on("connection", (socket) => {
  console.log("New client connected");

  // Fetch chat messages
  Chat.find()
    .sort({ timestamp: -1 })
    .limit(15)
    .exec()
    .then((docs) => {
      docs.reverse().forEach((doc) => {
        socket.emit("chatMessage", doc);
      });
    })
    .catch((err) => {
      console.log("Error fetching chat messages", err);
    });

  // Listen for chat messages
  socket.on("chatMessage", (msg) => {
    const chatMessage = new Chat({
      username: msg.username,
      message: msg.message,
    });

    chatMessage
      .save()
      .then(() => {
        io.emit("chatMessage", chatMessage);
      })
      .catch((err) => {
        console.log("Error saving chat message", err);
      });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Server setup
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
