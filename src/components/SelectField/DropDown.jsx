import React, { useState } from 'react';
import "./DropDown.css"

const Dropdown = ({ options, initialValue, onSelect, required }) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue, selectedIndex);
  };

  return (
    
      <select
        className="dropdown-select"
        value={selectedOption}
        onChange={handleChange}
        required ={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    
  );
};

export default Dropdown;
