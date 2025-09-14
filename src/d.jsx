// src/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative h-[300px] md:h-[400px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://www.pexels.com/download/video/3255275/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional, for better text contrast) */}
      <div className="absolute inset-0 bg-violet-900/40 z-10"></div>

      {/* Navbar Content */}
      <nav className="relative z-20 flex items-center justify-between p-4 text-white">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/">NAVSA TECH</Link>
        </div>

        {/* Hamburger button - shown on mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static left-0 w-full md:w-auto bg-violet-900 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "top-16" : "top-[-500px]"
          }`}
        >
          <Link to="/" className="block py-2 md:py-0">
            Home
          </Link>
          <Link to="/shop" className="block py-2 md:py-0">
            Shop
          </Link>
 
          
          <Link to="/about" className="block py-2 md:py-0">
            About
          </Link>
          <Link to="/contact" className="block py-2 md:py-0">
            Contact
          </Link>
        </div>
      </nav>

<div className="relative z-20  items-center justify-between p-4 text-white mt-19">
<h1 className="text-2xl text-center relative ">NavsaTech</h1><br></br>
<h3 className="text-xl text-center relative ">IT leading company</h3>
</div>
    </header>
  );
}

export default Navbar;
