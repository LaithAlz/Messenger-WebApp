import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
    const userProfile = {
        username: "User123",
        email: "user123@example.com",
        bio: "This is a short bio about the user...",
    };

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handlePasswordChange = (e) => {
        e.preventDefault();
        console.log('Password changed to:', newPassword);
        setPassword('');
        setNewPassword('');
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src="/path-to-user-image.jpg" alt="Profile" className="profile-picture" />
                <h1 className="username">{userProfile.username}</h1>
            </div>
            <div className="profile-details">
                <p><strong>Email:</strong> {userProfile.email}</p>
                <p><strong>Bio:</strong> {userProfile.bio}</p>
            </div>
            <div className="password-change-section">
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
}

export default Profile;
