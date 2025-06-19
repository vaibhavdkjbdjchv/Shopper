import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
    stock: '',
    // isTop: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://localhost:3000/api/Allproduct', formData);
  //     console.log('✅ Product added:', response.data);
  //     alert("Product added successfully!");
  //     setFormData({
  //       name: '',
  //       price: '',
  //       description: '',
  //       image: '',
  //       category: '',
  //       stock: '',
  //       // isTop: false
  //     });
  //   } catch (error) {
  //     console.error('❌ Failed to add product:', error);
  //     alert("Error adding product. Check console.");
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:3000/api/AllProduct', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Product added:', response.data);
    alert("Product added successfully!");

    setFormData({
      name: '',
      price: '',
      description: '',
      image: '',
      category: '',
      stock: '',
    });
  } catch (error) {
    console.error('❌ Failed to add product:', error);
    alert("Error adding product. Check console.");
  }
};

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required /><br /><br />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required /><br /><br />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required /><br /><br />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required /><br /><br />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required /><br /><br />
        <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required /><br /><br />

        {/* <label>
          <input type="checkbox" name="isTop" checked={formData.isTop} onChange={handleChange} />
          {' '}Mark as Top Product
        </label><br /><br /> */}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
