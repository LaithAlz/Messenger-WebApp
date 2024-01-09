import { useNavigate } from "react-router-dom";
import "../styles/Friends.css";

const Friends = () => {
  const history = useNavigate();

  const friends = [{ name: "Laith" }, { name: "Ameer" }];
  const handleClick = () => {
    history(`/chat/${person._id}`);
  };

  return (
    <div className="friends-container">
      <h1 className="friends">My Friends</h1>
      <ul className="friends-list">
        {friends.map((friend, index) => (
          <li key={index} className="friend" onClick={handleClick}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Friends;
