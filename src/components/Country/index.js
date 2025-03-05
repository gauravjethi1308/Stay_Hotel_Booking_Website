import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language is English

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Update the selected language
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative flex flex-col items-center rounded-lg">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-row items-center gap-2 tracking-wider active:text-black"
      >
        EN
        {!isOpen ? <FaAngleDown /> : <IoIosArrowUp />}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="bg-black absolute top-12 flex flex-col items-center p-3 w-fit h-fit">
          {/* English Option */}
          <button
            onClick={() => handleLanguageChange("English")}
            className="flex items-center gap-2 hover:text-blue-600"
          >
            English
          </button>
          {/* Spanish Option */}
          <button
            onClick={() => handleLanguageChange("Spanish")}
            className="flex items-center gap-2 hover:text-blue-600 mt-2"
          >
            Spanish
          </button>
          {/* Hindi Option */}
          <button
            onClick={() => handleLanguageChange("Hindi")}
            className="flex items-center gap-2 hover:text-blue-600 mt-2"
          >
            Hindi
          </button>
        </div>
      )}
    </div>
  );
};

export default Language;