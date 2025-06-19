import React from "react";
import { NavLink } from "react-router-dom";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div className="w-full h-full px-5 text-white flex items-center justify-between">
      <div className="w-[10%] text-lg font-bold flex items-center justify-center text-black">
        <h1 className="text-2xl font-bold">Shopper</h1>
      </div>

      <div className="w-[35%] text-md duration-500 font-bold flex justify-around items-center text-black">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-black pb-1 text-black"
              : "text-gray-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-black pb-1 text-black"
              : "text-gray-500"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-black pb-1 text-black"
              : "text-gray-500"
          }
        >
          Feedback
        </NavLink>
        <NavLink
          to="/Aboutus"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-black pb-1 text-black"
              : "text-gray-500"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-black pb-1 text-black"
              : "text-gray-500"
          }
        >
          Contact Us
        </NavLink>
      </div>

      <div className="w-[10%] text-lg px-5 font-bold flex justify-between items-center text-black">
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faHeart} className="text-lg " />
          <h3 className="text-sm font-light">(0)</h3>
        </span>
        <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
        <FontAwesomeIcon icon={faUser} className="text-lg " />
      </div>
    </div>
  );
}

export default Navbar;
