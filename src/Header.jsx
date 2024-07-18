import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ setIsMenuOpen }) => {
  return (
    <div className='headers'>
      <div className="main">
        <div className="mainleft">
          <ul>
            <li>
              <NavLink to="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="mainlogo">
          <img src="./Group 48.png" alt="Logo 1" />
          <img src="./Group 49.png" alt="Logo 2" />
        </div>
        <div className="mainright">
          <button className='one'>Cart</button>
          <button className='two'>Log in</button>
        </div>
      </div>
      <div className="second">
        <div className='logos'>
          <h3>Empowering Webflow</h3>
          <i>Membership</i>
          <h3>Experience</h3>
        </div>
        <div className='text'>  
          <p>Stay productive on the move, accessing files, apps, mobiles, and servers—no VPN needed.</p>
          <a href="#">Register Now</a>
        </div>
      </div>
      <div className="mainimg">
        <img src="./image2362.png" alt="Main" />
      </div>
    </div>
  );
};

export default Header;








