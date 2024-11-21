// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PhonePayLogo from '../assets/images/phonepayLogo.png';

const HomePage = () => {
  return (
    <div className='container' style={{textAlign:"center"}}>
      <h1>Home Page</h1>
      <div style={{alignItems:"center"}}>
      <img style={{height:"300px" , width:"300px"}}src={PhonePayLogo}  class="img-thumbnail" ></img>
      </div>
      <div className='p-4'>
      <h2>This an Example to Show how PhonePe Payment integration works</h2>
      </div>
       <Link to="/pay"> 
       <button type='button' class='btn btn-success'>Go to payment Page</button>
       </Link>
    </div>
  );
};

export default HomePage;
