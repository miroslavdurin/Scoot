import React from 'react';
import './FAQs.css';
import { data, icons } from '../../constants/index';
import { motion } from 'framer-motion';

const variants = {
    hidden: {
        y: 20,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

function FAQs() {
    const [faqOne, faqTwo] = data.about.faq;
    
    function handleClick(e) {
        e.target.closest('.faqs__question').nextElementSibling.classList.toggle('show');
        e.target.closest('.faqs__question').lastElementChild.classList.toggle('show');
    }

    return (
        <section className="section-faqs mb-160">
            <div className="faqs container">
                <motion.h2 className="heading--h2 mb-64"
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
                    FAQs
                </motion.h2>
                <div className="faqs__container mb-64">
                    <motion.div className="faqs__title"
                        initial={{
                            x: -50,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true, amount: 0.5}}
                        transition={{duration: 1}}
                    >
                        <h3 className="heading--h3">
                            {faqOne.title}
                        </h3>
                    </motion.div>
                    <div className="faqs__questions" >
                        <motion.div 
                            variants={variants} 
                            initial="hidden"
                            whileInView="show"  
                            viewport={{once: true, amount: 0.6}} 
                            className="faqs__content">
                            <div onClick={handleClick} className="faqs__question">
                                <h4 className="heading--h4">
                                    {faqOne.content[0].title}
                                </h4>       
                                <img className="faqs__icon" src={icons.chevron} alt="icon chevron" />                         
                            </div>
                            <div className="faqs__answer">
                                <p className="paragraph">
                                    {faqOne.content[0].text}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial="hidden"
                            whileInView="show"  
                            variants={variants} 
                            viewport={{once: true, amount: 0.6}} 
                            className="faqs__content"
                        >
                            <div onClick={handleClick} className="faqs__question">
                                <h4 className="heading--h4">
                                    {faqOne.content[1].title}
                                </h4>       
                                <img className="faqs__icon" src={icons.chevron} alt="icon chevron" />                         
                            </div>
                            <div className="faqs__answer">
                                <p className="paragraph">
                                    {faqOne.content[1].text}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial="hidden"
                            whileInView="show"  
                            variants={variants} 
                            viewport={{once: true, amount: 0.6}} 
                            className="faqs__content"
                        >
                            <div onClick={handleClick} className="faqs__question">
                                <h4 className="heading--h4">
                                    {faqOne.content[2].title}
                                </h4>       
                                <img className="faqs__icon" src={icons.chevron} alt="icon chevron" />                         
                            </div>
                            <div className="faqs__answer">
                                <p className="paragraph">
                                    {faqOne.content[2].text}
                                </p>
                            </div>
                        </motion.div>
                    </div>                    
                </div>

                <div className="faqs__container mb-64">
                    <motion.div className="faqs__title"
                        initial={{
                            x: -50,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true, amount: 0.5}}
                        transition={{duration: 1}}
                    >
                        <h3 className="heading--h3">
                            {faqTwo.title}
                        </h3>
                    </motion.div>
                    <div className="faqs__questions">
                        <motion.div className="faqs__content"
                            variants={variants} 
                            initial="hidden"
                            whileInView="show"  
                            viewport={{once: true, amount: 0.6}}
                        >
                            <div onClick={handleClick} className="faqs__question">
                                <h4 className="heading--h4">
                                    {faqTwo.content[0].title}
                                </h4>       
                                <img className="faqs__icon" src={icons.chevron} alt="icon chevron" />                         
                            </div>
                            <div className="faqs__answer">
                                <p className="paragraph">
                                    {faqTwo.content[0].text}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div className="faqs__content"
                            variants={variants} 
                            initial="hidden"
                            whileInView="show"  
                            viewport={{once: true, amount: 0.6}}
                        >
                            <div onClick={handleClick} className="faqs__question">
                                <h4 className="heading--h4">
                                    {faqTwo.content[1].title}
                                </h4>       
                                <img className="faqs__icon" src={icons.chevron} alt="icon chevron" />                         
                            </div>
                            <div className="faqs__answer">
                                <p className="paragraph">
                                    {faqTwo.content[1].text}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div className="faqs__content"
                            variants={variants} 
                            initial="hidden"
                            whileInView="show"  
                            viewport={{once: true, amount: 0.6}}
                        >
                            <div onClick={handleClick} className="faqs__question">
                                <h4 className="heading--h4">
                                    {faqTwo.content[2].title}
                                </h4>       
                                <img className="faqs__icon" src={icons.chevron} alt="icon chevron" />                         
                            </div>
                            <div className="faqs__answer">
                                <p className="paragraph">
                                    {faqTwo.content[2].text}
                                </p>
                            </div>
                        </motion.div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default FAQs