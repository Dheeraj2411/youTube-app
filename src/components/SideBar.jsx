import Home from "../assets/home.svg";
import Shorts from "../assets/youtube-shorts.svg";
import Subscriptions from "../assets/video-gallery.svg";
import Channel from "../assets/user-square.svg";
import History from "../assets/history.svg";
import Playlist from "../assets/playlist.svg";
import YourVideos from "../assets/video.svg";
import Watchlater from "../assets/clock.svg";
import LikedVideos from "../assets/like.svg";
import Downloads from "../assets/download.svg";

import SidebarBtn from "./SidebarBtn";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const icons = [
    Home,
    Shorts,
    Subscriptions,
    Channel,
    History,
    Playlist,
    YourVideos,
    Watchlater,
    LikedVideos,
    Downloads,
  ];
  const nameOfIcon = [
    "Home",
    "Shorts",
    "Subscriptions",
    "Your Channel",
    "History",
    "Playlist",
    "Your Videos",
    "Watch later",
    "Liked Videos",
    "Downloads",
  ];
  const links = ["/"];
  if (isMenuOpen) return null;
  return (
    <aside className="ms:hidden content fixed z-10 min-w-[250px] w-[250px] bg-[#fff] p-3 h-[calc(100vh-56px)] overflow-y-auto">
      {icons.map((icon, index) => {
        return (
          <div key={index}>
            {index === 3 ? (
              <>
                <hr className="border  border-b-[rgba(0,0,0,0.1)] my-5 mx-0" />
                <SidebarBtn
                  icon={icon}
                  key={index}
                  nameOfIcon={nameOfIcon[index]}
                  links={links[index]}
                />
              </>
            ) : (
              <SidebarBtn
                icon={icon}
                key={index}
                nameOfIcon={nameOfIcon[index]}
                links={links[index]}
              />
            )}
          </div>
        );
      })}
    </aside>
  );
};

export default SideBar;
