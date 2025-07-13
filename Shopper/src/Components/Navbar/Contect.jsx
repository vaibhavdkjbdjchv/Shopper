import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterestP,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contect = () => {
  return (
    <div className="w-full px-4 py-2 text-[#4c4c4c] flex flex-col md:flex-row justify-between items-center gap-2 text-sm md:text-base">
      {/* Phone number */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h1>+91 7558578967</h1>
      </div>

      {/* Offer text */}
      <div className="w-full md:w-1/3 text-center">
        Receive 20% off & free shipping on orders over 50$
      </div>

      {/* Social icons */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4 text-lg">
        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-black" />
        <FontAwesomeIcon icon={faFacebookF} className="cursor-pointer hover:text-black" />
        <FontAwesomeIcon icon={faPinterestP} className="cursor-pointer hover:text-black" />
        <FontAwesomeIcon icon={faYoutube} className="cursor-pointer hover:text-black" />
      </div>
    </div>
  );
};

export default Contect;
