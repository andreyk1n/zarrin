import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <>
            <div className="error">
                <div className="error__container">
                    <h1 className="error__title">404</h1>
                    <p className="error__text">Sorry!<br />
                    The link is broken, try to refresh or go to home</p>
                    <NavLink to="/" className="error__button">Go To Home</NavLink>
                </div>
            </div>
        </>
    );
}
 
export default PageNotFound;