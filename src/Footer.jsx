
import React from 'react';
import { NavLink } from 'react-router-dom';
import group48 from "./Images/Group 48.1.png";
import group49 from "./Images/Group 49.1.png";
import group56 from "./Images/Group 56.png";
import group57 from "./Images/Group 57.png";
const Footer = ({ setIsMenuOpen }) => {
  return (
    <div className='mainf'>
      <div className="mainfooter">
          
      <span className='launch'>launch Your Online </span> <span><i> Learning</i> <i className='platform'>Platform</i></span>
    <div className='inputmail'><input type="email" placeholder='Enter your email' /> <button className='btnget'>Get Started</button></div>
    <div>
      <ul>
      <li  className='logoss' >
        <img src={group56} alt="Logo 1" />
        <img src={group57} alt="Logo 2" />
        </li>
      </ul>
    </div>
      </div>
     <div className="container">
     <div className="mainblack">
     <div className="mainlogo2">
     <div className="leftfooter">
      <ul>
      <li>
        <img src={group48} alt="Logo 1" />
        <img src={group49} alt="Logo 2" />
        </li>
        <li className='textmove'>
            <p>Stay productive on the move, accessing files, apps, mobiles, and servers—no VPN needed.</p>
        </li>
        <li className='reserved'><span>All rights reserved ® DIGILEARN.com</span>
      </li>
      </ul>
      </div>
     </div>
     <div className="logosfooter">
     <ul className='blacks'>
            <li>
              <NavLink to="/home" onClick={() => setIsMenuOpen(false)} > 
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" onClick={() => setIsMenuOpen(false)}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
     </div>
    </div>
     </div>
    </div>
    
  )
}

export default Footer