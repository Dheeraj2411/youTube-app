import { Fragment, useCallback, useEffect, useState } from "react";
import VideoCard, { SuggestionVideo } from "./VideoCard";
import { API_KEY, YOUTUBE_API } from "../utils/constant";

import { useDispatch, useSelector } from "react-redux";
import { watchVideoInfo } from "../utils/infoSlice";
import { setVideos } from "../utils/videoSlice";

const VideoContainer = ({ isRecommendation }) => {
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();

  const videoResult = useSelector((store) => store.video.videos);
  // console.log(data);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      console.log(json);
      json?.items?.forEach((data) => channelThumbnail(data));
      // items?.forEach((data) => channelThumbnail(data));
    } catch (error) {
      console.log(error);
    }
  };

  const channelThumbnail = async (data) => {
    // console.log(data);
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

  useEffect(() => {
    dispatch(setVideos(video));
  }, [video]);

  const handleClick = useCallback(
    (info) => {
      dispatch(watchVideoInfo({ [info.id]: info }));
    },
    [dispatch]
  );

  return (
    <>
      <div
        className={` ${
          isRecommendation
            ? "flex flex-wrap  items-center w-full"
            : "fixed content  overflow-x-hidden top-28 flex flex-wrap overflow-y-scroll sm:h-[calc(100%-120px)] ms:h-[calc(100%-180px)]  "
        } `}
      >
        {videoResult?.map((info) => {
          return (
            <Fragment key={info.id}>
              {isRecommendation ? (
                <div className="flex w-full">
                  <SuggestionVideo
                    onClick={() => handleClick(info)}
                    info={info}
                    isRecommendation={isRecommendation}
                  />
                </div>
              ) : (
                <div
                  onClick={() => handleClick(info)}
                  className="flex flex-grow "
                >
                  <VideoCard info={info} />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default VideoContainer;
