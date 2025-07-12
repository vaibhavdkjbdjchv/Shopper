// SelectedProduct.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Contect from "../Components/Navbar/Contect";
import Navbar from "../Components/Navbar/Navbar";
import { faRightLeft, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../assets/Images/images";

function SelectedProduct() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <p>No product selected</p>;
  }

  const [returnActive, setReturnActive] = useState(false);
  const [mainImage, setMainImage] = useState(product.image[0]);

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[12%] flex flex-col items-center justify-between">
        <div className="w-full bg h-[30%] bg-[#ffefb0f5] flex  bg-[] items-center justify-between">
          <Contect />
        </div>
        <div className="w-full h-[70%]  flex items-center justify-between">
          <Navbar />
        </div>
      </div>
      <div className="w-[90%] h-[88%] py-5 flex gap-10 justify-center ">
        <div className="flex h-[80%] gap-10">
          <div className="h-full overflow-scroll flex flex-col justify-between items-center gap-5">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className="w-30 h-auto cursor-pointer rounded-xl border hover:border-black duration-200"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div>
            <img
              src={mainImage}
              alt={product.name}
              className="h-full rounded-3xl"
            />
          </div>
        </div>
        <div className="w-[35%] ">
          <h2 className="text-6xl uppercase font-bold mt-4">{product.name}</h2>
          <p className="text-gray-600 mt-2 text-lg">{product.description}</p>
          <div className="flex gap-2">
            <p className="text-3xl font-bold mt-4">₹{product.price}</p>
            <p className="text-lg text-gray-600 line-through mt-4">
              {product.marketPrice}
            </p>
            <p className="text-lg text-green-600 font-bold mt-4">
              {product.discount}%
            </p>
          </div>
          <div className="flex gap-5 py-5">
            <button className="border px-5 text-lg hover:bg-gray-500 hover:text-white rounded-4xl">
              S
            </button>
            <button className="border px-5 py-2 text-lg hover:bg-gray-500 hover:text-white rounded-4xl">
              M
            </button>
            <button className="border px-5 py-2 text-lg hover:bg-gray-500 hover:text-white rounded-4xl">
              L
            </button>
            <button className="border px-5 py-2 text-lg hover:bg-gray-500 hover:text-white rounded-4xl">
              XL
            </button>
          </div>
          <div className="flex justify-between gap-10 py-5">
            <button className="px-20 rounded-3xl py-2 border border-[#ffe57d] cursor-pointer hover:bg-[#ffe57d] duration-300 ">
              Add favorite
            </button>
            <button className="px-20 rounded-3xl py-2 border border-[#ffe57d] cursor-pointer hover:bg-[#ffe57d] duration-700 ease-in">
              Add To Cart
            </button>
          </div>

          <div
            onClick={() => setReturnActive(!returnActive)}
            className="border-y-1  justify-between items-center cursor-pointer  border-gray-300 py-5"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center ">
                <FontAwesomeIcon
                  icon={faRightLeft}
                  className="p-1 border rounded-full text-sm"
                />
                <div>
                  <h1 className="text-lg font-bold ">
                    10 Days Return and Exchange policy
                  </h1>
                  <p className="text-sm font-light">
                    Know about return & exchange policy
                  </p>
                </div>
              </div>
              <button
                className={`${
                  returnActive ? "hidden" : "visible"
                } text-2xl font-bold`}
              >
                +
              </button>
              <button
                className={`${
                  returnActive ? "visible" : "hidden"
                } text-3xl font-bold`}
              >
                -
              </button>
            </div>

            <div className={`mt-10 ${returnActive ? "visible" : "hidden"}`}>
              <p>
                Easy returns upto 15 days of delivery. Exchange available on
                select pincodes
              </p>
            </div>
          </div>
          <div className="justify-evenly py-10 flex  border-gray-300 border-b">
            <div className="flex flex-col justify-center items-center ">
              <img
                src={images.secure}
                alt=""
                className="w-20 bg-[#fff4cae5] p-5 rounded-3xl"
              />
              <h1 className="text-sm text-gray-500 text-center">
                100% secure <br /> payment
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img
                src={images.genuine}
                alt=""
                className="w-20 bg-[#fff4cae5] p-5 rounded-3xl"
              />
              <h1 className="text-sm text-gray-500 text-center">
                100% genuine <br /> Product
              </h1>
            </div>
            <div className="flex flex-col  justify-center items-center ">
              <img
                src={images.retur}
                alt=""
                className="w-20 bg-[#fff4cae5] p-5 rounded-3xl"
              />
              <h1 className="text-sm text-gray-500 text-center">
                Easy return and <br /> intante payment
              </h1>
            </div>
          </div>
          <div className="py-10 px-5 flex justify-center items-center">
            <button className="hover:bg-amber-300 duration-500 font-semibold text-2xl cursor-pointer uppercase bg-amber-200 w-full rounded-3xl py-2">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedProduct;
