import "./App.css";
import { CategoryProvider } from "./Components/category/CategoryContext";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Feedback from "./Pages/Feedback";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectedProduct from "./Pages/SelectedProduct";
import Footer from "./Components/Footer/Footer";
// import AddProduct from "./Pages/Admin/AddProduct";

function App() {
  return (
    <CategoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/selectedproduct" element={<SelectedProduct />} />
          {/* <Route path="/AddProduct" element={<AddProduct />} /> */}
        </Routes>
      </Router>
    </CategoryProvider>
  );
}

export default App;
