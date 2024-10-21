import { useSelector } from "react-redux";
import useGetVideo from "../hooks/useGetVide";

const VideoContainer = ({ Id }) => {
  useGetVideo({ Id });
  const trailerVideo = useSelector((store) => store.movies?.bgVideo);

  return (
    <div className="w-screen">
      {trailerVideo?.key ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&fs=1&playsinline=1`}
          title="YouTube video player"
          allow="autoplay; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoContainer;
