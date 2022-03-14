import React from 'react';
import { useEffect } from 'react';
import './About.css';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Info from '../../components/Info/Info';
import Values from '../../components/Values/Values';
import FAQs from '../../components/FAQs/FAQs';
import Cta from '../../components/Cta/Cta';
import Footer from '../../components/Footer/Footer';

import {data} from '../../constants/index';
import { motion } from 'framer-motion';

const variants = {
    hide: { opacity: 0 },
    show: { 
        opacity: 1,        
        transition: { duration: 0.5 }
    },
    exit: { x: '-100%', opacity: 0,
        transition: {               
            type: 'keyframes',               
            delay: 0.4
        }
    }
}

function About() {
    const {info, values, heroDesktop, heroTablet, heroMobile} = data.about;
      
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <motion.div 
            /* initial="hide"
            animate="show"
            exit="exit"
            variants={variants} */
        >
            <header>
                <Navbar />
                <HeroBanner 
                    backgroundDesk={heroDesktop.backgroundImage} 
                    backgroundTab={heroTablet.backgroundImage} 
                    backgroundMob={heroMobile.backgroundImage} 
                    title = {heroDesktop.title} 
                />            
            </header>
            <main>                
                <Info info={info[0]} mb="mb-120" hasBtn={false} isReversed = {false} arrow={"isArrowBottomUp"} mbBig={false} />
                <Info info={info[1]} mb="mb-120" hasBtn={false} isReversed = {true} mbBig={false} />
                <Values values={values} />
                <FAQs />
                <Cta />
                <Footer />
            </main>
        </motion.div>
    )
}

export default About