import { useSelector } from "react-redux";
import useGetVideo from "../hooks/useGetVide";

const VideoContainer = ({Id}) => {

  useGetVideo({Id});
  const trailerVideo=useSelector(store=>store.movies?.bgVideo);
  
 
   return (
     <div className="w-screen aspect-video">
       <iframe 
         className="w-screen aspect-video"
         src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?autoplay=1&mute=1&controls=0&showinfo=0&amp"}          title="YouTube video player" 
         referrerPolicy="strict-origin-when-cross-origin">
       </iframe>
    </div>
 )
}

export default VideoContainer;