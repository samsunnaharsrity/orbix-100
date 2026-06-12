import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

export default async function ServiceDetails({ params }) {
  const { id } = await params;

  if (!ObjectId.isValid(id)) {
    return <div className="text-center py-20">Invalid Service</div>;
  }

  const client = await clientPromise;

  const service = await client
    .db("orbixEdu")
    .collection("services")
    .findOne({ _id: new ObjectId(id) });

  if (!service) {
    return <div className="text-center py-20">Service Not Found</div>;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-2xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="relative h-[380px] w-full">
            <Image
              src={service.image || "/placeholder.jpg"}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">

            <h1 className="text-3xl font-bold text-purple-700">
              {service.title}
            </h1>

            <p className="mt-4 text-gray-600">
              {service.details}
            </p>

            {service.features?.length > 0 && (
              <div className="grid md:grid-cols-3 gap-3 mt-8">
                {service.features.map((f, i) => (
                  <div
                    key={i}
                    className="bg-purple-50 text-purple-700 p-3 rounded-xl text-sm"
                  >
                    {f}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex gap-3">
              <Link
                href="/contact"
                className="bg-purple-700 text-white px-5 py-2 rounded-xl"
              >
                বুকিং
              </Link>

              <Link
                href="/services"
                className="border border-purple-700 text-purple-700 px-5 py-2 rounded-xl"
              >
                সব সেবা
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}