import React from "react";
import "../styles/ChatPrev.css";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import InputEmoji from "react-input-emoji";
import { ChatState } from "../context/ChatProvider";
import axios from "axios";
import { getSender } from "../config/ChatLogics";

const ChatPrev = () => {
  const { id } = useParams();
  const { user, selectedChat } = ChatState();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [chatName, setChatName] = useState("");
  const fetchedRef = useRef(false);

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji);
  };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const sendMessage = async () => {
    try {
      const { data } = await axios.post(
        "/api/message",
        { content: message, chatId: id },
        config
      );
      setMessage("");
      setMessages([...messages, data]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    const getChat = async () => {
      console.log("Running ");
      try {
        const { data } = await axios.post("/api/chat", { userId: id }, config);
        console.log(data);
        setChatName(getSender(user._id, data.users));
      } catch (error) {
        console.log(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      }
    };
    getChat();
  }, [id]);

  const fetchMessages = async () => {
    if (!selectedChat) {
      return;
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`/api/message/${id}`, config);
      setMessages(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const messageContainer = document.getElementById("messages");
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, []);

  const messagesss = [
    { text: "Hey there!", sender: "user" },
    { text: "Hello! How can I help you today?", sender: "other" },
    { text: "Hello! How can I help you today?", sender: "user" },
  ];

  return (
    <div className="chat-interface">
      <div className="name">{chatName}</div>
      <div className="messages" id="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender._id === user._id ? "outgoing" : "incoming"
            }`}
          >
            {message.content}
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
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPrev;
