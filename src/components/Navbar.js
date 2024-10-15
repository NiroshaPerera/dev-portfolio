import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <div className='logo'>
                <h2>Dev Portfolio</h2>
            </div>
            <ul className='navbar-links'>
                <li><a href='/about'>About</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
            <div className='navbar-socials'>
                <a href="https://www.linkedin.com/in/nirosha-perera-3a9057247/" target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='lg' className='social-icon'/></a>
                <a href='https://github.com/NiroshaPerera' target='_blank' rel='noopene noreferrer'>
                <FontAwesomeIcon icon={faGithub} size='lg' className='social-icon'/></a>
            </div>
        </nav>
    );
}

export default Navbar;