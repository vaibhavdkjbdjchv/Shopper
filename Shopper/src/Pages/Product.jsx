import React from "react";
import SearchbBar from "../Components/searchbar/SearchbBar";
import ProductData from "../assets/ProductData/ProductData";
import { FaStar } from "react-icons/fa";
import TopProduct from "../Components/topProduct/TopProduct";
import images from "../assets/Images/images";
import CategorySlot from "../Components/category/CategorySlot";
import Products from "../Components/Product/Product";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Components/Navbar/Navbar";
import Contect from "../Components/Navbar/Contect";
import Footer from "../Components/Footer/Footer";
import ProductsPage from "../Components/demo";

function Product() {
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
      <div className="w-full h-[15%]   flex justify-center items-center ">
        <SearchbBar />
      </div>
      <div className="w-full h-[30%] flex flex-col justify-center items-center gap-5 py-5">
        <h1 className="text-3xl font-bold h-[20%] flex justify-center items-center text-center">
          Top Products
        </h1>
        <div className="h-[90%] w-full flex justify-center items-center ">
          <div className="px-2">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="bg-black text-white p-5 text-lg rounded-full "
            />
          </div>
          <div className="w-[95%] h-full px-5 scroll-smooth flex  justify-between py-5 items-center gap-4">
            <TopProduct
              ProductName="Women Dress"
              Des="Stylish and comfortable top made from high-quality fabric."
              Price="$100"
              ImageSrc={images.Wome11}
            />
            <TopProduct
              ProductName="Men T-Shirt"
              Des="Comfortable and stylish t-shirt made from high-quality cotton."
              Price="$30"
              ImageSrc={images.MensShirt}
            />
            <TopProduct
              ProductName="women T-Shirt"
              Des="Stylish and comfortable t-shirt made from breathable fabric."
              Price="$50"
              ImageSrc={images.Wome6}
            />
          </div>
          <div className="px-2">
            <FontAwesomeIcon
              icon={faArrowRight}
              className=" bg-black text-white p-5 text-lg rounded-full "
            />
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[20%] bg-gradient-to-r from-[#faf2b1]  to-[#fbf6e9] rounded-xl flex items-center justify-between px-30 py-4  mx-auto mt-10">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="bg-[#f1daca] p-3 rounded-full text-[#c1956c]">
            <FaStar className="text-4xl" />
          </div>
          <div>
            <h2 className="font-bold text-4xl  text-black">
              Summer Collection is Live!
            </h2>
            <p className="text-lg text-gray-700">
              Grab flat <span className="font-medium text-black">20% off</span>{" "}
              on Women Tops & Shirts.
            </p>
          </div>
        </div>

        {/* Right Button */}
        <button className="bg-black text-white text-2xl px-10 py-2 rounded-full hover:bg-gray-800 transition-all duration-300">
          Shop Now
        </button>
      </div>
      <div className="w-full h-[20%] py-10 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold">More Products Coming Soon!</h1>
        <div className="flex flex-wrap justify-evenly items-center gap-4 w-full h-full">
          <CategorySlot />
        </div>
      </div>
      <div className="w-full  flex flex-col justify-center items-center">
        <Products />
      </div>
      <div className="w-screen h-[30%]">
        <Footer />
      </div>

      <div className="w-screen h-screen flex justify-center items-center">
        <ProductsPage />
      </div>
    </div>
  );
}

export default Product;
