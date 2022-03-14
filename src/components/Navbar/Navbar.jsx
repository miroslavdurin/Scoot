import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { logo } from '../../constants';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

function Navbar({isHome}) {
    const [isOpen, setIsOpen] = useState(false);
    const overlayRef = useRef(null);
    const linksRef = useRef(null);
    const mobileContainerRef = useRef(null);

    const overlayAnimation = useAnimation();
    const linksAnimation = useAnimation();

    function handleClick(e) {
        if(!e.target.closest('.nav__mobile-link')) return;
        window.scrollTo({top: 0});
    }

    function handleOpen() {
        setIsOpen(!isOpen);
    }    
    useEffect(()=> {        

        if(isOpen) {
            mobileContainerRef.current.classList.remove('hidden');

            linksAnimation.set({x: '-100vw'})      
            overlayAnimation.start({
                opacity: 1,
                transition: {                                   
                    duration: 0.2
                }
            })
            linksAnimation.start({
                x: 0,
                opacity: 1,                   
                transition: {
                    duration: 0.3,
                    delay: 0.2
                }
             })            
        } 
        if(!isOpen) {            
            linksAnimation.start({
                x: '-100vw',                
                transition: {
                    duration: 0.4,
                }
            })

            overlayAnimation.start({
                opacity: 0,
                transition: {
                    duration: 0.18,
                    delay: 0.35
                }
            }).finally(()=>
                mobileContainerRef.current.classList.add('hidden')
            )                 

        }
    },[isOpen])

    return (
        <motion.nav className='nav container'
            /* initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                          
                transition: {
                    duration: 0.4,
                    delay: 0.4
                }
            }} */
            
            transition={{ duration: 0.6, delay: isHome ? 0 : 0.8}} 
        >        
            <div className="nav--left-side">     
                <button aria-label="mobile navigation" className="nav__mobile-button" onClick={handleOpen}>
                    <span className={`nav__mobile-hamburger ${isOpen && 'active'}`} />
                </button>       
                <div className="nav__logo-box" >
                    <NavLink to="/">
                        <img src={logo} alt="navigation logo" className="nav__logo" onClick={()=>window.scrollTo({top:0})} />  
                    </NavLink>
                </div>
                 
                    <div ref={mobileContainerRef}  className="nav__mobile-menu">
                        <motion.div /* animate={overlayAnimation} */ ref={overlayRef} className="nav__mobile-overlay" />
                        <motion.ul
                            ref={linksRef} 
                            /* animate={linksAnimation} */ 
                            className="nav__mobile-links"
                            onClick={handleClick}
                        >
                            <li onClick={()=>setIsOpen(false)} className="nav__mobile-item">
                                <NavLink to="/about" className="nav__mobile-link">About</NavLink>
                            </li>
                            <li onClick={()=>setIsOpen(false)} className="nav__mobile-item">
                                <NavLink to="/locations" className="nav__mobile-link">Location</NavLink>
                            </li>
                            <li onClick={()=>setIsOpen(false)} className="nav__mobile-item">
                                <NavLink to="/careers" className="nav__mobile-link">Careers</NavLink>
                            </li>
                            <li onClick={()=>setIsOpen(false)} className="nav__mobile-item">
                                <button className="button nav__mobile-btn">Get Scootin</button>
                            </li>
                        </motion.ul>
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


        </motion.nav>
    )
}

export default Navbar