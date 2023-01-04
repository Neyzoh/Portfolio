import './navbar.scss'

function NavBar () {
    return (
        <div className='navbar'>
            <a href='#' className='navbar-title'>Adam</a>
                <div className='navbar-links'>
                    <ul className='nabar-menu'>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>About me</a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>Skills</a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>Project</a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#' className='navbar-link'>Contact</a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default NavBar;