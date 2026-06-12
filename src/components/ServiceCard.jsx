import Link from "next/link";

async function getServices() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.BETTER_AUTH_URL;
    const res = await fetch(`${baseUrl}/api/services`, { cache: "no-store" });

    if (!res.ok) return []; // ✅ error হলে empty array

    return res.json();
  } catch {
    return []; // ✅ crash এর বদলে empty array
  }
}

export default async function ServiceCard() {
  const services = await getServices();

  // শুধু ৪টা service
  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-10 lg:py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            আমাদের <span className="text-purple-700">সেবা সমূহ</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600">
            দক্ষ ও অভিজ্ঞ টিমের মাধ্যমে আমরা রোগী, বয়স্ক ব্যক্তি এবং
            পরিবারের সদস্যদের জন্য মানসম্মত স্বাস্থ্যসেবা ও
            কেয়ারগিভার সাপোর্ট প্রদান করি।
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {featuredServices.map((service) => (
            <div
              key={service._id}
              className="group bg-white border border-purple-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service._id}`}
                  className="mt-5 inline-block w-full text-center bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition"
                >
                  বিস্তারিত দেখুন
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        <div className="text-center mt-12">
          <Link
            href="/allServices"
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-800 transition"
          >
            সকল সেবা দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
}