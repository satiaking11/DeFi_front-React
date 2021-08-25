import { useEffect, useRef, useState } from 'react';
// import card from '../../src/assets/images/animation_assets/card.png';
import card from '../../src/assets/images/animation_assets/card2.png';
import hand from '../../src/assets/images/animation_assets/hand2.png';
import king from '../../src/assets/images/animation_assets/king2.png';
import ETH from '../../src/assets/images/animation_assets/ETH.png';
import ETH1 from '../../src/assets/images/animation_assets/ETH_1.png';
import ETH2 from '../../src/assets/images/animation_assets/ETH_2.png';
import ETH3 from '../../src/assets/images/animation_assets/ETH_3.png';
import ETH4 from '../../src/assets/images/animation_assets/ETH_4.png';
import classes from './Cards.module.css';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

const Cards = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);
    gsap.registerPlugin(MotionPathPlugin);

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            gsap.to(q(`.${classes.hand}`), {
                duration: 0.7,
                repeat: -1,
                repeatDelay: 2,
                // left: 200,
                rotate: 36,
                motionPath: [
                    { left: 45, top: 230 },
                    { left: 85, top: 210 },
                    { left: 125, top: 195 },
                    { left: 175, top: 195 },
                    { left: 235, top: 195 },
                    { left: 280, top: 205 },
                    { left: 325, top: 225 }
                ],
                onUpdate: () => {
                    const pos = parseInt(q(`.${classes.hand}`)[0].style.left);

                    setPositionCard(pos);

                    setTimeout(() => {
                        showKing();
                    }, 700);
                },

                onRepeat: () => {
                    const pos = parseInt(q(`.${classes.hand}`)[0].style.left);

                    reSetPositionCard();

                    setPositionCard(pos);

                    setTimeout(() => {
                        showKing();
                    }, 700);
                }
            });
        }, 1000);

        setTimeout(() => {
            gsap.to(q(`#${classes.card8}`), {
                duration: 0.7,
                repeat: -1,
                repeatDelay: 2,
                // left: 200,
                rotate: 36,
                motionPath: [
                    { left: 75, top: 230 },
                    { left: 115, top: 210 },
                    { left: 155, top: 195 },
                    { left: 205, top: 195 },
                    { left: 265, top: 195 },
                    { left: 310, top: 205 },
                    { left: 355, top: 225 }
                ]
            });

            // Coin Animation

            if (window.innerWidth > 750) {
                // coins

                gsap.to(`.eth`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 460,
                    y: -90
                });
                gsap.to(`.eth-1`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 50,
                    y: -110
                });
                gsap.to(`.eth-2`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -130,
                    y: -130
                });
                gsap.to(`.eth-3`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -40,
                    y: -240
                });
                gsap.to(`.eth-4`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 300,
                    y: -230
                });
            } else if (window.innerWidth > 540) {
                gsap.to(`.eth`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 380,
                    y: -90
                });
                gsap.to(`.eth-1`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 50,
                    y: -110
                });
                gsap.to(`.eth-2`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -60,
                    y: -100
                });
                gsap.to(`.eth-3`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -40,
                    y: -240
                });
                gsap.to(`.eth-4`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 300,
                    y: -230
                });
            } else if (window.innerWidth > 500) {
                gsap.to(`.eth`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 350,
                    y: -120
                });
                gsap.to(`.eth-1`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 50,
                    y: -110
                });
                gsap.to(`.eth-2`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -40,
                    y: -90
                });
                gsap.to(`.eth-3`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -40,
                    y: -240
                });
                gsap.to(`.eth-4`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 300,
                    y: -230
                });
            } else if (window.innerWidth > 375) {
                gsap.to(`.eth`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 290,
                    y: -120
                });
                gsap.to(`.eth-1`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 50,
                    y: -140
                });
                gsap.to(`.eth-2`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -40,
                    y: -100
                });
                gsap.to(`.eth-3`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -10,
                    y: -240
                });
                gsap.to(`.eth-4`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 250,
                    y: -230
                });
            } else {
                gsap.to(`.eth`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 220,
                    y: -120
                });
                gsap.to(`.eth-1`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 50,
                    y: -140
                });
                gsap.to(`.eth-2`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -40,
                    y: -100
                });
                gsap.to(`.eth-3`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: -10,
                    y: -240
                });
                gsap.to(`.eth-4`, {
                    repeat: -1,
                    repeatDelay: 2,
                    duration: 0.7,
                    x: 170,
                    y: -230
                });
            }
        }, 1000);
    }, []);

    function setPositionCard(pos) {
        if (pos > 280) {
            const card = document.getElementById(`${classes.card7}`);
            card.style.left = '310px';
            card.style.top = '205px';
            card.style.transform = 'rotate(26deg)';
            card.style.zIndex = '15';
        } else if (pos > 235) {
            const card = document.getElementById(`${classes.card6}`);
            card.style.left = '265px';
            card.style.top = '195px';
            card.style.transform = 'rotate(15deg)';
            card.style.zIndex = '14';
        } else if (pos > 175) {
            if (show) return;
            const card = document.getElementById(`${classes.card5}`);
            card.style.left = '205px';
            card.style.top = '185px';
            card.style.transform = 'rotate(0deg)';
            card.style.zIndex = '13';
        } else if (pos > 125) {
            const card = document.getElementById(`${classes.card4}`);
            card.style.left = '155px';
            card.style.top = '195px';
            card.style.transform = 'rotate(-7deg)';
            card.style.zIndex = '12';
        } else if (pos > 85) {
            const card = document.getElementById(`${classes.card3}`);
            card.style.left = '115px';
            card.style.top = '210px';
            card.style.transform = 'rotate(-17deg)';
            card.style.zIndex = '11';
        } else if (pos > 45) {
            const card = document.getElementById(`${classes.card2}`);
            // const card1 = document.getElementById(`${classes.card1}`);
            // card1.style.zIndex = '9';
            card.style.left = '75px';
            card.style.top = '230px';
            card.style.transform = 'rotate(-25deg)';
            card.style.zIndex = '10';
        }
    }

    function reSetPositionCard() {
        //===========
        const card7 = document.getElementById(`${classes.card7}`);
        card7.style.left = '30px';
        card7.style.top = '260px';
        card7.style.transform = 'rotate(-30deg)';
        card7.style.zIndex = '1';

        //===========
        const card6 = document.getElementById(`${classes.card6}`);
        card6.style.left = '30px';
        card6.style.top = '260px';
        card6.style.transform = 'rotate(-30deg)';
        card6.style.zIndex = '1';

        //===========
        const card5 = document.getElementById(`${classes.card5}`);
        card5.style.left = '30px';
        card5.style.top = '260px';
        card5.style.transform = 'rotate(-30deg)';
        card5.style.zIndex = '1';

        //===========
        const card4 = document.getElementById(`${classes.card4}`);
        card4.style.left = '30px';
        card4.style.top = '260px';
        card4.style.transform = 'rotate(-30deg)';
        card4.style.zIndex = '1';

        //===========
        const card3 = document.getElementById(`${classes.card3}`);
        card3.style.left = '30px';
        card3.style.top = '260px';
        card3.style.transform = 'rotate(-30deg)';
        card3.style.zIndex = '1';

        //===========
        const card2 = document.getElementById(`${classes.card2}`);
        card2.style.left = '30px';
        card2.style.top = '260px';
        card2.style.transform = 'rotate(-30deg)';
        card2.style.zIndex = '1';
    }

    function showKing() {
        gsap.to(q(`#${classes.card5}`), {
            duration: 1,
            top: 120
        });
    }

    return (
        <div className={classes.cardsBlock} ref={el}>
            <div className="coins">
                <div className="coins__coin eth">
                    <img src={ETH} alt="eth" />
                </div>
                <div className="coins__coin eth-1">
                    <img src={ETH1} alt="eth 1" />
                </div>
                <div className="coins__coin">
                    <img className=" eth-2" src={ETH2} alt="eth 2" />
                </div>
                <div className="coins__coin eth-3">
                    <img src={ETH3} alt="eth 3" />
                </div>
                <div className="coins__coin eth-4">
                    <img src={ETH4} alt="eth 4" />
                </div>
            </div>
            <div className={classes.CardsHand}>
                <div className="card-1-box">
                    <img
                        id={classes.card1}
                        className={classes.cards}
                        src={card}
                        alt="card1"
                    />
                </div>
                <img
                    id={classes.card2}
                    className={classes.cards}
                    src={card}
                    alt="card2"
                />
                <img
                    id={classes.card3}
                    className={classes.cards}
                    src={card}
                    alt="card3"
                />
                <img
                    id={classes.card4}
                    className={classes.cards}
                    src={card}
                    alt="card4"
                />
                <img
                    id={classes.card5}
                    className={classes.cards}
                    src={king}
                    alt="cardKing"
                />
                <img
                    id={classes.card6}
                    className={classes.cards}
                    src={card}
                    alt="card5"
                />
                <img
                    id={classes.card7}
                    className={classes.cards}
                    src={card}
                    alt="card6"
                />
                <img
                    id={classes.card8}
                    className={classes.cards}
                    src={card}
                    alt="card7"
                />
                {/* <img className='hand' src={hand} alt='hand' /> */}
                <img className={classes.hand} src={hand} alt="hand" />
            </div>
        </div>
    );
};

export default Cards;
