
import React, { useEffect } from 'react';
import logo from "../../assets/images/logo.svg"; 
import "./Header.css";  
import header from "../../utils/header.js";  

const Header = () => {
    useEffect(() => {
        header();
    }, []);

    return (
        <header className="header">
            <div className="header__container">
                <a href="index.html" className="header__logo">
                    <img src={logo} alt="Header logo" />
                </a>
                <nav className="header__nav">

                </nav>
                <div className="header__burger">
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
