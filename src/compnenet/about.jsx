import React from "react";
import Navbar from "../navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <h1 className="text-5xl font-extrabold mb-6">About Navsa Tech</h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            Navsa Tech is a trusted IT solutions company providing sales and
            rental services for laptops, printers, and accessories. With a
            vision to make technology affordable and accessible, we serve
            businesses, startups, and individuals across India. <br />
            <br />
            Our focus is on delivering reliable products, transparent pricing,
            and round-the-clock customer support.
          </p>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h2 className="text-3xl font-bold text-indigo-600 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To simplify technology with quality products and reliable
                services.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h2 className="text-3xl font-bold text-pink-600 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be India’s most trusted IT solutions provider.
              </p>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Valuable Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Client Cards */}
            <a
              href="https://www.deepalidesigns.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src="https://framerusercontent.com/images/uowemVJ2HhD8CPyYRhaD2ecjs.png?scale-down-to=512"
                alt="Deepali Designs"
                className="mx-auto mb-4 h-16 object-contain bg-gray-600 p-1 rounded-xl"
              />
              <h3 className="text-xl font-semibold">Deepali Designs</h3>
              <p className="text-gray-600 text-sm">Event & Wedding Solutions</p>
            </a>

            <a
              href="https://www.ustraa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src="https://d1ebdenobygu5e.cloudfront.net/media/react/images/USTRAA-logo.svg"
                alt="Ustraa"
                className="mx-auto mb-4 h-16 object-contain"
              />
              <h3 className="text-xl font-semibold">Ustraa</h3>
              <p className="text-gray-600 text-sm">Men’s Grooming Brand</p>
            </a>

            <a
              href="https://axepertexhibits.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src="https://axepertexhibits.com/assets/upload/logo/logo.png"
                alt="Axepertexhibits"
                className="mx-auto mb-4 h-16 object-contain bg-black rounded-b-sm p-1"
              />
              <h3 className="text-xl font-semibold">Axepertexhibits</h3>
              <p className="text-gray-600 text-sm">
                Exhibition & Event Services
              </p>
            </a>

            <a
              href="https://www.kapsun.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src="https://www.kapsun.com/images/kapsun-logo.svg"
                alt="Kapsun"
                className="mx-auto mb-4 h-16 object-contain"
              />
              <h3 className="text-xl font-semibold">Kapsun</h3>
              <p className="text-gray-600 text-sm">Industrial Solutions</p>
            </a>

            <a
              href="https://www.valeurfabtex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src="https://www.valeurfabtex.com/img/logo.jpg"
                alt="Valeurfabtex"
                className="mx-auto mb-4 h-16 object-contain"
              />
              <h3 className="text-xl font-semibold">Valeurfabtex</h3>
              <p className="text-gray-600 text-sm">
                Textile & Fabric Solutions
              </p>
            </a>

            <a
              href="https://gavs.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src="https://gavs.pro/wp-content/uploads/2023/06/main-logo-1-144x144.png"
                alt="Gavs Pro"
                className="mx-auto mb-4 h-16 object-contain bg-black p-1 rounded-b-lg"
              />
              <h3 className="text-xl font-semibold">Gavs Pro</h3>
              <p className="text-gray-600 text-sm">Professional Solutions</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
