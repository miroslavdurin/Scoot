import React from 'react';
import './Values.css';
import { motion } from 'framer-motion';

const variantsLeft = {
    hidden: {
        x: -70,
        opacity: 0
    },

    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
}

const variantsCenter = {
    hidden: {
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


const variantsRight = {
    hidden: {
        x: 70,
        opacity: 0
    },

    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
}

function Values(props) {
    const {title, content} = props.values

    return (
        <section className="section-values mb-120">
            <div className="values container">
                <motion.h2 className="heading--h2 mb-100"
                    initial={{
                        y: 50,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    viewport={{ once: true, amount: 0.5}}
                    transition={{duration: 1}}
                >
                    {title}
                </motion.h2>
                <motion.div className="values__cards"
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.5}}                    
                >
                    <motion.div variants={variantsLeft} className="values__card">
                        <figure className="values__figure">
                            <div className="values__image-container">
                                <img src={content[0].image} alt={content[0].title} />
                            </div>
                            <figcaption className="values__figcaption" >
                                {content[0].number}
                            </figcaption>
                        </figure>
                        <h4 className="heading--h4 mb-24">
                            {content[0].title}
                        </h4>
                        <p className="paragraph">
                            {content[0].text}
                        </p>
                    </motion.div>
                    <motion.div variants={variantsCenter} className="values__card">
                        <figure className="values__figure">
                            <div className="values__image-container">
                                <img src={content[1].image} alt={content[1].title} />
                            </div>
                            <figcaption className="values__figcaption" >
                                {content[1].number}
                            </figcaption>
                        </figure>
                        <h4 className="heading--h4 mb-24">
                            {content[1].title}
                        </h4>
                        <p className="paragraph">
                            {content[1].text}
                        </p>
                    </motion.div>
                    <motion.div variants={variantsRight} className="values__card">
                        <figure className="values__figure">
                            <div className="values__image-container">
                                <img src={content[2].image} alt={content[2].title} />
                            </div>
                            <figcaption className="values__figcaption" >
                                {content[2].number}
                            </figcaption>
                        </figure>
                        <h4 className="heading--h4 mb-24">
                            {content[2].title}
                        </h4>
                        <p className="paragraph">
                            {content[2].text}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Values;