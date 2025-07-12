import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function TopProductCard({ ProductName, Des, Price, ImageSrc }) {
  return (
    <div  className="h-full min-w-[25%] w-[25%] rounded-4xl bg-white flex justify-between px-2 py-2 items-center shadow-lg">
      <div className="h-[100%] w-[40%]">
        <img
          src={ImageSrc}
          alt={ProductName}
          className="w-fit h-full rounded-3xl"
        />
      </div>
      <div className="w-[60%] gap-2 h-full flex flex-col justify-center items-start px-4">
        <h1 className="text-2xl uppercase font-bold text-left">
          {ProductName}
        </h1>
        <p className="text-left text-gray-500 text-sm">{Des}</p>
        <p className="text-left text-black font-bold text-2xl">₹{Price}</p>
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
    <div className="w-full relative">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md px-2 py-2 flex justify-center items-center  rounded-full text-4xl font-bold"
      >
        ←
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md px-2 py-2 flex justify-center items-center  rounded-full text-4xl font-bold"
      >
        →
      </button>

      {/* Products Row */}
      <div
        ref={scrollRef}
        className=" flex gap-6 overflow-x-auto scroll-smooth px-10 py-10 no-scrollbar"
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
