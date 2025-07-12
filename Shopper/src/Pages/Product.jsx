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
      <div className="w-full py-4 flex justify-center items-center">
        <SearchbBar />
      </div>

      {/* Top Products */}
      <div className="w-full py-6 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-center">Top Products</h1>
        <div className="w-[95%] flex justify-center">
          <TopProduct />
        </div>
      </div>

      {/* Summer Collection Banner */}
      <div className="w-[95%] mx-auto mt-10 bg-gradient-to-r from-[#faf2b1] to-[#fbf6e9] rounded-xl flex flex-col md:flex-row items-center justify-between p-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#f1daca] p-3 rounded-full text-[#c1956c]">
            <FaStar className="text-4xl" />
          </div>
          <div>
            <h2 className="font-bold text-2xl md:text-4xl text-black">
              Summer Collection is Live!
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Grab flat <span className="font-medium text-black">20% off</span> on Women Tops & Shirts.
            </p>
          </div>
        </div>
        <button className="bg-black text-white text-lg md:text-2xl px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300">
          Shop Now
        </button>
      </div>

      {/* Category Section */}
      <div className="w-full py-10 flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-bold text-center">More Products Coming Soon!</h1>
        <div className="flex flex-wrap justify-center gap-4 w-full px-4">
          <CategorySlot />
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full flex flex-col items-center">
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
