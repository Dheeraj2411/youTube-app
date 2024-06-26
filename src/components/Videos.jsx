import React from "react";
import Liked from "../assets/like.svg";

const Videos = ({ info }) => {
  const { snippet, statistics, thumbNails } = info;
  const { title, thumbnails, channelTitle } = snippet;
  // console.log(info);

  return (
    <div className=" flex-grow w-full max-w-[700px] sm:w-80  min-w-[300px]   sm:my-4 sm:mx-1">
      <img
        src={thumbnails?.maxres?.url || thumbnails?.standard?.url}
        alt="thumbnail img"
        className="h-[calc(100%-108px)]  w-full sm:rounded-2xl  "
      />
      <div className=" h-[5.5rem] my-2.5 flex mr-2">
        <img
          src={thumbNails?.default?.url}
          alt="channel icon"
          className="w-10 h-10 rounded-full object-cover mr-2 "
        />
        <div className="  ms:pl-2 mx-3">
          <h4 className=" max-h-12 overflow-hidden line-clamp-2 leading-5 text-ellipsis">
            {title}
          </h4>
          <p className="text-base my-[1px] mx-0 text-[#979797] ">
            {channelTitle}
          </p>
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
        </div>
      </div>
    </div>
  );
};
export const AdFunction = ({ info }) => {
  return (
    <div className="shadow-md relative flex flex-grow">
      <Videos info={info} />
      <p className="absolute bottom-0 top-40  right-4 text-slate-100 bg-slate-700 h-6 w-9 text-center rounded-md">
        add
      </p>
    </div>
  );
};

export default Videos;
