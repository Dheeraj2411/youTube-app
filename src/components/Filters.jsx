const Filters = ({ name }) => {
  return (
    <div
      className="flex-[0,0,auto] py-2.5 px-5
  bg-[#f0f0f0] border border-[#dbdbdb] border-solid text-nowrap capitalize mr-2.5 text-[#242424] text-sm cursor-pointer rounded-[50px]"
    >
      {name}
    </div>
  );
};

export default Filters;
