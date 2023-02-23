import React, {useState} from 'react';
import {Link} from 'react-scroll'
import './navbar.scss'

function NavBar () {
    
    const [active, setActive] = useState('navbar-menu');

    
    const navbarToggle = () => {
        active === 'navbar-menu' ? setActive('navbar-menu navbar-active') : setActive('navbar-menu')
    }
    return (
        <div className='navbar'>
            <a href='#' className='navbar-title'>Adam</a>
                <div className='navbar-links'>
                    <ul className={active}>
                        <li className='navbar-item'>
                            <Link to='about-me' smooth={true} duration={1000} className='navbar-link'>About me</Link>
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
                    <div onClick={navbarToggle} className='navbar-toggler'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>

                    </div>
                </div>
        </div>
    );
}

export default NavBar;