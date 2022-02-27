import React from 'react'
import './Cta.css';
import { icons, patterns } from '../../constants/index';

function Cta() {
    const {googlePlay, appStore} = icons;
    
    return (
        <section className="section-cta">
            <div className="cta container">
                <div className="cta--left">
                    <h2 className="heading--h2 color-white">
                        Sign up and Scoot off today
                    </h2>
                </div>
                <div className="cta--right">
                    <a href='#' className='cta__link'>
                        <img className='cta__icon' src={appStore} alt="App Store icon" />
                    </a>
                    <a href="#" className="cta__link">
                        <img className='cta__icon' src={googlePlay} alt="Google Play icon" />
                    </a>                    
                </div>
            </div>
            <img className="cta__background-image" src={patterns.whiteCircles} alt="Circles background" />
        </section>
    )
}

export default Cta