import React, { useContext, useState } from "react";
import { CategoryContext } from "./CategoryContext";
const categories = ["shirt", "pants", "shoes", "beg", "watches", "goggles", "women"];

function CategorySlot() {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  return (
    <div className="w-full  flex flex-wrap justify-evenly gap-6 py-6">
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(cat)}
          className={`px-15 py-1 rounded-full capitalize text-lg border transition duration-500 ${
            selectedCategory === cat
              ? "bg-black text-white font-bold"
              : "text-black hover:bg-black hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default CategorySlot;
