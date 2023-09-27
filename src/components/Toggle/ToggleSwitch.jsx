import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ active, onToggle }) => {
  const [isChecked, setIsChecked] = useState(active);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <div className="toggle-container">
      <label className="toggle-label" htmlFor="toggle-switch">
        Status
      </label>
      <button
        type="button"
        className={`toggle-button ${isChecked ? 'active' : ''}`}
        id="toggle-switch"
        onClick={toggleHandler}
      >
        <div className="toggle-handle"></div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
