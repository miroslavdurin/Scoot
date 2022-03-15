import React from 'react'
import './Cta.css';
import { icons, patterns } from '../../constants/index';
import { motion } from 'framer-motion';

const variantsLeft = {
    hide: {
        x: -50,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
}

const variantsRight = {
    hide: {
        x: 50,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
}

function Cta() {
    const {googlePlay, appStore} = icons;
    
    return (
        <section className="section-cta">
            <div className="cta container">
                <motion.div className="cta--left"
                    /* initial="hide"
                    whileInView="show"
                    variants={variantsLeft}
                    viewport={{once: true, amount: 0.8}} */
                >
                    <h2 className="heading--h2 color-white">
                        Sign up and Scoot off today
                    </h2>
                </motion.div>
                <motion.div className="cta--right"
                    initial="hide"
                    whileInView= "show"
                    variants={variantsRight}
                    viewport={{once: true, amount: 0.8}}
                >
                    <a href='#' className='cta__link'>
                        <img className='cta__icon' src={appStore} alt="App Store icon" />
                    </a>
                    <a href="#" className="cta__link">
                        <img className='cta__icon' src={googlePlay} alt="Google Play icon" />
                    </a>                    
                </motion.div>
            </div>
            <img className="cta__background-image" src={patterns.whiteCircles} alt="Circles background" />
        </section>
    )
}

export default Cta