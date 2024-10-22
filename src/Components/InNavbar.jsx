import React from "react";
import { FaPlane } from "react-icons/fa";
import ApplyNowButton from "./ApplyNowButton";
const Navbar = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav
        className="bg-black text-white fixed top-0 left-0 right-0 z-50 py-2"
        style={{ height: "4rem" }}
      >
        <div className="px-[2rem] flex items-center justify-between h-full">
          {/* Left: Logo */}
          <div className="text-xl font-bold flex items-center h-full">LOGO</div>

          {/* Right: Apply Now Button */}
          <div className="flex items-center h-full">
            <button className="bg-[#00cc99] text-white px-6 py-2 rounded-full hover:bg-gray-300 transition flex items-center gap-2">
              <div className="p-2 rounded-full bg-gray-200 animate-button hidden md:block">
                <FaPlane className="text-black" />
              </div>
              {/* Airplane icon */}
              Apply Now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
