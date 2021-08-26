import React from 'react';
import logo from '../../src/assets/images/logo.svg';
import metamask from '../../src/assets/images/metamask.svg';
import dashboard from '../../src/assets/images/dashboard.svg';
import Button from '../Atoms/Button';

const Header = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-xl navbar-dark ">
                <div class="container-fluid p-0">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <button
                        class="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse pt-1"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="#productSection"
                                >
                                    Ecosystem
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#daoSection">
                                    DAO
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#tokenSection">
                                    Token
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    target="_blank"
                                    class="nav-link"
                                    href="/"
                                    rel="noreferrer"
                                >
                                    Buy $BNI
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    target="_blank"
                                    class="nav-link"
                                    href="/"
                                    rel="noreferrer"
                                >
                                    Play
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    target="_blank"
                                    class="nav-link"
                                    href="/"
                                    rel="noreferrer"
                                >
                                    Docs
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    target="_blank"
                                    class="nav-link"
                                    href="/"
                                    rel="noreferrer"
                                >
                                    White Paper
                                </a>
                            </li>
                        </ul>

                        <div class="dropdown dashboard-dropdown ">
                            <div
                                className="dropdown-toggle text-center  d-sm-flex align-items-center "
                                type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <form>
                                    <Button
                                        link="/"
                                        image={metamask}
                                        text="Connect Metamask"
                                        classes="btn-md-full"
                                    />
                                </form>
                            </div>
                            <div
                                className="dropdown-menu dashboard-dropdown-menu dropdown-menu-white  p-2  mt-3 "
                                aria-labelledby="dropdownMenuButton2"
                            >
                                <div className="d-flex flex-column justify-content-center m-auto">
                                    <div class="dask-board-deco"></div>
                                    <img
                                        className="dasboard-img m-auto mt-4"
                                        src={dashboard}
                                        alt="speed meter svg"
                                    />
                                    <p className="text-center m-0 mt-4 dropdown-text-2">
                                        Dashboard and Staking coming soon.
                                    </p>
                                    <button className="btn btn-green text-white mt-4 mb-3">
                                        Good, thanks!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
