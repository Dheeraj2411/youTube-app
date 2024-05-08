import React from "react";
import Home from "../assets/home.svg";
import Shorts from "../assets/youtube-shorts.svg";
import Subscriptions from "../assets/video-gallery.svg";
import History from "../assets/history.svg";
import Downloads from "../assets/download.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const icon = [Home, Shorts, Subscriptions, History, Downloads];
  const iconName = ["Home", "Shorts", "Subscriptions", "History", "Downloads"];
  const links = ["/"];
  return (
    <div className="sm:hidden flex bottom-0 fixed z-20    w-full  bg-[#fff]    ">
      {icon.map((icon, index) => (
        <div
          key={index}
          className="w-20   h-[60px] mx-2 rounded-lg flex py-1.5 "
        >
          <Link
            to={links[index]}
            className={` h-14   py-2 w-20 rounded-xl    mx-auto  text-[#242424] hover:bg-[rgba(0,0,0,0.1)]  `}
          >
            <img src={icon} alt="logo" className="h-6  block mx-auto" />
            <p className="text-[11px] font-normal text-[#000000] text-center  ">
              {iconName[index]}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Footer;
