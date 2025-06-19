import images from "../../assets/ProductData/ProductData";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { CategoryContext } from "../category/CategoryContext";
import { useNavigate } from "react-router-dom";
function SelectProduct() {}

function Products({ SendData }) {
  const navigate = useNavigate();

  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  console.log("Selected Category:", selectedCategory);

  // Filter images based on the selected category
  const filteredImages = images.filter(
    (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const sendData = () => {
    SendData(filteredImages);
  };

  return (
    <div className="w-[90%] flex flex-wrap justify-evenly items-center gap-10 py-10">
      {filteredImages.map((item, index) => (
        <div
          key={index}
          onClick={() =>
            navigate(`/selectedproduct`, { state: { product: item } })
          }
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
          <h2 className="mt-2 text-2xl font-bold uppercase"> {item.name}</h2>
          <p className="w-[80%] mt-2 text-sm text-gray-600 capitalize">
            {item.description}
          </p>
          <p className="mt-2 text-2xl font-bold text-gray-800">{item.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Products;
