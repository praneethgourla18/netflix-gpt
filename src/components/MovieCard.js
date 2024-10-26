import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ path }) => {
    return (
        <div className="min-w-[180px] h-[250px] hover:scale-[1.05]  hover:shadow-lg transform transition-transform duration-300 ease-in-out  mr-4 cursor-pointer"> 
            <img className="w-full h-full object-cover transition-opacity duration-300 ease-in-out 
                hover:opacity-80" alt="movieCard" src={IMG_CDN + path} />
        </div>
    );
};

export default MovieCard;