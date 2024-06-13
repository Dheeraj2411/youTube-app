import reactLogo from "../assets/youtube.svg";
import Menu from "../assets/hamburger-menu.svg";
import Search from "../assets/magnifying.svg";
import Mic from "../assets/microphone-10.svg";
import VideoAdd from "../assets/video-add.svg";
import Bell from "../assets/bell.svg";
import User from "../assets/user-circle.svg";
import Cancel from "../assets/cancel.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, json } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API, SEARCH_VIDEO_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchBtn, setsearchBtn] = useState(false);
  const [inputData, setInputData] = useState("");
  const [resultData, setResultData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // const [selectedQuery, setSelectedQuery] = useState();

  const dispatch = useDispatch();
  const chacheResult = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  //call on input
  useEffect(() => {
    const searchResults = setTimeout(
      () =>
        chacheResult[inputData]
          ? setResultData(chacheResult[inputData])
          : searchResult(),
      200
    );
    //clean up fn
    return () => {
      clearTimeout(searchResults);
    };
  }, [inputData]);

  //api call
  const searchResult = async () => {
    try {
      const result = await fetch(SEARCH_SUGGESTION_API + inputData);
      const data = await result?.json();
      setResultData(data[1]);
      dispatch(
        cacheResults({
          [inputData]: data[1],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const results =
    resultData ??
    resultData?.map((data, index) => {
      return <ul key={index}>{data}</ul>;
    });

  // useEffect(() => {
  //   keyWordForSearch();
  // }, [selectedQuery]);
  // const keyWordForSearch = async () => {
  //   const dataFetch = await fetch(SEARCH_VIDEO_API + selectedQuery);
  //   const data = await dataFetch.json();
  //   // console.log(data);
  // };
  // console.log("line74");
  // const handleQuerySelect = () => {
  //   console.log("dhee");
  // };
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
          value={inputData}
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
            searchBtn && "border bg-[#f0f0f0] "
          } outline-none w-12 h-full md:border md:border-[#dbdbdb]  rounded-r-3xl border-l-0 md:bg-[#f0f0f0] `}
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
            } absolute top-11  md:w-[calc(100%-50px)] left-0 bg-[#f0f0f0] rounded-md  text-base `}
          >
            {results?.map((data, index) => {
              return (
                <li
                  key={index}
                  className="list-none pl-2 cursor-pointer"
                  onClick={() => handleQuerySelect()}
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
          } h-9 w-9   rounded-full  bg-[#f0f0f0] hover:bg-[#adadadc7] ml-3 px-2`}
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
        <button className="sm:block  hidden  h-full w-9 mr-5 p-1.5  hover:bg-[#d8d8d8e4] rounded-full ">
          <img src={VideoAdd} alt="video Add" className="h-full w-full " />
        </button>
        <button className="h-full w-9 sm:mr-5 mr-1 p-1.5  hover:bg-[#d8d8d8e4] rounded-full ">
          <img src={Bell} alt="video Add" className="h-full w-full" />
        </button>
        <button className="h-full w-9 sm:mr-5 mr-1  p-1  hover:bg-[#d8d8d8e4] rounded-full ">
          <img src={User} alt="video Add" className="h-full w-full" />
        </button>
      </div>
    </nav>
  );
};

export default Head;
