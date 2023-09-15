import React, { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'; // Using React Icons

const Textfield = (props) => {
  const {
    type,
    className,
    placeholder,
    id,
    name,
    required,
    value,
    onChange,
    text,
  } = props;

  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={`input-container ${className}`}>
      <input
        className="default-field"
        type={type == "text" ? type : showPassword ? "password": "text"}
        placeholder={placeholder}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
        </span>
      )}
      {text && <label>{text}</label>}
    </div>
  );
};

export default Textfield;
