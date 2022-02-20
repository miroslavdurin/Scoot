import React, { useEffect } from 'react';
import './Careers.css';
import Navbar from '../Navbar/Navbar';
import HeroBanner from '../HeroBanner/HeroBanner';
import Info from '../Info/Info';
import Values from '../Values/Values';
import Jobs from '../Jobs/Jobs';
import Cta from '../Cta/Cta';
import Footer from '../Footer/Footer';

import { data } from '../../constants/index';

function Careers() {
    const {heroDesktop, heroTablet, heroMobile, info, values, jobs} = data.careers;

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    console.log(data.careers)
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
                <Info info={info} mb="mb-160" hasBtn={true} isReversed={false} isArrowUp={false}/>
                <Values values={values} />
                <Jobs jobs={jobs}/>
                <Cta />
                <Footer />
            </main>
        </>
    )
}

export default Careers