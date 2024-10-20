import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";

const MainContainer = () =>{
   const movies = useSelector((state) => state.movies?.nowPlayingMovies);

   if(!movies)return;
   const mainMovie=movies[0];
  const {original_title,overview,id}=mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoContainer Id={id}/>
    </div>
  )
}
export default MainContainer;