import React from 'react';
import * as RiIcons from 'react-icons/ri';
import './SignoutDropdown.css';

const SignoutDropdown = ({ onSignOut}) => {
  return (
    <div className="signout-dropdown">
      <button className="signout-option">
        Change Password
      </button>
      <button className="signout-option" onClick={onSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignoutDropdown;
