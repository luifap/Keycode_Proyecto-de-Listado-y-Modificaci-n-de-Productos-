import { Link } from "react-router-dom";
import '../../styles/styles.css';

const NotFound = () => {
    return (
        <div className="not-found">

            <h1>404: Not Found</h1>

            <Link to="/">

                <img
                    src="https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788955.jpg?semt=ais_hybrid"
                    alt="placeholder"
                />
            </Link>

        </div>
    );
};

export default NotFound;