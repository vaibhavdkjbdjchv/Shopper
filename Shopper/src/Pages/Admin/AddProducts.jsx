import React, { useState } from "react";
import axios from "axios";
import Contect from "../../Components/Navbar/Contect";
import Navbar from "../../Components/Navbar/Navbar";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    marketPrice: "",
    discount: "",
    description: "",
    image: [], // Will hold multiple image URLs
    category: "",
    stock: "",
    topProduct: false,
    newestProduct: false,
  });

  const [imageFiles, setImageFiles] = useState([]); // Store selected files

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4); // Limit to 4 files
    setImageFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const uploadedImageUrls = [];

      for (let file of imageFiles) {
        const imgForm = new FormData();
        imgForm.append("image", file);

        const uploadRes = await axios.post(
          "https://shopper-1-gx2u.onrender.com/upload",
          imgForm,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        uploadedImageUrls.push(uploadRes.data.imageUrl); // assume backend returns { imageUrl: '...' }
      }

      const productData = {
        ...formData,
        image: uploadedImageUrls,
      };

      const response = await axios.post(
        "https://shopper-1-gx2u.onrender.com/api/Allproduct",
        productData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Product added:", response.data);
      alert("✅ Product added successfully!");

      // Reset form
      setFormData({
        name: "",
        price: "",
        marketPrice: "",
        discount: "",
        description: "",
        image: [],
        category: "",
        stock: "",
        topProduct: false,
        newestProduct: false,
      });
      setImageFiles([]);
    } catch (error) {
      console.error("❌ Failed to add product:", error);
      alert("❌ Error adding product. Check console.");
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[12%] flex flex-col items-center justify-between">
        <div className="w-full h-[30%] bg-[#ffefb0f5] flex items-center justify-between">
          <Contect />
        </div>
        <div className="w-full h-[70%] flex items-center justify-between">
          <Navbar />
        </div>
      </div>

      <div className="w-full h-[88%] flex flex-col justify-evenly items-center">
        <h2 className="text-5xl font-bold">Add New Product</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="marketPrice"
            placeholder="Market Price"
            value={formData.marketPrice}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount (%)"
            value={formData.discount}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
            className="border px-3 py-2 rounded"
          />
          <small className="text-sm text-gray-500">
            Upload min & max 4 images{" "}
          </small>

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded"
          />

          <label>
            <input
              type="checkbox"
              name="topProduct"
              checked={formData.topProduct}
              onChange={handleChange}
            />{" "}
            Mark as Top Product
          </label>

          <label>
            <input
              type="checkbox"
              name="newestProduct"
              checked={formData.newestProduct}
              onChange={handleChange}
            />{" "}
            Mark as Newest Product
          </label>
          <br />
          <br />

          <button
            type="submit"
            className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
