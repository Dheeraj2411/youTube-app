import React from "react";
import Dheeraj from "../assets/dheeraj.jpg";
import Liked from "../assets/like.svg";

const Videos = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  console.log(statistics);

  // console.log(thumbnails);
  return (
    <div className=" w-80 h-80 mx-5 my-4">
      <img
        src={thumbnails?.maxres?.url}
        alt="thumbnail img"
        className="h-[calc(100%-100px)] rounded-2xl object-cover"
      />
      <div className=" h-[100px] py-2.5 flex justify-between">
        <img
          src={Dheeraj}
          alt=""
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
              {statistics.likeCount / 100}k
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videos;
