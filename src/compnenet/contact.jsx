import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../navbar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ulths7j", // replace with your EmailJS service ID
        "template_sfiy2ho", // replace with your template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "I0B3bAi4uo5sngBwa" // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        (err) => {
          console.error("Error sending email:", err);
          alert("Failed to send message. Try again!");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Side - Company Info */}
          <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <p className="text-gray-700">Get in touch with us using the details below:</p>

            <div className="space-y-3 text-gray-800">
              <p><strong>📍 Address:</strong> R 887, Block R, Raghubir Nagar, Tagore Garden Extension, New Delhi, Delhi, 110027</p>
              <p><strong>📧 Email:</strong> manoj.yadav@navsatech.com</p>
              <p><strong>📞 Phone:</strong> +91 9711448847</p>
            </div>

            <div className="mt-6">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.756514433276!2d77.2090218!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1e3aa5cd01%3A0x0!2zMjjCsDM2JzUwLjIiTiA3N8KwMTInMzIuNSJF!5e0!3m2!1sen!2sin!4v1675678901234!5m2!1sen!2sin"
                className="w-full h-60 rounded-lg border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
