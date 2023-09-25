// Status.js
import React from 'react';
import './Status.css';
const Status = (props) => {
    return (
      <div className={`status-container ${props.active ? 'active' : 'inactive'}`}>
        {props.active ? "Active" : "Inactive"}
      </div>
    );
  };
  
  export default Status;