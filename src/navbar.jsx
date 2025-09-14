// src/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between p-4 text-white">
        {/* Logo */}
        <div className="text-xl font-extrabold tracking-wide">
          <Link to="/">NAVSA TECH</Link>
        </div>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static left-0 w-full md:w-auto bg-black/80 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "top-16" : "top-[-500px]"
          }`}
        >
          <Link to="/" className="block py-2 hover:text-yellow-400">
            Home
          </Link>
          <Link to="/shop" className="block py-2 hover:text-yellow-400">
            Shop
          </Link>
          <Link to="/about" className="block py-2 hover:text-yellow-400">
            About
          </Link>
          <Link to="/contact" className="block py-2 hover:text-yellow-400">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-[calc(100%-80px)] text-center px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Your Trusted IT Partner for{" "}
          <span className="text-yellow-400">Sales & Rentals</span>
        </h1>
        <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto text-gray-200 leading-relaxed">
          Laptops, Printers & Accessories – Reliable, Affordable & Hassle-Free
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/shop"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition transform"
          >
            Shop Now
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border border-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-black hover:scale-105 transition transform"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
