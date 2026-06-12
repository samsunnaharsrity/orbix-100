import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Link from "next/link";
import Image from "next/image";

export default async function ServiceDetails({ params }) {
  let service = null;

  try {
    const client = await clientPromise;

    service = await client
      .db("orbixEdu")
      .collection("services")
      .findOne({
        _id: new ObjectId(params.id),
      });
  } catch (err) {
    console.log("Invalid ID or DB error:", err);
  }

  if (!service) {
    return (
      <div className="text-center py-20 text-gray-500">
        Service Not Found
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* IMAGE */}
          <div className="relative w-full h-[400px]">
            <Image
              src={service.image || "/placeholder.jpg"}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-10">

            <h1 className="text-3xl md:text-4xl font-bold text-purple-700">
              {service.title}
            </h1>

            <p className="mt-6 text-gray-700 leading-7">
              {service.details}
            </p>

            {/* FEATURES */}
            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {service.features?.map((feature, i) => (
                <div
                  key={i}
                  className="bg-purple-50 border border-purple-100 p-4 rounded-xl text-purple-700 font-medium"
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-purple-700 text-white px-6 py-3 rounded-xl text-center"
              >
                বুকিং করুন
              </Link>

              <Link
                href="/services"
                className="border border-purple-700 text-purple-700 px-6 py-3 rounded-xl text-center"
              >
                সব সেবা দেখুন
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}