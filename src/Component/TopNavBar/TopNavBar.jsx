// Navbar.js

import React from 'react';
import './TopNavBar.css'; // Import the external CSS file

const TopNavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="/" className="navbar-link">
            PalletDecore
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavBar;
