import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function NewProduct() {
  const [newestProducts, setNewestProducts] = useState([]);

  useEffect(() => {
    const fetchNewestProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/newest-products");
        setNewestProducts(res.data);
      } catch (error) {
        console.error("❌ Failed to fetch newest products:", error);
      }
    };

    fetchNewestProducts();
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="w-[90%] flex flex-wrap justify-evenly gap-10">
        {newestProducts.slice(0, 6).map((item, index) => (
          <div
            key={index}
            // onClick={}
            className="w-[250px] bg-white hover:shadow-xl rounded-3xl p-5 flex flex-col items-center transition-shadow duration-500"
          >
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-lg bg-black p-2 rounded-full text-white absolute top-0 right-0 m-2 hover:bg-gray-800 cursor-pointer"
              />
              <img
                src={item.image?.[0] || item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-2xl"
              />
            </div>
            <h2 className="mt-3 text-xl font-bold uppercase text-center">
              {item.name}
            </h2>
            <p className="text-sm text-gray-500 mt-2 text-center">
              {item.description}
            </p>
            <p className="mt-2 text-lg font-bold text-gray-800">
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewProduct;
