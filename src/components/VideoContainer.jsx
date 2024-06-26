import { useEffect, useState } from "react";
import Videos from "./Videos";
import { API_KEY, YOUTUBE_API } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { watchVideoInfo } from "../utils/infoSlice";

// import useVideoDetail from "../utils/useVideoDetail";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();

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
  const handleClick = (info) => {
    dispatch(watchVideoInfo({ [info.id]: info }));
  };
  return (
    <div className="content fixed  overflow-x-hidden top-28 flex flex-wrap overflow-y-scroll sm:h-[calc(100%-120px)] ms:h-[calc(100%-180px)]   ">
      <>
        {/* {video[0] && <AdFunction info={video[0]} />} */}
        {video?.map((info) => (
          <Link
            className="flex flex-grow "
            to={"/watch?v=" + info.id}
            key={info.id}
            onClick={() => handleClick(info)}
          >
            <Videos info={info} />
          </Link>
        ))}
      </>
    </div>
  );
};

export default VideoContainer;
