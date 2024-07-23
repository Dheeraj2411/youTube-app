import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Content = () => {
  return (
    <div className="sm:relative top-[56px] flex fixed h-full w-full">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Content;
