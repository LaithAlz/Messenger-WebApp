import "../styles/Home.css"
const Home = ({chats}) => {
    return ( 
        <div className="home-container">
        <div className="main-content">
    {chats.map(chat => (
        <div className="chat-item" key={chat.id}>
            <div className="chat-name">{chat.name}</div>
            <div className="chat-preview">{chat.lastMessage}</div>
            <div className="chat-timestamp">{chat.timestamp}</div>
            {/* {chat.unread && <div className="unread-indicator">!</div>} */}
        </div>
    ))}
</div> 
</div>);
}
 
export default Home;