import React from 'react';

const DropdownArea = ({ display, image, heading, text }) => {
    return (
        <div class={`collapse multi-collapse ${display ? 'show' : ''}`}>
            <div className="token-img">
                <img className="img-fluid" src={image} alt="" />
            </div>
            <div className="token-content-heading">{heading}</div>
            <p className="token-text">{text}</p>
        </div>
    );
};

export default DropdownArea;
