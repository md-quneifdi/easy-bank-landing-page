import React, { useState } from 'react';
import Button from '../Button/Button';
import './Navbar.css';

function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleState = () => setToggle(!toggle);

  return (
    <div className='nav-bar'>
    <div className="container">
      <div className="nav-section">
        <div className="logo">
            <img src="images/logo.svg" alt="" />
        </div>
        <div className="icons">

         {
           toggle ? 
          <span className='close' onClick={handleState}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
              <g fill="#2D314D" fillRule="evenodd">
                <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/>
                <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/>
                </g>
            </svg>
          </span>
          :
            <span className='burger' onClick={handleState}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
              <g fill="#2D314D" fillRule="evenodd">
                <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/>
                </g>
            </svg>
          </span>
          }
        </div>
        <div className="overla"></div>
        <ul className={toggle ? "list active" : "list"}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <div className="nav-btn">
          <Button text={'Request Invite'} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar;
