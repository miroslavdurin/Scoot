import React from 'react';
import { useState, useEffect } from 'react';

import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Info from '../Info/Info';
import Cta from '../Cta/Cta';
import Footer from '../Footer/Footer';

import { data } from '../../constants';

import { motion } from 'framer-motion';

function Home() {
    const [displayContent, setDisplayContent] = useState(false);    

    useEffect(()=>{
        window.scrollTo({top: 0})

        setTimeout(()=>{
            setDisplayContent(true);
        }, 1400)
    },[])

    const {info} = data.home; 

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: '-100%', opacity: 0,
            transition: {               
                type: 'keyframes',               
                delay: 1
            }}}
            
            transition={{duration: 0.5}}
        >
            <header>
                <Navbar />   
                <Hero /> 
            </header>
            
                <>
                    <main>
                        <Features />                
                        <Info info={info[0]} mb="mb-160" hasBtn={true} isReversed={false}  arrow={'isArrowBottomDown'}/>
                        <Info info={info[1]} mb="mb-160" hasBtn={true} isReversed={true}  />
                        <Info info={info[2]} mb="mb-200" hasBtn={true} isReversed={false} arrow={'isArrowUp'}/>
                        <Cta />                  
                    </main>            
                    <Footer />
                </>
            
        </ motion.div>
    )
}

export default Home