
import "../styles/UserProfile.css"

const UserProfile = () => {
    const user = {profilePic: "Pic", name: "Jake", bio: "this is a bio"}

    return (
        <div className="user-profile">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <h1 className="name">{user.name}</h1>
            <p className="bio">{user.bio}</p>
            <button className="friend-request-btn">
                Add
            </button>
            <button className="chat-btn">
                Chat
            </button>
        </div>
    );
    }
 
export default UserProfile;