const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

// Initialize an Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Initialize a new instance of socket.io by passing the HTTP server object
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
// Socket.IO event handling
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for 'join' event from the client and broadcast a join message
  socket.on("join", (alias) => {
    io.emit("message", {
      alias,
      text: `${alias} has joined the chat`,
      timestamp: new Date(),
    });
  });

  // Listen for 'chatMessage' event from the client and broadcast the message
  socket.on("chatMessage", (msg) => {
    io.emit("message", { ...msg, timestamp: new Date() });
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Socket.IO server is running");
});

// Start the server on the specified port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
