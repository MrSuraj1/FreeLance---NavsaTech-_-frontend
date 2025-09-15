// src/pages/BlogPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Laptops for Students in 2025",
      desc: "Looking for the perfect laptop? Here are the top 5 budget-friendly and high-performance laptops every student should consider.",
      img: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 2,
      title: "Why Renting IT Equipment is Smart for Startups",
      desc: "Startups often face budget challenges. Renting laptops, printers, and accessories can save costs and provide flexibility.",
      img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 3,
      title: "How to Maintain Your Printer for Long Life",
      desc: "Printers can last longer with proper care. Discover the best tips to maintain your office or home printer.",
      img: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
  ];

  return (
<>

<Navbar />
<section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
          Our Blog
        </h1>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.desc}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>);
}
