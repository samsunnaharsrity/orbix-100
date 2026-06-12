"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials({ reviews }) {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">

          <h2 className="mt-3 text-3xl font-bold text-purple-900 md:text-4xl">
            গ্রাহকদের মতামত
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            আমাদের সম্মানিত গ্রাহকদের বাস্তব অভিজ্ঞতা।
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews?.map((review, index) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-purple-100 bg-white p-7 shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                <Quote size={22} />
              </div>

              <div className="mb-4 flex gap-1 text-yellow-500">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-7 text-gray-600">
                {review.message}
              </p>

              <div className="mt-6 border-t border-purple-100 pt-4">
                <h4 className="font-semibold text-purple-900">
                  {review.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {review.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}