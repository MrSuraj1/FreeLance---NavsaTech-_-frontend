import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import API from "../api"; // <-- import your axios instance
import { Link } from "react-router-dom";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products with API instance
  const fetchProducts = async () => {
    try {
      const res = await API.get("/shopaa"); // ✅ no need to write full URL
      setProducts(res.data);
    } catch (error) {
      console.error(
        "❌ Error fetching products:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-xl font-semibold mt-10">
        Loading products...
      </h2>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">🛍 Shop Page</h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <div
                key={p._id}
                className="border rounded-2xl shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition bg-white"
              >
                <Link to={`/shop/${p._id}`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 object-cover rounded-xl mb-3"
                  />
                </Link>

                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-gray-600 text-sm text-center line-clamp-2">
                  {p.description}
                </p>
                <span className="text-green-600 font-bold mt-2">
                  ₹{p.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
