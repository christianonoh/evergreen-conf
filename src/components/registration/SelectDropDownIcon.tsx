import { IoIosArrowDown } from "react-icons/io";

const SelectDropDownIcon = () => {
  return (
    <span className=" text-xl pointer-events-none absolute inset-y-1/2 right-0 flex items-center px-2 text-dark">
      <IoIosArrowDown />
    </span>
  );
};

export default SelectDropDownIcon;
