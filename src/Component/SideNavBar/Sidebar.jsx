// Sidebar.js

import React from 'react';
import './Sidebar.css'; // Import the external CSS file
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li>
            <Link to={"/"} className="sidebar-link">Dashboard</Link>
          </li>
          <li>
          <Link to={"/admin/products"} className="sidebar-link">Products</Link>
          </li>
          <li>
          <Link to={"/admin/orders"} className="sidebar-link">Orders</Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-login">
        <button className="sidebar-login-button">Login</button>
      </div>
    </aside>
  );
};

export default Sidebar;
