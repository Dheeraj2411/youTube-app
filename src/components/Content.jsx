import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Content = () => {
  return (
    <div className="top-[56px] flex fixed">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Content;
