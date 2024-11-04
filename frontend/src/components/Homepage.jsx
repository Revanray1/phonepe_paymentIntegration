// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/pay">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Pay
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
