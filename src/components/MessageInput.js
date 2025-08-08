import React from 'react';
import '../styles/MessageInput.css';

const MessageInput = () => {
  return (
    <form className="message-input">
      <input type="text" placeholder="Type a message..." />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
