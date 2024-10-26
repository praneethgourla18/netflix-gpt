import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const gptResult = useSelector((store) => store.gpt.gptResult);
  const { movieResults = [], movieNames = [] } = gptResult || {}; // Default values

  if (!movieNames.length) return null; // Check for an empty array

  // Flatten movie results if you need to get all movies
  const allMovies = movieResults.flat(); 

  return (
    <div className="flex flex-col items-center px-4 py-6"> 
      <h1 className="text-2xl font-semibold text-white py-4">Movie Suggestions</h1>
      <div className="flex overflow-x-auto hide-scrollbar w-full px-4">
        <div className="flex justify-center space-x-4 mx-auto" style={{ maxWidth: '1200px' }}> 
          {allMovies.map((movie) => ( 
            <MovieCard key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
