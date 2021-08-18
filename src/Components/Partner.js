import React, { useState } from 'react';
import partner_img_1 from '../../src/assets/images/partner-img-1.svg';
import partner_img_2 from '../../src/assets/images/partner-img-2.svg';
import partner_img_3 from '../../src/assets/images/partner-img-3.svg';
import partner_img_4 from '../../src/assets/images/partner-img-4.png';
import partner_img_5 from '../../src/assets/images/partner-img-5.png';
import partner_img_6 from '../../src/assets/images/partner-img-6.png';
import partner_img_7 from '../../src/assets/images/partner-img-7.png';
import partner_img_8 from '../../src/assets/images/partner-img-8.svg';
import partner_img_9 from '../../src/assets/images/partner-img-9.svg';

const Partners = (props) => {
    const [ShowMore, setShowMore] = useState(false);

    const showAll = () => {
        setShowMore(true);
    };
    const showLess = () => {
        setShowMore(false);
    };

    return (
        <div className="container">
            <div className="partner-heading">
                Our Partners, Integrations and Markets
            </div>
            <div className="col-md-none">
                <div className="partner-imgs-block">
                    <div className="partner-img">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_1}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_2}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_3}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_4}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_5}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_6}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_7}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_8}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_9}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className={`col-md-display ${ShowMore ? 'd-none' : ''}`}>
                <div className="partner-imgs-block row">
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_1}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_3}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_2}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <button onClick={showAll}>Show more</button>
                    </div>
                </div>
            </div>

            <div className={`col-md-display ${ShowMore ? '' : 'd-none'}`}>
                <div className="partner-imgs-block row">
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_1}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_3}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_2}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_4}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_5}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_6}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_7}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_8}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="/">
                            <img
                                className="img-fluid"
                                src={partner_img_9}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <button onClick={showLess}>Show less</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
