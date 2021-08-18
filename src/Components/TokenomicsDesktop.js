import React, { useState } from 'react';
import token_1_icon from "../../src/assets/images/token-1-icon.svg"
import token_arrow_right from "../../src/assets/images/token-arrow-right.svg"
import token_2_icon from "../../src/assets/images/token-2-icon.svg"
import token_img from "../../src/assets/images/token-img.svg"
import token_3_icon from "../../src/assets/images/token-3-icon.svg"
import token_4_icon from "../../src/assets/images/token-4-icon.svg"

const TokenomicsDesktop = (props) => {
    const initialState = {redistribution: true, liquidity: false, dump: false, utility: false, tokenomics: false};
    const [Display, setDisplay] = useState(initialState);

    const showRedistribution = () => {
        const state = {redistribution: true, liquidity: false, dump: false, utility: false, tokenomics: false};
        setDisplay(state);
    }
    const showLiquidity = () => {
        const state = {redistribution: false, liquidity: true, dump: false, utility: false, tokenomics: false};
        setDisplay(state);
    }
    const showDump = () => {
        const state = {redistribution: false, liquidity: false, dump: true, utility: false, tokenomics: false};
        setDisplay(state);
    }
    const showUtility = () => {
        const state = {redistribution: false, liquidity: false, dump: false, utility: true, tokenomics: false};
        setDisplay(state);
    }
    const showTokenomics = () => {
        const state = {redistribution: false, liquidity: false, dump: false, utility: false, tokenomics: true};
        setDisplay(state);
    }

    return (
        <div className="row px-3">
          <div className="col-lg-6 p-0">
            <div className="col-md-none">
              <p>
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="multiCollapseExample1" onClick={showRedistribution}>
                  <div className="token-icon-text">
                    <div className="dropdown-icon"> 
                      <img className="img-fluid" src={token_1_icon} />
                    </div> 
                    <div className="dropdown-text">Redistribution </div>
                  </div>
                  <div className="token-arrow">
                    <img className={`img-fluid ${Display.redistribution ? 'rotate' : ''}`} src={token_arrow_right} />
                  </div>
                </button>

                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="multiCollapseExample2" onClick={showLiquidity}>
                  <div className="token-icon-text">
                    <div className="dropdown-icon"> 
                      <img className="img-fluid" src={token_2_icon} />
                    </div> 
                    <div className="dropdown-text">1% Liquidity Pool </div>
                  </div>
                  <div className="token-arrow">
                    <img className={`img-fluid ${Display.liquidity ? 'rotate' : ''}`} src={token_arrow_right} />
                  </div>
                </button>

                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseEight" onClick={showDump}>
                <div className="token-icon-text">
                  <div className="dropdown-icon"> 
                    <img className="img-fluid" src={token_3_icon} />
                  </div> 
                  <div className="dropdown-text">Anti-Dump Lock & 3% Sell Fee  </div>
                </div>
                <div className="token-arrow">
                  <img className={`img-fluid ${Display.dump ? 'rotate' : ''}`} src={token_arrow_right} />
                </div>
              </button>

              <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseNine" onClick={showUtility}>
                <div className="token-icon-text">
                  <div className="dropdown-icon"> 
                    <img className="img-fluid" src={token_4_icon} />
                  </div> 
                  <div className="dropdown-text">Real Utility </div>
                </div>
                <div className="token-arrow">
                  <img className={`img-fluid ${Display.utility ? 'rotate' : ''}`} src={token_arrow_right} />
                </div>
              </button>

              <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTen" onClick={showTokenomics}>
                <div className="token-icon-text">
                  <div className="dropdown-icon"> 
                    <img className="img-fluid" src={token_4_icon} />
                  </div> 
                  <div className="dropdown-text">Tokenomins</div>
                </div>
                <div className="token-arrow">
                  <img className={`img-fluid ${Display.tokenomics ? 'rotate' : ''}`} src={token_arrow_right} />
                </div>
              </button>

                {/* <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button> */}
              
              </p>

              {/* <div class="row">
                <div class="col">
                  <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <div class="card card-body">
                      Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="collapse multi-collapse" id="multiCollapseExample2">
                    <div class="card card-body">
                      Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </div>
                </div>
              </div> */}

            </div>

          </div>


          <div className="col-lg-6 token-content-block col-md-none">
            <div class={`collapse multi-collapse ${Display.redistribution ? 'show' : ''}`} id="multiCollapseExample1">
              <div className="token-img">
                  <img className="img-fluid" src={token_img} />
              </div>
              <div className="token-content-heading">Redistribution</div>   
              <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                BNB will be distributed to the token holders automatically.</p>
            </div>

            <div class={`collapse multi-collapse ${Display.liquidity ? 'show' : ''}`} id="multiCollapseExample2">
              <div className="token-img">
                  <img className="img-fluid" src={token_img} />
              </div>
              <div className="token-content-heading">1% Liquidity Pool</div>   
              <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                BNB will be distributed to the token holders automatically.</p>
            </div>

            <div class={`collapse multi-collapse ${Display.dump ? 'show' : ''}`} id="multiCollapseExample3">
              <div className="token-img">
                  <img className="img-fluid" src={token_img} />
              </div>
              <div className="token-content-heading">Anti-Dump Lock & 3% Sell Fee  </div>   
              <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                BNB will be distributed to the token holders automatically.</p>
            </div>

            <div class={`collapse multi-collapse ${Display.utility ? 'show' : ''}`} id="multiCollapseExample4">
              <div className="token-img">
                  <img className="img-fluid" src={token_img} />
              </div>
              <div className="token-content-heading">Real Utility </div>   
              <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                BNB will be distributed to the token holders automatically.</p>
            </div>

            <div class={`collapse multi-collapse ${Display.tokenomics ? 'show' : ''}`} id="multiCollapseExample5">
              <div className="token-img">
                  <img className="img-fluid" src={token_img} />
              </div>
              <div className="token-content-heading">Tokenomics</div>   
              <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                BNB will be distributed to the token holders automatically.</p>
            </div>


            {/* <div id="collapseTen" class="accordion-collapse collapse p-3" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
              <div className="token-img">
                  <img className="img-fluid" src={token_img} />
              </div>
              <div className="token-content-heading">Redistribution</div>   
              <p className="token-text">The token will have two redistribution systems: the first is the tax from all transactions (2%) and the second one is the revenue from the casino. The revenue from the casino, the community decides when, how and the amount to be distributed by voting through the DAO using BNI as a governance token. <br/><br/>
                BNB will be distributed to the token holders automatically.</p>
            </div> */}

          </div>
        </div>
    );
}

export default TokenomicsDesktop;
