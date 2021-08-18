import React from 'react';

const ProductCard = ({ image, heading, text }) => {
    return (
        <div className="product-inner-box">
            <img className="product-img" src={image} alt="" />
            <div className="pb-3 px-3 product-neg-margin">
                <h4 className="product-heading">{heading}</h4>
                <p className="product-text">{text}</p>
            </div>
        </div>
    );
};

export default ProductCard;
