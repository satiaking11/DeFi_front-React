import React from 'react';
import audit_link_icon from '../../src/assets/images/audit-link-icon.svg';
import audit_item_img_1 from '../../src/assets/images/audit-item-img-1.png';
import audit_item_img_2 from '../../src/assets/images/audit-item-img-2.png';
import audit_item_img_3 from '../../src/assets/images/audit-item-img-3.png';
import audit_item_img_4 from '../../src/assets/images/audit-item-img-4.png';

const ReportMobileCarousel = () => {
    return (
        <div
            id="carouselExampleIndicators"
            class="carousel slide col-sm-display"
            data-bs-ride="carousel"
        >
            <div class="carousel-indicators slider-nav-clr">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="p-3">
                        <div className="audit-items">
                            <div className="audit-item-img">
                                <img
                                    className="img-fluid"
                                    src={audit_item_img_1}
                                    alt=""
                                />
                            </div>
                            <div className="audit-item-text">
                                Quantstamp’s mission is to secure the
                                decentralized internet, and has protected over
                                $8B in digital asset risk from hackers. More
                                than 170 startups, foundations and enterprises
                                work with Quantstamp to keep their innovative
                                products safe.
                            </div>
                            <a href="/">
                                <div className="audit-link">
                                    See report
                                    <div className="audit-link-icon">
                                        <img
                                            className="img-fluid ms-2"
                                            src={audit_link_icon}
                                            alt=""
                                        />
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
                                <img
                                    className="img-fluid"
                                    src={audit_item_img_2}
                                    alt=""
                                />
                            </div>
                            <div className="audit-item-text">
                                MixBytes is a team of experienced developers
                                providing top-notch blockchain solutions, smart
                                contract security audits and tech advisory
                            </div>
                            <a href="/">
                                <div className="audit-link">
                                    See report
                                    <div className="audit-link-icon">
                                        <img
                                            className="img-fluid ms-2"
                                            src={audit_link_icon}
                                            alt=""
                                        />
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
                                <img
                                    className="img-fluid"
                                    src={audit_item_img_3}
                                    alt=""
                                />
                            </div>
                            <div className="audit-item-text">
                                Sigmaprime has an extensive background in
                                information security, blockchain, and system
                                design. Sigmaprime performs in-depth security
                                assessments for decentralised systems, while
                                also researching and developing core blockchain
                                infrastructure.
                            </div>
                            <a href="/">
                                <div className="audit-link">
                                    See report
                                    <div className="audit-link-icon">
                                        <img
                                            className="img-fluid ms-2"
                                            src={audit_link_icon}
                                            alt=""
                                        />
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
                                <img
                                    className="img-fluid"
                                    src={audit_item_img_4}
                                    alt=""
                                />
                            </div>
                            <div className="audit-item-text">
                                Quantstamp’s mission is to secure the
                                decentralized internet, and has protected over
                                $8B in digital asset risk from hackers. More
                                than 170 startups.
                            </div>
                            <a href="/">
                                <div className="audit-link">
                                    See report
                                    <div className="audit-link-icon">
                                        <img
                                            className="img-fluid ms-2"
                                            src={audit_link_icon}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ReportMobileCarousel;
