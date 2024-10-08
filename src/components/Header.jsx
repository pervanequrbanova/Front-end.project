import React from 'react';
// import { NavLink } from 'react-router-dom';
// import group48 from "../Images/Group 48.png";
// import group49 from "../Images/Group 49.png";
import group50 from "../Images/Group 50.png";
import group51 from "../Images/Group 51.png";
import group52 from "../Images/Group 52.png";
import group53 from "../Images/Group 53.png";
import group54 from "../Images/Group 54.png";
import group55 from "../Images/Group 55.png";
import Navbar from "./Navbar";
function Header(){
  return (
    
<div className="headers">
      <Navbar/>
  
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
          <li><img src={group53} alt="logo"  /></li>
          <li><img src={group52} alt="logo" /></li>
        </ul>
        <img src={group50} alt="Main" className='ims' />
        <ul className='right'>
        <li><img src={group55} alt="logo" /></li>
        <li><img src={group54} alt="logo" /></li>
        </ul>
      </div>
    </div>

  );
};

export default Header;








