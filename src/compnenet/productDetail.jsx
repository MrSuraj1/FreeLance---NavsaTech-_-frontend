import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import Cookies from "js-cookie";
import Navbar from "../navbar";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/shop/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("❌ Error fetching product:", error.response?.data || error.message);
      }
    };
    fetchProduct();
  }, [id]);

  const handleBuyNow = () => {
    Cookies.set("selectedProduct", JSON.stringify(product), { expires: 1 });
    navigate("/shipping");
  };

  if (!product) return <h2 className="text-center mt-10">Loading...</h2>;

  return (<>
    <Navbar />
    <div className="p-6 max-w-4xl mx-auto">
         <h1 className="text-center text-2xl bg-blue-950 p-2 m-2 text-white">Product Details</h1>

      <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg p-6 mt-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <span className="text-green-600 font-bold text-2xl block mb-6">
            ₹{product.price}
          </span>

          <button
            onClick={handleBuyNow}
            className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition"
          >
            🚀 Buy Now
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
