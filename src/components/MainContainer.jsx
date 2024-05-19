import FilterBtn from "./FilterBtn";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="relative h-full flex">
      <FilterBtn />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
