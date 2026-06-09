"use client";

import { motion } from "framer-motion";
import {
  FaUserNurse,
  FaHospital,
  FaHeartbeat,
  FaWheelchair,
} from "react-icons/fa";

const services = [
  {
    title: "কেয়ারগিভার হোম সার্ভিস",
    description: "অভিজ্ঞ কেয়ারগিভার দ্বারা বাসায় রোগী ও বয়স্কদের সার্বক্ষণিক সেবা প্রদান।",
    icon: <FaUserNurse />,
  },
  {
    title: "নার্সিং সার্ভিস",
    description: "দক্ষ ও প্রশিক্ষিত নার্সের মাধ্যমে নিরাপদ ও পেশাদার স্বাস্থ্যসেবা।",
    icon: <FaHospital />,
  },
  {
    title: "ফিজিওথেরাপি",
    description: "ব্যথা উপশম ও শারীরিক সক্ষমতা বৃদ্ধির জন্য আধুনিক ফিজিওথেরাপি।",
    icon: <FaHeartbeat />,
  },
  {
    title: "বয়স্ক সাপোর্ট",
    description: "বয়স্ক ব্যক্তিদের জন্য বিশেষ যত্ন ও দৈনন্দিন সহায়তা।",
    icon: <FaWheelchair />,
  },
  {
    title: "ডাক্তার ভিজিট",
    description: "অভিজ্ঞ চিকিৎসকের হোম ভিজিট সেবা।",
    icon: <FaHospital />,
  },
  {
    title: "মেডিকেল এটেনডেন্ট",
    description: "রোগীর সার্বক্ষণিক তত্ত্বাবধান ও সহায়তা।",
    icon: <FaUserNurse />,
  },
  {
    title: "পোস্ট অপারেটিভ কেয়ার",
    description: "অপারেশনের পর বিশেষায়িত পরিচর্যা।",
    icon: <FaHeartbeat />,
  },
  {
    title: "আইসিইউ সেটআপ সাপোর্ট",
    description: "বাড়িতে ICU পরিবেশ তৈরিতে সহায়তা।",
    icon: <FaHospital />,
  },
];

export default function AllServicesPage() {
  return (
    <section className="py-10 bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-800">
            আমাদের সকল সেবা
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            অভিজ্ঞ ও প্রশিক্ষিত টিমের মাধ্যমে আমরা
            বিভিন্ন স্বাস্থ্যসেবা ও কেয়ারগিভার সাপোর্ট প্রদান করি।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100"
            >
              <div className="w-20 h-20 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center text-4xl text-purple-700">
                {item.icon}
              </div>

              <h3 className="mt-6 text-center font-bold text-xl">
                {item.title}
              </h3>

              <p className="mt-4 text-center text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}