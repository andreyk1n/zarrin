import logo from "../../assets/images/logo.svg";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <a href="/" className="footer__logo">
                        <img src={logo} alt="Footer logo" />
                    </a>

                    <nav className="footer__nav">
                        <a href="/" className="footer__link">Home</a>
                        <a href="/" className="footer__link">Blog</a>
                        <a href="/" className="footer__link">About</a>
                        <a href="/" className="footer__link">Contact us</a>
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