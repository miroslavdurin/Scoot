import React from 'react';
import './Features.css';
import { data } from '../../constants';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const variants = {
    hide: { y:100, opacity: 0 },
    show: { y:0, opacity: 1,
        transition: {
            duration: 1
        }    
    }
}

const lineVariants = {
    hide: { scaleX: 0, transformOrigin: "left" },
    show: {scaleX: 1,
        transition: {
            duration: 1            
        }
    }
}

function Features() {
    const {features} = data.home;
    const altTags = ['locate icon', 'scooter icon', 'ride icon'];  
    
    return (
        <motion.section className='section-features mb-200'            
            initial= "hide"
            whileInView= "show"
            viewport={{ once: true,  amount: 1}}       
            transition={{staggerChildren: 0.5, staggerDirection: -1}}             
        >
            <motion.div                
                variants={lineVariants}  
                className="features__line"/>
                <motion.div variants={variants} className="features container">
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
                
            </motion.div>
        </motion.section>   
                
    )
}

export default Features