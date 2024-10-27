import { useNavigate } from "react-router-dom";
import { IMG_CDN, MOVIE_CONTENT } from "../utils/constants";

const MovieCard = ({ path, id }) => { // Accept id as a prop
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/player/" + MOVIE_CONTENT + "/" + id); // Use the id prop
    };

    return (
        <div
            className="min-w-[160px] h-[200px] md:min-w-[180px] md:h-[250px] hover:scale-[1.05] hover:shadow-lg transform transition-transform duration-300 ease-in-out mr-4 cursor-pointer"
            onClick={handleClick}
        >
            <img
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
                alt="movieCard"
                src={IMG_CDN + path}
            />
        </div>
    );
};

export default MovieCard;
