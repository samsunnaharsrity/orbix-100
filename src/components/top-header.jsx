"use client";

import { Phone, Mail } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

          {/* Logo */}
          <div className="rounded-full overflow-hidden w-auto h-16">
            <img
              src="/logo.jpg"
              alt="Logo"
              className=" w-full h-full object-cover"
            />
          </div>

          {/* Contact */}
          <div className="flex flex-wrap items-center gap-8">

            <div className="flex items-center gap-3">
              <Phone className="text-purple-700" size={20} />
              <div>
                <p className="text-sm text-gray-500">হটলাইন</p>
                <p className="font-semibold">01300 000000</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-purple-700" size={20} />
              <div>
                <p className="text-sm text-gray-500">ইমেইল</p>
                <p className="font-semibold">
                  info@orbixcare.com
                </p>
              </div>
            </div>

            <button className="bg-purple-700 text-white px-6 py-3 rounded-xl">
              পরামর্শ নিন
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}