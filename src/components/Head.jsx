import reactLogo from "../assets/youtube.svg";
import Menu from "../assets/hamburger-menu.svg";
import Search from "../assets/magnifying.svg";
import Mic from "../assets/microphone-10.svg";
import VideoAdd from "../assets/video-add.svg";
import Bell from "../assets/bell.svg";
import User from "../assets/user-circle.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <nav className="z-50 h-[56px] bg-white fixed flex  items-center px-[2vw] justify-between w-full">
      <div className="h-full  flex items-center  relative mr-3">
        <button
          className="sm:block  hidden  w-10 p-2 rounded-full hover:bg-slate-300 "
          onClick={() => toggleMenuHandler()}
        >
          <img src={Menu} className="w-7  object-cover" alt="youtube logo " />
        </button>
        <a href="#" className="relative w-24 h-full mx-3">
          <img
            src={reactLogo}
            className="w-full h-full object-cover "
            alt="youtube logo"
          />
          <span className="text-xs text-slate-400 absolute top-2 -right-2">
            IN
          </span>
        </a>
      </div>
      <div className="flex relative  w-1/2 max-w-[650px] items-center justify-center h-11 sm:mx-10 align-middle sm:ml-auto  ">
        <input
          type="text"
          placeholder="Search"
          className="   w-[calc(100%-100px)] h-full border border-[#dbdbdb] rounded-l-3xl px-5 text-base capitalize"
        />
        <button className="w-16 h-full border border-[#dbdbdb] rounded-r-3xl px-2 border-l-0 bg-slate-100">
          <img src={Search} alt="search icon" className="min-w-8 mx-auto " />
        </button>
        <button className="h-9 w-9   rounded-full  bg-slate-200 hover:bg-slate-300 ml-3 px-2">
          <img
            src={Mic}
            alt="Voice Aasistant"
            className="   h-full w-5 mx-auto"
          />
        </button>
      </div>
      <div className="h-9   flex ml-auto  items-center justify-end">
        <button className="sm:block  hidden  h-full w-9 mr-5 p-1.5  hover:bg-slate-300 rounded-full ">
          <img src={VideoAdd} alt="video Add" className="h-full w-full " />
        </button>
        <button className="h-full w-9 sm:mr-5 mr-1 p-1.5  hover:bg-slate-300 rounded-full ">
          <img src={Bell} alt="video Add" className="h-full w-full" />
        </button>
        <button className="h-full w-9 sm:mr-5 mr-1  p-1  hover:bg-slate-300 rounded-full ">
          <img src={User} alt="video Add" className="h-full w-full" />
        </button>
      </div>
    </nav>
  );
};

export default Head;
