import React from 'react';
import './Values.css';

function Values(props) {
    const {title, content} = props.values

    return (
        <section className="section-values mb-120">
            <div className="values container">
                <h2 className="heading--h2 mb-100">
                    {title}
                </h2>
                <div className="values__cards">
                    <div className="values__card">
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
                    </div>
                    <div className="values__card">
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
                    </div>
                    <div className="values__card">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values;