import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
//import  {Link} from 'react-router-dom';
import{FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './button.js';
import './navbar.css';
import { IconContext } from 'react-icons/lib';




function Navbar(){
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);
    return(
        <>
         <IconContext.Provider value={{ color: '#fff' }}>
            <div className= "navbar" >
                <div className= "navbar-container container" >
                    < Link to='/#home' className="navbar-logo">
                        < div className ='navbar-icon'> 
                            <img src="images/logo.png" alt="logo" /> 
                        </div>
                        Aarna Analytics
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                             <Link to='/#home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                             </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/#abt'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/#tech'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Our Technology
                            </Link>
                        </li>
                        <li className='nav-item'>
                             <Link to='/#vision' className='nav-links' onClick={closeMobileMenu}>
                                Vision
                             </Link>
                        </li>
                        <li className='nav-item'>
                            <a className = 'nav-links' onclick = {closeMobileMenu} href="https://angel.co/company/aarna-analytics/jobs" target="_blank">Careers</a>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/#contact'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Contact
                            </Link>
                        </li>
                        
                </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
        
    )
};

export default Navbar