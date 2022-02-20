import React from 'react';
import './FAQs.css';
import { data, icons } from '../../constants/index';

function FAQs() {
    const [faqOne, faqTwo] = data.about.faq;
    
    function handleClick(e) {
        e.target.closest('.faqs__question').nextElementSibling.classList.toggle('show');
        e.target.closest('.faqs__question').lastElementChild.classList.toggle('show');
    }

    return (
        <section className="section-faqs mb-160">
            <div className="faqs container">
                <h2 className="heading--h2 mb-64">
                    FAQs
                </h2>
                <div className="faqs__container mb-64">
                    <div className="faqs__title">
                        <h3 className="heading--h3">
                            {faqOne.title}
                        </h3>
                    </div>
                    <div className="faqs__questions">
                        <div className="faqs__content">
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
                        </div>
                        <div className="faqs__content">
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
                        </div>
                        <div className="faqs__content">
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
                        </div>
                    </div>                    
                </div>

                <div className="faqs__container mb-64">
                    <div className="faqs__title">
                        <h3 className="heading--h3">
                            {faqTwo.title}
                        </h3>
                    </div>
                    <div className="faqs__questions">
                        <div className="faqs__content">
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
                        </div>
                        <div className="faqs__content">
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
                        </div>
                        <div className="faqs__content">
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
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default FAQs