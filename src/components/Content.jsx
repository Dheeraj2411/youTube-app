import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Content = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Content;
