import React from 'react';

const CoinDetailBox = ({
    image,
    name,
    ticker,
    standard,
    platform,
    totalSupply,
    circulatingSupply,
    address
}) => {
    return (
        <div className="betnomi-popup">
            <div className="betnomi-inner-popup">
                <div className="betnomi-detail-block">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 p-0 my-2">
                            <div className="betnomi-inner-block d-flex">
                                <img
                                    className="betnomi-logo"
                                    src={image}
                                    alt=""
                                />
                                <div className="d-flex align-items-center border-right w-100">
                                    <div className="popup-heading">
                                        <p className="mb-2">Name:</p>
                                        <p className="m-0">Ticker:</p>
                                    </div>
                                    <div className="popup-text">
                                        <p className="mb-2">{name}</p>
                                        <p className="m-0">{ticker}</p>
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
                                        <p className="mb-2">{standard}</p>
                                        <p className="m-0">{platform}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 p-0 my-2">
                            <div className="betnomi-inner-block d-flex border-top-dashed">
                                <div className="d-flex align-items-center w-100">
                                    <div className="popup-heading">
                                        <p className="mb-2">Total Supply:</p>
                                        <p className="m-0">
                                            Circulating Supply:
                                        </p>
                                    </div>
                                    <div className="popup-text">
                                        <p className="mb-2">{totalSupply}</p>
                                        <p className="m-0">
                                            {circulatingSupply}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="betnomi-popup-address">
                    {`${name} (${ticker}) Official contract address:
                    ${address}`}
                </div>
            </div>
        </div>
    );
};

export default CoinDetailBox;
