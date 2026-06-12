"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  BriefcaseMedical,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={28} />,
    value: "500+",
    label: "সন্তুষ্ট গ্রাহক",
  },
  {
    icon: <HeartHandshake size={28} />,
    value: "200+",
    label: "প্রশিক্ষিত কেয়ারগিভার",
  },
  {
    icon: <BriefcaseMedical size={28} />,
    value: "50+",
    label: "বিশেষায়িত সেবা",
  },
  {
    icon: <Clock3 size={28} />,
    value: "24/7",
    label: "সাপোর্ট সেবা",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-10">
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            বিশ্বাস ও সেবার পরিসংখ্যান
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-purple-200">
            আমাদের দক্ষ টিম প্রতিনিয়ত শত শত পরিবারের পাশে থেকে
            বিশ্বস্ত ও মানসম্মত সেবা প্রদান করছে।
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-purple-200">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-purple-200">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}