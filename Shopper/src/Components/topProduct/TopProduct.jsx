import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function TopProductCard({ ProductName, Des, Price, ImageSrc }) {
  return (
    <div className="min-w-[250px] max-w-xs w-full rounded-3xl bg-white flex flex-col md:flex-row items-center md:items-start md:justify-start shadow-md hover:shadow-xl transition-all duration-300 p-4">
      <div className="w-full md:w-[40%] h-40 flex justify-center items-center">
        <img
          src={ImageSrc}
          alt={ProductName}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-full md:w-[60%] mt-4 md:mt-0 md:ml-4 flex flex-col justify-between gap-2">
        <h1 className="text-xl md:text-2xl uppercase font-semibold text-gray-800">
          {ProductName}
        </h1>
        <p className="text-gray-600 text-sm md:text-base line-clamp-2">{Des}</p>
        <p className="text-lg md:text-2xl font-bold text-[#111827]">₹{Price}</p>
      </div>
    </div>
  );
}

function TopProduct() {
  const [topProducts, setTopProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const res = await axios.get("https://shopper-1-gx2u.onrender.com/api/top-products");
        setTopProducts(res.data);
      } catch (error) {
        console.error("❌ Failed to fetch top products:", error);
      }
    };
    fetchTopProducts();
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-200 shadow-lg px-3 py-2 rounded-full text-3xl"
      >
        ←
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-200 shadow-lg px-3 py-2 rounded-full text-3xl"
      >
        →
      </button>

      {/* Products Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-6 no-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {topProducts.map((product, index) => (
          <TopProductCard
            key={index}
            ProductName={product.name}
            Des={product.description}
            Price={product.price}
            ImageSrc={product.image?.main || product.image[0]}
          />
        ))}
      </div>
    </div>
  );
}

export default TopProduct;
