import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-3">🎉 Order Placed Successfully!</h1>
        <p className="text-lg mb-4">
          Thank you for your order. Your product will be shipped soon 🚚
        </p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-center gap-4">
        <Link
          to="/shop"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          🛍 Continue Shopping
        </Link>
        <Link
          to="/"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          🏠 Go Home
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
