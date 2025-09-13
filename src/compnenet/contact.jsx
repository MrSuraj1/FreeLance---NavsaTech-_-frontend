import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../navbar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "I0B3bAi4uo5sngBwa" // replace with your EmailJS public key
      )
      .then(
        (res) => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("Error sending email:", err);
          alert("Failed to send message. Try again!");
        }
      );
  };

  return (<>
     <Navbar />
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 space-y-4">
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
</>  );
}
