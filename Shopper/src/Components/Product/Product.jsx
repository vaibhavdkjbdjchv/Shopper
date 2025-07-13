import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { CategoryContext } from "../category/CategoryContext";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { selectedCategory } = useContext(CategoryContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://shopper-1-gx2u.onrender.com/api/AllProduct");
        setProducts(res.data);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (item) =>
      item.category &&
      item.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div className="w-[90%] flex flex-wrap justify-evenly items-center gap-10 py-10">
      {filteredProducts.map((item, index) => (
        <div
          key={index}
          onClick={() =>
            navigate(`/selectedproduct`, { state: { product: item } })
          }
          className="w-[20%] min-w-[180px] max-w-[250px] sm:w-[40%] md:w-[30%] lg:w-[20%] h-100 hover:shadow-2xl duration-700 rounded-3xl p-5 flex flex-col text-center justify-between items-center cursor-pointer"
        >
          <div className="relative w-full flex justify-center">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-lg bg-black p-2 rounded-full text-white absolute top-0 right-0 m-2 hover:bg-gray-800 duration-300"
            />
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-50 h-50 rounded-3xl object-cover"
            />
          </div>
          <h2 className="mt-2 text-lg md:text-xl lg:text-2xl font-bold uppercase">
            {item.name}
          </h2>
          <p className="w-[80%] h-15 overflow-scroll mt-2 text-sm text-gray-600 capitalize">
            {item.description}
          </p>
          <p className="mt-2 text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
            ₹{item.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Products;
