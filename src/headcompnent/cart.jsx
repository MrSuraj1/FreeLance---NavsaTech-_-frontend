import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar2 from "../navbar2";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // ✅ Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ✅ Update quantity
  const updateQuantity = (id, action) => {
    const updatedCart = cart.map((item) =>
      item._id === id
        ? {
            ...item,
            quantity:
              action === "increase"
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
          }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Calculate total price
  const getTotal = () =>
    cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

  // ✅ Checkout (navigate to shipping)
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    navigate("/shipping");
  };

  return (
    <>
    <Navbar2 />
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-center text-2xl font-bold mb-6 bg-blue-950 text-white p-3 rounded">
          🛒 Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
            <Link
              to="/"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 bg-white shadow rounded-lg p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item._id, "decrease")}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item._id, "increase")}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item._id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-white shadow rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <p className="text-lg mb-2">
                Items: <span className="font-semibold">{cart.length}</span>
              </p>
              <p className="text-lg mb-4">
                Total:{" "}
                <span className="font-bold text-green-600">₹{getTotal()}</span>
              </p>
              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                ✅ Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
