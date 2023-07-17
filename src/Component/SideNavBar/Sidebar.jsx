import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
// Clear token from localStorage
localStorage.removeItem('token');


    // Redirect to AdminLogin component
    navigate('/');
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li>
            <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/products" className="sidebar-link">Products</Link>
          </li>
          <li>
            <Link to="/admin/orders" className="sidebar-link">Orders</Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-login">
        <button className="sidebar-login-button" onClick={handleLogout}>Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;
