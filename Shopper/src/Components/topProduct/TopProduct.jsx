import React from "react";

function TopProduct(props) {
  const { ProductName, Des, Price, ImageSrc } = props;
  return (
    <div className="h-full min-w-[25%] w-[25%]  rounded-4xl bg-white flex justify-between px-2 py-2 items-center shadow-lg">
      <div className="h-[100%] w-[40%]">
        <img src={ImageSrc} alt="" className="w-fit h-full rounded-3xl" />
      </div>
      <div className="w-[60%] gap-2 h-full flex flex-col justify-center items-start px-4">
        <h1 className="text-2xl uppercase font-bold text-left">
          {ProductName}
        </h1>
        <p className="text-left text-gray-500 text-sm">{Des}</p>
        <p className="text-left text-black font-bold text-2xl">{Price}</p>
      </div>
    </div>
  );
}

export default TopProduct;
