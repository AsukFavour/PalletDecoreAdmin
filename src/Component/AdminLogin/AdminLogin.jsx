import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://palletedecore.onrender.com/api/auth/login', {
        email,
        password,
      });

      // Authentication successful
      const { token } = response.data;

      console.log(token);

      // Save token to localStorage
      localStorage.setItem('adminToken', token);

      // Redirect to admin dashboard
      navigate('/dashboard');
    } catch (error) {
      // Authentication failed
      setError('Invalid email or password');
    }
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-heading">Admin Login</h2>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <div className="form-group">
          <label htmlFor="email" className="admin-login-label">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="admin-login-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="admin-login-label">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="admin-login-input" required />
        </div>
        <div className="form-group">
          <button type="submit" className="admin-login-button">Login</button>
        </div>
        {error && <p className="admin-login-error">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
