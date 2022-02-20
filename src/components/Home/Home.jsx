import React from 'react';

import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Info from '../Info/Info';
import Cta from '../Cta/Cta';
import Footer from '../Footer/Footer';

import { data } from '../../constants';

function Home() {
  const {info} = data.home; 

    return (
        <>
            <header>
                <Navbar />   
                <Hero /> 
            </header>
            <main>
                <Features />
                <Info info={info[0]} mb="mb-160" hasBtn={true} isReversed={false} isArrowUp={false} />
                <Info info={info[1]} mb="mb-160" hasBtn={true} isReversed={true} isArrowUp={false} />
                <Info info={info[2]} mb="mb-200" hasBtn={true} isReversed={false} isArrowUp={true} />
                <Cta />
            </main>            
            <Footer />
        </>
    )
}

export default Home