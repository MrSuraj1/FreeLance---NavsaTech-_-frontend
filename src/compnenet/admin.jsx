import React, { useEffect, useState } from "react";
import API from "../api";

export default function AdminOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/orders"); // matches your backend route
        setOrders(res.data);
      } catch (error) {
        console.error("❌ Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📦 Admin Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((o, i) => (
            <div
              key={o._id || i}
              className="border rounded-lg p-4 shadow bg-white"
            >
              <h3 className="font-semibold text-lg">{o.name}</h3>
              <p>📍 {o.address}</p>
              <p>📞 {o.phone}</p>

              {/* Safe check with optional chaining */}
              <div className="mt-2">
                <p className="font-semibold">
                  Product: {o.product?.name || "N/A"}
                </p>
                <p>💰 {o.product?.price || "N/A"}</p>
                {o.product?.image && (
                  <img
                    src={o.product.image}
                    alt={o.product?.name}
                    className="w-32 h-32 object-cover mt-2 rounded"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
