import React from "react";
import Navbar from "../navbar";

export default function About() {
  return (<>
<Navbar />
<div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Company Description */}
      <section className="py-12 px-6 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-4xl font-bold mb-4">About Navsatech</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Navsatech is a modern web development company focused on delivering
          scalable, secure, and user-friendly digital solutions. We specialize in
          creating responsive websites, e-commerce platforms, and custom web
          applications using the latest technologies like React, Node.js, and
          MongoDB.
        </p>
      </section>

      {/* Clients Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Valuable Clients
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Client Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <img
              src="https://via.placeholder.com/80"
              alt="Client Logo"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Client One</h3>
            <p className="text-gray-600 text-sm">
              E-commerce Website with Admin Dashboard
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <img
              src="https://via.placeholder.com/80"
              alt="Client Logo"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Client Two</h3>
            <p className="text-gray-600 text-sm">
              Portfolio + Blogging Platform
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <img
              src="https://via.placeholder.com/80"
              alt="Client Logo"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Client Three</h3>
            <p className="text-gray-600 text-sm">
              Business Website with CMS Integration
            </p>
          </div>
        </div>
      </section>

      {/* Developer Credit */}
    </div>
</>  );
}
