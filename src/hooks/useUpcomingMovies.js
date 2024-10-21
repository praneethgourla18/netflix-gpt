import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";  // Assuming options is correctly defined here
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
    const response = await data.json();
    dispatch(addUpcomingMovies(response.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);  // Added dispatch to dependency array

  return null;  // Custom hook does not return any JSX or value
};

export default useUpcomingMovies;
