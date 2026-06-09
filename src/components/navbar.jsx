"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();

  const handleLogout = async () => {
    try {
      await signOut();
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
          <div className="rounded-full overflow-hidden w-12 h-12">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

            <div>
              <h1 className="font-bold text-lg md:text-xl text-purple-700 leading-tight">
                অরবিক্স-১০০ টেক এডু
              </h1>

              <p className="text-[10px] text-gray-500">
                (ORBIX-100 TECH EDU.)
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            <li>
              <Link
                href="/"
                className="hover:text-purple-700 transition"
              >
                হোম
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-purple-700 transition"
              >
                আমাদের সম্পর্কে
              </Link>
            </li>

            <li>
              <Link
                href="/allServices"
                className="hover:text-purple-700 transition"
              >
                সেবা
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                className="hover:text-purple-700 transition"
              >
                মূল্য তালিকা
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-purple-700 transition"
              >
                যোগাযোগ
              </Link>
            </li>
          </ul>

          {/* Desktop Auth */}
<div className="hidden lg:flex items-center gap-3">
  {session?.user ? (
    <>
      <div className="flex items-center gap-3 rounded-xl px-3 py-2 max-w-[260px]">

        <img
          src={
            session.user.image ||
            `https://ui-avatars.com/api/?name=${session.user.name}`
          }
          alt={session.user.name}
          className="w-12 h-12 rounded-full"
        />

        <div className="overflow-hidden">
          <p className="font-semibold text-sm text-gray-600 truncate">
            {session.user.name}
          </p>
        </div>
      </div>

      <div className="rounded-lg cursor-pointer">
        <button onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-100  cursor-pointer"
        >logout</button>
      </div>

    </>
  ) : (
    <>
      <Link
        href="/login"
        className="px-4 py-2 rounded-lg border border-purple-700 text-purple-700 hover:bg-purple-400 transition"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition"
      >
        Register
      </Link>
    </>
  )}
</div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-xl text-purple-700"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-purple-100 shadow-lg"
          >
            <div className="px-5 py-5">

              {/* User */}
              {session?.user && (
                <div className="flex items-center gap-3 mb-5 pb-5 border-b">
                  <img
                    src={
                      session.user.image ||
                      "https://ui-avatars.com/api/?name=User"
                    }
                    alt={session.user.name || "User"}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-300"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {session.user.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {session.user.email}
                    </p>
                  </div>
                </div>
              )}

              {/* Mobile Links */}
              <ul className="space-y-4 gap-3 font-medium text-gray-700">
                <li>
                  <Link href="/" onClick={closeMenu}>
                    হোম
                  </Link>
                </li>

                <li>
                  <Link href="/about" onClick={closeMenu}>
                    আমাদের সম্পর্কে
                  </Link>
                </li>

                <li>
                  <Link href="/allServices" onClick={closeMenu}>
                    সেবা
                  </Link>
                </li>

                <li>
                  <Link href="/pricing" onClick={closeMenu}>
                    মূল্য তালিকা
                  </Link>
                </li>

                <li>
                  <Link href="/contact" onClick={closeMenu}>
                    যোগাযোগ
                  </Link>
                </li>
              </ul>

              {/* Mobile Auth */}
              <div className="mt-6 space-y-3">
                {session?.user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 px-2 rounded-xl bg-red-500 text-white font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="space-y-3">
                    <Link
                      href="/auth/login"
                      onClick={closeMenu}
                      className="block text-center py-3 px-2 rounded-lg border border-purple-700 text-purple-700"
                    >
                      Login
                    </Link>

                    <Link
                      href="/auth/register"
                      onClick={closeMenu}
                      className="block text-center py-3 px-2 rounded-lg bg-purple-700 text-white"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}