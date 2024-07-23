import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { SEARCH_SUGGESTION_API, SEARCH_VIDEO_API } from "../utils/constant";
import { toggleMenu } from "../utils/appSlice";
import { setVideos } from "../utils/videoSlice";

const useYouTubeSearch = () => {
  const [searchBtn, setSearchBtn] = useState(false);
  const [inputData, setInputData] = useState("");
  const [resultData, setResultData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [queryData, setQueryData] = useState();

  const dispatch = useDispatch();
  const cacheResult = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  //call on input
  useEffect(() => {
    const searchResults = setTimeout(
      () =>
        cacheResult[inputData]
          ? setResultData(cacheResult[inputData])
          : searchResult(),
      200
    );
    //clean up fn
    return () => {
      clearTimeout(searchResults);
    };
  }, [inputData, cacheResult]);

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
  const keyWordForSearch = async (queryData) => {
    try {
      const dataFetch = await fetch(SEARCH_VIDEO_API + queryData);
      const data = await dataFetch.json();
      dispatch(setVideos(data.items));
      console.log(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    toggleMenuHandler,
    searchBtn,
    inputData,
    setShowSuggestions,
    setInputData,
    setSearchBtn,
    showSuggestions,
    results,

    keyWordForSearch,
  };
};

export default useYouTubeSearch;
