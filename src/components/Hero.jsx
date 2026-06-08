"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-violet-100">
      <div className="max-w-5xl mx-auto px-4 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-purple-800 leading-tight">
              বিশ্বস্ত ও পেশাদার
              <br />
              নার্সিং ও কেয়ারগিভিং
              <br />
              হোম সার্ভিস
            </h1>

            <p className="mt-6 text-gray-600 text-medium">
              আপনার প্রিয়জনের জন্য নিরাপদ, বিশ্বস্ত ও প্রশিক্ষিত সেবা।
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-purple-700 text-white px-6 py-3 rounded-xl">
                আমাদের সেবা সমূহ
              </button>

              <button className="border border-purple-700 text-purple-700 px-6 py-3 rounded-xl">
                বুক করুন
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >
            <img
              src="/caregiver.jpg"
              alt=""
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}