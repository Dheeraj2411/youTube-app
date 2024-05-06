import { useEffect, useState } from "react";
import Videos from "./Videos";
import { API_KEY, CHANNEL_API, YOUTUBE_API } from "../utils/constant";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideo();
    // channelThumbnail();
  }, []);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // json.items.forEach((data) => {
    // setVideo(data);
    // }
    // );
    setVideo(json.items);
  };
  // console.log(video?.snippet?.channelId);
  // if (video === undefined) {
  //   return null;
  // }
  // const channelThumbnail = async () => {
  //   const data = await fetch(
  //     CHANNEL_API + video?.snippet?.channelId + "&key=" + API_KEY
  //   );
  //   const json = await data?.json();
  //   console.log(json?.items);
  //   // setVideo([...setVideo, json?.items]);
  // };
  // console.log(video);
  return (
    <div className="content relative top-14 flex flex-wrap overflow-y-auto h-[100vh] justify-evenly">
      {video.map((info) => (
        <Videos info={info} key={info.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
