  import { useEffect } from "react";
  import { useDispatch } from "react-redux";
  import { options } from "../utils/constants";  // Assuming options is correctly defined here
  import { addNowPlayingMovies } from "../utils/movieSlice";

  const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlaying = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
      const response = await data.json();
      dispatch(addNowPlayingMovies(response.results));
    };

    useEffect(() => {
      getNowPlaying();
    }, []);  // Added dispatch to dependency array

    return null;  // Custom hook does not return any JSX or value
  };

  export default useNowPlayingMovies;
