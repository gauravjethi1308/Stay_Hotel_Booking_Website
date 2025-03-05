import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaStarHalfStroke } from "react-icons/fa6";
import "../Header/index.css";
import Content from "../Content/content.json";
import Hamburger from "../Hamburger";
import Dropdown from "../Dropdown";
import Language from "../Country/index";

const Header = ({ path }) => {
  const location = useLocation(); // Hook to get the current route
  const containerClass = ` ${path === "/about" ? "text-black" : "text-white"}`;
  const containerClassForBorder = `${
    path === "/about"
      ? "border-black hover:bg-white hover:text-black"
      : "border-primaryFont hover:bg-primaryFont text-white"
  }`;

  // Function to determine if a link is active
  const isActive = (route) => location.pathname === route;

  return (
    <header className="absolute top-0 left-0 w-full z-50 font-primaryType">
      {/* Mobile Menu */}
      <div className="flex justify-start pt-5 pl-3 md:hidden  ">
        <Hamburger />
      </div>

      {/* Top Content */}
      {Content.topContent.map((topContent, index) => (
        <div
          key={index}
          className={`hidden md:flex justify-between p-6 font-primaryType font-semibold tracking-[0.2em] text-[11px] ${containerClass}`}
        >
          <div className="text-left pl-14 tracking-[0.3em]">
            {topContent.content1}
          </div>
          <div className="text-right pr-12 flex flex-row gap-6">
            <div>{topContent.telephone}</div>
            <div>{topContent.FAX}</div>
            <div>{topContent.mail}</div>
          </div>
        </div>
      ))}

      {/* Divider */}
      <div className="w-full h-px bg-gray-500 hidden md:block"></div>

      {/* Navigation and Branding */}
      <div
        className={`${containerClass} font-primaryType grid grid-cols-1 md:grid-cols-3 justify-items-center items-center pt-5`}
      >
        {/* Navigation Links - Left Side */}
        <nav className="hidden md:flex gap-14 p-8 text-xs font-bold px-10">
          {Content.links.map((links, index) => (
            <React.Fragment key={index}>
              <Link
                to="/home"
                className={`${containerClass} hover:underline hover:underline-offset-8 ${
                  isActive("/") ? "underline underline-offset-8" : ""
                }`}
              >
                {links.text1}
              </Link>
              <Link
                to="/stay"
                className={`${containerClass} hover:underline hover:underline-offset-8 ${
                  isActive("/stay") ? "underline underline-offset-8" : ""
                }`}
              >
                {links.text2}
              </Link>
              <Link
                to="/about"
                className={`${containerClass} hover:underline hover:underline-offset-8 ${
                  isActive("/about") ? "underline underline-offset-8" : ""
                }`}
              >
                {links.text4}
              </Link>
            </React.Fragment>
          ))}
        </nav>

        {/* Main Branding - Centered */}
        <div className="text-center text-primaryFont font-primaryType -mt-16 md:mt-3 ">
          {Content.mainHeading.map((mainHeading, index) => (
            <h1
              key={index}
              className={`${containerClass} text-2xl tracking-widest md:text-3xl`}
            >
              {mainHeading.content}
            </h1>
          ))}
          <div className="flex justify-center gap-0.5 text-[10px] text-primaryFont">
            <FaStarHalfStroke />
            <FaStarHalfStroke />
            <FaStarHalfStroke />
            <FaStarHalfStroke />
            <FaStarHalfStroke />
            <FaStarHalfStroke />
          </div>
        </div>

        {/* Dropdown and Reserve Button - Right Side */}
        <div
          className={`hidden md:flex justify-end items-center gap-8 text-sm pr-16 ${containerClass}`}
        >
          <Dropdown paths={path} />
          <Language/>
          <Link to="/stay">
            <button
              className={`px-6 py-3 border border-primaryFont text-sm font-light hover:bg-primaryFont hover:text-black transition duration-300 ease-in-out ${containerClassForBorder}`}
            >
              Reserve Now
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;