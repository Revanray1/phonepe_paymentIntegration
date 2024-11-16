// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='container' style={{textAlign:"center"}}>
      <h1>Home Page</h1>
      <Link to="/pay">
      <div className='p-4'>
      <button type="button" class="btn btn-success">Pay Amount</button>
      </div>
      </Link>
    </div>
  );
};

export default HomePage;
