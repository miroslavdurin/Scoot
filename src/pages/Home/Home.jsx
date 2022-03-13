import React, {useEffect} from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Info from '../../components/Info/Info';
import Cta from '../../components/Cta/Cta';
import Footer from '../../components/Footer/Footer';

import { data } from '../../constants';
import { motion } from 'framer-motion';

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
            delay: 1.15
        }
    }
}

function Home({screen}) {   
    const {info} = data.home;
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    return (
        <motion.div
            initial="hide"
            animate="show"
            exit="exit"
            variants={variants}
        >
            <header>
                <Navbar screen={screen} isHome={true} />   
                <Hero screen={screen} /> 
            </header>                          
            <main>
                <Features screen={screen} />                
                <Info screen={screen} info={info[0]} mb="mb-160" hasBtn={true} isReversed={false}  arrow={'isArrowBottomDown'}/>
                <Info screen={screen} info={info[1]} mb="mb-160" hasBtn={true} isReversed={true}  />
                <Info screen={screen} info={info[2]} mb="mb-200" hasBtn={true} isReversed={false} arrow={'isArrowUp'}/>
                <Cta screen={screen} />                  
            </main>            
            <Footer screen={screen} />               
        </ motion.div>
    )
}

export default Home