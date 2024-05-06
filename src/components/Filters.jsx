const Filters = ({ name, index }) => {
  return (
    <div
      className={`flex-[0,0,auto] py-2.5 px-5
  border border-[#dbdbdb] border-solid text-nowrap capitalize mr-2.5 ${
    index === 0
      ? "bg-[#242424] text-[#f0f0f0]  "
      : "text-[#242424]  bg-[#f0f0f0] hover:bg-[#242424] hover:text-[#f0f0f0] "
  } text-sm cursor-pointer rounded-[50px] `}
    >
      {name}
    </div>
  );
};

export default Filters;
