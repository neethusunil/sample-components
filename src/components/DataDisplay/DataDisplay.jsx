import React from 'react';
import './DataDisplay.css'; // You can create a separate CSS file for styling if needed

const DataDisplay = ({ data }) => {
  return (
    <div className="flexbox-container">
      {data.map((item, index) => (
        <div key={index} className="flexbox-row">
          <div className="column attribute">{item.column1}</div>
          <div className='column colon'>: </div>
          <div className="column">{item.column2}</div>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
