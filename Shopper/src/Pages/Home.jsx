import React, { useContext } from "react";
import images from "../../src/assets/ProductData/ProductData";
import image from "../assets/Images/images";
import Navbar from "../Components/Navbar/Navbar";
import Contect from "../Components/Navbar/Contect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { CategoryContext } from "../Components/category/CategoryContext";
import { delay, motion } from "motion/react";
import Footer from "../Components/Footer/Footer";
import TopProduct from "../Components/topProduct/TopProduct";
import NewestProduct from "../Components/newproduct/NewProduct";
function Home() {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  // Filter images based on the selected category
  const filteredImages = images.filter(
    (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
  );
  return (
    <div className="overflow-x-hidden">
      <div className="w-screen md:h-screen h-auto ">
        <div className="w-full h-[12%] flex flex-col items-center justify-between">
          <div className="w-full bg lg:h-[30%] bg-[#ffefb0f5] flex items-center justify-between">
            <Contect />
          </div>
          <div className="w-full h-[70%]  flex items-center justify-between">
            <Navbar />
          </div>
        </div>

        {/* First page  */}
        <div className="w-full h-auto  md:h-[88%] flex md:flex-row flex-col justify-between items-center">
          <div className=" h-full flex items-center">
            <img src={image.MensShirt3} alt="" className="h-full " />
          </div>
          <div className="lg:w-[33%] w-1/2 h-full flex items-center gap-5 justify-center">
            <div className=" text-center flex flex-col  py-20 px-5">
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
                className="text-4xl md:text-5xl font-semibold text-[#5a2c2c] leading-snug"
              >
                Discover Fashion That Reflects Your
                <em className="text-[#004998] italic">Confidence</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-6 text-gray-700 max-w-xl mx-auto"
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
                className="mt-10"
              >
                <a
                  href="/product"
                  className="mt-8 px-8 py-3 bg-[#5a2c2c] text-white tracking-widest font-medium hover:bg-[#422020] transition"
                >
                  SHOP NOW
                </a>
              </motion.div>
            </div>
          </div>
          <div className="h-full lg:flex hidden  items-center justify-center">
            <img src={image.womenTShirt} alt="" className="h-full" />
          </div>
        </div>
        {/* First page end */}
      </div>
      {/* secoond page */}
      <div className="w-screen md:h-screen py-10 flex flex-col justify-between items-center">
        <div className="w-full  h-1/2 py-5 flex gap-5 flex-col justify-center items-center">
          <motion.h1
            onViewportLeave={{ opacity: 0 }}
            onViewportEnter={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-3xl uppercase text-center font-bold border-b-3 border-[#ffb20d]"
          >
            Popular In Mens
          </motion.h1>
          <div className="flex w-[90%] justify-center">
            <TopProduct />
          </div>
        </div>
  <div className="w-full mt-5 bg-[#ffefb0f5] flex justify-center items-center px-4 py-6">
  <div className="w-full max-w-[1200px] shadow-2xl flex flex-col md:flex-row justify-between items-center rounded-3xl bg-white p-6 md:p-10 gap-6">
    
    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-6 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl lg:text-7xl capitalize font-bold leading-tight">
        exclusive <span className="block text-xl md:text-3xl">Offer for you</span>
      </h1>
      <p className="text-base md:text-xl text-gray-500 capitalize">
        only on best seller Product
      </p>
      <div>
        <a
          href="/product"
          className="px-6 md:px-10 py-2 bg-[#ffcb1f] rounded-lg hover:font-bold duration-700 cursor-pointer inline-block"
        >
          Check Now
        </a>
      </div>
    </div>

    {/* Images Section */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-evenly items-center gap-4">
      <img
        src={image.Wome6}
        alt=""
        className="w-1/2 h-auto max-h-48 md:max-h-64 rounded-2xl object-cover"
      />
      <img
        src={image.Wome11}
        alt=""
        className="w-1/2 h-auto max-h-48 md:max-h-64 rounded-2xl object-cover"
      />
    </div>
  </div>
</div>

      </div>
      {/* secoond page end */}
      <div className="w-screen ms:h-screen">
        <div className="h-[70%]">
          <h1 className="text-4xl font-bold text-center"> New Collection</h1>
          {/* <div className="w-full flex justify-center items-center py-10">
            <div className="w-[90%] flex justify-evenly">
              {images.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  className=" w-[20%] hover:shadow-2xl duration-700 rounded-3xl p-5 flex flex-col text-center justify-center items-center"
                >
                  <div className=" relative">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-lg bg-black p-2 rounded-full text-white absolute top-0 right-0 m-2 hover:bg-gray-800 duration-300 cursor-pointer"
                    />
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-50 h-auto rounded-3xl"
                    />
                  </div>
                  <h2 className="mt-2 text-2xl font-bold uppercase">
                    {item.name}
                  </h2>
                  <p className="w-[80%] mt-2 text-sm text-gray-600 capitalize">
                    {item.description}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-800">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
          <NewestProduct />
        </div>

        <div className="w-screen h-[30%]">
          <Footer />
        </div>
      </div>
      {/* Third Page end */}
    </div>
  );
}

export default Home;
