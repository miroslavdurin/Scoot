import React from 'react';
import './Jobs.css';

function Jobs(props) {
    const {jobs} = props;
    console.log(jobs)

    return (
        <section className="section-jobs mb-160">
            <div className="jobs container">
                <ul className="jobs__list">
                    {jobs.map((job, i)=>{
                            return (
                                <li key={i} className="jobs__item mb-24">                        
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
                                </li>
                            )
                    })}                    
                </ul>
            </div>
        </section>
    )
}

export default Jobs