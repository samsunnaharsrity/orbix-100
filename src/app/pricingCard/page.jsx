"use client";

import { motion } from "framer-motion";
import {
  Check,
  Heart,
  Star,
  ShieldCheck,
} from "lucide-react";

const plans = [
  {
    name: "বেসিক প্ল্যান",
    price: "১৫,০০০",
    icon: Heart,
    popular: false,
    features: [
      "দৈনিক ৬ ঘণ্টা সেবা",
      "১ জন কেয়ারগিভার",
      "সাপ্তাহিক রিপোর্ট",
      "ফোন সাপোর্ট",
    ],
  },
  {
    name: "স্ট্যান্ডার্ড প্ল্যান",
    price: "২৫,০০০",
    icon: Star,
    popular: true,
    features: [
      "দৈনিক ১২ ঘণ্টা সেবা",
      "২ জন কেয়ারগিভার",
      "দৈনিক রিপোর্ট",
      "২৪/৭ ফোন সাপোর্ট",
      "নার্সিং সেবা অন্তর্ভুক্ত",
    ],
  },
  {
    name: "প্রিমিয়াম প্ল্যান",
    price: "৫০,০০০",
    icon: ShieldCheck,
    popular: false,
    features: [
      "২৪ ঘণ্টা সেবা",
      "ডেডিকেটেড টিম",
      "ফিজিওথেরাপি সহ",
      "ডাক্তার কনসালটেশন",
      "ICU-পরবর্তী সেবা",
    ],
  },
];

export default function PricingCard() {
  return (
    <section
      className="px-4 py-10"
      style={{
        background:
          "linear-gradient(180deg, #f5f0ff 0%, #ede8ff 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">

          <h2 className="mb-3 text-3xl font-bold text-purple-950 md:text-4xl">
            আপনার প্রয়োজন অনুযায়ী বেছে নিন
          </h2>

          <p className="mx-auto max-w-xl text-sm text-purple-700/70">
            সকল প্ল্যানে রয়েছে প্রশিক্ষিত ও বিশ্বস্ত কেয়ারগিভার,
            নিয়মিত রিপোর্টিং এবং মানসম্মত সেবা।
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`relative flex flex-col rounded-3xl p-8 shadow-lg transition-all duration-300
                ${
                  plan.popular
                    ? "border border-purple-600 text-white"
                    : "border border-purple-100 bg-white"
                }`}
                style={
                  plan.popular
                    ? {
                        background:
                          "linear-gradient(155deg, #2d1065 0%, #4c1d95 100%)",
                      }
                    : undefined
                }
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                    ✦ সবচেয়ে জনপ্রিয়
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`mb-5 flex h-10 w-10 items-center justify-center rounded-2xl
                  ${
                    plan.popular
                      ? "bg-white/10 text-white"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  <Icon width={22} height={22} />
                </div>

                {/* Name */}
                <h3
                  className={`mb-2 text-lg font-semibold ${
                    plan.popular
                      ? "text-white"
                      : "text-purple-900"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div
                  className={`text-4xl font-bold ${
                    plan.popular
                      ? "text-white"
                      : "text-purple-950"
                  }`}
                >
                  ৳{plan.price}
                </div>

                <p
                  className={`mb-6 mt-2 text-sm ${
                    plan.popular
                      ? "text-purple-200"
                      : "text-purple-500"
                  }`}
                >
                  প্রতি মাসে
                </p>

                <div
                  className={`mb-6 h-px ${
                    plan.popular
                      ? "bg-white/10"
                      : "bg-purple-100"
                  }`}
                />

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full
                        ${
                          plan.popular
                            ? "bg-white/10 text-purple-200"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        <Check width={12} height={12} />
                      </span>

                      <span
                        className={`text-sm ${
                          plan.popular
                            ? "text-white/80"
                            : "text-purple-900/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300
                  ${
                    plan.popular
                      ? "bg-white text-purple-800 hover:bg-purple-50"
                      : "border border-purple-300 text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  অর্ডার করুন
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}