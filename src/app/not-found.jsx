"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-purple-100 px-6">
      {/* Background Blurs */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-xl text-center"
      >
        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          className="text-xl md:text-9xl font-extrabold text-purple-700"
        >
          404
        </motion.h1>

        {/* Floating Emoji */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="my-5 text-xl"
        >
          🔍
        </motion.div>

        <h2 className="text-3xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
          নাম পরিবর্তন করা হয়েছে অথবা বর্তমানে উপলব্ধ নয়।
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-purple-700 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-800"
          >
            <Home size={18} />
            Home Page
          </Link>

          <Link
            href="/allServices"
            className="flex items-center gap-2 rounded-full border border-purple-700 bg-white px-6 py-3 text-purple-700 transition-all duration-300 hover:scale-105 hover:bg-purple-50"
          >
            <Search size={18} />
            Browse Services
          </Link>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-purple-700"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
      </motion.div>
    </main>
  );
}