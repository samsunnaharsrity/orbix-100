"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      className="relative mt-0 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(160deg, #1a0a3b 0%, #2d1065 50%, #1a0a3b 100%)",
      }}
    >
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/01856165238"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-500"
      >
        <FaWhatsapp size={18} />
        <span className="hidden text-sm font-medium sm:inline">
          WhatsApp করুন
        </span>
      </a>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold tracking-wide">ORBIX CARE</h2>

          <p className="mt-1 mb-4 text-xs uppercase tracking-widest text-purple-400">
            Nursing & Caregiving
          </p>

          <p className="text-sm leading-7 text-white/60">
            বিশ্বস্ত নার্সিং ও কেয়ারগিভিং হোম সার্ভিস প্রদান করি
            পেশাদার ও প্রশিক্ষিত টিমের মাধ্যমে।
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-white/60 transition-all duration-200 hover:bg-purple-500/25 hover:text-blue-400"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/01856165238"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-white/60 transition-all duration-200 hover:bg-purple-500/25 hover:text-green-400"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-white/60 transition-all duration-200 hover:bg-purple-500/25 hover:text-pink-400"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-5 text-xs font-medium uppercase tracking-widest text-purple-400">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/allServices" },
              // { name: "Gallery", href: "/gallery" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-500/50 transition-colors group-hover:bg-purple-400" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-5 text-xs font-medium uppercase tracking-widest text-purple-400">
            Services
          </h3>

          <ul className="space-y-3">
            {[
              "Caregiver",
              "Nursing",
              "Physiotherapy",
              "ICU Support",
              "Post-op Care",
            ].map((service) => (
              <li
                key={service}
                className="group flex cursor-pointer items-center gap-2 text-sm text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                <span className="h-1 w-1 rounded-full bg-purple-500/50 transition-colors group-hover:bg-purple-400" />
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-5 text-xs font-medium uppercase tracking-widest text-purple-400">
            Contact Us
          </h3>

          <div className="space-y-4">
            {[
              {
                icon: <FaPhoneAlt size={13} />,
                label: "Phone",
                value: "01856165238",
              },
              {
                icon: <FaEnvelope size={13} />,
                label: "Email",
                value: "100tech.edu@gmail.com",
              },
              {
                icon: <FaMapMarkerAlt size={13} />,
                label: "Address",
                value: "Pallabi, Mirpur-12, Dhaka-1216",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400">
                  {item.icon}
                </div>

                <div>
                  <p className="mb-0.5 text-[10px] text-purple-400/70">
                    {item.label}
                  </p>
                  <p className="text-sm text-white/60">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          {/* <div className="mt-5 rounded-xl border border-purple-500/20 bg-purple-500/10 p-3.5">
            <p className="mb-2.5 text-[11px] text-purple-300/80">
              Newsletter সাবস্ক্রাইব করুন
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল..."
                className="flex-1 rounded-lg border border-purple-500/25 bg-white/5 px-3 py-2 text-xs text-white outline-none transition-colors placeholder:text-white/25 focus:border-purple-400"
              />

              <button
                type="button"
                className="whitespace-nowrap rounded-lg bg-purple-600 px-3 py-2 text-xs text-white transition-colors hover:bg-purple-500"
              >
                Subscribe
              </button>
            </div>
          </div> */}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)",
          }}
        />
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/35 sm:flex-row">
        <span>© 2026 Samsun Nahar. All rights reserved.</span>

        <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
          <span className="text-[11px] text-purple-300/80">
            সার্ভিস চলছে · ২৪/৭
          </span>
        </div>

        <div className="flex gap-4">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy
          </Link>

          <Link href="/terms" className="transition-colors hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}