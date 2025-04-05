import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <a href="/zarrin" className="footer__logo">
                        <img src={logo} alt="Footer logo" />
                    </a>

                    <nav className="footer__nav">
                        <NavLink to="/zarrin" className="footer__link">Home</NavLink>
                        <NavLink to="/blog" className="footer__link">Blog</NavLink>
                        <NavLink to="/about" className="footer__link">About</NavLink>
                        <NavLink to="/contacts" className="footer__link">Contact us</NavLink>
                    </nav>

                    <div className="footer__copyright">
                        Copyright Ideapeel Inc © 2023. All Right Reserved
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;