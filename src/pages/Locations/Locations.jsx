import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Map from '../../components/Map/Map';
import Contact from '../../components/Contact/Contact';
import Cta from '../../components/Cta/Cta';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';

import './Locations.css';

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
            delay: 0.4
        }
    }
}

function Locations() {
    const [loaded,setLoaded] = useState(false);
    const {heroDesktop, heroTablet, heroMobile, mapDesktop, mapTablet, mapMobile, locations, contact} = data.locations;

    useEffect(()=>{
        window.scrollTo(0,0)

        setTimeout(()=>{
            setLoaded(true)
        }, 500)    
    },[])

    return (
        <motion.div
            initial="hide"
            animate="show"
            exit="exit"
            variants={variants}
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
                <Map mapDesktop={mapDesktop} mapTablet={mapTablet} mapMobile={mapMobile} locations={locations} />  {/* //TODO Load event */}
                { loaded && <Contact contact={contact}/> }
                <Cta />           
            </main>
            <Footer />
        </motion.div>
    )
}

export default Locations