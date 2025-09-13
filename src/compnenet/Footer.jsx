import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-sm mt-2 md:mt-0">
          Developed by <span className="font-semibold text-blue-400">Suraj</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
