import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './Info.css';
import { patterns } from '../../constants/index';
import { motion, useAnimation } from 'framer-motion';

const container = {
    hide: {opacity: 0,
    x: -50,},
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
        }
    },                
}

const containerReversed = {
    hide: {
        opacity: 0,
         x: 50
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
        }
    },                   
}

const imageVariants = {
    hide: {
        opacity: 0,
        x: -150,},
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            delay: 0.2
        }
    }, 
}

const imageVariantsReversed = {
    hide: {
        opacity: 0,
        x: 150,},
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                delay: 0.2
            }
        }     
}

const circleVariants = {
    hide: {
        opacity: 0,
        x: -80,},
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
            }
        }     
}

const circleVariantsReversed = {
    hide: {
        opacity: 0,
        x: 80,},
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
            }
        }     
}

function Info(props) {
    const {info} = props;
    const {isReversed, arrow, mb, hasBtn} = props;     
    
    /* Function for choosing which arrow to use */
    const arrowChoice = arrow =>{
        if(arrow === 'isArrowBottomDown') return "info__arrow--left-bottom-down"
        else if(arrow === 'isArrowBottomUp') return "info__arrow--left-bottom-up"
        else return "info__arrow--left-top"
    }

    const animationLine = useAnimation();
    const animationPoint = useAnimation();   

    /* Animating the arrow after the inView animations had loaded */
    function animateArrow() {
        animationLine.start(
            {
                pathLength: 1,
                transition: {
                    duration: 0.6,
                }               
            }
        ).then(()=>{
            animationPoint.start(
                {
                    pathLength:1,
                    transition: {
                        duration: 0.2,
                    }
                } 
            )        
        })
    }
 
    useEffect(()=> {
        /* Setting initial length of an arrow */
        animationLine.set({ pathLength: 0 });
        animationPoint.set({ pathLength:0, rotateX: 180 });              
    }, []);   

    return (
        <motion.section            
            className={`section-info ${mb}`}>
            <div className={`info container ${isReversed && 'info--reverse'}`}>
                <motion.div className="info--left"                 
                    /* initial="hide"
                    whileInView="show"                    
                    viewport={{ once: true, amount: 0.8}}
                    transition={{ staggerChildren:0.1 }} */
                >
                    <motion.h2 
                        className="heading--h2 mb-24"
                            variants={isReversed ? containerReversed : container}
                        >                            
                        {info.title}
                    </motion.h2>
                    <motion.p 
                        className={`paragraph ${hasBtn && 'mb-40'}`}
                        variants={isReversed ? containerReversed : container}>
                        {info.text}
                    </motion.p>
                    {
                        hasBtn && 
                        <motion.a href="#" className="button"
                            variants={isReversed ? containerReversed : container}
                        >
                            {info.btn}
                        </motion.a>
                    }
                    
                </motion.div>
                <motion.div className="info--right"
                    /* initial="hide"
                    whileInView="show"                    
                    viewport= {{ once: true, amount: 0.5}}
                    transition= {{ staggerChildren: 0.2 }}   
                    onAnimationComplete={animateArrow}  */                
                >
                    <motion.div  className="info__img-container"
                    variants={!isReversed ? imageVariantsReversed : imageVariants}>
                        <img src={info.image} alt="info" className="info__img" />
                    </motion.div>
                    
                    <motion.img variants={!isReversed ? circleVariantsReversed : circleVariants} src={patterns.circle} alt="circle patterns" className={`info__circle`} />
                </motion.div>
            </div>
            {
                isReversed && 
                
                <svg className="info__arrow--right" width="1005" height="151" viewBox="0 0 1005 151" fill="none" xmlns="http://www.w3.org/2000/svg">                
                    <motion.path /* animate={animationLine} */ d="M1005 8H150.581V107H5.99997" stroke="#FCB72B" strokeWidth="15" strokeLinejoin="bevel"/>                
                    <motion.path /* animate={animationPoint} */ d="M44.4263 145.639L6 107.213L44.4263 68.7869" stroke="#FCB72B" strokeWidth="15" strokeLinejoin="bevel"/>                              
                </svg>
            }

            {
                !isReversed &&
                
                <svg className={arrowChoice(arrow)} width="1005" height="151" viewBox="0 0 1005 151" fill="none" xmlns="http://www.w3.org/2000/svg">                
                    <motion.path /* animate={animationLine}  */ d="M1005 8H150.581V107H5.99997" stroke="#FCB72B" strokeWidth="15" strokeLinejoin="bevel"/>                
                    <motion.path /* animate={animationPoint} */ d="M44.4263 145.639L6 107.213L44.4263 68.7869" stroke="#FCB72B" strokeWidth="15" strokeLinejoin="bevel"/>                              
                </svg>
            }                       
        </motion.section>
    )
}

export default Info