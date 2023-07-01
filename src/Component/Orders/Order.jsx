import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', email: 'john@example.com', phone: '1234567890', item: 'Product A', quantity: 2, total: 100, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', item: 'Product B', quantity: 3, total: 200, status: 'Completed' },
    { id: 3, customer: 'Bob Johnson', email: 'bob@example.com', phone: '5555555555', item: 'Product C', quantity: 1, total: 150, status: 'Processing' },
    // Add more orders here...
  ]);

  return (
    <div className="order-container">
      <h2>Orders</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.email}</td>
              <td>{order.phone}</td>
              <td>{order.item}</td>
              <td>{order.quantity}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
