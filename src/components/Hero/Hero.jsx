import React from 'react';
import { useEffect } from 'react';
import './Hero.css';
import { data, images, patterns } from '../../constants';
import {ReactComponent as Line} from '../../assets/patterns/line.svg';
import {ReactComponent as RightArrow} from '../../assets/patterns/right-arrow.svg';
import { motion } from 'framer-motion';


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
        <motion.section className='section-hero intro-overlay mb-160'
            initial={{opacity: 0 }}
            animate={{opacity: 1, 
                transition: {
                    duration: 0.7,
                    delay: 0.4,
                    type: "keyframes",
                    stiffness: 40,
                    
                }
            }}
            exit={{                
                height: 0
            }}
        
            transition={{
                default: {
                    duration: 1
                }
            }}>           
            
            <div className="hero">
                
                <motion.div 
                    initial={{y: 100, opacity:0 }}
                    animate={{y:0, opacity: 1, 
                        transition: {
                            delay: 0.7,
                            staggerChildren: 1,                            
                            duration: 1
                        }                       
                    }}
                    exit={{opacity: 0 }}
                    
                    transition={{ duration: 1, }}
                    className="hero__content container">                       
                        
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
                <motion.svg className="hero__line"
                    initial={{scaleX: 0 }}
                    animate={{scaleX: 1,
                        transition:{
                            delay: 1.2,duration: 1
                    } }}
                    exit={{scaleX: 0 }}
                    style={{originX: 0}}
                    
                    transition={{ duration: 1,/*  delay:1.2 */}}

                    xmlns="http://www.w3.org/2000/svg" 
                    width="203"
                    height="15">
                        <path id="line" fill="none" stroke="#FCB72B" strokeWidth="15" d="M203 7.5H.5"/>
                </motion.svg>
                {/* <Line className="hero__line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1}}
                />   */}      

                <motion.svg               


                    className="hero__right-arrow"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="452" 
                    height="151">
                        <g fill="none" fillRule="evenodd" stroke="#FCB72B" strokeLinejoin="bevel" strokeWidth="15">
                            <motion.path 
                                initial={{pathLength: 0, rotateX: 180 }}
                                animate={{pathLength: 1,
                                    transition:{
                                        delay: 2.4,
                                        duration: 0.4
                                    }
                                 }}
                                exit={{pathLength: 0 }}
                                
                                transition={{ duration: 0.4, /* delay: 2.4, */ type: "keyframes" }}
                                d="M407.952 145.444l38.426-38.426-38.426-38.426"/>
                            <motion.path 
                                initial={{pathLength: 0 }}
                                animate={{pathLength: 1,
                                    transition:{
                                        delay: 1.7,
                                        duration: 1
                                    }
                                }}
                                exit={{pathLength: 0 }}
                                
                                transition={{ duration: 1, /* delay: 1.7 */}}
                            d="M0 8h270.115v99.369h176.263"/>
                        </g>
                </motion.svg>        
                {/* <RightArrow className="hero__right-arrow" /> */}
                <img className="hero__circles" src={patterns.whiteCircles} alt="white circles pattern" />

                <motion.div className="intro-overlay" 
                        initial={{x: 0, y: 0, opacity:1, width: "100%", height:"100%" }}
                        animate={{y: '100vh',  
                            transition: {
                                delay: 2.2,                                
                                duration: 0.8
                            }                       
                        }}
                    />
            </div>
        </motion.section>
  )
}

export default Hero