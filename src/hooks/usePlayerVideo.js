import { useDispatch } from "react-redux";
import { options, MOVIE_CONTENT } from "../utils/constants";
import { useEffect } from "react";
import { addMovieVideo } from "../utils/playerSlice";

const usePlayerVideo = (videoId, contentType) => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const type = contentType === MOVIE_CONTENT ? "movie" : "tv";
    const url = `https://api.themoviedb.org/3/${type}/${videoId}/videos?language=en-US`;

    const data = await fetch(url, options);
    const json = await data.json();
    const filteredData = json.results?.filter(
      (video) => video.type === "Trailer"
    );

    if (!filteredData) {
      console.log("Not able to feth movie data for videoId: ", videoId);
      return;
    }

    const video = filteredData?.length ? filteredData[0] : json.results[0];
    dispatch(addMovieVideo({ ...video, video_id: videoId }));
  };

  useEffect(() => {
    getVideos();
  }, []);
};

export default usePlayerVideo;