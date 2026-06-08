"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "বেসিক প্ল্যান",
    price: "১৫,০০০"
  },
  {
    name: "স্ট্যান্ডার্ড প্ল্যান",
    price: "২৫,০০০"
  },
  {
    name: "প্রিমিয়াম প্ল্যান",
    price: "৫০,০০০"
  }
];

export default function Pricing() {
  return (
    <section className="bg-[#F8F5FF] py-20">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-purple-800">
          মূল্য তালিকা
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="font-bold text-2xl">
                {plan.name}
              </h3>

              <h2 className="text-5xl text-purple-700 font-bold mt-5">
                ৳ {plan.price}
              </h2>

              <button className="w-full mt-8 bg-purple-700 text-white py-3 rounded-lg">
                অর্ডার করুন
              </button>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}