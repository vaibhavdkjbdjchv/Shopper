const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  marketPrice: { type: Number , required: false},
  discount: { type: Number ,required: false},
  description: { type: String, required: true },
  image: { type: [String], required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  topProduct: { type: Boolean, default: false },
  newestProduct: { type: Boolean, default: false },
});

const ProductModel = model('product', ProductSchema);

// ✅ Correct export here
module.exports = ProductModel;
