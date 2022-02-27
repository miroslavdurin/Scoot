import React from 'react';
import { useEffect } from 'react';
import './HeroBanner.css';
import { patterns } from '../../constants/index';

function HeroBanner(props) {
    const {title, backgroundDesk, backgroundTab, backgroundMob} = props;    

    useEffect(()=>{
        const banner = document.querySelector('.hero-banner')
        banner.style.setProperty('--background-desktop', `url("${backgroundDesk}")`);
        banner.style.setProperty('--background-tablet', `url("${backgroundTab}")`);
        banner.style.setProperty('--background-mobile', `url("${backgroundMob}")`);
    },[])

    return (
        <div className="hero-banner mb-120">
            <div className="hero-banner__content container">
                <h1 className="heading--h1">
                    {title}
                </h1>
                <img className="hero-banner__circles" src={patterns.whiteCircles} alt="white circles" />
            </div>
        </div>
    )
}

export default HeroBanner