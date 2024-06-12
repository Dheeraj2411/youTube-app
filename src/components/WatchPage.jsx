import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  // console.log(searchParam.get("v"));
  const select = useSelector((store) => store.videoInfo);
  console.log(select);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="  mx-1   ">
      <iframe
        className="w-screen aspect-video max-w-2xl rounded-lg"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
