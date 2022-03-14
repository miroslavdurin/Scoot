import React from 'react';
import './Footer.css';
import {ReactComponent as FooterLogo} from '../../assets/logo.svg';
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook.svg';
import {ReactComponent as InstagramIcon} from '../../assets/icons/instagram.svg';
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
    hide: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
}

function Footer() {
    function handleClick(e) {
        if(!e.target.closest('.footer__item')) return;
        window.scrollTo({top: 0});
    }

    return (
        <footer className='footer'>    
            <motion.div className="footer__container container"
                /* initial="hide"
                whileInView="show"
                variants={variants}
                viewport={{once: true, amount: "all"}} */
            >    
                <div className="footer--left-side">
                    <div className="footer__logo-box">
                        <a href="#">
                            <FooterLogo className="footer__logo" />
                        </a>
                    </div>
                    <ul onClick={handleClick} className="footer__links">
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
                            <a href="#" className="footer__link" aria-label="Facebook icon">
                                <FacebookIcon />
                            </a>
                        </li>
                        <li className="footer__item footer__item--icon">
                            <a href="#" className="footer__link" aria-label="Twitter icon">
                                <TwitterIcon />
                            </a>
                        </li>
                        <li className="footer__item footer__item--icon">
                            <a href="#" className="footer__link" aria-label="Instagram icon">
                                <InstagramIcon />
                            </a>
                        </li>
                    </ul>
                </div>     
            </motion.div>           
        </footer>
    )
}

export default Footer