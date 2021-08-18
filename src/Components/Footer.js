import React from 'react';
import social_img_1 from '../../src/assets/images/social-img-1.svg';
import social_img_2 from '../../src/assets/images/social-img-2.svg';
import social_img_3 from '../../src/assets/images/social-img-3.svg';
import social_img_4 from '../../src/assets/images/social-img-4.svg';
import social_img_5 from '../../src/assets/images/social-img-5.svg';
import footer_img_1 from '../../src/assets/images/footer-img-1.svg';
import footer_img_2 from '../../src/assets/images/footer-img-2.svg';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="solid-bottom-border">
                <div className="container">
                    <div className="social-imgs-block">
                        <a href="/">
                            <div className="social-img">
                                <img
                                    className="img-fluid"
                                    src={social_img_1}
                                    alt="Telegram"
                                />
                            </div>
                        </a>

                        <a href="/">
                            <div className="social-img">
                                <img
                                    className="img-fluid"
                                    src={social_img_2}
                                    alt="Reddit"
                                />
                            </div>
                        </a>

                        <a href="/">
                            <div className="social-img">
                                <img
                                    className="img-fluid"
                                    src={social_img_3}
                                    alt="Medium"
                                />
                            </div>
                        </a>

                        <a href="/">
                            <div className="social-img">
                                <img
                                    className="img-fluid"
                                    src={social_img_4}
                                    alt="Discord"
                                />
                            </div>
                        </a>

                        <a href="/">
                            <div className="social-img">
                                <img
                                    className="img-fluid"
                                    src={social_img_5}
                                    alt="Twitter"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-imgs-block">
                    <a href="/">
                        <div className="footer-img">
                            <img
                                className="img-fluid"
                                src={footer_img_1}
                                alt="Betnomi"
                            />
                        </div>
                    </a>

                    <a href="/">
                        <div className="footer-img">
                            <img
                                className="img-fluid"
                                src={footer_img_2}
                                alt="Certified Infrastructure"
                            />
                        </div>
                    </a>
                </div>

                <div className="footer-text">
                    The Content shared on this website is for information
                    purpose only and, thus, should not be considered as
                    financial advice. Trading/Investing is risky and you should
                    never invest more than you can afford to lose.
                    Cryptocurrencies are risky. Never invest more than you can
                    afford to lose. You alone assume the sole responsibility of
                    evaluating the merits and risks associated with the use of
                    any information or other Content on the Site before making
                    any decisions based on such information or other Content.
                </div>
            </div>
        </div>
    );
};

export default Footer;
