import React, { useState } from 'react';

const Button = ({ link, image, text, classes, imgclass }) => {
    const [ShowMore, setShowMore] = useState(false);

    const showAll = () => {
        setShowMore(true);
    };
    const showLess = () => {
        setShowMore(false);
    };

    return (
        <a href={link}>
            <button
                className={`btn betnomi-btn ${classes ? classes : ''}`}
                type="submit"
            >
                <img
                    className={`me-2 ${imgclass ? imgclass : ''}`}
                    src={image}
                    alt="MetaMask"
                />
                {text}
            </button>
        </a>
    );
};

export default Button;
