import React from 'react';
import '../styles/MessageList.css';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const MessageList = () => {
  return (
    <div className="message-list">
      <Message />
      <TypingIndicator />
    </div>
  );
};

export default MessageList;
