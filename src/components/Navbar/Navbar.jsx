import React, { useState, useEffect, useRef } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import './Navbar.css';
import SignoutDropdown from '../Signout/SignoutDropdown';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    // Implement your sign-out logic here
    // For example, clear the user's session or token
    setIsDropdownOpen(false); // Close the dropdown when signing out
  };

  useEffect(() => {
    const closeDropdownOnClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', closeDropdownOnClickOutside);
    return () => {
      document.removeEventListener('mousedown', closeDropdownOnClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className="navbar-right">
        <div ref={dropdownRef}>
          <button className="account-icon" onClick={toggleDropdown}>
          <AiIcons.AiOutlineUser />
          <RiIcons.RiArrowDownSFill />
        </button>
        {isDropdownOpen && (
          <SignoutDropdown
          onSignOut={handleSignOut}
        />
          
        )}
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;
