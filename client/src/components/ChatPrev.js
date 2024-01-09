import React from "react";
import "../styles/ChatPrev.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputEmoji from "react-input-emoji";
import { ChatState } from "../context/ChatProvider";
import axios from "axios";

const ChatPrev = () => {
  const { id } = useParams();
  const { user, selectedChat } = ChatState();
  const [selected, setSelected] = useState();
  const [message, setMessage] = useState("");

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji);
  };

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await axios.post("/api/chat", { userId: id }, config);
        setSelected(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error.response ? error.response.data : error.message);
      }
    };
    getChats();
  }, []);

  //   useEffect(() => {
  //     console.log("Hello");
  //     const messageContainer = document.getElementById("messages");
  //     if (messageContainer) {
  //       messageContainer.scrollTop = messageContainer.scrollHeight;
  //     }
  //   }, []);

  const messages = [
    { text: "Hey there!", sender: "user" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "user" },
  ];

  return (
    <div className="chat-interface">
      <div className="messages" id="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "user" ? "outgoing" : "incoming"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <InputEmoji
          value={message}
          onChange={setMessage}
          cleanOnEnter
          onEnter={handleEmojiSelect}
          placeholder="Type a message..."
        />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatPrev;
