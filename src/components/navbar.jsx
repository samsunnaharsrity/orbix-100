"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4" onClick={closeMenu}>
          <div className="rounded-full overflow-hidden w-12 h-12">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="font-bold text-xl text-purple-700 leading-tight">
            অরবিক্স-১০০ টেক এডু <br />
            <span className="text-[10px] text-gray-500">
              (ORBIX-100 TECH EDU.)
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-purple-700">
              হোম
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-purple-700">
              আমাদের সম্পর্কে
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-purple-700">
              সেবা
            </Link>
          </li>

          <li>
            <Link href="/pricing" className="hover:text-purple-700">
              মূল্য তালিকা
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-purple-700">
              যোগাযোগ
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <motion.div whileHover={{ scale: 1.05 }} className="hidden lg:block">
          <Link
            href="/consultation"
            className="bg-purple-700 text-white px-5 py-2 rounded-lg"
          >
            পরামর্শ নিন
          </Link>
        </motion.div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} className="text-3xl">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden bg-white shadow-md px-6 py-4"
        >
          <ul className="flex flex-col gap-4 font-medium text-gray-700">

            <li>
              <Link href="/" onClick={closeMenu}>হোম</Link>
            </li>

            <li>
              <Link href="/about" onClick={closeMenu}>আমাদের সম্পর্কে</Link>
            </li>

            <li>
              <Link href="/services" onClick={closeMenu}>সেবা</Link>
            </li>

            <li>
              <Link href="/pricing" onClick={closeMenu}>মূল্য তালিকা</Link>
            </li>

            <li>
              <Link href="/contact" onClick={closeMenu}>যোগাযোগ</Link>
            </li>
          </ul>

          <motion.div whileHover={{ scale: 1.05 }} className="mt-4">
            <Link
              href="/consultation"
              onClick={closeMenu}
              className="block w-full text-center bg-purple-700 text-white px-5 py-2 rounded-lg"
            >
              পরামর্শ নিন
            </Link>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}