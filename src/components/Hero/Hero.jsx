import React from 'react';
import { useEffect } from 'react';
import './Hero.css';
import { data, images, patterns } from '../../constants';
import {ReactComponent as Line} from '../../assets/patterns/line.svg';
import {ReactComponent as RightArrow} from '../../assets/patterns/right-arrow.svg';
import { motion } from 'framer-motion';

const sectionVariants = {
    hide: {opacity: 0},
    show: {
        opacity: 1, 
        transition: {
            duration: 0.4,                    
            type: "keyframes",
            stiffness: 40,
            
        }
    },
    exit: {                
        height: 0,
        transition: {
            duration: 0.3,
            delay: 0.8
        }
    }
}

const contentVariants = {
    hide: {
        y: 30, 
        opacity:0 
    },
    show: {
        y: 0, 
        opacity: 1, 
        transition: {
            delay: 0.2,
            duration: 0.5,
            ease: "easeIn"
        }
    },
    exit: {
        opacity: 0, 
        y: -50,
        transition: {
            duration: 0.4,
            delay: 0.5
        }
    }
}

const lineVariants = {
    hide: {scaleX: 0 },
    show: {
        scaleX: 1,
        transition:{
            delay: 0.6,
            duration: 0.6
        } 
    }
}

const arrowPointVariants = {
    hide: {
        pathLength: 0, 
        rotateX: 180 
    },
    show: {
        pathLength: 1,
        transition:{
            delay: 1.5,
            duration: 0.3
        }
    },
    exit: {
        pathLength: 0,
        transition: {
            duration: 0.4, 
            type: "keyframes"
        }
    }
}

const arrowLineVariants = {
    hide: { pathLength: 0 },
    show: {
        pathLength: 1,
        transition: {
            delay: 1,
            duration: 0.7
        }
    },
    exit: {
        pathLength: 0,
        transition: {
            duration: 0.6
        }
    }
}




const overlayVariants = {
    hide: {
        x: 0, 
        y: 0, 
        opacity:1
    },
    show: {
        y: '200vh', 
        transition: {
            delay: 1.5,                                
            duration: 1
        }
    }
}

function Hero() {
    const {home} = data;
    let root = document.documentElement;
    
    useEffect(()=>{
        let paragraph = document.querySelector('.hero__description');
        root.style.setProperty('--line-width', (paragraph.getBoundingClientRect().x - 57) + 'px')
        root.style.setProperty('--hero-arrow-x-offset', (paragraph.getBoundingClientRect().x + paragraph.getBoundingClientRect().width + 40) + 'px')

        window.addEventListener('resize', ()=> {
            root.style.setProperty('--line-width', (paragraph.getBoundingClientRect().x - 57) + 'px');
            root.style.setProperty('--hero-arrow-x-offset', (paragraph.getBoundingClientRect().x + paragraph.getBoundingClientRect().width + 40) + 'px')
        } )
    }, [])
    

    return (
        <motion.section className='section-hero mb-160'
            initial="hide"
            animate="show"
            exit="exit"          
            variants={sectionVariants}
        >                    
            <div className="hero">                
                <motion.div 
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={contentVariants}
                    className="hero__content container"
                >                                               
                    <div className="hero__text-box mb-40">
                        <h1 className="heading--h1 mb-40">
                            {home.heroDesktop.spanOne} {home.heroDesktop.spanTwo}
                        </h1>
                        <p className="hero__description paragraph">
                            {home.heroDesktop.text}
                        </p>
                    </div>
                    <a href="#" className="button hero__btn">
                        {home.heroDesktop.btn}
                    </a>
                </motion.div>
                <motion.svg 
                    className="hero__line"
                    initial="hide"
                    animate="show"
                    exit="hide"
                    style={{originX: 0}}                    
                    transition={{ duration: 0.6}}
                    variants={lineVariants}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="203"
                    height="15"
                >
                    <path id="line" fill="none" stroke="#FCB72B" strokeWidth="15" d="M203 7.5H.5"/>
                </motion.svg>                

                <svg           
                    className="hero__right-arrow"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="452" 
                    height="151">
                        <g fill="none" fillRule="evenodd" stroke="#FCB72B" strokeLinejoin="bevel" strokeWidth="15">
                            <motion.path 
                                initial="hide"
                                animate="show"
                                exit="exit"
                                variants={arrowPointVariants}
                                d="M407.952 145.444l38.426-38.426-38.426-38.426"/>
                            <motion.path 
                                initial="hide"
                                animate="show"
                                exit="exit"                          
                                variants={arrowLineVariants}
                            d="M0 8h270.115v99.369h176.263"/>
                        </g>
                </svg>  
                <img className="hero__circles" src={patterns.whiteCircles} alt="white circles pattern" />

                <motion.div className="intro-overlay" 
                        initial="hide"
                        animate="show"
                        variants={overlayVariants}  
                />
            </div>
        </motion.section>
    )
}

export default Hero