import React, { useEffect, useState } from "react";
import API from "../api";

export default function AdminProducts() {
  const emptyForm = { name: "", price: "", description: "", image: "" };
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null); // null => creating, otherwise editing

  // fetch products list
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get("/shop"); // GET /api/shop
      setProducts(res.data);
    } catch (err) {
      console.error("❌ Error fetching products:", err.response?.data || err.message);
      alert("Failed to load products. Check console.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // submit create or update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.price.trim()) {
      return alert("Name and price are required.");
    }

    setSaving(true);
    try {
      if (editingId) {
        // update
        await API.put(`/shop/${editingId}`, form); // PUT /api/shop/:id
        alert("Product updated.");
      } else {
        // create
        await API.post("/shop", form); // POST /api/shop
        alert("Product created.");
      }
      setForm(emptyForm);
      setEditingId(null);
      await fetchProducts();
    } catch (err) {
      console.error("❌ Save error:", err.response?.data || err.message);
      alert("Failed to save product. Check console.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (p) => {
    setEditingId(p._id || p.id); // prefer Mongo _id, fallback to id
    setForm({
      name: p.name || "",
      price: p.price || "",
      description: p.description || "",
      image: p.image || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this product?")) return;
    try {
      await API.delete(`/shop/${id}`); // DELETE /api/shop/:id
      alert("Deleted.");
      fetchProducts();
    } catch (err) {
      console.error("❌ Delete error:", err.response?.data || err.message);
      alert("Failed to delete product.");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{editingId ? "Edit Product" : "Add New Product"}</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product name"
            className="p-3 border rounded"
            required
          />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price (number or formatted)"
            className="p-3 border rounded"
            required
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="p-3 border rounded col-span-2"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short description"
            className="p-3 border rounded col-span-2"
            rows="3"
          />
        </div>

        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-60"
          >
            {saving ? "Saving..." : editingId ? "Update Product" : "Add Product"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2 className="text-xl font-semibold mb-4">Existing Products</h2>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p._id || p.id} className="border rounded-lg p-4 bg-white shadow relative">
              <img
                src={p.image || "https://via.placeholder.com/400x250?text=No+Image"}
                alt={p.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-green-600 font-bold">₹{p.price}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p._id || p.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
