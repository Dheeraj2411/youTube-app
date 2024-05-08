import { useEffect, useState } from "react";
import Videos from "./Videos";
import { API_KEY, CHANNEL_API, YOUTUBE_API } from "../utils/constant";
import { Link } from "react-router-dom";
// import useVideoDetail from "../utils/useVideoDetail";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();

      json?.items?.forEach((data) => channelThumbnail(data));
    } catch (error) {
      console.log(error);
    }
  };

  const channelThumbnail = async (data) => {
    try {
      // live Data
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${data.snippet.channelId}&key=${API_KEY}`
      );
      const videoData = await response.json();
      const thumbNails = videoData.items[0].snippet.thumbnails;
      const newData = { ...data, thumbNails };
      setVideo((prevState) => [...prevState, newData]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content fixed  overflow-x-hidden top-28 flex flex-wrap overflow-y-scroll sm:h-[calc(100%-120px)] ms:h-[calc(100%-180px)] justify-evenly ">
      {video?.map((info) => (
        <Link to={"/watch?v=" + info.id} key={info.id}>
          <Videos info={info} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
