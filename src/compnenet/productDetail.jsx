import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import API from "../api";
import Cookies from "js-cookie";

import Navbar2 from "../navbar2";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
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
  const selectedProduct = { ...product, quantity }; // include quantity
  Cookies.set("selectedProduct", JSON.stringify(selectedProduct), { expires: 1 });
  navigate("/shipping");
};

  // ✅ Add to Cart function
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingIndex = cart.findIndex((item) => item._id === product._id);

    if (existingIndex >= 0) {
      // Update quantity if already in cart
      cart[existingIndex].quantity += quantity;
    } else {
      // Add new product with quantity
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart 🛒`);
    
     navigate('/cart');
  };

  if (!product) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <>
      <Navbar2 />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-center text-2xl bg-blue-950 p-2 m-2 text-white rounded-lg">
          Product Details
        </h1>

        <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg p-6 mt-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-xl border"
          />

          <div>
            <h1 className="text-3xl font-bold mb-3 text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
            <span className="text-green-600 font-bold text-2xl block mb-6">
              ₹{product.price}
            </span>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-200 text-lg rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-gray-200 text-lg rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 bg-yellow-500 text-white text-lg rounded-lg hover:bg-yellow-600 transition"
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition"
              >
                🚀 Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
