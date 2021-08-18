import React from 'react';
import token_arrow_right from '../../src/assets/images/token-arrow-right.svg';
import token_arrow_right_green from '../../src/assets/images/token-arrow-right-green.svg';

const DropdownButton = ({ image, heading, display, onPress }) => {
    return (
        <button
            class="btn dropdown-toggle mt-0"
            type="button"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
            onClick={onPress}
        >
            <div className="token-icon-text">
                <div className="dropdown-icon">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="dropdown-text">{heading}</div>
            </div>
            <div className="token-arrow">
                <img
                    className={`img-fluid ${display ? 'rotate' : ''}`}
                    src={display ? token_arrow_right_green : token_arrow_right}
                    alt=""
                />
            </div>
        </button>
    );
};

export default DropdownButton;
