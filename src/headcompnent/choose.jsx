// src/components/WhyChooseUs.jsx
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Why Choose Us */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            "Wide range of laptops, printers & accessories",
            "Flexible rental solutions for businesses & individuals",
            "Affordable pricing with genuine products",
            "24x7 dedicated customer support",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <span className="text-green-500 text-2xl">✅</span>
              <p className="mt-4 text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Latest laptops",
              desc: "For students & professionals",
              img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "High-speed printers",
              desc: "Perfect for office & home",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "Computer accessories",
              desc: "Best prices guaranteed",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-gray-600">{product.desc}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
