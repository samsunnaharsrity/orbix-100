"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "@/lib/auth-client";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  const handleLogout = async () => {
    try {
      await signOut();
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const navLinkClass = (path) =>
    `relative pb-1 transition-all duration-300 hover:text-purple-700
    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:bg-purple-700 after:transition-all after:duration-300
    ${
      pathname === path
        ? "text-purple-700 after:w-full"
        : "after:w-0 hover:after:w-full"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-200">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="font-bold text-base md:text-lg text-purple-700 leading-tight">
                অরবিক্স-১০০ টেক এডু
              </h1>

              <p className="text-[10px] text-gray-500">
                (ORBIX-100 TECH EDU.)
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-7 font-medium text-gray-700">
            <li>
              <Link href="/" className={navLinkClass("/")}>
                হোম
              </Link>
            </li>

            <li>
              <Link href="/about" className={navLinkClass("/about")}>
                আমাদের সম্পর্কে
              </Link>
            </li>

            <li>
              <Link
                href="/allServices"
                className={navLinkClass("/allServices")}
              >
                সেবা
              </Link>
            </li>

            <li>
              <Link
                href="/caregiver-packages"
                className={navLinkClass("/caregiver-packages")}
              >
              কেয়ারগিভার প্যাকেজ
            </Link>
            </li>


            <li>
              <Link
                href="/tvet-training"
                className={navLinkClass("/tvet-training")}
              >
              টিভেট প্রশিক্ষণ
            </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={navLinkClass("/contact")}
              >
                যোগাযোগ
              </Link>
            </li>
          </ul>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {session?.user ? (
              <>
                <div className="flex items-center gap-3 bg-purple-50 border border-purple-100 rounded-md px-2 py-1">
                  <img
                    src={
                      session.user.image ||
                      `https://ui-avatars.com/api/?name=${session.user.name}`
                    }
                    alt={session.user.name}
                    className="w-9 h-9 rounded-full object-cover border border-purple-300"
                  />

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {session.user.name}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md bg-purple-700 hover:bg-red-500 text-white font-medium transition-all duration-300 cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-xl border border-purple-700 text-purple-700 hover:bg-purple-50 transition-all duration-300"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white transition-all duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-purple-700"
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

              {session?.user && (
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-purple-100">
                  <img
                    src={
                      session.user.image ||
                      `https://ui-avatars.com/api/?name=${session.user.name}`
                    }
                    alt={session.user.name}
                    className="w-12 h-12 rounded-full object-cover border border-purple-300"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {session.user.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {session.user.email}
                    </p>
                  </div>
                </div>
              )}

              <ul className="space-y-4 text-sm font-medium">

                <li>
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className={`block ${
                      pathname === "/"
                        ? "text-purple-700 font-bold"
                        : ""
                    }`}
                  >
                    হোম
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className={`block ${
                      pathname === "/about"
                        ? "text-purple-700 font-bold"
                        : ""
                    }`}
                  >
                    আমাদের সম্পর্কে
                  </Link>
                </li>

                <li>
                  <Link
                    href="/allServices"
                    onClick={closeMenu}
                    className={`block ${
                      pathname === "/allServices"
                        ? "text-purple-700 font-bold"
                        : ""
                    }`}
                  >
                    সেবা
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pricingCard"
                    onClick={closeMenu}
                    className={`block ${
                      pathname === "/pricingCard"
                        ? "text-purple-700 font-bold"
                        : ""
                    }`}
                  >
                    মূল্য তালিকা
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className={`block ${
                      pathname === "/contact"
                        ? "text-purple-700 font-bold"
                        : ""
                    }`}
                  >
                    যোগাযোগ
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                {session?.user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 rounded-xl bg-red-500 text-white font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="space-y-3">
                    <Link
                      href="/login"
                      onClick={closeMenu}
                      className="block text-center py-3 rounded-xl border border-purple-700 text-purple-700"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      onClick={closeMenu}
                      className="block text-center py-3 rounded-xl bg-purple-700 text-white"
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