import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Content = () => {
  return (
    <div className="relative top-[56px] flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Content;
