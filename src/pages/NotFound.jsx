import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Сторінку не знайдено.</p>
            <Link to="/">Повернутися на головну</Link>
        </div>
    );
};

export default NotFound;