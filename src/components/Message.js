import React from 'react';
import '../styles/Message.css';

const Message = () => {
  return (
    <div className="message">
      <div className="message-content">
        <p>This is a sample message.</p>
        <span className="message-timestamp">10:30 AM</span>
      </div>
    </div>
  );
};

export default Message;
