import React from 'react';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import HeroBanner from '../HeroBanner/HeroBanner';
import Map from '../Map/Map';
import Contact from '../Contact/Contact';
import Cta from '../Cta/Cta';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

import './Locations.css';

import { data } from '../../constants/index';

function Locations() {
    const {heroDesktop, heroTablet, heroMobile, mapDesktop, mapTablet, mapMobile, locations, contact} = data.locations;
    console.log(data.locations)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: '-100%', opacity: 0,
            transition: {               
                type: 'keyframes',               
                delay: 0.7
            }}}
            transition={{ duration: 0.5}}
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
                <Map mapDesktop={mapDesktop} mapTablet={mapTablet} mapMobile={mapMobile} locations={locations} />
                <Contact contact={contact}/>
                <Cta />
            </main>
            <Footer />
        </motion.div>
    )
}

export default Locations