import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Friends.css";
import { ChatState } from "../context/ChatProvider";

const Friends = () => {
  const { user, setChats, setSelectedChat, chats } = ChatState();
  const [data, setData] = useState([]);
  const history = useNavigate();

  //   const friends = [
  //     { name: "Laith", _id: 1 },
  //     { _id: 2, name: "Ameer" },
  //   ];
  const handleClick = (person) => {
    history(`/chat/${person._id}`);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="friends-container">
      <h1 className="friends">My Friends</h1>
      <ul className="friends-list">
        {friends.map((friend, index) => (
          <li
            key={index}
            className="friend"
            onClick={() => handleClick(friend)}
          >
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Friends;
