import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Welcome to College Club Management</h2>
      <nav>
        <ul>
          <li><Link to="/">Clubs</Link></li>
          <li><Link to="/profile">User Profile</Link></li>
          {/* Add more links here as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
