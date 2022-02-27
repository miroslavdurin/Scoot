import React from 'react';
import { useEffect } from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import HeroBanner from '../HeroBanner/HeroBanner';
import Info from '../Info/Info';
import Values from '../Values/Values';
import FAQs from '../FAQs/FAQs';
import Cta from '../Cta/Cta';
import Footer from '../Footer/Footer';

import { data } from '../../constants/index';

function About() {
    const {info, values, heroDesktop, heroTablet, heroMobile} = data.about;
    console.log(data)
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <>
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
        </>
    )
}

export default About