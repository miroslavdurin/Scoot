import React, { useEffect } from 'react';
import './Careers.css';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Info from '../../components/Info/Info';
import Values from '../../components/Values/Values';
import Jobs from '../../components/Jobs/Jobs';
import Cta from '../../components/Cta/Cta';
import Footer from '../../components/Footer/Footer';
import {motion} from 'framer-motion';

import { data } from '../../constants/index';

const variants = {
    hide: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        x: '-100%',
        opacity: 0,
        transition: {
            type: 'keyframes',
            delay: 0.45
        }
    }
}

function Careers() {
    const {heroDesktop, heroTablet, heroMobile, info, values, jobs} = data.careers;

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
                <Info info={info} mb="mb-160" hasBtn={true} isReversed={false} arrow={"isArrowBottomDown"}/>
                <Values values={values} />
                <Jobs jobs={jobs}/>
                <Cta />
                <Footer />
            </main>
        </motion.div>
    )
}

export default Careers