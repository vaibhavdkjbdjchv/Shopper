import React from "react";
import Contect from "../Components/Navbar/Contect";
import Navbar from "../Components/Navbar/Navbar";

function ContactUs() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-[12%] flex flex-col items-center justify-between">
        <div className="w-full bg h-[30%] bg-[#ffefb0f5] flex  bg-[] items-center justify-between">
          <Contect />
        </div>
        <div className="w-full h-[70%]  flex items-center justify-between">
          <Navbar />
        </div>
      </div>{" "}
      ContactUs
    </div>
  );
}

export default ContactUs;
