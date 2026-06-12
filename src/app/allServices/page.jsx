import Link from "next/link";

async function getServices() {
  const res = await fetch(
    process.env.BETTER_AUTH_URL + "/api/services",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function AllServicesPage() {
  const services = await getServices();

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">

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
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white p-6 rounded-3xl shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-52 w-full object-cover rounded-2xl"
              />

              <h2 className="mt-4 text-xl font-bold">
                {service.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {service.description}
              </p>

              <Link
                href={`/services/${service._id}`}
                className="mt-5 inline-block bg-purple-700 text-white px-5 py-2 rounded-xl"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}