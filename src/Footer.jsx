
import React from 'react';
import group48 from "./Group 48.png";
import group49 from "./Group 49.png";
function Footer() {
  return (
    <div>
      <div className="mainfooter">
          
      <span>launch Your Online Learning </span> <i> Platform</i>
    <span><input type="email" placeholder='Enter your email' /> <button>Get Started</button></span>
      </div>
      <div className="mainblack">
      <ul>
      <li>
        <img src={group48} alt="Logo 1" />
        <img src={group49} alt="Logo 2" />
        </li>
        <li>
            <p>Stay productive on the move, accessing files, apps, mobiles, and servers—no VPN needed.</p>
        </li>
        <li><span>All rights reserved ® DIGILEARN.com</span>
      </li>
      </ul>
      <ul>
        
      </ul>
    </div>
    </div>
    
  )
}

export default Footer