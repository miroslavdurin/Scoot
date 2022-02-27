import React from 'react';
import { useEffect } from 'react';
import './Info.css';
import { data, patterns } from '../../constants';
import {ReactComponent as RightArrow} from '../../assets/patterns/right-arrow.svg'
import {ReactComponent as LeftDownwardArrow} from '../../assets/patterns/group.svg'
import {ReactComponent as LeftUpwardArrow} from '../../assets/patterns/left-upward-arrow.svg'


function Info(props) {
    const {info} = props;
    const {isReversed, arrow /* isArrowBottomDown, isArrowBottomUp, isArrowTop */, mb, hasBtn} = props;
    let imgContainerPos;
    let infoCirclesRight;
    let infoCirclesLeft;

    console.log(arrow)

    const arrowChoice = arrow =>{
        if(arrow === 'isArrowBottomDown') return "info__arrow--left-bottom-down"
        else if(arrow === 'isArrowBottomUp') return "info__arrow--left-bottom-up"
        else return "info__arrow--left-top"
    }
 
    useEffect(()=> {
        imgContainerPos = document.querySelector('.container').getBoundingClientRect();
       
        infoCirclesRight = document.querySelectorAll('.info__circle'); 
        infoCirclesLeft = document.querySelectorAll('.info__circle--reverse');
        
        infoCirclesRight.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.right + 65}px`));
        infoCirclesLeft.forEach(circle=>circle.style.setProperty('--left-position', `${imgContainerPos.left - 510}px`));

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
                    <p className={`paragraph ${hasBtn && 'mb-40'}`}>
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
                        <img src={info.image} alt="info image" className="info__img" />
                    </div>
                    
                    <img src={patterns.circle} alt="circle patterns" className={`info__circle`} />
                </div>
            </div>
            {isReversed && <LeftDownwardArrow className="info__arrow--right"/>}            
            {!isReversed && <LeftDownwardArrow className={arrowChoice(arrow)} />}
        </section>
    )
}

export default Info