import { useEffect, useState } from "react";
import Videos from "./Videos";
import { API_KEY, CHANNEL_API, YOUTUBE_API } from "../utils/constant";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideo(json.items);
  };

  return (
    <div className="content fixed  top-28 flex flex-wrap overflow-y-scroll h-[calc(100vh-112px)] justify-evenly ">
      {video?.map((info) => (
        <Videos info={info} key={info.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
