import { useEffect, useState } from "react";
import Videos from "./Videos";
import { API_KEY, CHANNEL_API, YOUTUBE_API } from "../utils/constant";
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

  console.log(video);

  return (
    <div className="content fixed  top-28 flex flex-wrap overflow-y-scroll h-[calc(100vh-112px)] justify-evenly ">
      {video?.map((info) => (
        <Videos info={info} key={info.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
