import React, { useRef, useEffect } from 'react';
// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import play_icon from '../src/assets/images/play.svg';
import launch_icon from '../src/assets/images/launch.svg';
import product_one from '../src/assets/images/products/product-one.svg';
import product_two from '../src/assets/images/products/product-two.svg';
import product_three from '../src/assets/images/products/product-three.svg';
import product_four from '../src/assets/images/products/product-four.svg';
import product_five from '../src/assets/images/products/product-five.svg';
import product_six from '../src/assets/images/products/product-six.svg';
import product_seven from '../src/assets/images/products/product-seven.svg';
import arrow_icon from '../src/assets/images/arrow-icon.svg';
import audit_item_img_1 from '../src/assets/images/security_audits/audit-item-img-1.png';
import audit_item_img_2 from '../src/assets/images/security_audits/audit-item-img-2.png';
import audit_item_img_3 from '../src/assets/images/security_audits/audit-item-img-3.png';
import audit_item_img_4 from '../src/assets/images/security_audits/audit-item-img-4.png';
import betnomi from '../src/assets/images/betnomi-logo.svg';
import TokenomicsDesktop from './Components/TokenomicsDesktop';
import Partners from './Components/Partner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TokenomicsMobile from './Components/TokenomicsMobile';
import ProductCard from './Atoms/ProductCard';
import ProductMobileCarousel from './Components/ProductCarouselMobile';
import ReportCard from './Atoms/ReportCards';
import ReportMobileCarousel from './Components/ReportCarouselMobile';
import CoinDetailBox from './Components/CoinDetailBox';
import Button from './Atoms/Button';

import perсent from '../src/assets/images/dao/percent.png';
import greenTick from '../src/assets/images/dao/green_tick.svg';
import person1 from '../src/assets/images/dao/person_1.png';
import person2 from '../src/assets/images/dao/person_2.png';
import person3 from '../src/assets/images/dao/person_3.png';
import person4 from '../src/assets/images/dao/person_4.png';
import graph_green from '../src/assets/images/dao/graph_green.png';
import graph_orange from '../src/assets/images/dao/graph_orange.png';
import graph_yellow from '../src/assets/images/dao/graph_yellow.png';
import graph_blue from '../src/assets/images/dao/graph_blue.png';
import Cards from './Animations/Cards';

// Custom style

import './app.css';

gsap.registerPlugin(ScrollTrigger);

const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
        y: -20,
        duration: 1,
        ease: 'bounce.out'
    });
};

const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
        y: 0,
        duration: 1,
        ease: 'bounce.out'
    });
};

function App() {
    // Products
    const product1 = useRef();
    const product2 = useRef();
    const product3 = useRef();
    const product4 = useRef();
    const product5 = useRef();
    const product6 = useRef();
    const product7 = useRef();
    const product8 = useRef();

    // store a reference to the box div
    // const productCardList = useRef();
    // const q = gsap.utils.selector(productCardList);

    // wait until DOM has been rendered
    useEffect(() => {
        // Products card animation
        gsap.from(product1.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: product1.current
            }
        });
        gsap.from(product2.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: product2.current
            }
        });
        gsap.from(product3.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: product3.current
            }
        });
        gsap.from(product4.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: product4.current
            }
        });
        gsap.from(product5.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: product5.current
            }
        });
        gsap.from(product6.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: product6.current
            }
        });
        gsap.from(product7.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: product7.current
            }
        });
        gsap.from(product8.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: product8.current
            }
        });
        //WITH Timelines (cleaner, more versatile)
        var daoImg = gsap.timeline({
            repeat: -1,
            repeatDelay: 1,
            scrollTrigger: {
                trigger: '.dao-img '
            }
        });
        daoImg.from('.graph-green', { scale: 1.15, duration: 0.25 });
        daoImg.to('.person1 ', { rotation: 15, duration: 0.25 });
        daoImg.to('.person1 ', { rotation: 0, duration: 0.25 });
        daoImg.to('.percent ', { opacity: 0, duration: 0.1 });
        daoImg.to('.percent-25 ', { opacity: 1, duration: 0.1 });

        daoImg.from('.graph-orange', { scale: 1.15, duration: 0.25 });
        daoImg.to('.person2 ', { rotation: -15, duration: 0.25 });
        daoImg.to('.person2 ', { rotation: 0, duration: 0.25 });
        daoImg.to('.percent-25 ', { opacity: 0, duration: 0.1 });
        daoImg.to('.percent-50 ', { opacity: 1, duration: 0.1 });
        daoImg.from('.graph-yellow', { scale: 1.15, duration: 0.25 });
        daoImg.to('.person4 ', { rotation: -15, duration: 0.25 });
        daoImg.to('.person4 ', { rotation: 0, duration: 0.25 });
        daoImg.to('.percent-50 ', { opacity: 0, duration: 0.1 });
        daoImg.to('.percent-75 ', { opacity: 1, duration: 0.1 });
        daoImg.from('.graph-blue', { scale: 1.15, duration: 0.1 });
        daoImg.to('.person3 ', { rotation: 15, duration: 0.25 });
        daoImg.to('.person3 ', { rotation: 0, duration: 0.25 });
        daoImg.to('.percent-75 ', { opacity: 0, duration: 0.1 });

        daoImg.to('.green-tick ', { opacity: 1, duration: 0.1 });
    });

    return (
        <>
            <section className="main-container">
                <Header />

                <div className="container mt-3 hero-section">
                    <div className="row row-cols-xl-2 banner align-items-center">
                        <div className=" hero-text order-2 order-xl-1 text-white p-0 mt-xl-3">
                            <h1 className="banner-heading text-uppercase mb-3 text-nowrap">
                                JOIN THE HOUSE, <br /> GET PAID IN $BNB
                            </h1>
                            <p className="body-text mt-4 mb-5">
                                Become the house by holding the casino token in
                                your wallet. <br /> $BNI is a reflection token
                                backed by the revenue of the leading crypto
                                casino with auto rewards and auto claims.
                            </p>
                            <div className="header-btns">
                                <Button
                                    link="/"
                                    image={play_icon}
                                    text="Play Now"
                                    classes="play-btn me-3"
                                    imgclass="play-icon"
                                />
                                {/* <a href="/">
                                    <div className="betnomi-btn play-btn me-3">
                                        <img
                                            className="play-icon me-2"
                                            src={play_icon}
                                            alt=""
                                        />
                                        Play Now
                                    </div>
                                </a> */}
                                <Button
                                    link="/"
                                    image={launch_icon}
                                    text="Launch App"
                                />
                            </div>
                        </div>
                        <div className=" order-1 order-xl-2 pb-3 text-white">
                            <div
                                className="banner-img mx-auto overflow-hidded"
                                style={{ position: 'relative', width: '100%' }}
                            >
                                <Cards />

                                {/* <img
                                    className="img-fluid"
                                    src={banner_img}
                                    alt=""
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="productSection" className="product-section">
                <div className="container products-inner-block ">
                    <div className="">
                        <h2 className="small-heading">
                            Our Project, Ecosystem and Product Offerings
                        </h2>
                        <p className="body-text body-text-gray text-center mt-3">
                            Betnomi is a leading crypto Casino and sportsbook
                            platform with a vast collection of games and
                            products which spans many categories
                        </p>
                    </div>
                    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 flex-sm-none  products">
                        <div
                            className="  p-3"
                            ref={product1}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            <ProductCard
                                image={product_one}
                                heading="Virtual sports"
                                text="Expedita, ullam et consequatur a aliquam illum dolor illo ea
                                eos cupiditate."
                            />
                        </div>

                        <div
                            className="  p-3"
                            ref={product2}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            <ProductCard
                                image={product_two}
                                heading="E-sports"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div
                            className="  p-3"
                            ref={product3}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            <ProductCard
                                image={product_three}
                                heading="Live Casino"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div
                            className="  p-3"
                            ref={product4}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            <ProductCard
                                image={product_four}
                                heading="Poker"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div
                            className="  p-3"
                            ref={product5}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            <ProductCard
                                image={product_five}
                                heading="Skill Games"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div
                            className="  p-3"
                            ref={product6}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            <ProductCard
                                image={product_six}
                                heading="Sportsbook"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div
                            className="  p-3"
                            ref={product7}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            <ProductCard
                                image={product_seven}
                                heading="Live Video Streaming"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div
                            className="  align-items-center justify-content-center d-flex p-0 products last-product-block"
                            ref={product8}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            <div className="game-quantity-block">
                                Casino With <br />{' '}
                                <span className="game-quantity">7500+</span>{' '}
                                Games
                            </div>
                        </div>
                    </div>

                    <ProductMobileCarousel />

                    <div className="arrow-clip">
                        <div className="arrow-icon">
                            <a href="/">
                                <img className="icon" src={arrow_icon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div id="daoSection" className="dao-section">
                <div className="container">
                    <div className="row row-cols-lg-2 align-items-center">
                        <div className=" d-flex justify-md-center">
                            <div className="dao-img  m-auto m-lg-0">
                                <div className="center-img">
                                    <img
                                        className="percent"
                                        src={perсent}
                                        alt="..."
                                    />
                                    <img
                                        className="green-tick"
                                        src={greenTick}
                                        alt="..."
                                    />
                                    <h1 className="percent-num percent-25">
                                        25%
                                    </h1>
                                    <h1 className="percent-num percent-50">
                                        50%
                                    </h1>
                                    <h1 className="percent-num percent-75">
                                        75%
                                    </h1>
                                </div>
                                <div className="dao-img-inner row row-cols-2">
                                    <div className="graph graph1">
                                        <img
                                            className="person1"
                                            src={person1}
                                            alt="..."
                                        />
                                        <img
                                            className="graph-green"
                                            src={graph_green}
                                            alt="..."
                                        />
                                    </div>
                                    <div className="graph graph2">
                                        <img
                                            className="person2"
                                            src={person2}
                                            alt="..."
                                        />
                                        <img
                                            className="graph-orange"
                                            src={graph_orange}
                                            alt="..."
                                        />
                                    </div>
                                    <div className="graph graph3">
                                        <img
                                            className="person3"
                                            src={person3}
                                            alt="..."
                                        />
                                        <img
                                            className="graph-blue"
                                            src={graph_blue}
                                            alt="..."
                                        />
                                    </div>
                                    <div className="graph graph4">
                                        <img
                                            className="person4"
                                            src={person4}
                                            alt="..."
                                        />
                                        <img
                                            className="graph-yellow"
                                            src={graph_yellow}
                                            alt="..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-5 mt-lg-0">
                            <div className="dao-heading">Betnomi DAO </div>
                            <p className="body-text text-white mt-3 dao-text">
                                Token holders effectively act as the house where
                                they control how and when the revenue from the
                                casino is distributed to the token holders, the
                                addition of new games, proposals, and the future
                                of the project by voting through a governance
                                model.
                            </p>
                            <Button
                                link="/"
                                image={launch_icon}
                                text="Launch App"
                                classes="btn-md-full mt-4"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="tokenSection" className="token-section">
                <div className="container">
                    <div className="token-heading mb-5">
                        Token and Tokenomics
                    </div>
                    <TokenomicsMobile />
                    <TokenomicsDesktop />
                </div>
            </div>

            <div className="audit-section">
                <div className="container">
                    <div className="audit-heading">
                        Security Audits and Reports
                    </div>
                    <p className="audit-text">
                        Betnomi has been audited by the industry-leaders in
                        blockchain security.
                    </p>

                    <div className="audit-section-cards row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 mt-5 padding-mobile flex-sm-none">
                        <div className=" p-3">
                            <ReportCard
                                image={audit_item_img_1}
                                text="Quantstamp’s mission is to secure the
                                    decentralized internet, and has protected
                                    over $8B in digital asset risk from hackers.
                                    More than 170 startups, foundations and
                                    enterprises work with Quantstamp to keep
                                    their innovative products safe."
                            />
                        </div>

                        <div className=" p-3">
                            <ReportCard
                                image={audit_item_img_2}
                                text="MixBytes is a team of experienced developers
                                    providing top-notch blockchain solutions,
                                    smart contract security audits and tech
                                    advisory"
                            />
                        </div>

                        <div className=" p-3">
                            <ReportCard
                                image={audit_item_img_3}
                                text="Sigmaprime has an extensive background in
                                    information security, blockchain, and system
                                    design. Sigmaprime performs in-depth
                                    security assessments for decentralised
                                    systems, while also researching and
                                    developing core blockchain infrastructure."
                            />
                        </div>

                        <div className=" p-3">
                            <ReportCard
                                image={audit_item_img_4}
                                text="Quantstamp’s mission is to secure the
                                    decentralized internet, and has protected
                                    over $8B in digital asset risk from hackers.
                                    More than 170 startups."
                            />
                        </div>
                    </div>

                    <ReportMobileCarousel />

                    <CoinDetailBox
                        image={betnomi}
                        name="Betnomi"
                        ticker="BNI"
                        standard="BEP20"
                        platform="Binance Smart Chain"
                        totalSupply="100 million"
                        circulatingSupply="100 million"
                        address="0X8806926ab68eb5a7b909ajdh6jfhd6g048574id4j5"
                    />
                </div>
            </div>

            <section className="partner-section">
                <Partners />
            </section>

            <Footer />
        </>
    );
}

export default App;
