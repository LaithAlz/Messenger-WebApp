import { ChatState } from "../context/ChatProvider";
import "../styles/UserProfile.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
    const user = { profilePic: "Pic", name: "Jake", bio: "this is a bio" };

  return (
    <div className="user-profile">
      {/* <img src={user.profilePic} alt="Profile" className="profile-pic" /> */}
      <h1 className="name">{users.name}</h1>
      <p className="bio">{users.bio}</p>
      <button className="friend-request-btn">Add</button>
      <button className="chat-btn">Chat</button>
    </div>
  );
};

export default UserProfile;
