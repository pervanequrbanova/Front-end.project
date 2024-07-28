// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import group48 from "../Images/Group 48.png";
import group49 from "../Images/Group 49.png";
import React from 'react';


const Navbar = ({ setIsMenuOpen }) => {
  return (
    <div className='main'>
{/* <FontAwesomeIcon icon={faBars} /> */}
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
  )
}

export default Navbar



