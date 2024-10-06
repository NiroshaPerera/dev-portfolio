import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <h1 className='logo'>Dev Portfolio</h1>
            <ul>
                <li><a href='/about'>About</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;