import FixedSibar from "./FixedSibar";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Content = () => {
  return (
    <div className="top-[56px] flex fixed h-full">
      <SideBar />
      <FixedSibar />
      <MainContainer />
    </div>
  );
};

export default Content;
