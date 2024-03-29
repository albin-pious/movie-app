import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <div className="nav-btn">
        <span className="nav-text">UNLIMITED TV SHOWS & MOVIES</span>
        <button className='nav-btn1'>
          JOIN NOW  
        </button>
        <button className='nav-btn2'>
          SIGN NOW
        </button>
      </div> 
    </div>
  )
}

export default NavBar