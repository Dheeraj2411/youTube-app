import reactLogo from "../assets/youtube.svg";
import Menu from "../assets/hamburger-menu.svg";
import Search from "../assets/magnifying.svg";
import Mic from "../assets/microphone.svg";

const Head = () => {
  return (
    <nav className="h-[60px] bg-white sticky flex w-full items-center px-[2.5vw]">
      <div className="h-full flex items-center  relative">
        <button className="p-2 rounded-full hover:bg-slate-300">
          <img src={Menu} className="w-7  object-cover" alt="youtube logo " />
        </button>
        <a href="#" className=" min-w-24 h-full mx-3">
          <img
            src={reactLogo}
            className="w-full h-full object-cover "
            alt="youtube logo"
          />
          <span className="text-xs text-slate-400 absolute top-2 right-0 ">
            IN
          </span>
        </a>
      </div>
      <div className="flex relative max-w-[500px] w-1/2 items-center h-11 mx-6">
        <input
          type="text"
          placeholder="Search"
          className="w-[85%] h-full border border-[#dbdbdb] rounded-l-3xl px-5 text-base capitalize"
        />
        <button className="w-[15%] h-full border border-[#dbdbdb] rounded-r-3xl px-2 border-l-0">
          <img src={Search} alt="search icon" className="w-8  " />
        </button>
        <button className="h-9 px-2 rounded-full justify-center bg-slate-200 hover:bg-slate-300  ml-4">
          <img src={Mic} alt="Voice Aasistant" className="h-6  " />
        </button>
      </div>
      <div className="h-9 flex ml-auto items-center">
        <button></button>
      </div>
    </nav>
  );
};

export default Head;
