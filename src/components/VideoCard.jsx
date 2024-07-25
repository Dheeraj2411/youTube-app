import React from "react";
import Liked from "../assets/like.svg";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics, thumbNails } = info;
  const { title, thumbnails, channelTitle } = snippet;
  console.log(thumbnails);

  return (
    <div className=" flex-grow w-full max-w-[700px] sm:w-80  min-w-[300px] flex flex-col  justify-center sm:my-4 sm:mx-1">
      <Link
        to={"/watch?v=" + info.id}
        className="h-[calc(100%-108px)] w-full  rounded-xl  bg-slate-200"
      >
        <img
          src={
            thumbNails
              ? thumbnails?.standard?.url ||
                thumbnails?.high?.url ||
                thumbnails?.medium?.url ||
                thumbnails?.default?.url
              : thumbnails?.medium?.url || thumbnails?.default?.url
          }
          alt="thumbnail img"
          className="h-full w-full  rounded-xl object-cover aspect-video"
        />
      </Link>
      <div className=" h-[5.5rem] my-2.5 flex mr-2">
        {thumbNails ? (
          <img
            src={thumbNails?.default?.url}
            alt="channel icon"
            className="w-10 h-10 rounded-full object-cover mr-2 "
          />
        ) : (
          ""
        )}

        <div className="  ms:pl-2 mx-3">
          <h4 className=" max-h-12 overflow-hidden line-clamp-2 leading-5 text-ellipsis">
            {title}
          </h4>
          <p className="text-base my-[1px] mx-0 text-[#979797] ">
            {channelTitle}
          </p>
          {statistics ? (
            <p className="flex ">
              <img src={Liked} alt="" className=" h-4 w-4  mr-1 my-auto" />
              <span className="text-[#979797]">
                {statistics.likeCount < 1000000
                  ? (statistics?.likeCount / 1000).toFixed() + "K "
                  : (statistics?.likeCount / 100000).toFixed(1) + "M "}
              </span>
              <span className="text-[#979797] ml-4">
                {statistics.viewCount < 1000000
                  ? (statistics?.viewCount / 1000).toFixed() + "K "
                  : (statistics?.viewCount / 1000000).toFixed(1) + "M "}
                views
              </span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export const SuggestionVideo = ({ info, isRecommendation }) => {
  const { snippet, statistics, thumbNails } = info;
  const { title, thumbnails, channelTitle } = snippet;
  // console.log(thumbNails);
  return (
    <div className=" flex w-full h-full  ">
      <div className=" w-full md:max-w-44 rounded-lg ml-1 my-2">
        <Link to={"/watch?v=" + info.id} key={info.id}>
          <img
            src={thumbnails?.high.url || thumbnails?.medium.url}
            alt="thumbnail img"
            className="rounded-xl md:max-w-44  w-full "
          />
        </Link>
      </div>
      <div className="mx-4 my-auto ">
        {!isRecommendation && (
          <img
            src={thumbNails?.default?.url}
            alt="channel icon"
            className=" "
          />
        )}

        <div className=" w-full ">
          <h4 className="w-full overflow-hidden line-clamp-2 leading-5 text-ellipsis">
            {title}
          </h4>
          <p className="w-full overflow-hidden line-clamp-2 leading-5 text-ellipsis text-[#979797]  ">
            {channelTitle}
          </p>
          {statistics ? (
            <p className="flex  ">
              <img src={Liked} alt="" className="w-5 h-5 " />
              <span className="text-[#979797]">
                {statistics.likeCount < 1000000
                  ? (statistics?.likeCount / 1000).toFixed() + "K "
                  : (statistics?.likeCount / 100000).toFixed(1) + "M "}
              </span>
              <span className="text-[#979797] ml-4">
                {statistics.viewCount < 1000000
                  ? (statistics?.viewCount / 1000).toFixed() + "K "
                  : (statistics?.viewCount / 1000000).toFixed(1) + "M "}
                views
              </span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
