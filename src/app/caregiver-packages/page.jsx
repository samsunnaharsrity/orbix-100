"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, ShieldCheck, Crown } from "lucide-react";

const packages = [
  {
    title: "Basic Caregiving",
    icon: <ShieldCheck size={24} />,
    color: "from-purple-500 to-purple-700",
    services: [
      "24/7 Hrs Service Fee — ৳25,000",
      "12 Hrs Service Charge — ৳21,000",
      "8 Hrs Service Charge — ৳20,000",
    ],
  },
  {
    title: "Premium Caregiving",
    icon: <Crown size={24} />,
    color: "from-fuchsia-500 to-purple-700",
    featured: true,
    services: [
      "24/7 Hrs Service Charge — ৳35,000",
      "12 Hrs Service Charge — ৳29,000",
      "8 Hrs Service Charge — ৳24,000",
    ],
  },
  {
    title: "Advance Caregiving",
    icon: <Clock3 size={24} />,
    color: "from-indigo-500 to-purple-700",
    services: [
      "24/7 Hrs Service Charge — ৳55,000",
      "12 Hrs Service Charge — ৳48,000",
      "8 Hrs Service Charge — ৳38,000",
    ],
  },
];

export default function CaregiverPackages() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900">
            কেয়ারগিভার সার্ভিস প্যাকেজ
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            আপনার প্রয়োজন অনুযায়ী Basic, Premium অথবা Advance
            Caregiving Package বেছে নিন।
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-3xl overflow-hidden border ${
                item.featured
                  ? "border-purple-500 shadow-2xl"
                  : "border-purple-100 shadow-lg"
              } bg-white`}
            >
              {item.featured && (
                <div className="absolute top-4 right-4 bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div
                className={`bg-gradient-to-r ${item.color} text-white p-6`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-4">
                  {item.services.map((service, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-purple-600 mt-1 shrink-0"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl font-medium transition">
                  এখনই বুক করুন
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-r from-purple-700 to-purple-900 rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            Special Category
          </h3>

          <p className="text-lg">
            Hospital Attendance Service
          </p>

          <div className="mt-4 text-4xl font-bold">
            ৳1,800
            <span className="text-lg font-normal ml-2">
              / Per Day
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}