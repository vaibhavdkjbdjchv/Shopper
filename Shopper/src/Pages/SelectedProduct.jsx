import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Contect from "../Components/Navbar/Contect";
import Navbar from "../Components/Navbar/Navbar";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../assets/Images/images";

function SelectedProduct() {
  const location = useLocation();
  const { product } = location.state || {};

  const [returnActive, setReturnActive] = useState(false);
  const [mainImage, setMainImage] = useState(product?.image?.[0]);

  if (!product) return <p>No product selected</p>;

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <div className="w-full flex flex-col">
        <div className="bg-[#ffefb0f5]">
          <Contect />
        </div>
        <Navbar />
      </div>

      {/* Product Section */}
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-10 py-6">
        {/* Image Section */}
        <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setMainImage(img)}
                className="w-20 h-20 object-cover rounded-xl border hover:border-black duration-200 cursor-pointer"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full lg:w-[80%]">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full lg:w-auto  lg:h-[80%]  rounded-3xl"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-[40%]">
          <h2 className="text-3xl lg:text-6xl uppercase font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2 text-base lg:text-lg">{product.description}</p>

          {/* Price and Discount */}
          <div className="flex gap-3 mt-4 items-center">
            <p className="text-xl lg:text-3xl font-bold">₹{product.price}</p>
            <p className="text-sm lg:text-lg text-gray-500 line-through">{product.marketPrice}</p>
            <p className="text-sm lg:text-lg text-green-600 font-bold">{product.discount}%</p>
          </div>

          {/* Size Buttons */}
          <div className="flex gap-3 py-4">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border px-4 py-1 lg:px-5 lg:py-2 text-sm lg:text-lg hover:bg-gray-500 hover:text-white rounded-3xl"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Add Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 py-4">
            <button className="w-full sm:w-auto px-6 py-2 rounded-3xl border border-[#ffe57d] hover:bg-[#ffe57d] transition">
              Add to Favorite
            </button>
            <button className="w-full sm:w-auto px-6 py-2 rounded-3xl border border-[#ffe57d] hover:bg-[#ffe57d] transition">
              Add to Cart
            </button>
          </div>

          {/* Return Policy Toggle */}
          <div
            onClick={() => setReturnActive(!returnActive)}
            className="border-y border-gray-300 py-5 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faRightLeft}
                  className="p-2 border rounded-full text-sm"
                />
                <div>
                  <h1 className="text-base lg:text-lg font-semibold">10 Days Return & Exchange</h1>
                  <p className="text-xs text-gray-500">Know about return & exchange policy</p>
                </div>
              </div>
              <span className="text-2xl font-bold">{returnActive ? "−" : "+"}</span>
            </div>

            {returnActive && (
              <div className="mt-4 text-sm text-gray-700">
                Easy returns up to 15 days of delivery. Exchange available on select pincodes.
              </div>
            )}
          </div>

          {/* Icons Section */}
          <div className="flex justify-between gap-4 border-b py-8 text-center">
            <div className="flex-1 flex flex-col items-center">
              <img src={images.secure} alt="" className="w-16 bg-[#fff4cae5] p-3 rounded-2xl" />
              <p className="text-xs text-gray-600 mt-2">100% Secure Payment</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <img src={images.genuine} alt="" className="w-16 bg-[#fff4cae5] p-3 rounded-2xl" />
              <p className="text-xs text-gray-600 mt-2">100% Genuine Product</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <img src={images.retur} alt="" className="w-16 bg-[#fff4cae5] p-3 rounded-2xl" />
              <p className="text-xs text-gray-600 mt-2">Easy Return & Instant Refund</p>
            </div>
          </div>

          {/* Proceed Button */}
          <div className="py-6">
            <button className="w-full py-3 bg-amber-200 hover:bg-amber-300 text-xl font-semibold uppercase rounded-3xl">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedProduct;
