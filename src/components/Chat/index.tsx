import React, { FC, useEffect, useState } from "react";
import "./style.css";
import { useUnit } from "effector-react";
import {
    $messages,
    $username,
    sendMessage,
    setUsername,
} from "../../store/chat";

const MESSAGES_MOCK = [
    {
        id: 1,
        text: "Hello,sdljvhsfkvjfsb siuvbc srivb sriuvb sihcbsi hsbci usebciu sebciu sebc iusbc ishebc ii how are you?",
        username: "John Doe",
        date: new Date().toISOString(),
    },
    {
        id: 2,
        text: "I'm fine, thank you! How about you?",
        username: "Chatbot",
        date: new Date().toISOString(),
    },
    {
        id: 3,
        text: "What are you doing?",
        username: "John Doe",
        date: new Date().toISOString(),
    },
    {
        id: 4,
        text: "I'm here to assist you with your queries.",
        username: "Chatbot",
        date: new Date().toISOString(),
    },
];

interface MessageProps {
    text: string;
    username: string;
    date: Date;
}
const Message: FC<MessageProps> = ({ text, username, date }) => {
    return (
        <div className="chat-message">
            <div className={`message`}>
                <span className="message-username">{username}:</span>
                <div className="message-text">{text}</div>
                <div className="message-timestamp">
                    {new Date(date).toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
};

const Chat = () => {
    const messages = useUnit($messages);
    const username = useUnit($username);
    const onSendMessage = useUnit(sendMessage);
    const onSetUsername = useUnit(setUsername);

    const [newMessage, setNewMessage] = useState("");
    const [newUsername, setNewUsername] = useState("");

    function handleSendMessage(
        event: React.KeyboardEvent<HTMLTextAreaElement>
    ) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            if (newMessage.trim()) {
                onSendMessage(newMessage);
            }
            setNewMessage("");
        }
    }

    function handleSetUsername(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            event.preventDefault();
            onSetUsername(newUsername);
        }
    }

    return (
        <>
            <div className="chat-messages">
                {messages.map((message, i) => (
                    <Message
                        username={message.username}
                        text={message.text}
                        date={message.date}
                        key={i}
                    />
                ))}
            </div>
            <div className="chat-input-wrapper">
                {!username ? (
                    <input
                        placeholder="enter your username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        onKeyDown={handleSetUsername}
                    />
                ) : (
                    <textarea
                        value={newMessage}
                        rows={1}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleSendMessage}
                    />
                )}
            </div>
        </>
    );
};

export default Chat;
