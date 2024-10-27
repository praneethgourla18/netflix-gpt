import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer"
function Browse(){

   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

   const gptClicked = useSelector((store) => store.gpt.gptSearch);
   
  return (
    <div>
       <Header/>
       {
        gptClicked ?
          <GptSearch/>:
         <>
          <MainContainer/>
          <SecondContainer/>
          <Footer/>
         </>
       }  
    </div>
  )
}
export default Browse;