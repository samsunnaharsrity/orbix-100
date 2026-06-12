"use client";

import { motion } from "framer-motion";
import { Clock3, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 leading-tight">
              বিশ্বস্ত ও পেশাদার <br />
              নার্সিং ও কেয়ারগিভার <br />
              হোম সার্ভিস
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              অভিজ্ঞ ও প্রশিক্ষিত টিমের মাধ্যমে আপনার প্রিয়জনদের জন্য
              নিরাপদ, সেবামূলক ও মানবিক সেবা নিশ্চিত করি।
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">
              <Link href="/allServices">
                <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">
                  আমাদের সেবা সমূহ
                </button>
              </Link>

              <Link href="/book">
                <button className="border border-purple-700 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-50 transition">
                  কেয়ারগিভার বুক করুন
                </button>
              </Link>
            </div>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">

              <Feature icon={<Clock3 className="w-4 h-4 text-purple-700" />} text="২৪/৭ সাপোর্ট" />
              <Feature icon={<Users className="w-4 h-4 text-purple-700" />} text="অভিজ্ঞ টিম" />
              <Feature icon={<ShieldCheck className="w-4 h-4 text-purple-700" />} text="নিরাপদ সেবা" />

            </div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-8 items-center"
          >

            {/* MAIN IMAGE (slow floating animation) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="flex-1"
            >
              <img
                src="/hero-5.jfif"
                alt="Caregiver"
                className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
              />
            </motion.div>

            {/* SIDE IMAGES */}
            <div className="flex flex-col gap-4">

              {/* 1 */}
              <motion.img
                src="/hero-1.jfif"
                className="w-24 h-24 object-cover rounded-2xl border-2 border-purple-300"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
              />

              {/* 2 */}
              <motion.img
                src="/hero-2.jfif"
                className="w-24 h-24 object-cover rounded-2xl border-2 border-purple-300"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.1 }}
              />

              {/* 3 */}
              <motion.img
                src="/hero-3.jfif"
                className="w-24 h-24 object-cover rounded-2xl border-2 border-purple-300"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
              />

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* FEATURE COMPONENT */
function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-purple-100 rounded-xl px-3 py-2 shadow-sm hover:shadow-md transition">
      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-900 text-sm">{text}</h4>
    </div>
  );
}