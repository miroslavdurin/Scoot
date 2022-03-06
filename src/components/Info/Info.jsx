import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './Info.css';
import { data, patterns } from '../../constants';
import {ReactComponent as RightArrow} from '../../assets/patterns/right-arrow.svg'
import {ReactComponent as LeftDownwardArrow} from '../../assets/patterns/group.svg'
import {ReactComponent as LeftUpwardArrow} from '../../assets/patterns/left-upward-arrow.svg'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const container = {
    hide: {opacity: 0,
    x: -50,},
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        }
    }                    
}

const containerReversed = {
    hide: {opacity: 0,
    x: 50,},
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        }
    }                    
}

function Info(props) {
    const {info} = props;
    const {isReversed, arrow /* isArrowBottomDown, isArrowBottomUp, isArrowTop */, mb, hasBtn} = props;
    const [loaded, setLoaded] = useState(false);
    let imgContainerPos;
    let infoCirclesRight;
    let infoCirclesLeft;

    const [ref, inView] = useInView({
        threshold: 0.8
    });
    const animationLine = useAnimation();
    const animationPoint = useAnimation();


    const arrowChoice = arrow =>{
        if(arrow === 'isArrowBottomDown') return "info__arrow--left-bottom-down"
        else if(arrow === 'isArrowBottomUp') return "info__arrow--left-bottom-up"
        else return "info__arrow--left-top"
    }
 
    useEffect(()=> {
        imgContainerPos = document.querySelector('.container').getBoundingClientRect();
       
        infoCirclesRight = document.querySelectorAll('.info__circle'); 
        infoCirclesLeft = document.querySelectorAll('.info__circle--reverse');
        
        infoCirclesRight.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.right + 65}px`));
        infoCirclesLeft.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.left - 510}px`));


        animationLine.set({ pathLength:0 });
        animationPoint.set({ pathLength:0 });      

        if(inView && !loaded) {

            animationLine.start(
                {
                    pathLength:1,
                    transition: {
                        duration: 1,
                    }               
                }
            ).then(()=>{
                animationPoint.start(
                    {
                        pathLength:1,
                        transition: {
                            duration: 0.5,
                    }
                     
                }
            )
                setLoaded(true);
            })
           
        }        

        if(loaded) {
            animationLine.stop();
            animationPoint.stop();
            
            animationLine.set({
                pathLength: 1
            })
            animationPoint.set({
                pathLength:1
            })
        }
        
    }, [inView]);

    window.addEventListener('resize', ()=> {         
        imgContainerPos = document.querySelector('.container').getBoundingClientRect();
        infoCirclesRight = document.querySelectorAll('.info__circle'); 
        infoCirclesLeft = document.querySelectorAll('.info__circle--reverse');

        infoCirclesRight.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.right + 65}px`));
        infoCirclesLeft.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.left - 510}px`));       
    }) 


    return (
        <motion.section ref={ref}
            /* initial={{ opacity: 0, y:100 }}
            
            whileInView={{ opacity: 1, y:0,
            transition: {
                duration: 0.7,
                
            } }}
            viewport={{ once: true, amount: 0.7}} */
            
        className={`section-info ${mb}`}>
            <div className={`info container ${isReversed && 'info--reverse'}`}>
                <motion.div className="info--left"                 
                    initial="hide"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7}}
                    transition={{staggerChildren:0.1}}
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
                    initial="hide"
                    whileInView="show"
                    viewport= {{ once: true, amount: 0.5}}
                    transition= {{staggerChildren:0.2}}                    
                >
                    <motion.div  className="info__img-container"
                    variants={!isReversed ? containerReversed : container}>
                        <img src={info.image} alt="info image" className="info__img" />
                    </motion.div>
                    
                    <motion.img variants={!isReversed ? containerReversed : container} src={patterns.circle} alt="circle patterns" className={`info__circle`} />
                </motion.div>
            </div>
            {
                isReversed && 
                
                <svg className="info__arrow--right" width="1005" height="151" viewBox="0 0 1005 151" fill="none" xmlns="http://www.w3.org/2000/svg">                
                    <motion.path animate={animationLine} id="Path 4" d="M1005 8H150.581V107H5.99997" stroke="#FCB72B" strokeWidth="15" strokeLinejoin="bevel"/>                
                    <motion.path animate={animationPoint} id="Path 3" d="M44.4263 145.639L6 107.213L44.4263 68.7869" stroke="#FCB72B" strokeWidth="15" strokeLinejoin="bevel"/>                              
                </svg>
            }

            {
                !isReversed &&
                
                <svg className={arrowChoice(arrow)} width="1005" height="151" viewBox="0 0 1005 151" fill="none" xmlns="http://www.w3.org/2000/svg">                
                    <motion.path animate={animationLine} id="Path 4" d="M1005 8H150.581V107H5.99997" stroke="#FCB72B" strokeWidth="15" strokeLinejoin="bevel"/>                
                    <motion.path animate={animationPoint} id="Path 3" d="M44.4263 145.639L6 107.213L44.4263 68.7869" stroke="#FCB72B" strokeWidth="15" strokeLinejoin="bevel"/>                              
                </svg>
            }
            
            {/* <svg 
               
            
            width="1015" height="151" className="info__arrow--right" viewBox="0 0 1015 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 13"
                    
                    
                >
                    <motion.path                         
                        animate={animation}
                    
                    id="corner" d="M185 8.5V106H8" stroke="#FCB72B" strokeWidth="15"  strokeLinejoin="bevel"/>
                    <motion.path animate={animation} id="line" d="M1007 8H185" stroke="#FCB72B" strokeWidth="15" strokeLinecap="round" />
                    <motion.path animate={animation} id="arrow" d="M46.4263 144.853L8 106.426L46.4263 68" stroke="#FCB72B" strokeWidth="15" strokeLinejoin="bevel" />
                </g>
            </svg> */}


            {/* {isReversed && <LeftDownwardArrow className="info__arrow--right"/>}            
            {!isReversed && <LeftDownwardArrow className={arrowChoice(arrow)} />} */}
        </motion.section>
    )
}

export default Info