import React from 'react';
import banner_img from '../src/assets/images/image.png';
import play_icon from '../src/assets/images/play.svg';
import launch_icon from '../src/assets/images/launch.svg';
import product_one from '../src/assets/images/product-one.svg';
import product_two from '../src/assets/images/product-two.svg';
import product_three from '../src/assets/images/product-three.svg';
import product_four from '../src/assets/images/product-four.svg';
import product_five from '../src/assets/images/product-five.svg';
import product_six from '../src/assets/images/product-six.svg';
import product_seven from '../src/assets/images/product-seven.svg';
import dao_img from '../src/assets/images/dao-img.png';
import arrow_icon from '../src/assets/images/arrow-icon.svg';
import audit_item_img_1 from '../src/assets/images/audit-item-img-1.png';
import audit_item_img_2 from '../src/assets/images/audit-item-img-2.png';
import audit_item_img_3 from '../src/assets/images/audit-item-img-3.png';
import audit_item_img_4 from '../src/assets/images/audit-item-img-4.png';
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

import perсent from '../src/assets/images/animation_assets/percent.png'
import person1 from '../src/assets/images/animation_assets/person_1.png'
import person2 from '../src/assets/images/animation_assets/person_2.png'
import person3 from '../src/assets/images/animation_assets/person_3.png'
import person4 from '../src/assets/images/animation_assets/person_4.png'
import graph_green from '../src/assets/images/animation_assets/graph_green.png'
import graph_orange from '../src/assets/images/animation_assets/graph_orange.png'
import graph_yellow from '../src/assets/images/animation_assets/graph_yellow.png'
import graph_blue from '../src/assets/images/animation_assets/graph_blue.png'
import Cards from './Animations/Cards';

function App() {
    return (
        <>
            <section className="main-container">
                <Header />

                <div className="container mt-3">
                    <div className="row banner align-items-center">
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1 text-white p-0 mt-3">
                            <h1 className="banner-heading text-uppercase mb-3">
                                Join the house, <br /> get paid in $BNB
                            </h1>
                            <p className="body-text mt-4 mb-5">
                                Become the house by holding the casino token in
                                your wallet. $BNI is a reflection token backed
                                by the revenue of the leading crypto casino with
                                auto rewards and auto claims.
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
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2 pb-3 text-white">
                            <div className="banner-img mx-auto" style={{position: 'relative'}}>
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

            <section className="product-section">
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
                    <div className="row flex-sm-none products">
                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                            <ProductCard
                                image={product_one}
                                heading="Virtual sports"
                                text="Expedita, ullam et consequatur a aliquam illum dolor illo ea
                                eos cupiditate."
                            />
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                            <ProductCard
                                image={product_two}
                                heading="E-sports"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                            <ProductCard
                                image={product_three}
                                heading="Live Casino"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                            <ProductCard
                                image={product_four}
                                heading="Poker"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                            <ProductCard
                                image={product_five}
                                heading="Skill Games"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                            <ProductCard
                                image={product_six}
                                heading="Sportsbook"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                            <ProductCard
                                image={product_seven}
                                heading="Live Video Streaming"
                                text="Expedita, ullam et consequatur a aliquam
                                        illum dolor illo ea eos cupiditate."
                            />
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 align-items-center justify-content-center d-flex p-0 products last-product-block">
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

            <div className="dao-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex justify-md-center">
                            <div className="dao-img">
                                {/* <img
                                    className="img-fluid mt-2"
                                    src={dao_img}
                                    alt=""
                                /> */}
                                <div className="graph1">
                                    <img className="person1" src={person1} />
                                    <img className="graph-green" src={person1} />
                                </div>
                                <div className="graph2">
                                    <img className="person1" src={person1} />
                                    <img className="graph-green" src={person1} />
                                </div>
                                <div className="graph3">
                                    <img className="person1" src={person1} />
                                    <img className="graph-green" src={person1} />
                                </div>
                                <div className="graph4">
                                    <img className="person1" src={person1} />
                                    <img className="graph-green" src={person1} />
                                </div>                                
                            </div>
                        </div>
                        <div className="col-md-6">
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

            <div className="token-section">
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

                    <div className="row mt-5 padding-mobile flex-sm-none">
                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
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

                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                            <ReportCard
                                image={audit_item_img_2}
                                text="MixBytes is a team of experienced developers
                                    providing top-notch blockchain solutions,
                                    smart contract security audits and tech
                                    advisory"
                            />
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
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

                        <div className="col-lg-3 col-md-4 col-sm-6 p-3">
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
