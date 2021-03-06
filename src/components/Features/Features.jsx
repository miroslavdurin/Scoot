import React from 'react';
import './Features.css';
import { data } from '../../constants';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { useWindowSize } from '../../helpers/hooks';

const variants = {
    hide: { y:50, opacity: 0 },
    show: { y:0, opacity: 1,
        transition: {
            duration: 0.7
        }    
    }
}

function Features() {
    const [isLoaded, setIsLoaded] = useState(false)
    const {features} = data.home;
    const altTags = ['locate icon', 'scooter icon', 'ride icon'];      
   
    const size = useWindowSize();
   
    const lineAnimation = useAnimation();

    /* Animation function which is triggered after the last feature card has loaded */
    function handleComplete() {
        size.width > 768 ? 
            lineAnimation.start({
                scaleX: 1,
                transition: {
                    duration: 0.3
                }
            }) 
            :
            lineAnimation.start({
                scaleY: 1,
                transition: {
                    duration: 0.3
                }
            })
    }    

    /* Making sure that the content is shown after the hero animation had started */
    setTimeout(()=>{
        setIsLoaded(true)
    }, 500);
   
    return (        
        isLoaded  &&
            <>
                <motion.section  className='section-features mb-200'>
                    <motion.div                 
                        className="features__line"    
                        initial= {size.width >= 768 ? {scaleX: 0} : {scaleY: 0}}
                        animate= {lineAnimation}                                                   
                    />
                    <div className="features container">
                        {features.map((feature,i)=>{
                            return(
                                <motion.div 
                                    initial="hide"
                                    whileInView="show" 
                                    viewport={{ once: true,  amount: 0.8}} 
                                    variants={variants} 
                                    key={altTags[i]} 
                                    onAnimationComplete={i === 2 && handleComplete}
                                    className="features__card"
                                >                            
                                    <img className="features__icon mb-40" src={feature.icon} alt={altTags[i]} />     
                                    <div className="features__content">
                                        {/* h2 tag was used here to avoid accessibility error */}
                                        <h2 className="heading--h4 mb-24">{feature.title}</h2>
                                        <p className="paragraph">{feature.text}</p>
                                    </div>                                                                                
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.section>   
            </>                          
    )
}

export default Features