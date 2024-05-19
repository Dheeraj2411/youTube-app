import reactLogo from "../assets/youtube.svg";
import Menu from "../assets/hamburger-menu.svg";
import Search from "../assets/magnifying.svg";
import Mic from "../assets/microphone-10.svg";
import VideoAdd from "../assets/video-add.svg";
import Bell from "../assets/bell.svg";
import User from "../assets/user-circle.svg";
import Cancel from "../assets/cancel.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API, SEARCH_VIDEO_API } from "../utils/constant";

const Head = () => {
  const [searchBtn, setsearchBtn] = useState(false);
  const [input, setInputData] = useState([]);
  const [result, setResultData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const searchResults = setTimeout(() => searchResult(), 200);
    return () => {
      clearTimeout(searchResults);
    };
  }, [input]);

  const searchResult = async () => {
    try {
      const result = await fetch(SEARCH_SUGGESTION_API + input);
      const data = await result?.json();
      setResultData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(result);

  useEffect(() => {
    keyWordForSearch();
  }, [selectedValue]);

  const results =
    result[1] ??
    result[1]?.map((data, index) => {
      return <ul key={index}>{data}</ul>;
    });
  const keyWordForSearch = async () => {
    const dataFetch = await fetch(SEARCH_VIDEO_API + selectedValue);
    const data = await dataFetch.json();
    console.log(data);
  };

  const handleLiClick = (event) => {
    setSelectedValue(event.target.textContent);
  };
  console.log(showSuggestions);
  return (
    <nav
      className={`z-50 h-[56px] bg-white fixed flex  items-center ${
        searchBtn && "px-[2vw]"
      } px-[2vw] justify-between w-full`}
    >
      <div
        className={`${
          searchBtn && "ms:hidden"
        } h-full  flex items-center  relative mr-3`}
      >
        <button
          className="sm:block  hidden  w-10 p-2 rounded-full hover:bg-slate-300 "
          onClick={() => toggleMenuHandler()}
        >
          <img src={Menu} className="w-7  object-cover" alt="youtube logo " />
        </button>
        <Link to={"/"} className="relative w-24 h-full mx-3">
          <img
            src={reactLogo}
            className="w-full h-full object-cover "
            alt="youtube logo"
          />

          <span className="text-xs text-slate-400 absolute top-2 -right-2">
            IN
          </span>
        </Link>
      </div>

      <div
        className={`${
          searchBtn && "mmd:w-[calc(100%-12px)]   "
        } flex relative  w-1/2 max-w-[650px] items-center justify-center h-10 md:mx-10 align-middle md:ml-auto  `}
      >
        <input
          type="text"
          placeholder="Search"
          value={input}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          className={`${searchBtn && " mmd:w-[calc(100%-12px)] pl-4 "} ${
            !searchBtn && "mmd:w-0"
          } outline-none   md:w-[calc(100%-100px)] h-full border border-[#dbdbdb] rounded-l-3xl md:px-5 text-base capitalize`}
        />
        <button
          onClick={() => {
            setInputData("");
            setResultData("");

            setsearchBtn((e) => !e);
          }}
          className={`${
            searchBtn && "border bg-slate-100 "
          } outline-none w-12 h-full md:border md:border-[#dbdbdb] rounded-r-3xl border-l-0 md:bg-slate-100`}
        >
          <img
            src={searchBtn ? Cancel : Search}
            alt="search icon "
            className={`${
              searchBtn && "min-w-6 w-6 p- h-6 "
            }min-w-9 w-9 mx-auto `}
          />
        </button>

        {showSuggestions && (
          <div
            className={`${searchBtn && " mmd:w-[calc(100%-18px)] "} ${
              !searchBtn && "mmd:w-0"
            } absolute top-11  md:w-[calc(100%-1px)]  bg-slate-200 rounded-md  text-base `}
          >
            {results?.map((data, index) => {
              return (
                <li
                  key={index}
                  className="list-none pl-2 cursor-pointer"
                  onClick={handleLiClick}
                >
                  {data}
                </li>
              );
            })}
          </div>
        )}

        <button
          className={`${
            searchBtn && "ms:hidden"
          } h-9 w-9   rounded-full  bg-slate-200 hover:bg-slate-300 ml-3 px-2`}
        >
          <img
            src={Mic}
            alt="Voice Aasistant"
            className="   h-full w-5 mx-auto"
          />
        </button>
      </div>
      <div
        className={` ${
          searchBtn && "ms:hidden"
        } h-9 min-h-8   flex ml-auto  items-center justify-end`}
      >
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
