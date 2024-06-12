const Filters = ({ name, index }) => {
  return (
    <div
      className={`flex-[0,0,auto] py-2 px-5
  border border-[#dbdbdb] border-solid text-nowrap capitalize mr-2.5 ${
    index === 0
      ? "bg-[#a5a4a4] text-[#f0f0f0]  "
      : "text-[#000000]  bg-[#f0f0f0] hover:bg-[#737373] hover:text-[#f0f0f0] "
  } text-sm cursor-pointer rounded-[50px] `}
    >
      {name}
    </div>
  );
};

export default Filters;
