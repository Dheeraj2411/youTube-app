const SidebarBtn = ({ icon, nameOfIcon }) => {
  return (
    <>
      <a
        href="#"
        className={`w-full  rounded-xl  flex px-5 py-2.5 items-center capitalize text-sm text-[#242424] hover:bg-[rgba(0,0,0,0.1)] ${
          nameOfIcon === "Home"
            ? "bg-[rgba(0,0,0,0.1)]"
            : "hover:bg-[rgba(0,0,0,0.1)]"
        }  font-medium`}
      >
        <img src={icon} alt="ogo" className="h-6 mr-5 " />
        {nameOfIcon}
      </a>
    </>
  );
};

export default SidebarBtn;
