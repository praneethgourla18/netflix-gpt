import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";  // Assuming options is correctly defined here
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
    const response = await data.json();
    dispatch(addTopRatedMovies(response.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);  // Added dispatch to dependency array

  return null;  // Custom hook does not return any JSX or value
};

export default useTopRatedMovies;
