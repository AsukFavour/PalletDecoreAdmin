// Dashboard.js

import React from 'react';
import './Dashboard.css'; // Import the external CSS file

const Dashboard = () => {
  const ordersCount = 100; // Replace with actual data
  const itemsCount = 500; // Replace with actual data
  const invoicesCount = 50; // Replace with actual data

  const recentOrders = [
    { id: 1, customer: 'John Doe', total: 100 },
    { id: 2, customer: 'Jane Smith', total: 200 },
    { id: 3, customer: 'Bob Johnson', total: 150 },
    { id: 4, customer: 'Bob Johnson', total: 150 },
    { id: 5, customer: 'Bob Johnson', total: 150 },
    { id: 6, customer: 'Bob Johnson', total: 150 },
    { id: 7, customer: 'Bob Johnson', total: 150 },
    { id: 8, customer: 'Bob Johnson', total: 150 },
    { id: 9, customer: 'Bob Johnson', total: 150 },
    { id: 10, customer: 'Bob Johnson', total: 150 },
    { id: 11, customer: 'Bob Johnson', total: 150 },
    { id: 12, customer: 'Bob Johnson', total: 150 },
    { id: 13, customer: 'Bob Johnson', total: 150 },
    { id: 14, customer: 'Bob Johnson', total: 150 },
    { id: 15, customer: 'Bob Johnson', total: 150 },
    { id: 13+3, customer: 'Bob Johnson', total: 150 },
    { id: 17, customer: 'Bob Johnson', total: 150 },
    { id: 18, customer: 'Bob Johnson', total: 150 },
    { id: 19, customer: 'Bob Johnson', total: 150 },
    { id: 20, customer: 'Bob Johnson', total: 150 },
    { id: 21, customer: 'Bob Johnson', total: 150 },
    { id: 22, customer: 'Bob Johnson', total: 150 },
    { id: 23, customer: 'Bob Johnson', total: 150 },
    { id: 24, customer: 'Bob Johnson', total: 150 },
    { id: 25, customer: 'Bob Johnson', total: 150 },

  ]; // Replace with actual data

  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Orders</h3>
          <p className="dashboard-card-value">{ordersCount}</p>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Items</h3>
          <p className="dashboard-card-value">{itemsCount}</p>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Invoices</h3>
          <p className="dashboard-card-value">{invoicesCount}</p>
        </div>
      </div>
      <section className="recent-orders">
        <h2>Recent Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
