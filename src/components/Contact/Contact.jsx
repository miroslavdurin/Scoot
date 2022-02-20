import React from 'react';
import './Contact.css';

function Contact(props) {
    const {title, text, btn} = props.contact

    return (
        <section className="section-contact mb-120">
            <div className="contact container">
                <h2 className="heading--h2">
                    {title}
                </h2>
                <p className="paragraph">
                    {text}
                </p>
                <a href="#" className="button">
                    {btn}
                </a>
            </div>
        </section>
    )
}

export default Contact