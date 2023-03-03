import React from 'react';
import {Link} from 'react-scroll'
import './navbar.scss'

function NavBar () {

    return (
        <div className='navbar'>
            <a href='#' className='navbar-title'>Adam</a>
                <div className='navbar-links'>
                    <ul className='navbar-menu'>
                        <li className='navbar-item'>
                            <Link to='about-me' smooth={true} duration={1000} className='navbar-link'>About</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='skills' smooth={true} duration={1000} className='navbar-link'>Skills</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='projet' smooth={true} duration={1000} className='navbar-link'>Projet</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='contact' smooth={true} duration={1000} className='navbar-link'>Contact</Link>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default NavBar;