import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addVideo } from "../utils/movieSlice";

const useGetVideo = ({Id}) =>{
  const dispatch = useDispatch(); 
   const getVideo = async (Id) => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${Id}/videos`, options);
    const response = await data.json();
    const allVideo = response.results.filter(video => video?.type === "Trailer");

    const trailer = allVideo.length ? allVideo[0] : response.results[0];
    dispatch(addVideo(trailer))
  };

  useEffect(() => {
    getVideo(Id);
  }, []);
}
export default useGetVideo;