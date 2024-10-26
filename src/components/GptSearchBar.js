import { useRef } from "react";
import client from "../utils/openaiClient";
import { useDispatch} from "react-redux";
import { addGptMovieResults, changeSearchClicked } from "../utils/gptSlice";
import { options } from "../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await response.json();

    return json.results[0];
  };

  const handleSearch = async () => {
    dispatch(changeSearchClicked());
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const result = await client.chat.completions.create({
        messages: [
          { role: "system", content: "You are an AI assistant that helps people find information." },
          { role: "user", content: gptQuery },
        ],
        max_tokens: 800,
        temperature: 0.7,
        top_p: 0.95,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: null,
      });

      const gptMovies = result.choices[0].message.content.split(",").map(movie => movie.trim());
      console.log(gptMovies);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults }));

      console.log(tmdbResults);
    } catch (err) {
      console.error("The sample encountered an error:", err);
    }
  };

  return (
    <div className="pt-40 w-full flex justify-center">
      <div className="relative w-[50%]">
        <input
          ref={searchText}
          type="text"
          placeholder="What do you want to watch today?"
          className="w-full py-4 px-8 bg-black text-white rounded-full focus:outline-[#E50914] pr-12" 
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#E50914] hover:bg-black text-black font-semibold rounded-full p-2" 
          onClick={handleSearch}
        >
          <img width="20" height="20" src="https://img.icons8.com/ios-filled/25/FFFFFF/search--v1.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
