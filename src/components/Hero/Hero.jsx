import React from 'react';
import { useEffect } from 'react';
import './Hero.css';
import { data, images, patterns } from '../../constants';
import {ReactComponent as Line} from '../../assets/patterns/line.svg';
import {ReactComponent as RightArrow} from '../../assets/patterns/right-arrow.svg';


function Hero() {
    const {home} = data;
    let root = document.documentElement;
    
    useEffect(()=>{
        let paragraph = document.querySelector('.hero__description');
        root.style.setProperty('--line-width', (paragraph.getBoundingClientRect().x - 57) + 'px')
        root.style.setProperty('--hero-arrow-x-offset', (paragraph.getBoundingClientRect().x + paragraph.getBoundingClientRect().width + 40) + 'px')

        window.addEventListener('resize', ()=> {
            root.style.setProperty('--line-width', (paragraph.getBoundingClientRect().x - 57) + 'px');
            root.style.setProperty('--hero-arrow-x-offset', (paragraph.getBoundingClientRect().x + paragraph.getBoundingClientRect().width + 40) + 'px')
        } )
    }, [])
    

    return (
        <section className='section-hero mb-160'>
            <div className="hero">
                <div className="hero__content container">
                    <div className="hero__text-box mb-40">
                        <h1 className="heading--h1 mb-40">
                            {home.heroDesktop.spanOne} {home.heroDesktop.spanTwo}
                        </h1>
                        <p className="hero__description paragraph">
                            {home.heroDesktop.text}
                        </p>
                    </div>
                    <a href="#" className="button hero__btn">
                        {home.heroDesktop.btn}
                    </a>
                </div>
                <Line className="hero__line"/>                
                <RightArrow className="hero__right-arrow" />
                <img className="hero__circles" src={patterns.whiteCircles} alt="white circles pattern" />
            </div>
        </section>
  )
}

export default Hero