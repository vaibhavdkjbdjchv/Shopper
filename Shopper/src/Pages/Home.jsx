import React, { useContext } from "react";
import images from "../../src/assets/ProductData/ProductData";
import image from "../assets/Images/images";
import Navbar from "../Components/Navbar/Navbar";
import Contect from "../Components/Navbar/Contect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { CategoryContext } from "../Components/category/CategoryContext";
import { motion } from "motion/react";
import Footer from "../Components/Footer/Footer";
import TopProduct from "../Components/topProduct/TopProduct";
import NewestProduct from "../Components/newproduct/NewProduct";

function Home() {
  const { selectedCategory } = useContext(CategoryContext);

  // Filter images based on the selected category
  const filteredImages = images.filter(
    (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <div className="w-full">
        <div className="w-full flex flex-col">
          <div className="w-full bg-[#ffefb0f5]">
            <Contect />
          </div>
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/4 flex justify-center">
            <img src={image.MensShirt3} alt="" className="h-64 md:h-full object-contain" />
          </div>
          <div className="w-full lg:w-1/3 flex items-center justify-center p-4">
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="tracking-widest text-sm text-gray-700 mb-3"
              >
                NEW SEASON · NEW STYLE
              </motion.p>
              <motion.h2
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-semibold text-[#5a2c2c] leading-snug"
              >
                Discover Fashion That Reflects Your
                <em className="text-[#004998] italic"> Confidence</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-gray-700 text-sm md:text-base"
              >
                Stay stylish and comfortable with our latest collection. From
                casual wear to statement pieces — find everything that defines
                your look.
              </motion.p>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-6"
              >
                <a
                  href="/product"
                  className="px-6 py-2 bg-[#5a2c2c] text-white tracking-widest font-medium hover:bg-[#422020] transition"
                >
                  SHOP NOW
                </a>
              </motion.div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex justify-center">
            <img src={image.womenTShirt} alt="" className="h-64 md:h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="w-full py-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-3xl uppercase text-center font-bold border-b-2 border-[#ffb20d] mb-6"
        >
          Popular In Mens
        </motion.h1>
        <div className="w-[95%]">
          <TopProduct />
        </div>
      </div>

      {/* Offer Section */}
      <div className="w-full bg-[#ffefb0f5] py-10 flex justify-center">
        <div className="w-[95%] max-w-6xl flex flex-col md:flex-row justify-between items-center bg-white shadow-2xl rounded-3xl p-6 gap-6">
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              exclusive <span className="text-2xl block">Offer for you</span>
            </h1>
            <p className="text-lg text-gray-600">only on best seller Product</p>
            <a
              href="/product"
              className="px-6 py-2 bg-[#ffcb1f] rounded-lg hover:font-bold duration-700 cursor-pointer inline-block"
            >
              Check Now
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center gap-4">
            <img src={image.Wome6} alt="" className="h-40 md:h-60 rounded-2xl object-cover" />
            <img src={image.Wome11} alt="" className="h-40 md:h-60 rounded-2xl object-cover" />
          </div>
        </div>
      </div>

      {/* Newest Products */}
      <div className="w-full py-10">
        <h1 className="text-4xl font-bold text-center mb-6">New Collection</h1>
        <div className="w-[95%] mx-auto">
          <NewestProduct />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;