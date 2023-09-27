import React from 'react';
import './Message.css'

const Message = ({ message }) => {
  return (
    <div className="error-message">
      {message}
    </div>
  );
};

export default Message;
