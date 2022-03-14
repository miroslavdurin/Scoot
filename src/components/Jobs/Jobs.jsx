import React from 'react';
import './Jobs.css';
import { motion } from 'framer-motion';

const variants = {
    hide: {
        y: 50,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
}

function Jobs(props) {
    const {jobs} = props;

    return (
        <section className="section-jobs mb-160">
            <div className="jobs container">
                <ul className="jobs__list">
                    {jobs.map((job, i)=>{
                            return (
                                <motion.li key={i} className="jobs__item mb-24"
                                    /* initial="hide"
                                    whileInView="show"
                                    variants={variants}
                                    viewport={{once: true, amount: 0.6}} */
                                >                        
                                    <div className="jobs__item--left">
                                        <h4 className="heading--h4">
                                            {job.position}
                                        </h4>
                                        <p className="paragraph">
                                            {job.location}
                                        </p>
                                    </div>
                                    <div className="jobs__item--right">
                                        <a href="#" className="button">
                                            Apply
                                        </a>
                                    </div>
                                </motion.li>
                            )
                    })}                    
                </ul>
            </div>
        </section>
    )
}

export default Jobs