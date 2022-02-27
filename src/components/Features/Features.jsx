import React from 'react';
import './Features.css';
import { data } from '../../constants';

function Features() {
    const {features} = data.home;
    const altTags = ['locate icon', 'scooter icon', 'ride icon'];  

    return (
        <section className='section-features mb-200'>
            <div className="features container">
                {features.map((feature,i)=>{
                    return(
                        <div key={altTags[i]} className="features__card">                            
                            <img className="features__icon mb-40" src={feature.icon} alt={altTags[i]} />     
                            <div className="features__content">
                                <h4 className="heading--h4 mb-24">{feature.title}</h4>
                                <p className="paragraph">{feature.text}</p>
                            </div>                                                     
                            
                        </div>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Features