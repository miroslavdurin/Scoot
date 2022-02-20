import React from 'react';
import './Navbar.css';
import { logo } from '../../constants';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav container'>        
        <div className="nav--left-side">
            
            <div className="nav__logo-box">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="nav__logo" />
                </NavLink>
            </div>
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