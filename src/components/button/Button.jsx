import React from 'react';

const Button = (props) => {
  return (
    <button
      className={`default-button ${props.className}`} // Combine the default class and the custom class
    >
      {props.text}
    </button>
  );
};

export default Button;
