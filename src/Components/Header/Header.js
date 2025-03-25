import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const navRef = useRef(null);
    const burgerRef = useRef(null);

    const toggleMenu = () => {
        setIsActive((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
                setIsActive(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <header className="header">
            <div className="header__container">
                <a href="index.html" className="header__logo">
                    <img src={logo} alt="Header logo" />
                </a>
                <div
                    ref={burgerRef}
                    className={`header__burger ${isActive ? "active" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu();
                    }}
                >
                    <span></span>
                </div>
                <nav
                    ref={navRef}
                    className={`header__nav ${isActive ? "active" : ""}`}
                >
                    <a className="header__link" href="/blog">Blog</a>
                    <a className="header__link" href="/about">About</a>
                    <a className="header__search" href="/search">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.864 2.74285C20.7917 6.46981 21.0348 12.6476 17.4121 16.6716L21.9172 21.1619C22.1157 21.3673 22.1128 21.6939 21.9108 21.8959C21.7089 22.0979 21.3823 22.1007 21.1768 21.9023L16.6716 17.4121C12.6476 21.0348 6.46981 20.7917 2.74285 16.864C-0.984114 12.9363 -0.903063 6.75424 2.92559 2.92559C6.75424 -0.903063 12.9363 -0.984114 16.864 2.74285ZM1.125 10.028C1.125 14.9444 5.11048 18.9299 10.0268 18.9299C14.9408 18.9241 18.9229 14.942 18.9286 10.028C18.9286 5.1117 14.9432 1.12622 10.0268 1.12622C5.11048 1.12622 1.125 5.1117 1.125 10.028Z"
                                fill="#333333"
                            />
                        </svg>

                    </a>
                    <button className="header__button">Contact us</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
