import React from "react";
import SearchbBar from "../Components/searchbar/SearchbBar";
import { FaStar } from "react-icons/fa";
import TopProduct from "../Components/topProduct/TopProduct";
import CategorySlot from "../Components/category/CategorySlot";
import Products from "../Components/Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar/Navbar";
import Contect from "../Components/Navbar/Contect";
import Footer from "../Components/Footer/Footer";

function Product() {
  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col">
        <div className="w-full bg-[#ffefb0f5]">
          <Contect />
        </div>
        <Navbar />
      </div>

      {/* Search Bar */}
      <div className="w-full py-4 flex justify-center items-center px-4">
        <SearchbBar />
      </div>

      {/* Top Products */}
      <div className="w-full py-6 flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Top Products</h1>
        <div className="w-full px-4 sm:px-6 md:px-10">
          <TopProduct />
        </div>
      </div>

      {/* Summer Collection Banner */}
      <div className="w-full px-4 md:px-10 mt-10">
        <div className="w-full bg-gradient-to-r from-[#faf2b1] to-[#fbf6e9] rounded-xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full md:w-[70%]">
            <div className="bg-[#f1daca] p-3 rounded-full text-[#c1956c]">
              <FaStar className="text-4xl" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-black">
                Summer Collection is Live!
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Grab flat <span className="font-medium text-black">20% off</span> on Women Tops & Shirts.
              </p>
            </div>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button className="bg-black text-white text-base sm:text-lg md:text-xl px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="w-full py-10 flex flex-col gap-5 items-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">More Products Coming Soon!</h1>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <CategorySlot />
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full flex flex-col items-center px-4">
        <Products />
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Product;
