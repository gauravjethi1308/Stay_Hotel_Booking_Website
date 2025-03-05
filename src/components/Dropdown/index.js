import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import MenuItems from "./MenuItems.json";
import { Link } from "react-router-dom";
const Dropdown = ({ paths }) => {
  console.log(paths, "inpages");
  const [isOpen, setIsOpen] = useState(false);
  const containerClass = ` ${
    paths == "/about" ? "text-black" : "text-primaryFont"
  }`;
  return (
    <div className="relative  flex flex-col items-center  rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={` flex flex-row items-center gap-2 tracking-wider  active:text-black ${containerClass}`}
      >
       <h1 className="text-xs font-bold"> PAGES</h1>
        {!isOpen ? <FaAngleDown /> : <IoIosArrowUp />}
      </button>
      {isOpen && (
        <div className="bg-black  absolute top-12 flex flex-col items-center p-3 w-[300px] h-fit">
          {MenuItems.map((item, i) => (
            <div
              className="text-primaryFont flex justify-between  hover:text-orange-600 cursor-pointer"
              key={i}
            >
              <Link to={item.route}>
                <h1>{item.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
