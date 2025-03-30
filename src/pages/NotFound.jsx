import { Link } from "react-router-dom";
import Cta from "../Components/Cta/Cta";
import PageNotFound from "../Components/PageNotFound/PageNotFound";

const NotFound = () => {
    return (
        <div className="not-found">
            <PageNotFound />
            <Cta />
        </div>
    );
};

export default NotFound;