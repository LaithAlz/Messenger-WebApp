import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Profile.css";
import { ChatState } from "../context/ChatProvider";

const Profile = () => {
  const { user } = ChatState();
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    bio: "This is a short bio about the user...",
  });
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      setUserProfile({
        username: user.name || "",
        email: user.email || "",
        bio: "This is a short bio about the user...",
      });
    }
  }, [user]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError("");

    if (!password || !newPassword) {
      setError("Please enter both current and new password.");
      setSuccess("");
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.put(
        "/api/user/password",
        { oldPassword: password, newPassword: newPassword, userId: user._id },
        config
      );

      console.log(data.message);
      setSuccess("Password has been changed")
      setError("")
      setPassword("");
      setNewPassword("");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to change password.");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img alt="Profile" className="profile-picture" />
        <h1 className="username">{userProfile.username}</h1>
      </div>
      <div className="profile-details">
        <p>
          <strong>Email:</strong> {userProfile.email}
        </p>
        <p>
          <strong>Bio:</strong> {userProfile.bio}
        </p>
      </div>
      <div className="password-change-section">
        {error && <div className="error-message">{error}</div>}
        {success && <div className="error-message">{success}</div>}
        <form onSubmit={handlePasswordChange}>
          <input
            type="password"
            placeholder="Current Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
