import React from 'react';
import ProductCard from '../Atoms/ProductCard';
import product_one from '../../src/assets/images/products/product-one.svg';
import product_two from '../../src/assets/images/products/product-two.svg';
import product_three from '../../src/assets/images/products/product-three.svg';
import product_four from '../../src/assets/images/products/product-four.svg';
import product_five from '../../src/assets/images/products/product-five.svg';
import product_six from '../../src/assets/images/products/product-six.svg';
import product_seven from '../../src/assets/images/products/product-seven.svg';

const ProductMobileCarousel = () => {
    return (
        <div
            id="carouselExampleIndicators1"
            className="carousel slide col-sm-display"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
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
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="6"
                    aria-label="Slide 7"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="7"
                    aria-label="Slide 8"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="p-3 products">
                        <ProductCard
                            image={product_one}
                            heading="Virtual sports"
                            text="Expedita, ullam et consequatur a aliquam illum dolor illo ea
            eos cupiditate."
                        />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="p-3 products">
                        <ProductCard
                            image={product_two}
                            heading="E-sports"
                            text="Expedita, ullam et consequatur a aliquam illum dolor illo ea
            eos cupiditate."
                        />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="p-3 products">
                        <ProductCard
                            image={product_three}
                            heading="Live Casino"
                            text="Expedita, ullam et consequatur a aliquam illum dolor illo ea
            eos cupiditate."
                        />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="p-3 products">
                        <ProductCard
                            image={product_four}
                            heading="Poker"
                            text="Expedita, ullam et consequatur a aliquam illum dolor illo ea
            eos cupiditate."
                        />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="p-3 products">
                        <ProductCard
                            image={product_five}
                            heading="Skill Games"
                            text="Expedita, ullam et consequatur a aliquam illum dolor illo ea
            eos cupiditate."
                        />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="p-3 products">
                        <ProductCard
                            image={product_six}
                            heading="Sportsbook"
                            text="Expedita, ullam et consequatur a aliquam illum dolor illo ea
            eos cupiditate."
                        />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="p-3 products">
                        <ProductCard
                            image={product_seven}
                            heading="Live Video Streaming"
                            text="Expedita, ullam et consequatur a aliquam illum dolor illo ea
            eos cupiditate."
                        />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="align-items-center justify-content-center d-flex p-0 products last-product-block">
                        <div className="game-quantity-block">
                            Casino With <br />{' '}
                            <span className="game-quantity">7500+</span> Games
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ProductMobileCarousel;
