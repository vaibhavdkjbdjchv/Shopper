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
    <div className="w-full px-5 h-full text-[#4c4c4c] flex justify-between items-center">
      <div className="w-[33%] h-full flex items-center justify-start">
        <h1>+91 7558578967</h1>
      </div>
      <div className="w-[33%] flex justify-center items-center text-center h-full">
        Receive 20% off & free shipping on orders over 50$
      </div>
      <div className="w-[30%] flex justify-end items-center gap-4 h-full">
        {/* <FontAwesomeIcon icon={faInstagram} /> */}
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faPinterestP} />
        <FontAwesomeIcon icon={faYoutube} />
      </div>
    </div>
  );
};

export default Contect;
