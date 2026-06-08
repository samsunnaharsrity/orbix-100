"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-5 lg:py-10 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <span className="text-purple-700 font-semibold uppercase tracking-wider">
            About Us
          </span> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            <span className="text-purple-800">
              Professional Nursing &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
              Caregiver Services
            </span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src="/about.jpg"
              alt="About Us"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              আমাদের লক্ষ্য ও অঙ্গীকার
            </h2>

            <p className="text-gray-600 leading-8 text-medium">
              আমরা পেশাদার, দক্ষ এবং নির্ভরযোগ্য নার্সিং ও
              কেয়ারগিভার সেবা প্রদান করে থাকি।
              রোগীর শারীরিক ও মানসিক সুস্থতার প্রতি
              সর্বোচ্চ গুরুত্ব দিয়ে আমরা নিরাপদ ও
              মানসম্পন্ন সেবা নিশ্চিত করি।
            </p>

            <p className="text-gray-600 leading-8 text-medium mt-4">
              অভিজ্ঞ নার্স ও কেয়ারগিভারদের মাধ্যমে
              ঘরে বসেই উন্নত সেবা পাওয়ার সুযোগ সৃষ্টি
              করাই আমাদের প্রধান লক্ষ্য।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-700">
                  500+
                </h3>
                <p className="text-gray-600 mt-2">
                  সন্তুষ্ট ক্লায়েন্ট
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-700">
                  200+
                </h3>
                <p className="text-gray-600 mt-2">
                  দক্ষ কেয়ারগিভার
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-700">
                  24/7
                </h3>
                <p className="text-gray-600 mt-2">
                  সাপোর্ট সার্ভিস
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-700">
                  100%
                </h3>
                <p className="text-gray-600 mt-2">
                  বিশ্বস্ত সেবা
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}