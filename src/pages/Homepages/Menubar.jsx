import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const MenuBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Menyu açıqdırsa, bağla, bağlıdırsa aç
    };

    return (
        <div>
            <nav className="navbar">
                <div className="burger-icon" onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={menuOpen ? 'menu-open' : 'menu-closed'}>
                    <li>
                        <NavLink 
                            to="/home" 
                            activeClassName="active"
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/courses" 
                            activeClassName="active"
                            onClick={toggleMenu}
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            activeClassName="active"
                            onClick={toggleMenu}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/pricing" 
                            activeClassName="active"
                            onClick={toggleMenu}
                        >
                            Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            activeClassName="active"
                            onClick={toggleMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuBar;