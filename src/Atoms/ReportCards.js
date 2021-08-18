import React from 'react';
import audit_link_icon from '../../src/assets/images/audit-link-icon.svg';

const ReportCard = ({ image, text }) => {
    return (
        <div className="audit-items">
            <div className="audit-item-img">
                <img className="img-fluid" src={image} alt="" />
            </div>
            <div className="audit-item-text">{text}</div>
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
    );
};

export default ReportCard;
