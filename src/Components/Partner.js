import React, { useState } from 'react';
import partner_img_1 from "../../src/assets/images/partner-img-1.svg"
import partner_img_2 from "../../src/assets/images/partner-img-2.svg"
import partner_img_3 from "../../src/assets/images/partner-img-3.svg"
import partner_img_4 from "../../src/assets/images/partner-img-4.png"
import partner_img_5 from "../../src/assets/images/partner-img-5.png"
import partner_img_6 from "../../src/assets/images/partner-img-6.png"
import partner_img_7 from "../../src/assets/images/partner-img-7.png"
import partner_img_8 from "../../src/assets/images/partner-img-8.svg"
import partner_img_9 from "../../src/assets/images/partner-img-9.svg"

const Partners = (props) => {
    const [ShowMore, setShowMore] = useState(false);

    const showAll = () => {
        setShowMore(true);
    }
    const showLess = () => {
        setShowMore(false);
    }

    return (
        <div className="container">
            
            <div className={`partner-heading ${ShowMore ? '' : 'mt-5'}`}>Our Partners, Integrations and Markets</div>
            <div className="col-md-none">
                <div className="partner-imgs-block">
                    <div className="partner-img">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_1} />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_2} />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_3} />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_4} />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_5} />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_6} />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_7} />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_8} />
                        </a>
                    </div>
                    <div className="partner-img">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_9} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={`col-md-display ${ShowMore ? 'd-none' : ''}`}>
                <div className="partner-imgs-block row">
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_1} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_3} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_2} />
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
                        <a href="#">
                        <img className="img-fluid" src={partner_img_1} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_3} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_2} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_4} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_5} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_6} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_7} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_8} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <a href="#">
                        <img className="img-fluid" src={partner_img_9} />
                        </a>
                    </div>
                    <div className="partner-img-cell col-12">
                        <button onClick={showLess}>Show less</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
};

export default Partners;