import React, {useState} from 'react';
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
                            <a href='#' className='navbar-link'>About me</a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>Skills</a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>projets</a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>Contact</a>
                        </li>
                    </ul>
                    <div onClick={navbarToggle} className='navbar-toggler'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>

                    </div>
                </div>
        </div>
    )
}

export default NavBar;