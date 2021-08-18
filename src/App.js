import React from "react";
import logo from "../src/assets/images/logo.svg";
import metamask from "../src/assets/images/metamask.svg"
import banner_img from "../src/assets/images/image.png"
import play_icon from "../src/assets/images/play.svg"
import launch_icon from "../src/assets/images/launch.svg"
import product_one from "../src/assets/images/product-one.svg"
import product_two from "../src/assets/images/product-two.svg"
import product_three from "../src/assets/images/product-three.svg"
import product_four from "../src/assets/images/product-four.svg"
import product_five from "../src/assets/images/product-five.svg"
import product_six from "../src/assets/images/product-six.svg"
import product_seven from "../src/assets/images/product-seven.svg"
import dao_img from "../src/assets/images/dao-img.png"
import arrow_icon from "../src/assets/images/arrow-icon.svg"
import token_img from "../src/assets/images/token-img.svg"
import token_1_icon from "../src/assets/images/token-1-icon.svg"
import token_2_icon from "../src/assets/images/token-2-icon.svg"
import token_3_icon from "../src/assets/images/token-3-icon.svg"
import token_4_icon from "../src/assets/images/token-4-icon.svg"
import token_5_icon from "../src/assets/images/token-5-icon.svg"
import token_arrow_down from "../src/assets/images/token-arrow-down.svg"
import token_arrow_right from "../src/assets/images/token-arrow-right.svg"
import audit_link_icon from "../src/assets/images/audit-link-icon.svg"
import audit_item_img_1 from "../src/assets/images/audit-item-img-1.png"
import audit_item_img_2 from "../src/assets/images/audit-item-img-2.png"
import audit_item_img_3 from "../src/assets/images/audit-item-img-3.png"
import audit_item_img_4 from "../src/assets/images/audit-item-img-4.png"
import social_img_1 from "../src/assets/images/social-img-1.svg"
import social_img_2 from "../src/assets/images/social-img-2.svg"
import social_img_3 from "../src/assets/images/social-img-3.svg"
import social_img_4 from "../src/assets/images/social-img-4.svg"
import social_img_5 from "../src/assets/images/social-img-5.svg"
import footer_img_1 from "../src/assets/images/footer-img-1.svg"
import footer_img_2 from "../src/assets/images/footer-img-2.svg"
import betnomi from "../src/assets/images/betnomi-logo.svg"
import TokenomicsDesktop from "./Components/TokenomicsDesktop";
import Partners from "./Components/Partner";



function App() {
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <nav class="navbar navbar-expand-xl navbar-dark">
            <div class="container-fluid p-0">
              <a class="navbar-brand" href="#"><img src={logo}/></a>
              <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse pt-1" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Ecosystem</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">DAO</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Token</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Buy $BNI</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Play</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Docs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">White Paper</a>
                  </li>
                </ul>
                <form class="text-center">
                  <a href="#">
                    <button className="btn nav-btn" type="submit"><img className="me-2" src={metamask} />Connect Metamask</button>
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="container mt-3">
          <div className="row banner align-items-center">
            <div className="col-lg-6 col-md-12 order-2 order-lg-1 text-white p-0 mt-3">
              <h1 className="banner-heading text-uppercase mb-3">Join the house, <br/> get paid in $BNB</h1>
              <p className="body-text mt-4 mb-5">Become the house by holding the casino token in your wallet.
                  $BNI is a reflection token backed by the revenue of the leading crypto casino with auto rewards and auto claims.</p>
              <div className="header-btns">
                <a href="#">
                  <div className="me-3 play-btn">
                    <img className="play-icon" src={play_icon} />
                    <div className="play-btn-text">Play Now</div>
                  </div>
                </a>
                <a href="#">
                  <div className="launch-btn">
                    <img className="me-2" src={launch_icon} />
                    <div>Lanch App</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2 pb-3 text-white">
              <div className="banner-img mx-auto">
                <img className="img-fluid" src={banner_img} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="container products-inner-block ">
          <div className="">
            <h2 className="small-heading">Our Project, Ecosystem and Product Offerings</h2>
            <p className="body-text body-text-gray text-center mt-3">Betnomi is a leading crypto Casino and sportsbook platform with a vast collection of games and products which spans many categories</p>
          </div>
          <div className="row flex-sm-none">
            <div className="col-lg-3 col-md-4 col-sm-6 p-3 products">
              <div className="product-inner-box">
                <img className="product-img" src={product_one} />
                <div className="pb-3 px-3 product-neg-margin">
                  <h4 className="product-heading">Virtual sports</h4>
                  <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-3 products">
              <div className="product-inner-box">
                <img className="product-img" src={product_two} />
                <div className="pb-3 px-3 product-neg-margin">
                  <h4 className="product-heading">E-sports</h4>
                  <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-3 products">
              <div className="product-inner-box">
                <img className="product-img" src={product_three} />
                <div className="pb-3 px-3 product-neg-margin">
                  <h4 className="product-heading">Live Casino</h4>
                  <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-3 products">
              <div className="product-inner-box">
                <img className="product-img" src={product_four} />
                <div className="pb-3 px-3 product-neg-margin">
                  <h4 className="product-heading">Poker</h4>
                  <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-3 products">
              <div className="product-inner-box">
                <img className="product-img" src={product_five} />
                <div className="pb-3 px-3 product-neg-margin">
                  <h4 className="product-heading">Skill Games</h4>
                  <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-3 products">
              <div className="product-inner-box">
                <img className="product-img" src={product_six} />
                <div className="pb-3 px-3 product-neg-margin">
                  <h4 className="product-heading">Sportsbook</h4>
                  <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-3 products">
              <div className="product-inner-box">
                <img className="product-img" src={product_seven} />
                <div className="pb-3 px-3 product-neg-margin">
                  <h4 className="product-heading">Live Video Streaming</h4>
                  <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 align-items-center justify-content-center d-flex p-0 products last-product-block">
              <div className="game-quantity-block">
                Casino With <br/> <span className="game-quantity">7500+</span> Games
              </div>
            </div>
          </div>
          
        
          <div id="carouselExampleIndicators1" class="carousel slide col-sm-display" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="p-3 products">
                  <div className="product-inner-box">
                    <img className="product-img" src={product_one} />
                    <div className="pb-3 px-3 product-neg-margin">
                      <h4 className="product-heading">Virtual sports</h4>
                      <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="p-3 products">
                  <div className="product-inner-box">
                    <img className="product-img" src={product_two} />
                    <div className="pb-3 px-3 product-neg-margin">
                      <h4 className="product-heading">E-sports</h4>
                      <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="p-3 products">
                  <div className="product-inner-box product-empty-box">
                    <img className="product-img" src={product_three} />
                    <div className="pb-3 px-3 product-neg-margin">
                      <h4 className="product-heading">Live Casino</h4>
                      <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="p-3 products">
                  <div className="product-inner-box">
                    <img className="product-img" src={product_four} />
                    <div className="pb-3 px-3 product-neg-margin">
                      <h4 className="product-heading">Poker</h4>
                      <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="p-3 products">
                  <div className="product-inner-box">
                    <img className="product-img" src={product_five} />
                    <div className="pb-3 px-3 product-neg-margin">
                      <h4 className="product-heading">Skill Games</h4>
                      <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="p-3 products">
                  <div className="product-inner-box">
                    <img className="product-img" src={product_six} />
                    <div className="pb-3 px-3 product-neg-margin">
                      <h4 className="product-heading">Sportsbook</h4>
                      <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="p-3 products">
                  <div className="product-inner-box">
                    <img className="product-img" src={product_seven} />
                    <div className="pb-3 px-3 product-neg-margin">
                      <h4 className="product-heading">Live Video Streaming</h4>
                      <p className="product-text">Expedita, ullam et consequatur a aliquam illum dolor illo ea eos cupiditate.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="align-items-center justify-content-center d-flex p-0 products last-product-block">
                  <div className="game-quantity-block">
                    Casino With <br/> <span className="game-quantity">7500+</span> Games
                  </div>
                </div>
              </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


          <div className="arrow-clip">
            <div className="arrow-icon">
              <a href="#">
                <img className="icon" src={arrow_icon} />
              </a>
            </div>
          </div>
        </div>
        
      </div>

      <div className="dao-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex justify-md-center">
              <div className="dao-img">
                <img className="img-fluid mt-2" src={dao_img} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dao-heading">Betnomi DAO </div>
              <p className="body-text text-white mt-3 dao-text">Token holders effectively act as the house where they control how and when the revenue from the casino is distributed to the token holders, the addition of new games, proposals, and the future of the project by voting through a governance model.</p>
              <a className="d-flex" href="#">
                  <div className="launch-btn launch-md mt-4">
                    <img className="me-2" src={launch_icon} />
                    <div>Lanch App</div>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    
    <div className="token-section">
      <div className="container">
        <div className="token-heading">Token and Tokenomics</div>
        <div className="">
          <div className="col-md-display ">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item border-0">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <div className="token-icon-text">
                      <div className="dropdown-icon"> 
                        <img className="img-fluid" src={token_1_icon} />
                      </div> 
                      <div className="dropdown-text">Redistribution </div>
                    </div>
                    <div className="token-arrow">
                      <img className="img-fluid" src={token_arrow_right} />
                    </div>
                  </button>
                  <div id="collapseOne" class="accordion-collapse collapse show p-3" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    
                    <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                      BNB will be distributed to the token holders automatically.</p>
                  </div>
                </div>
                <div class="accordion-item border-0">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <div className="token-icon-text">
                      <div className="dropdown-icon"> 
                        <img className="img-fluid" src={token_2_icon} />
                      </div> 
                      <div className="dropdown-text">1% Liquidity Pool </div>
                    </div>
                    <div className="token-arrow">
                      <img className="img-fluid" src={token_arrow_right} />
                    </div>
                  </button>
                  <div id="collapseTwo" class="accordion-collapse collapse p-3" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                   
                    <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                      BNB will be distributed to the token holders automatically.</p>
                  </div>
                </div>
                <div class="accordion-item border-0">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <div className="token-icon-text">
                      <div className="dropdown-icon"> 
                        <img className="img-fluid" src={token_3_icon} />
                      </div> 
                      <div className="dropdown-text">Anti-Dump Lock & 3% Sell Fee </div>
                    </div>
                    <div className="token-arrow">
                      <img className="img-fluid" src={token_arrow_right} />
                    </div>
                  </button>
                  <div id="collapseThree" class="accordion-collapse collapse p-3" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    
                    <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                      BNB will be distributed to the token holders automatically.</p>
                  </div>
                </div>
                <div class="accordion-item border-0">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <div className="token-icon-text">
                      <div className="dropdown-icon"> 
                        <img className="img-fluid" src={token_4_icon} />
                      </div> 
                      <div className="dropdown-text">Real Utility </div>
                    </div>
                    <div className="token-arrow">
                      <img className="img-fluid" src={token_arrow_right} />
                    </div>
                  </button>
                  <div id="collapseFour" class="accordion-collapse collapse p-3" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    
                    <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                      BNB will be distributed to the token holders automatically.</p>
                  </div>
                </div>
                <div class="accordion-item border-0">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    <div className="token-icon-text">
                      <div className="dropdown-icon"> 
                        <img className="img-fluid" src={token_5_icon} />
                      </div> 
                      <div className="dropdown-text">Tokenomins </div>
                    </div>
                    <div className="token-arrow">
                      <img className="img-fluid" src={token_arrow_right} />
                    </div>
                  </button>
                  <div id="collapseFive" class="accordion-collapse collapse p-3" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                      BNB will be distributed to the token holders automatically.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <TokenomicsDesktop />
        
      </div>
    </div>
    


    <div className="audit-section">
      <div className="container">
        <div className="audit-heading">Security Audits and Reports</div>
        <p className="audit-text">Betnomi has been audited by the industry-leaders in blockchain security.</p>

        <div className="row mt-5 padding-mobile flex-sm-none">
          <div className="col-lg-3 col-md-4 col-sm-6 p-3">
            <div className="audit-items">
              <div className="audit-item-img">
                <img className="img-fluid" src={audit_item_img_1} />
              </div>
              <div className="audit-item-text">
                Quantstamp’s mission is to secure the decentralized internet, and has protected over $8B in digital asset risk from hackers. More than 170 startups, foundations and enterprises work with Quantstamp to keep their innovative products safe.
              </div>
              <a>
                <div className="audit-link">
                  See report 
                  <div className="audit-link-icon">
                    <img className="img-fluid ms-2" src={audit_link_icon} />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 p-3">
            <div className="audit-items">
              <div className="audit-item-img">
                <img className="img-fluid" src={audit_item_img_2} />
              </div>
              <div className="audit-item-text">
                MixBytes is a team of experienced developers providing top-notch blockchain solutions, smart contract security audits and tech advisory
              </div>
              <a>
                <div className="audit-link">
                  See report 
                  <div className="audit-link-icon">
                    <img className="img-fluid ms-2" src={audit_link_icon} />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 p-3">
            <div className="audit-items">
              <div className="audit-item-img">
                <img className="img-fluid" src={audit_item_img_3} />
              </div>
              <div className="audit-item-text">
                Sigmaprime has an extensive background in information security, blockchain, and system design. Sigmaprime performs in-depth security assessments for decentralised systems, while also researching and developing core blockchain infrastructure.
              </div>
              <a>
                <div className="audit-link">
                  See report 
                  <div className="audit-link-icon">
                    <img className="img-fluid ms-2" src={audit_link_icon} />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 p-3">
            <div className="audit-items">
              <div className="audit-item-img">
                <img className="img-fluid" src={audit_item_img_4} />
              </div>
              <div className="audit-item-text">
                Quantstamp’s mission is to secure the decentralized internet, and has protected over $8B in digital asset risk from hackers. More than 170 startups.
              </div>
              <a>
                <div className="audit-link">
                  See report 
                  <div className="audit-link-icon">
                    <img className="img-fluid ms-2" src={audit_link_icon} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      
        




                
        <div id="carouselExampleIndicators" class="carousel slide col-sm-display" data-bs-ride="carousel">
            <div class="carousel-indicators slider-nav-clr">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="p-3">
                  <div className="audit-items">
                    <div className="audit-item-img">
                      <img className="img-fluid" src={audit_item_img_1} />
                    </div>
                    <div className="audit-item-text">
                      Quantstamp’s mission is to secure the decentralized internet, and has protected over $8B in digital asset risk from hackers. More than 170 startups, foundations and enterprises work with Quantstamp to keep their innovative products safe.
                    </div>
                    <a href="#">
                      <div className="audit-link">
                        See report 
                        <div className="audit-link-icon">
                          <img className="img-fluid ms-2" src={audit_link_icon} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="p-3">
                  <div className="audit-items">
                    <div className="audit-item-img">
                      <img className="img-fluid" src={audit_item_img_2} />
                    </div>
                    <div className="audit-item-text">
                      MixBytes is a team of experienced developers providing top-notch blockchain solutions, smart contract security audits and tech advisory
                    </div>
                    <a href="#">
                      <div className="audit-link">
                        See report 
                        <div className="audit-link-icon">
                          <img className="img-fluid ms-2" src={audit_link_icon} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="p-3">
                  <div className="audit-items">
                    <div className="audit-item-img">
                      <img className="img-fluid" src={audit_item_img_3} />
                    </div>
                    <div className="audit-item-text">
                      Sigmaprime has an extensive background in information security, blockchain, and system design. Sigmaprime performs in-depth security assessments for decentralised systems, while also researching and developing core blockchain infrastructure.
                    </div>
                    <a href="#">
                      <div className="audit-link">
                        See report 
                        <div className="audit-link-icon">
                          <img className="img-fluid ms-2" src={audit_link_icon} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                  <div className="audit-items">
                    <div className="audit-item-img">
                      <img className="img-fluid" src={audit_item_img_4} />
                    </div>
                    <div className="audit-item-text">
                      Quantstamp’s mission is to secure the decentralized internet, and has protected over $8B in digital asset risk from hackers. More than 170 startups.
                    </div>
                    <a href="#">
                      <div className="audit-link">
                        See report 
                        <div className="audit-link-icon">
                          <img className="img-fluid ms-2" src={audit_link_icon} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
   
        <div className="betnomi-popup">
          <div className="betnomi-inner-popup">
            <div className="betnomi-detail-block">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 p-0 my-2">
                  <div className="betnomi-inner-block d-flex">
                    <img className="betnomi-logo" src={betnomi} />
                    <div className="d-flex align-items-center border-right w-100">
                      <div className="popup-heading">
                        <p className="mb-2">Name:</p>
                        <p className="m-0">Ticker:</p>
                      </div>
                      <div className="popup-text">
                        <p className="mb-2">Betnomi</p>
                        <p className="m-0">BNI</p>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div className="col-lg-4 col-md-6 p-0 my-2">
                  <div className="betnomi-inner-block d-flex border-top-dashed">
                    <div className="d-flex align-items-center border-right w-100">
                      <div className="popup-heading">
                        <p className="mb-2">Standard:</p>
                        <p className="m-0">Platform:</p>
                      </div>
                      <div className="popup-text">
                        <p className="mb-2">BEP20</p>
                        <p className="m-0">Binance Smart Chain</p>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div className="col-lg-4 col-md-6 p-0 my-2">
                  <div className="betnomi-inner-block d-flex border-top-dashed">
                    <div className="d-flex align-items-center w-100">
                      <div className="popup-heading">
                        <p className="mb-2">Total Supply:</p>
                        <p className="m-0">Circulating Supply:</p>
                      </div>
                      <div className="popup-text">
                        <p className="mb-2">100 million</p>
                        <p className="m-0">100 million</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            <div className="betnomi-popup-address">
              Betnomi (BNI) Official contract address: 0X8806926ab68eb5a7b909ajdh6jfhd6g048574id4j5
            </div>
          </div>
        </div>

      
      </div>
    </div>
    
    <div className="partner-section">
        <Partners />
    </div>

      <div className="footer-section">
        <div className="solid-bottom-border">
          <div className="container">
            <div className="social-imgs-block">
              <a href="#">
                <div className="social-img">
                  <img className="img-fluid" src={social_img_1} />
                </div>
              </a>
              <a href="#">
                <div className="social-img">
                  <img className="img-fluid" src={social_img_2} />
                </div>
              </a>
              <a href="#">
                <div className="social-img">
                  <img className="img-fluid" src={social_img_3} />
                </div>
              </a>
              <a href="#">
                <div className="social-img">
                  <img className="img-fluid" src={social_img_4} />
                </div>
              </a>
              <a href="#">
                <div className="social-img">
                  <img className="img-fluid" src={social_img_5} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-imgs-block">
            <a href="#">
              <div className="footer-img">
                <img className="img-fluid" src={footer_img_1} />
              </div>
            </a>
            <a href="#">
              <div className="footer-img">
                <img className="img-fluid" src={footer_img_2}  />
              </div>
            </a>
          </div>

          <div className="footer-text">
            The Content shared on this website is for information purpose only and, thus, should not be considered as financial advice. Trading/Investing is risky and you should never invest more than you can afford to lose. Cryptocurrencies are risky. Never invest more than you can afford to lose. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other Content on the Site before making any decisions based on such information or other Content.
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
