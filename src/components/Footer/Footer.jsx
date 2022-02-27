import React from 'react';
import './Footer.css';
import {ReactComponent as FooterLogo} from '../../assets/logo.svg';
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook.svg';
import {ReactComponent as InstagramIcon} from '../../assets/icons/instagram.svg';
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>    
            <div className="footer__container container">    
                <div className="footer--left-side">
                    <div className="footer__logo-box">
                        <a href="#">
                            <FooterLogo className="footer__logo" />
                        </a>
                    </div>
                    <ul className="footer__links">
                        <li className="footer__item">
                            <Link to="/about" className="footer__link">About</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/locations" className="footer__link">Location</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/careers/" className="footer__link">Careers</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer--right-side">
                    <ul className="footer__links">
                        <li className="footer__item footer__item--icon">
                            <a href="#" className="footer__link">
                                <FacebookIcon />
                            </a>
                        </li>
                        <li className="footer__item footer__item--icon">
                            <a href="#" className="footer__link">
                                <TwitterIcon />
                            </a>
                        </li>
                        <li className="footer__item footer__item--icon">
                            <a href="#" className="footer__link">
                                <InstagramIcon />
                            </a>
                        </li>
                    </ul>
                </div>     
            </div>           
        </footer>
    )
}

export default Footer