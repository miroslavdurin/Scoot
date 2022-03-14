import React from 'react';
import { useEffect } from 'react';
import './HeroBanner.css';
import { patterns } from '../../constants/index';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../helpers/hooks';

const variantsContainer = {
    hidden:{ opacity: 0 },
    show: { opacity: 1,
        transition: {
             duration: 0.8,
             delay: 0.3
        }
    },
        exit: {  
        height: 0,  
        opacity: 0,              
        transition: {
            duration: 0.4,            
        }      
        
    }
}

const variantsElement = {
    hidden: { y: 150, opacity: 0 },
    show:{ y: 0, opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.3
    } }
    
}

function HeroBanner(props) {
    const {title, backgroundDesk, backgroundTab, backgroundMob} = props;    

    const screen = useMediaQuery('(max-width: 720px)');

    /* Function used to avoid weird flickering during the exit animation on a mobile view*/
    /* Margin top property was pushing the entire navbar down by 96px */
    /* The other solution was to use padding instead of margin-top, but that */
    /* was stretching the position of a banner background */

    function onStart(e){
        if(e==="exit"){
            document.querySelector('.hero-banner').style.marginTop=0;
            if(screen) document.querySelector('.hero-banner').style.paddingTop='96px';
        }
    }

    /* Setting image paths on CSS variables */
    useEffect(()=>{
        const banner = document.querySelector('.hero-banner')
        banner.style.setProperty('--background-desktop', `url("${backgroundDesk}")`);
        banner.style.setProperty('--background-tablet', `url("${backgroundTab}")`);
        banner.style.setProperty('--background-mobile', `url("${backgroundMob}")`);
    },[])

    return (
        <motion.div
            variants={variantsContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            onAnimationStart={onStart}
            className="hero-banner  mb-120"
        >                
            <div className="hero-banner__content container">                
                    <motion.h1 className="heading--h1"
                        variants={variantsElement}                    
                    >
                        {title}
                    </motion.h1>
                    <motion.img variants={variantsElement} className="hero-banner__circles" src={patterns.whiteCircles} alt="white circles" />                
            </div>
        </motion.div>
    )
}

export default HeroBanner