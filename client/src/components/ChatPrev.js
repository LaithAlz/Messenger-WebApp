import React from 'react';
import "../styles/ChatPrev.css";
import {useEffect, useState} from 'react';
import InputEmoji from 'react-input-emoji';


const ChatPrev = () => {

    const [message, setMessage] = useState('');

    const handleEmojiSelect = (emoji) => {
        setMessage(prevMessage => prevMessage + emoji);
      };
  

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

    

    useEffect(() => {
        console.log("Hello");
        const messageContainer = document.getElementById('messages');
        if (messageContainer) {
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
      }, []);

      return (
        <div className="chat-interface">
            <div className="messages" id="messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === 'user' ? 'outgoing' : 'incoming'}`}>
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
}

export default ChatPrev;
