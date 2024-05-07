import Filters from "./Filters";
const FilterBtn = () => {
  const btnName = [
    "all",
    "CSS",
    "web Dev",
    "Python",
    "entertainment",
    "marvel",
    "javaScript",
    "artificial intelligence",
    "machine learing",
    "trending",
    "artificial intelligence",
    "machine learing",
    "trending",
  ];
  return (
    <div className="filter fixed top-14 h-14 w-full bg-[#fff] border border-x-0 border-[#dbdbdb] py-0 px-5 flex items-center overflow-x-auto overflow-y-hidden">
      {btnName.map((name, index) => {
        return <Filters name={name} key={index} index={index} />;
      })}
    </div>
  );
};

export default FilterBtn;
