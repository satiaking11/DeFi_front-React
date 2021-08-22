import { useEffect, useRef, useState } from 'react';
// import card from '../../src/assets/images/animation_assets/card.png';
import card from '../../src/assets/images/animation_assets/card2.png';
import hand from '../../src/assets/images/animation_assets/hand2.png';
import king from '../../src/assets/images/animation_assets/king2.png';
import classes from './Cards.module.css'
import gsap from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const Cards = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);
    gsap.registerPlugin(MotionPathPlugin);

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            gsap.to(q(`.${classes.hand}`), {
                duration: 2,
                // left: 200,
                rotate: 36,
                motionPath: [
                    {left: 45, top: 230},
                    {left: 85, top: 210},
                    {left: 125, top: 195},
                    {left: 175, top: 195},
                    {left: 235, top: 195},
                    {left: 280, top: 205},
                    {left: 325, top: 225},
                ],
                onUpdate: () => {
                    const pos = parseInt(q(`.${classes.hand}`)[0].style.left);
                    // const posTop = parseInt(q(`.${classes.hand}`)[0].style.top);
                    // const posTop = parseInt(q(`.${classes.hand}`)[0].style.top);
                    // const card = document.getElementById(`${classes.card8}`)
                    // card.style.left = `${pos}px`;
                    // card.style.top = `${posTop}px`;
                    // card.style.transform = 'rotate(36deg)';
                    setPositionCard(pos);
                },
                onComplete: ()=>showKing()
            })  
        }, 1000);
        
        setTimeout(() => {
            gsap.to(q(`#${classes.card8}`), {
                duration: 2,
                // left: 200,
                rotate: 36,
                motionPath: [
                    {left: 75, top: 230},
                    {left: 115, top: 210},
                    {left: 155, top: 195},
                    {left: 205, top: 195},
                    {left: 265, top: 195},
                    {left: 310, top: 205},
                    {left: 355, top: 225},
                ]
            })  
        }, 1000);
    }, [])

    function setPositionCard(pos) {
        if(pos > 280) {
            const card = document.getElementById(`${classes.card7}`)
            card.style.left = '310px';
            card.style.top = '205px';
            card.style.transform = 'rotate(26deg)';
            card.style.zIndex = '15';
        } else if(pos > 235) {
            const card = document.getElementById(`${classes.card6}`)
            card.style.left = '265px';
            card.style.top = '195px';
            card.style.transform = 'rotate(15deg)';
            card.style.zIndex = '14';
        } else if(pos > 175) {
            if(show) return;
            const card = document.getElementById(`${classes.card5}`)
            card.style.left = '205px';
            card.style.top = '185px';
            card.style.transform = 'rotate(0deg)';
            card.style.zIndex = '13';
        } else if(pos > 125) {
            const card = document.getElementById(`${classes.card4}`)
            card.style.left = '155px';
            card.style.top = '195px';
            card.style.transform = 'rotate(-7deg)';
            card.style.zIndex = '12';
        } else if(pos > 85) {
            const card = document.getElementById(`${classes.card3}`)
            card.style.left = '115px';
            card.style.top = '210px';
            card.style.transform = 'rotate(-17deg)';
            card.style.zIndex = '11';
        } else if(pos > 45) {
            const card = document.getElementById(`${classes.card2}`)
            card.style.left = '75px';
            card.style.top = '230px';
            card.style.transform = 'rotate(-25deg)';
            card.style.zIndex = '10';
        }
    }

    function showKing() {
        gsap.to(q(`#${classes.card5}`), {
            duration: 1,
            top: 120
        })  
    }

    return (
        <div className={classes.cardsBlock} ref={el}>
            <img id={classes.card1} className={classes.cards} src={card} alt='card1' />
            <img id={classes.card2} className={classes.cards} src={card} alt='card2' />
            <img id={classes.card3} className={classes.cards} src={card} alt='card3' />
            <img id={classes.card4} className={classes.cards} src={card} alt='card4' />
            <img id={classes.card5} className={classes.cards} src={king} alt='cardKing' />
            <img id={classes.card6} className={classes.cards} src={card} alt='card5' />
            <img id={classes.card7} className={classes.cards} src={card} alt='card6' />
            <img id={classes.card8} className={classes.cards} src={card} alt='card7' />
            {/* <img className='hand' src={hand} alt='hand' /> */}
            <img className={classes.hand} src={hand} alt='hand' />
        </div>
    )
}

export default Cards;