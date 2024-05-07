import React from "react";
import Home from "../assets/home.svg";
import Shorts from "../assets/youtube-shorts.svg";
import Subscriptions from "../assets/video-gallery.svg";
import History from "../assets/history.svg";
import Downloads from "../assets/download.svg";

const FixedSibar = () => {
  const icon = [Home, Shorts, Subscriptions, History, Downloads];
  const iconName = ["Home", "Shorts", "Subscriptions", "History", "Downloads"];
  return (
    <div className=" min-w-[80px]   bg-[#fff]  h-[calc(100vh-56px)] pt-5">
      {icon.map((icon, index) => (
        <div key={index} className="w-20 h-[75px]  rounded-lg flex ">
          <a
            href="#"
            className={`h-16 py-4  w-20 rounded-xl    mx-auto  text-[#242424] hover:bg-[rgba(0,0,0,0.1)]  `}
          >
            <img src={icon} alt="logo" className="h-6  block mx-auto" />
            <p className="text-[11px] font-normal text-[#646161b7] text-center py-1 ">
              {iconName[index]}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FixedSibar;
