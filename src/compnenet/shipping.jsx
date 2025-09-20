import React, { useState } from "react";
import Cookies from "js-cookie";
import API from "../api";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "card",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

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
      await API.post("/orders", { ...form, product }); // ✅ save order in backend
      Cookies.remove("selectedProduct");
      navigate("/order-success");
    } catch (error) {
      console.error("❌ Error placing order:", error.response?.data || error.message);
    }
  };

  if (!product)
    return (
      <h2 className="text-center mt-10 text-red-600">
        ⚠️ No product selected
      </h2>
    );

  const total = Number(product.price) * Number(product.quantity || 1);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-xl mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
        🛒 Checkout
      </h2>

      {/* Order Summary */}
      <div className="border rounded-xl p-4 bg-gray-50 mb-6">
        <h3 className="font-semibold text-lg mb-3">Order Summary</h3>
        <div className="flex items-center gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-lg border"
          />
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <span className="block text-gray-700">
              Quantity: <b>{product.quantity || 1}</b>
            </span>
            <span className="text-green-600 font-bold text-lg">
              ₹{total}
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Customer Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleChange}
          required
          rows="3"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        {/* Payment Method */}
        <div className="border rounded-xl p-4 bg-gray-50">
          <h3 className="font-semibold text-lg mb-3">Payment Method</h3>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4"
          >
            <option value="card">💳 Credit/Debit Card</option>
            <option value="cod">💵 Cash on Delivery</option>
            <option value="upi">📱 UPI</option>
          </select>

          {form.paymentMethod === "card" && (
            <div className="grid md:grid-cols-3 gap-3">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={form.cardNumber}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={form.cvv}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>

        {/* Place Order */}
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition text-lg"
        >
          ✅ Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
