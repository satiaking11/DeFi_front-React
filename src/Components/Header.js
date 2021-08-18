import React from 'react';
import logo from '../../src/assets/images/logo.svg';
import metamask from '../../src/assets/images/metamask.svg';
import Button from '../Atoms/Button';

const Header = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-xl navbar-dark">
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
                                    href="/"
                                >
                                    Ecosystem
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    DAO
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    Token
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    Buy $BNI
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    Play
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    Docs
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    White Paper
                                </a>
                            </li>
                        </ul>
                        <form class="text-center">
                            <Button
                                link="/"
                                image={metamask}
                                text="Connect Metamask"
                                classes="btn-md-full"
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
