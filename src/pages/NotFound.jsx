import { Link } from "react-router-dom";
import Cta from "../Components/Cta/Cta";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Сторінку не знайдено.</p>
            <Link to="/">Повернутися на головну</Link>
            <Cta />
        </div>
    );
};

export default NotFound;