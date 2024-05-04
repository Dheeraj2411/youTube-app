import reactLogo from "../assets/youtube.svg";
import Menu from "../assets/hamburger-menu.svg";
import Search from "../assets/magnifying.svg";

const Head = () => {
  return (
    <div className="h-[60px] bg-white sticky flex">
      <div className="h-full flex items-center mx-4 relative">
        <img src={Menu} className="w-7  object-cover" alt="youtube logo " />
        <img
          src={reactLogo}
          className="min-w-24 h-full object-cover mx-2"
          alt="youtube logo"
        />
        <span className="text-xs text-slate-400 absolute top-2.5 -right-1.5 ">
          IN
        </span>
      </div>
      <div className="flex h-full  items-center ">
        <input
          type="text"
          placeholder="Search"
          className="h-11 max-w-96 w-full my-auto border border-gray-300 rounded-l-3xl pl-3"
        />
        <button className="px-2 border border-gray-300 rounded-r-3xl h-11">
          <img src={Search} alt="" className="w-8 h-11 " />
        </button>
      </div>
    </div>
  );
};

export default Head;
