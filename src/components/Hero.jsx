"use client";

import { motion } from "framer-motion";
import { Clock3, Users, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-violet-100">
      <div className="max-w-5xl mx-auto px-4 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-purple-800 leading-tight">
              বিশ্বস্ত ও পেশাদার
              <br />
              নার্সিং ও কেয়ারগিভিং
              <br />
              হোম সার্ভিস
            </h1>

            <p className="mt-6 text-gray-600">
              আপনার প্রিয়জনের জন্য নিরাপদ, বিশ্বস্ত ও প্রশিক্ষিত সেবা।
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-800 transition">
                আমাদের সেবা সমূহ
              </button>

              <button className="border border-purple-700 text-purple-700 px-6 py-3 rounded-xl hover:bg-purple-700 hover:text-white transition">
                বুক করুন
              </button>
            </div>

            {/* FEATURE CARDS (NEW) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">

              {/* Card 1 */}
              <div className="flex items-center gap-3 bg-white border border-purple-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Clock3 className="w-5 h-5 text-purple-700" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  ২৪/৭ সাপোর্ট
                </h4>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-3 bg-white border border-purple-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-700" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  অভিজ্ঞ টিম
                </h4>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-3 bg-white border border-purple-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-purple-700" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  নিরাপদ সেবা
                </h4>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/caregiver.jpg"
              alt="Caregiver"
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}