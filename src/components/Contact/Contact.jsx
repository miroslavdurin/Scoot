import React from 'react';
import './Contact.css';
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

function Contact(props) {
    const {title, text, btn} = props.contact

    return (
        <motion.section className="section-contact mb-120">
            <motion.div className="contact container"
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.5}}
            >
                <motion.h2  variants={variantsCenter} className="heading--h2">
                    {title}
                </motion.h2>
                <motion.p variants={variantsCenter} className="paragraph">
                    {text}
                </motion.p>
                <motion.a variants={variantsCenter} href="#" className="button">
                    {btn}
                </motion.a>
            </motion.div>
        </motion.section>
    )
}

export default Contact