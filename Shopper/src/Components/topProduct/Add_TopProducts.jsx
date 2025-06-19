import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    stock: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle text inputs
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle image file input
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert('Please select an image file.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('description', product.description);
    formData.append('stock', product.stock);
    formData.append('image', imageFile);

    try {
      const response = await fetch('http://localhost:5173/api/products', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert('Product added successfully!');
        setProduct({
          name: '',
          price: '',
          category: '',
          description: '',
          stock: '',
          image: '',
        });
        setImageFile(null);
        e.target.reset(); // reset the form
      } else {
        alert('Error: ' + (data.error || 'Something went wrong'));
      }
    } catch (error) {
      alert('Network error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center tracking-wide">
          Add New Product
        </h2>

        <label className="block mb-2 font-medium" htmlFor="name">
          Product Name
        </label>
        <input
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Enter product name"
        />

        <label className="block mb-2 font-medium" htmlFor="price">
          Price
        </label>
        <input
          id="price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Enter price"
        />

        <label className="block mb-2 font-medium" htmlFor="category">
          Category
        </label>
        <input
          id="category"
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Enter category"
        />

        <label className="block mb-2 font-medium" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          rows="3"
          className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Enter product description"
        ></textarea>

        <label className="block mb-2 font-medium" htmlFor="stock">
          Stock Quantity
        </label>
        <input
          id="stock"
          name="stock"
          type="number"
          value={product.stock}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Enter stock quantity"
        />

        <label className="block mb-2 font-medium" htmlFor="image">
          Product Image
        </label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-6 w-full text-gray-300"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-gray-900 font-semibold py-3 rounded hover:bg-gray-200 transition disabled:opacity-50"
        >
          {loading ? 'Uploading...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
