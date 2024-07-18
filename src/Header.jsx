import React from 'react';
import { NavLink } from 'react-router-dom';
import group48 from "./Group 48.png";
import group49 from "./Group 49.png";
import group50 from "./Group 50.png";
import group51 from "./Group 51.png";
import group52 from "./Group 52.png";
import group53 from "./Group 53.png";
import group54 from "./Group 54.png";
import group55 from "./Group 55.png";
const Header = ({ setIsMenuOpen }) => {
  return (
    <div className="headers">
      <div className="main">
        <div className="mainleft">
          <ul className='black'>
            <li>
              <NavLink to="/home" onClick={() => setIsMenuOpen(false)}>
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
        <div className="mainlogo">
          <img src={group48} alt="Logo 1" />
          <img src={group49} alt="Logo 2" />
        </div>
        <div className="mainright">
          <button className="one">Cart</button>
          <button className="two">Log in</button>
        </div>
      </div>
      <div className="second">
        <div className="logos">
          <h3>Empowering Webflow</h3>
          <i>Membership</i>
          <h3>Experience</h3>
        </div>
        <div className="text">
          <p>
            Stay productive on the move, accessing files, apps, mobiles, and
            servers—no VPN needed.
          </p>
          <span>Register Now <img src={group51} alt="logo" /> </span>
        </div>
      </div>
      <div className="mainimg">
        <ul className='left'>
          <li><img src={group53} alt="logo" /></li>
          <li><img src={group52} alt="logo" /></li>
        </ul>
        <img src={group50} alt="Main" />
        <ul className='right'>
        <li><img src={group55} alt="logo" /></li>
        <li><img src={group54} alt="logo" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;








