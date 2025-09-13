import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ShopPage from "./compnenet/shop";
import About from "./compnenet/about";
import Contact from "./compnenet/contact";
import Detail from "./compnenet/productDetail";
import ShippingForm from "./compnenet/shipping";
import OrderSuccess from "./compnenet/succes";
import AdminOrder from "./compnenet/admin";
import Found from "./404";
import Footer from "./compnenet/Footer";

function App() {
  return (
    <>
      <div className="bg-black text-white p-1 text-center">
        50% OFF ON PRODUCT
      </div>

      <Routes>
               <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/:id" element={<Detail />} />
           <Route path="/shipping" element={<ShippingForm />} />
         <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/admimOrder" element={<AdminOrder />} />
          <Route path="*" element={<Found />} />
       
       
      </Routes>
         <Footer />
    </>
  );
}

export default App;
