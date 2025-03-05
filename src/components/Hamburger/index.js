import React, { useState, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import Content from "../Content/content.json";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the hamburger menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      <div className="relative flex flex-col items-start rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white text-xl active:text-black"
        >
          {!isOpen ? (
            <VscMenu className="text-primaryFont text-3xl" />
          ) : (
            <RxCross2 className="text-primaryFont text-3xl" />
          )}
        </button>

        {/* Hamburger Menu Content */}
        {isOpen && (
          <div className="bg-[#0f172a] fixed inset-0 h-screen w-screen p-6 z-50">
            {/* Cross Icon and Main Heading */}
            <div className="flex items-center justify-between mb-8">
              <RxCross2
                className="text-primaryFont text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
              <div className="text-center flex-1">
                {Content.mainHeading.map((mainHeading, index) => (
                  <div key={index} className="text-2xl text-white">
                    {mainHeading.content}
                  </div>
                ))}
                <div className="flex flex-row gap-1 text-xs text-white  justify-center">
                <FaStarHalfStroke />
                            <FaStarHalfStroke />
                            <FaStarHalfStroke />
                            <FaStarHalfStroke />
                            <FaStarHalfStroke />
                            <FaStarHalfStroke />
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-600 mb-8"></div>

            {/* Links Section */}
            {Content.links.map((links, index) => (
              <ul key={index} className="flex flex-col items-start gap-y-4 text-sm pl-4">
                <li>
                  <Link
                    to="/"
                    className="text-white font-primaryType hover:underline hover:underline-offset-8"
                  >
                    {links.text1}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/stay"
                    className="text-white font-primaryType hover:underline hover:underline-offset-8"
                  >
                    {links.text2}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white font-primaryType hover:underline hover:underline-offset-8"
                  >
                    {links.text3}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white font-primaryType hover:underline hover:underline-offset-8"
                  >
                    {links.text4}
                  </Link>
                </li>
              </ul>
            ))}

            {/* Address Section */}
            <div className="text-white flex flex-col items-start pl-4 mt-8">
              <h1 className="text-lg">STAY IRIAFARM</h1>
              <h2 className="text-sm mt-2">Rue de Lausanne 1098,</h2>
              <h2 className="text-sm mt-1">1202 Geneve,</h2>
              <h2 className="text-sm mt-1">Switzerland</h2>
            </div>

            {/* Footer Reach Out Section */}
            <div className="flex flex-col gap-y-2 items-start pl-4 mt-8 text-white">
              {Content.footerReachOut.map((footerReachOut, index) => (
                <div key={index}>
                  <h1 className="text-sm">{footerReachOut.reachout2}</h1>
                  <h1 className="text-sm">{footerReachOut.reachout1}</h1>
                </div>
              ))}
              <div className="flex flex-row gap-4 mt-4 text-white">
                <RiFacebookBoxLine />
                <CiTwitter />
                <FaPinterestP />
                <LuYoutube />
                <FiInstagram />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;