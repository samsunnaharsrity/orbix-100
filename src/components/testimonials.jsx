"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  // fetch data
useEffect(() => {
  fetch("/api/reviews")
    .then((res) => {
      if (!res.ok) throw new Error("Failed");
      return res.json();
    })
    .then((data) => {
      if (Array.isArray(data)) setReviews(data); // ✅ array নিশ্চিত করো
    })
    .catch((err) => console.error("Reviews fetch error:", err));
}, []);

  // auto slider
  useEffect(() => {
    if (!reviews.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews]);

  const review = reviews[index];

  if (!review) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading reviews...
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">

        <h2 className="text-3xl font-bold text-purple-900 md:text-4xl">
          গ্রাহকদের মতামত
        </h2>

        <p className="mt-3 text-gray-600">
          আমাদের সম্মানিত গ্রাহকদের বাস্তব অভিজ্ঞতা
        </p>

        {/* CARD */}
        <motion.div
          key={review._id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl bg-white p-8 shadow-xl border border-purple-100"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
            <Quote size={22} />
          </div>

          {/* STARS */}
          <div className="mt-5 flex justify-center gap-1 text-yellow-500">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>

          {/* MESSAGE */}
          <p className="mt-6 text-gray-600 leading-7">
            {review.message}
          </p>

          {/* USER */}
          <div className="mt-6 border-t pt-4">
            <h4 className="font-semibold text-purple-900">
              {review.name}
            </h4>
            <p className="text-sm text-gray-500">
              {review.location}
            </p>
          </div>
        </motion.div>

        {/* DOTS */}
        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-purple-700 w-4" : "bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}