import React from 'react';
import '../styles/ChatContainer.css';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatContainer = () => {
  return (
    <div className="chat-container">
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
