import React from 'react';
import token_1_icon from '../../src/assets/images/token-1-icon.svg';
import token_2_icon from '../../src/assets/images/token-2-icon.svg';
import token_3_icon from '../../src/assets/images/token-3-icon.svg';
import token_4_icon from '../../src/assets/images/token-4-icon.svg';
import token_5_icon from '../../src/assets/images/token-5-icon.svg';
import token_arrow_right from '../../src/assets/images/token-arrow-right.svg';

const TokenomicsMobile = () => {
    return (
        <div className="col-md-display ">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item border-0">
                    <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        <div className="token-icon-text">
                            <div className="dropdown-icon">
                                <img
                                    className="img-fluid"
                                    src={token_1_icon}
                                    alt=""
                                />
                            </div>
                            <div className="dropdown-text">Redistribution </div>
                        </div>
                        <div className="token-arrow">
                            <img
                                className="img-fluid"
                                src={token_arrow_right}
                                alt=""
                            />
                        </div>
                    </button>

                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show p-3"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <p className="token-text">
                            The token will have two redistribution systems: the
                            first is the tax from all transactions (2%) and the
                            second one is the revenue from the casino. The
                            revenue from the casino, the community decides when,
                            how and the amount to be distributed by voting
                            through the DAO using BNI as a governance token.{' '}
                            <br />
                            <br />
                            BNB will be distributed to the token holders
                            automatically.
                        </p>
                    </div>
                </div>

                <div class="accordion-item border-0">
                    <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        <div className="token-icon-text">
                            <div className="dropdown-icon">
                                <img
                                    className="img-fluid"
                                    src={token_2_icon}
                                    alt=""
                                />
                            </div>
                            <div className="dropdown-text">
                                1% Liquidity Pool{' '}
                            </div>
                        </div>
                        <div className="token-arrow">
                            <img
                                className="img-fluid"
                                src={token_arrow_right}
                                alt=""
                            />
                        </div>
                    </button>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse p-3"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <p className="token-text">
                            The token will have two redistribution systems: the
                            first is the tax from all transactions (2%) and the
                            second one is the revenue from the casino. The
                            revenue from the casino, the community decides when,
                            how and the amount to be distributed by voting
                            through the DAO using BNI as a governance token.{' '}
                            <br />
                            <br />
                            BNB will be distributed to the token holders
                            automatically.
                        </p>
                    </div>
                </div>
                <div class="accordion-item border-0">
                    <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        <div className="token-icon-text">
                            <div className="dropdown-icon">
                                <img
                                    className="img-fluid"
                                    src={token_3_icon}
                                    alt=""
                                />
                            </div>
                            <div className="dropdown-text">
                                Anti-Dump Lock & 3% Sell Fee{' '}
                            </div>
                        </div>
                        <div className="token-arrow">
                            <img
                                className="img-fluid"
                                src={token_arrow_right}
                                alt=""
                            />
                        </div>
                    </button>
                    <div
                        id="collapseThree"
                        class="accordion-collapse collapse p-3"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <p className="token-text">
                            The token will have two redistribution systems: the
                            first is the tax from all transactions (2%) and the
                            second one is the revenue from the casino. The
                            revenue from the casino, the community decides when,
                            how and the amount to be distributed by voting
                            through the DAO using BNI as a governance token.{' '}
                            <br />
                            <br />
                            BNB will be distributed to the token holders
                            automatically.
                        </p>
                    </div>
                </div>
                <div class="accordion-item border-0">
                    <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                        <div className="token-icon-text">
                            <div className="dropdown-icon">
                                <img
                                    className="img-fluid"
                                    src={token_4_icon}
                                    alt=""
                                />
                            </div>
                            <div className="dropdown-text">Real Utility </div>
                        </div>
                        <div className="token-arrow">
                            <img
                                className="img-fluid"
                                src={token_arrow_right}
                                alt=""
                            />
                        </div>
                    </button>
                    <div
                        id="collapseFour"
                        class="accordion-collapse collapse p-3"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                    >
                        <p className="token-text">
                            The token will have two redistribution systems: the
                            first is the tax from all transactions (2%) and the
                            second one is the revenue from the casino. The
                            revenue from the casino, the community decides when,
                            how and the amount to be distributed by voting
                            through the DAO using BNI as a governance token.{' '}
                            <br />
                            <br />
                            BNB will be distributed to the token holders
                            automatically.
                        </p>
                    </div>
                </div>
                <div class="accordion-item border-0">
                    <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                    >
                        <div className="token-icon-text">
                            <div className="dropdown-icon">
                                <img
                                    className="img-fluid"
                                    src={token_5_icon}
                                    alt=""
                                />
                            </div>
                            <div className="dropdown-text">Tokenomins </div>
                        </div>
                        <div className="token-arrow">
                            <img
                                className="img-fluid"
                                src={token_arrow_right}
                                alt=""
                            />
                        </div>
                    </button>
                    <div
                        id="collapseFive"
                        class="accordion-collapse collapse p-3"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                    >
                        <p className="token-text">
                            The token will have two redistribution systems: the
                            first is the tax from all transactions (2%) and the
                            second one is the revenue from the casino. The
                            revenue from the casino, the community decides when,
                            how and the amount to be distributed by voting
                            through the DAO using BNI as a governance token.{' '}
                            <br />
                            <br />
                            BNB will be distributed to the token holders
                            automatically.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenomicsMobile;
