import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { logo } from '../../constants';
import { NavLink } from 'react-router-dom';
import { icons } from '../../constants';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(!isOpen);

        console.log(isOpen)
    }

    return (
        <nav className='nav container'>        
            <div className="nav--left-side">     
                <button aria-label="mobile navigation" className="nav__mobile-button" onClick={handleOpen}>
                    <div className="nav__mobile-hamburger" />
                </button>       
                <div className="nav__logo-box">
                    <NavLink to="/">
                        <img src={logo} alt="navigation logo" className="nav__logo" />
                    </NavLink>
                </div>
                {
                    isOpen && 
                    <div className="nav__mobile-menu">
                        <div className="nav__mobile-overlay" />
                        <ul className="nav__mobile-links">
                            <li className="nav__mobile-item">
                                <NavLink to="/about" className="nav__mobile-link">About</NavLink>
                            </li>
                            <li className="nav__mobile-item">
                                <NavLink to="/locations" className="nav__mobile-link">Location</NavLink>
                            </li>
                            <li className="nav__mobile-item">
                                <NavLink to="/careers" className="nav__mobile-link">Careers</NavLink>
                            </li>
                            <li className="nav__mobile-item">
                                <button className="button nav__mobile-btn">Get Scootin</button>
                            </li>
                        </ul>
                    </div>
                }
                
                <ul className="nav__links">
                    <li className="nav__item">
                        <NavLink to="/about" className="nav__link">About</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/locations" className="nav__link">Location</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/careers" className="nav__link">Careers</NavLink>
                    </li>
                </ul>
            </div>
            <div className="nav--right-side">
                <button className="button nav__button">
                    Get Scootin
                </button>
            </div>     


        </nav>
    )
}

export default Navbar