import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function TopProductCard({ ProductName, Des, Price, ImageSrc }) {
  return (
    <div className="min-w-[250px] sm:min-w-[80%] md:min-w-[45%] lg:min-w-[30%] w-[25%] rounded-4xl bg-white flex flex-col md:flex-row items-center justify-between px-4 py-4 shadow-lg gap-4">
      <div className="w-full md:w-[40%] h-40 flex justify-center items-center">
        <img
          src={ImageSrc}
          alt={ProductName}
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-center items-start gap-2">
        <h1 className="text-xl md:text-2xl uppercase font-bold text-left">
          {ProductName}
        </h1>
        <p className="text-left text-gray-500 text-sm">{Des}</p>
        <p className="text-left text-black font-bold text-lg md:text-2xl">
          ₹{Price}
        </p>
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
      {/* Scroll Buttons - hidden on small screens */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md px-3 py-2 rounded-full text-3xl font-bold"
      >
        ←
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md px-3 py-2 rounded-full text-3xl font-bold"
      >
        →
      </button>

      {/* Products Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-8 no-scrollbar"
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
