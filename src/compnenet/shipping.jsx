import React, { useState } from "react";
import Cookies from "js-cookie";
import API from "../api";
import { useNavigate } from "react-router-dom";

function ShippingForm() {
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const navigate = useNavigate();

  const product = Cookies.get("selectedProduct")
    ? JSON.parse(Cookies.get("selectedProduct"))
    : null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/orders", { ...form, product }); // save order in backend
      Cookies.remove("selectedProduct"); // clear cookie
      navigate("/order-success"); // redirect success page
    } catch (error) {
      console.error("❌ Error placing order:", error.response?.data || error.message);
    }
  };

  if (!product)
    return <h2 className="text-center mt-10 text-red-600">⚠️ No product selected</h2>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">🚚 Shipping Details</h2>

      {/* Product Preview */}
      <div className="flex items-center gap-4 mb-6 border p-4 rounded-xl bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <span className="text-green-600 font-bold text-lg">₹{product.price}</span>
        </div>
      </div>

      {/* Shipping Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleChange}
          required
          rows="3"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          pattern="[0-9]{10}"
          title="Enter a valid 10-digit phone number"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
        >
          ✅ Place Order
        </button>
      </form>
    </div>
  );
}

export default ShippingForm;
