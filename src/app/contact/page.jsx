"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-10">
          Contact Us
        </h1>

        {/* TOP CONTACT INFO */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <Card icon={<Phone />} title="Phone" value="01856165238" link="tel:01856165238" />
          <Card icon={<Mail />} title="Email" value="100tech.edu@gmail.com" link="mailto:100tech.edu@gmail.com" />
          <Card icon={<MapPin />} title="Address" value="Pallabi, Mirpur-12, Dhaka-1216" />

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-md border border-purple-100"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-4">
              Send Message
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>

          {/* MAP + INFO */}
          <div className="space-y-6">

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-md border">
              <iframe
                src="https://www.google.com/maps?q=Pallabi, Mirpur Dhaka&output=embed"
                width="100%"
                height="250"
                loading="lazy"
              ></iframe>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/8801856165238"
              target="_blank"
              className="block text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp এ যোগাযোগ করুন
            </a>

            {/* EXTRA INFO */}
            <div className="text-sm text-gray-600 bg-purple-50 p-4 rounded-xl border border-purple-100">
              আমরা ২৪/৭ আপনার সেবায় প্রস্তুত আছি। দ্রুত যোগাযোগের জন্য
              ফোন বা WhatsApp ব্যবহার করুন।
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

/* CARD COMPONENT */
function Card({ icon, title, value, link }) {
  const content = (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100 hover:shadow-xl transition">
      <div className="text-purple-700 mb-2">{icon}</div>
      <h2 className="font-semibold text-gray-800">{title}</h2>
      <p className="text-purple-700 font-medium mt-1">{value}</p>
    </div>
  );

  return link ? <a href={link}>{content}</a> : content;
}