import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/Images/images";

function SearchbBar() {
  return (
    <div className="h-15 w-[90%] px-1  text-gray py-1 flex items-center justify-between rounded-full -lg bg-[#ffffff]">
      <div className="w-[90%] h-full bg-[#F3F4F6] flex gap-5 items-center px-5 rounded-full">
        <FontAwesomeIcon icon={faSearch} className="text-2xl" />
        <input
          type="search"
          placeholder="Search"
          className="text-lg w-full outline-0"
        />
      </div>
      <div className=" ">
        <FontAwesomeIcon
          icon={faFilter}
          className="text-white text-lg bg-black p-4 rounded-full"
        />
      </div>
    </div>
  );
}

export default SearchbBar;
