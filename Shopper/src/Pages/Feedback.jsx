import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa";
import Contect from "../Components/Navbar/Contect";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const feedbacks = [
  {
    name: "Aarav Shah",
    feedback: "Amazing product quality and timely delivery. Highly satisfied!",
    rating: 5,
  },
  {
    name: "Meera Patel",
    feedback:
      "Great shopping experience. User-friendly website and helpful support.",
    rating: 4,
  },
  {
    name: "Rahul Verma",
    feedback: "Good range of products but delivery took a bit longer.",
    rating: 3,
  },
  {
    name: "Sneha Iyer",
    feedback: "Very easy to find what I wanted. Love the interface!",
    rating: 5,
  },
  {
    name: "Kunal Mehta",
    feedback: "Quality could be better, but overall worth the price.",
    rating: 4,
  },
];

const Feedback = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[12%] flex flex-col items-center justify-between">
        <div className="w-full bg h-[30%] bg-[#ffefb0f5] flex  bg-[] items-center justify-between">
          <Contect />
        </div>
        <div className="w-full h-[70%]  flex items-center justify-between">
          <Navbar />
        </div>
      </div>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Customer Feedback
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((fb, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800">{fb.name}</h3>
              <p className="text-gray-600 mt-2 mb-4 italic">"{fb.feedback}"</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={
                      i < fb.rating ? faStar : faStar
                    }
                    className={`text-yellow-500 `}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
           <div className="w-screen h-[30%]">
          <Footer />
        </div>
    </div>
  );
};

export default Feedback;
