import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Liked from "../assets/like.svg";
import Bell from "../assets/bell.svg";
import VideoContainer from "../components/VideoContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [coomentToggle, setCommentToggle] = useState(false);
  const [searchParam] = useSearchParams();

  const select = useSelector((store) => store.videoInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const info = select[searchParam.get("v")] || select;

  console.log(info);
  const { snippet, statistics, thumbNails } = info;
  const { title, channelTitle } = snippet;
  const toggleAccordion = () => {
    setCommentToggle((pre) => !pre);
  };

  return (
    <div className="content  min-w-fit     md:ml-1 w-screen  flex md:flex-row   ">
      <div className="w-full h-full">
        <div className=" max-w-8/12 content-center    flex  flex-grow flex-col">
          <iframe
            className="md:rounded-lg  aspect-video"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="  py-5 flex flex-col sm:px-5 px-2">
            <h1 className=" text-xl font-medium max-h-12 overflow-hidden line-clamp-2 leading-5 ">
              {title}
            </h1>

            <div className="flex  py-5 px-1  sm:p-5  md:justify-between  flex-wrap">
              <div className="flex ">
                <img
                  src={thumbNails?.default?.url}
                  alt="channel icon"
                  className="w-10 h-10 rounded-full object-cover mr-2 "
                />
                <p className="text-lg my-auto mx-0 text-black font-semibold  text-ellipsis overflow-hidden line-clamp-1">
                  {channelTitle}
                </p>
                <button className="bg-[#dfdfdf] rounded-full px-2 py-2 text-slate-700 flex my-auto ml-14 md:ml-2 mr-auto ">
                  <img src={Bell} alt="bell" className="w-5 pr-1 my-auto " />
                  <p className="text-ellipsis overflow-hidden line-clamp-1 ">
                    Subscribed
                  </p>
                </button>
              </div>
              <div className="flex pt-2 md:pt-0">
                {statistics ? (
                  <div className="flex  w-30 border bg-[#dfdfdf] rounded-full px-1 py-1">
                    <button className="flex border-0 border-r-[1px]  border-black pr-3 pl-1">
                      <img src={Liked} alt="likeButton " className="w-6" />
                      <span className="text-[#aca7a7bb] my-auto pl-2 pr-1">
                        {statistics.likeCount < 1000000
                          ? (statistics?.likeCount / 1000).toFixed() + "K "
                          : (statistics?.likeCount / 100000).toFixed(1) + "M "}
                      </span>
                    </button>
                    <button className="flex px-2">
                      <img src={Liked} alt="likeButton " className="w-6 py-1" />
                    </button>
                  </div>
                ) : (
                  ""
                )}

                <button className="py-2 px-2 md:mx-2  ml-10 md:ml-2 w-20 bg-[#dfdfdf] rounded-full">
                  Share
                </button>
              </div>
            </div>
          </div>
          {statistics ? (
            <div className="bg-[#dfdfdf]  rounded-md  ">
              <span className="text-[#979797] ml-4">
                {statistics.viewCount < 1000000
                  ? (statistics?.viewCount / 1000).toFixed() + "K "
                  : (statistics?.viewCount / 1000000).toFixed(1) + "M "}
                views
              </span>
            </div>
          ) : (
            ""
          )}

          <div>
            <div className="flex justify-between px-4">
              <p>Comments</p>
              <button onClick={toggleAccordion}>
                {coomentToggle ? "🔼" : "🔽"}
              </button>
            </div>
            {coomentToggle && <CommentsContainer />}
          </div>
        </div>
        <div className="mx-auto w-7/12 h-[25rem] bg-slate-100 rounded-md">
          <p className="p-2   font-semibold  ">
            <span className="text-white bg-red-600 p-1 rounded-md">
              Live Chat
            </span>
          </p>
          <LiveChat />
        </div>
      </div>
      <div className="flex min-w-4/12">
        <VideoContainer isRecommendation={true} />
      </div>
    </div>
  );
};

export default WatchPage;
