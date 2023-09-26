import React from 'react';
import './DataDisplay.css'; // You can create a separate CSS file for styling if needed

const DataDisplay = ({ data }) => {
  return (
    <div className="flexbox-container">
        <div className='attribute' >
          {data.map((item, index) => (
          <div key={index}>{item.name}</div>
          ))}
          
        </div>

      <div className='colon'>
        {data.map((item, index) => (
          <div key={index}>:</div>
        ))}
      </div>

      <div className='item'>
        {data.map((item, index) => (
          <div key={index}>{item.type}</div>
        ))}
      </div>
    </div>

    
  );
};

export default DataDisplay;
