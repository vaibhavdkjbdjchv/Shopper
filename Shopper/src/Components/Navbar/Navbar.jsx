import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  faCartShopping,
  faHeart,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full h-full px-5 text-white flex items-center justify-between relative">
      {/* Logo */}
      <div className="w-[40%] lg:w-[10%] text-lg font-bold flex items-center justify-start lg:justify-center text-black">
        <h1 className="text-2xl font-bold">Shopper</h1>
      </div>
      <div className="w-[50%]  text-lg font-bold flex lg:flex-row flex-row-reverse  lg:justify-between items-center  gap-4 lg:gap-0">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-black text-xl" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute top-full left-0 w-full bg-[#ffefb0f5] text-black flex flex-col items-center gap-4 py-4 lg:static lg:flex lg:flex-row lg:w-[80%] lg:justify-around lg:items-center lg:gap-0 lg:bg-transparent transition-all duration-300 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          {["/", "/product", "/feedback", "/Aboutus", "/contact"].map(
            (path, idx) => {
              const labels = [
                "Home",
                "Products",
                "Feedback",
                "About Us",
                "Contact Us",
              ];
              return (
                <NavLink
                  key={idx}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-black pb-1 text-black"
                      : "text-gray-500"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {labels[idx]}
                </NavLink>
              );
            }
          )}
        </div>

        {/* Icons */}
        <div className="w-[25%] lg:w-[10%] text-lg px-3 lg:px-5 font-bold flex justify-end gap-4 items-center text-black">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faHeart} className="text-lg" />
            <h3 className="text-sm font-light">(0)</h3>
          </span>
          <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
          <FontAwesomeIcon icon={faUser} className="text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
