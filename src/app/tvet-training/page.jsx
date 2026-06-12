"use client";

import { motion } from "framer-motion";
import { GraduationCap, Laptop, Wrench, Users } from "lucide-react";

const courses = [
  {
    title: "CBT&A Level-4",
    price: "৳12,000",
    desc: "Training Fee (until Competent)",
    icon: GraduationCap,
    color: "from-purple-600 to-purple-800",
  },
  {
    title: "Computer Basic (Online Course)",
    price: "৳3,000",
    desc: "Beginner Friendly Digital Skills",
    icon: Laptop,
    color: "from-indigo-500 to-purple-700",
  },
  {
    title: "Industrial Training",
    price: "৳6,000 - ৳9,000",
    desc: "Computer / Electrical Practical Training",
    icon: Wrench,
    color: "from-fuchsia-500 to-purple-700",
  },
  {
    title: "Trainer Training",
    price: "৳4,500",
    desc: "Not a CBT&A Program",
    icon: Users,
    color: "from-purple-500 to-indigo-600",
  },
];

export default function TVETTrainingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">

      {/* HERO */}
      <section className="py-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-purple-900"
        >
          TVET Training Program
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Skill development & professional training programs for
          career growth and technical excellence.
        </motion.p>
      </section>

      {/* CARDS */}
      <section className="max-w-5xl mx-auto px-4 pb-10 grid gap-8 md:grid-cols-2">

        {courses.map((course, i) => {
          const Icon = course.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden shadow-lg bg-white border border-purple-100"
            >
              {/* HEADER */}
              <div className={`p-6 text-white bg-gradient-to-r ${course.color}`}>
                <Icon size={32} className="mb-3" />

                <h2 className="text-xl font-bold">
                  {course.title}
                </h2>

                <p className="text-sm opacity-90 mt-1">
                  {course.desc}
                </p>
              </div>

              {/* BODY */}
              <div className="p-6">
                <p className="text-2xl font-bold text-purple-900">
                  {course.price}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Course Fee
                </p>

                <button className="mt-6 w-full py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-medium transition-all">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* FOOTER CTA */}
      <section className="bg-purple-700 text-white py-10 text-center px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-bold"
        >
          Start Your Skill Journey Today
        </motion.h2>

        <p className="mt-3 text-purple-100">
          Join our TVET training programs and build your future career.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:scale-105 transition">
          Contact Us
        </button>
      </section>

    </main>
  );
}