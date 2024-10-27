import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import usePlayerVideo from "../hooks/usePlayerVideo";

const Player = () => {
  const { videoId, contentType } = useParams();
  usePlayerVideo(videoId, contentType);

  const video = useSelector((store) => store.player?.moviePlayerVideo);
  const videoKey = video?.key;
  const videoUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1`;

  return (
    <div className="h-screen w-screen">
      <div className="absolute">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          className="w-screen h-screen aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="1"
        ></iframe>
      </div>
    </div>
  );
};

export default Player;