import logo from "../../assets/images/logo.svg";


const Header = () => {
    return (
        <>
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
        </>
    );
}

export default Header;