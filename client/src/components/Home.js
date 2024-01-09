import axios from "axios";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../context/ChatProvider";
import { getSender } from "../config/ChatLogics";

const Home = () => {
  const { user, setChats, setSelectedChat, chats } = ChatState();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer: ${user.token}`,
        },
      };
      const { data } = await axios.get("/api/chat", config);
      if (!chats.find((c) => c._id === data._id)) {
        setChats([data, ...chats]);
      }

      console.log(data);
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const name = getSender(user, data);
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="home-container">
      <h1 className="chats">Recent Chats</h1>
      <div className="main-content">
        {chats.map((chat) => (
          <div className="chat-item" key={chat.id}>
            <div className="chat-name">{getSender(user._id, chat.users)}</div>
            {/* <div className="chat-preview">{chat.lastMessage}</div> */}
            {/* <div className="chat-timestamp">{chat.timestamp}</div> */}
            {/* {chat.unread && <div className="unread-indicator">!</div>} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
