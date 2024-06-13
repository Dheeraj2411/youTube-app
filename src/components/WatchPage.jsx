import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Liked from "../assets/like.svg";
import Bell from "../assets/bell.svg";

const WatchPage = () => {
  const [searchParam] = useSearchParams();

  const select = useSelector((store) => store.videoInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const info = select[searchParam.get("v")] || select;
  const { snippet, statistics, thumbNails } = info;
  const { title, channelTitle } = snippet;
  console.log(info.snippet);
  return (
    <div className="justify-center content-center flex   ">
      <div>
        <iframe
          className="w-screen aspect-video max-w-2xl rounded-lg mx-auto"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className=" flex-grow py-5 flex flex-col px-5">
          <h1 className=" text-xl font-medium max-h-12 overflow-hidden line-clamp-2 leading-5 ">
            {title}
          </h1>

          <div className="flex   p-5 my-auto justify-between ">
            <div className="flex">
              <img
                src={thumbNails?.default?.url}
                alt="channel icon"
                className="w-10 h-10 rounded-full object-cover mr-2 "
              />
              <p className="text-lg my-auto mx-0 text-black font-semibold  text-ellipsis overflow-hidden line-clamp-1">
                {channelTitle}
              </p>
              <button className="bg-[#dfdfdf] rounded-2xl px-2 py-1 text-slate-700 flex my-auto ml-2">
                <img src={Bell} alt="bell" className="w-5 pr-1 my-auto " />
                <span> Subscribed</span>
                <button className="pl-1.5">▽</button>
              </button>
            </div>
            <div className="flex">
              <div className="flex my-auto w-30 border bg-[#dfdfdf] rounded-2xl px-1 py-1">
                <button className="flex border-0 border-r-[1px]  border-black pr-3 pl-1">
                  <img src={Liked} alt="likeButton " className="w-6" />
                  <span className="text-[#aca7a7bb] my-auto pl-2 pr-1">
                    {statistics.likeCount < 1000000
                      ? (statistics?.likeCount / 1000).toFixed() + "K "
                      : (statistics?.likeCount / 100000).toFixed(1) + "M "}
                  </span>
                </button>
                <button className="flex px-2">
                  <img src={Liked} alt="likeButton " className="w-6" />
                </button>
              </div>

              <button className="p-2 px-3 mx-2  bg-[#dfdfdf] rounded-2xl">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#dfdfdf] mx-5 rounded-md">
          <span className="text-[#979797] ml-4">
            {statistics.viewCount < 1000000
              ? (statistics?.viewCount / 1000).toFixed() + "K "
              : (statistics?.viewCount / 1000000).toFixed(1) + "M "}
            views
          </span>
        </div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
