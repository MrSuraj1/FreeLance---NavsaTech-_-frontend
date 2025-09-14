import React, { useState, useEffect } from "react";

const slides = [
  "https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_30fps.mp4", // IT workspace video
  "https://videos.pexels.com/video-files/853850/853850-hd_1920_1080_30fps.mp4", // laptop work
  "https://videos.pexels.com/video-files/5740715/5740715-hd_1920_1080_30fps.mp4", // office background
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // auto-change every 6s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden text-white">
      {/* Video Slides */}
      {slides.map((src, index) => (
        <video
          key={index}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 animate-fadeIn">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
          Your Trusted IT Partner for{" "}
          <span className="text-yellow-400">Sales & Rentals</span>
        </h1>

        <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto text-gray-200 leading-relaxed">
          Laptops, Printers & Accessories – Reliable, Affordable & Hassle-Free
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#products"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition transform"
          >
            Shop Now
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-black hover:scale-105 transition transform"
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-yellow-400 scale-125" : "bg-gray-400/70"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
