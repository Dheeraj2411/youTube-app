import React from "react";
import Dheeraj from "../assets/dheeraj.jpg";
import Liked from "../assets/like.svg";

const Videos = ({ info }) => {
  const { snippet, statistics, thumbNails } = info;
  const { title, thumbnails, channelTitle } = snippet;
  // console.log(statistics?.viewCount);
  // console.log(Id);
  return (
    <div className=" w-80 h-[360px] mx-2 my-4 p-2">
      <img
        src={thumbnails?.maxres?.url || thumbnails?.standard?.url}
        alt="thumbnail img"
        className="h-[calc(100%-100px)] rounded-2xl object-cover cursor-pointer"
      />
      <div className=" h-[100px] py-2.5 flex justify-between">
        <img
          src={thumbNails?.default?.url}
          alt="channel icon"
          className="w-10 h-10 rounded-full object-cover  "
        />
        <div className="w-64">
          <h4 className="w-full h-12 overflow-hidden line-clamp-2 leading-6">
            {title}
          </h4>
          <p className="text-sm my-[1px] mx-0 text-[#979797] ">
            {channelTitle}
          </p>
          <p className="flex">
            <img src={Liked} alt="" className="h-5 w-5  mr-2 " />
            <span className="text-[#979797]">
              {statistics.likeCount < 1000000
                ? Math.round(statistics?.likeCount / 1000) + "K "
                : Math.round(statistics?.likeCount / 100000) + "M "}
            </span>
            <span className="text-[#979797] ml-4">
              {statistics.viewCount < 1000000
                ? Math.round(statistics?.viewCount / 1000) + "K "
                : Math.round(statistics?.viewCount / 100000) + "M "}
              views
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videos;
