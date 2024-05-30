import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// Connect to the Socket.IO server
//https://socket-server-ten-xi.vercel.app/
//http://localhost:3000
// Connect to the Socket.IO server
const socket = io("http://localhost:3000");

function App() {
  const [alias, setAlias] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

  // Effect to handle incoming messages
  useEffect(() => {
    // Listen for 'message' events from the server
    socket.on("message", (msg) => {
      // Add the new message to the list of messages
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  // Handle the user joining the chat
  const handleJoin = () => {
    if (alias.trim()) {
      // Emit a 'join' event to the server with the user's alias
      socket.emit("join", alias);
      setJoined(true); // Mark the user as joined
    }
  };

  // Handle sending a new message
  const handleSendMessage = () => {
    if (message.trim()) {
      const msg = { alias, text: message };
      // Emit a 'chatMessage' event to the server with the message
      socket.emit("chatMessage", msg);
      setMessage(""); // Clear the input field
    }
  };

  // Handle Enter key press to send message
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      {!joined ? (
        <div>
          {/* Input field for entering alias */}
          <input
            type="text"
            placeholder="Enter your alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
          {/* Button to join the chat */}
          <button onClick={handleJoin}>Join Chat</button>
        </div>
      ) : (
        <div>
          <div>
            {/* Input field for entering a message */}
            <input
              type="text"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            {/* Button to send the message */}
            <button onClick={handleSendMessage}>Send</button>
          </div>
          <div>
            {/* Display the list of messages */}
            {messages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.alias}</strong>: {msg.text}{" "}
                <em>{new Date(msg.timestamp).toLocaleTimeString()}</em>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
