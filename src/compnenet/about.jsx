import React from "react";
import Navbar from "../navbar";

export default function About() {
  return (<>
<Navbar />
<div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

      <p className="text-lg mb-4 text-center">
        Welcome to our website! This platform is designed to provide the best shopping experience.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Owner</h2>
        <p className="text-gray-700">Manoj Yadav</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Developer</h2>
        <p className="text-gray-700">Suraj</p>
      </div>
    </div>
</>  );
}
