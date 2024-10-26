import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black"> 
      <div>
        <GptSearchBar />
        <div className="">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
