"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaUserNurse,
  FaHospital,
  FaHeartbeat,
  FaWheelchair,
} from "react-icons/fa";

const services = [
  {
    title: "কেয়ারগিভার হোম সার্ভিস",
    description:
      "অভিজ্ঞ কেয়ারগিভার দ্বারা বাসায় রোগী ও বয়স্কদের সার্বক্ষণিক সেবা প্রদান।",
    icon: <FaUserNurse />,
  },
  {
    title: "নার্সিং সার্ভিস",
    description:
      "দক্ষ ও প্রশিক্ষিত নার্সের মাধ্যমে নিরাপদ ও পেশাদার স্বাস্থ্যসেবা।",
    icon: <FaHospital />,
  },
  {
    title: "ফিজিওথেরাপি",
    description:
      "ব্যথা উপশম ও শারীরিক সক্ষমতা বৃদ্ধির জন্য আধুনিক ফিজিওথেরাপি।",
    icon: <FaHeartbeat />,
  },
  {
    title: "বয়স্ক সাপোর্ট",
    description:
      "বয়স্ক ব্যক্তিদের জন্য বিশেষ যত্ন ও দৈনন্দিন সহায়তা।",
    icon: <FaWheelchair />,
  },
];

export default function ServiceCard() {
  return (
    <section className="py-5 lg:py-10 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <span className="text-purple-700 font-semibold uppercase tracking-wider">
            Our Services
          </span> */}

          <h2 className="text-2xl md:text-5xl font-bold mt-3 text-gray-900">
            আমাদের
            <span className="text-purple-700"> সেবা সমূহ</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-8">
            দক্ষ ও অভিজ্ঞ টিমের মাধ্যমে আমরা রোগী, বয়স্ক ব্যক্তি
            এবং পরিবারের সদস্যদের জন্য মানসম্মত স্বাস্থ্যসেবা
            ও কেয়ারগিভার সাপোর্ট প্রদান করি।
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="group bg-white border border-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-2xl bg-purple-100 flex items-center justify-center text-4xl text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-center text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-center text-gray-600 leading-7 text-sm">
                {item.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-1 w-0 bg-purple-700 mx-auto rounded-full group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>



                {/* See More Button */}
        <div className="text-center mt-10">
          <Link
            href="/allServices"
            className="inline-block bg-purple-700 text-white px-4 py-2 rounded-xl hover:bg-purple-400 transition duration-300"
          >
            See More Services
          </Link>
        </div>

      </div>
    </section>
  );
}