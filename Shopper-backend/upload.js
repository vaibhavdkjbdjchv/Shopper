require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up storage for multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "shopper-products", // folder name in cloudinary
    allowed_formats: ["jpg", "png", "webp"],
  },
});

const upload = multer({ storage });

module.exports = upload;
