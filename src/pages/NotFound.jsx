import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404: Not Found</h1>

            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <img
                src="https://img.freepik.com/vector-gratis/ilustracion-concepto-pagina-no-encontrada_114360-1869.jpg?t=st=1727223918~exp=1727227518~hmac=d1bd6ba48bd13de3f4fd0e5a8907b248aac3adfd22d27b8684ceb441d3777021&w=740"
                alt="placeholder"
            />

            <Link to="/">Volver al Home</Link>
        </div>
    );
};

export default NotFound;