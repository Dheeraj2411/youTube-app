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
    <div className=" ms:flex ms:bottom-0 ms:fixed ms:z-20  sm:min-w-[80px]  ms:w-full  bg-[#fff]   sm:h-[calc(100vh-56px)] sm:pt-5">
      {icon.map((icon, index) => (
        <div
          key={index}
          className="w-20  sm:h-[75px] ms:h-[60px] ms:mx-2 rounded-lg flex ms:py-1.5 "
        >
          <a
            href="#"
            className={`sm:h-16 ms:h-14  sm:py-4 ms:py-2 w-20 rounded-xl    mx-auto  text-[#242424] hover:bg-[rgba(0,0,0,0.1)]  `}
          >
            <img src={icon} alt="logo" className="h-6  block mx-auto" />
            <p className="text-[11px] font-normal text-[#646161b7] text-center sm:py-1 ">
              {iconName[index]}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FixedSibar;
