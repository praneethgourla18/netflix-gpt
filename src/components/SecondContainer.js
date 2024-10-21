import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () =>{
  const movies=useSelector(store=>store?.movies)
  return (
  
      <div className="bg-black" >
        <div className="-mt-64 relative z-20">
          <MovieList title={"Now Playing"} data={movies?.nowPlayingMovies}/>
          <MovieList title={"Popular"} data={movies?.popularMovies}/>
          <MovieList title={"Top Rated"} data={movies?.topRatedMovies}/>
          <MovieList title={"Upcoming"} data={movies?.upComingMovies}/>
          </div>
      </div>
   
  )
}
export default SecondContainer;