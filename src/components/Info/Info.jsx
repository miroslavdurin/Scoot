import React from 'react';
import { useEffect } from 'react';
import './Info.css';
import { data, patterns } from '../../constants';
import {ReactComponent as RightArrow} from '../../assets/patterns/right-arrow.svg'
import {ReactComponent as LeftDownwardArrow} from '../../assets/patterns/group.svg'
import {ReactComponent as LeftUpwardArrow} from '../../assets/patterns/left-upward-arrow.svg'


function Info(props) {
    const {info} = props;
    const {isReversed, isArrowUp, mb, hasBtn} = props;
    let imgContainerPos;
    let infoCirclesRight;
    let infoCirclesLeft;
 
    useEffect(()=> {
        imgContainerPos = document.querySelector('.container').getBoundingClientRect();
       
        infoCirclesRight = document.querySelectorAll('.info__circle'); 
        infoCirclesLeft = document.querySelectorAll('.info__circle--reverse');
        
        infoCirclesRight.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.right + 65}px`));
        infoCirclesLeft.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.left - 510}px`));

        document.querySelector("#line").style.pathLength = '200'
    }, []);

    window.addEventListener('resize', ()=> {         
        imgContainerPos = document.querySelector('.container').getBoundingClientRect();
        infoCirclesRight = document.querySelectorAll('.info__circle'); 
        infoCirclesLeft = document.querySelectorAll('.info__circle--reverse');

        infoCirclesRight.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.right + 65}px`));
        infoCirclesLeft.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.left - 510}px`));

        
    }) 


    return (
        <section className={`section-info ${mb}`}>
            <div className={`info container ${isReversed && 'info--reverse'}`}>
                <div className="info--left">
                    <h2 className="heading--h2 mb-24">
                        {info.title}
                    </h2>
                    <p className="paragraph mb-40">
                        {info.text}
                    </p>
                    {
                        hasBtn && 
                        <a href="#" className="button">
                            {info.btn}
                        </a>
                    }
                    
                </div>
                <div className="info--right">
                    <div className="info__img-container">
                        <img src={info.image} alt="" className="info__img" />
                    </div>
                </div>
            </div>
            <img src={patterns.circle} alt="" className={`info__circle ${isReversed && 'info__circle--reverse'}`} />
            {isReversed && <RightArrow className="info__arrow--right"/>}            
            {!isReversed && (
                isArrowUp ? 
                    <LeftDownwardArrow className="info__arrow--left-top" />
                    :
                    <LeftDownwardArrow className="info__arrow--left-bottom" />
            )}
        </section>
    )
}

export default Info