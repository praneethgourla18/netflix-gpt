import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";  // Assuming options is correctly defined here
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options);
    const response = await data.json();
    dispatch(addPopularMovies(response.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);  // Added dispatch to dependency array

  return null;  // Custom hook does not return any JSX or value
};

export default usePopularMovies;
