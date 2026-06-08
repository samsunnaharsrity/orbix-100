"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-purple-800">
          গ্রাহকদের মতামত
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {[1,2,3].map((item)=>(
            <motion.div
              key={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <p>
                অত্যন্ত ভালো সার্ভিস। কেয়ারগিভার খুবই
                দক্ষ এবং দায়িত্বশীল।
              </p>

              <h4 className="font-bold mt-4">
                শামীমা সুলতানা
              </h4>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}