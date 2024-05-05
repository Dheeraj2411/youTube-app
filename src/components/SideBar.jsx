import Home from "../assets/home.svg";
import Shorts from "../assets/youtube-shorts.svg";
import Subscriptions from "../assets/video-gallery.svg";
import Channel from "../assets/user-square.svg";

import SidebarBtn from "./SidebarBtn";

const SideBar = () => {
  const icons = [Home, Shorts, Subscriptions, Channel];
  const nameOfIcon = ["Home", "Shorts", "Subscriptions", "Your Channel"];

  return (
    <aside className=" min-w-[250px] w-[250px] h-[calc(100vh-54px)] bg-[#fff] p-3">
      {icons.map((icon, index) => {
        return (
          <SidebarBtn icon={icon} key={index} nameOfIcon={nameOfIcon[index]} />
        );
      })}
    </aside>
  );
};

export default SideBar;
