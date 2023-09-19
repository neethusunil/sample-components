import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignOut = () => {
    // Implement your sign-out logic here
    // For example, clear the user's session or token
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className="navbar-right">
        <button className="account-icon" onClick={handleSignOut}>
            <AiIcons.AiOutlineUser />
            <RiIcons.RiArrowDownSFill />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
