export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">

      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold">
            ORBIX CARE
          </h2>

          <p className="mt-4 text-gray-300">
            বিশ্বস্ত নার্সিং ও কেয়ারগিভিং হোম সার্ভিস।
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-2">
            <li>Caregiver</li>
            <li>Nursing</li>
            <li>Training</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Contact
          </h3>

          <p>01300 000000</p>
          <p>info@company.com</p>
          <p>Dhaka, Bangladesh</p>
        </div>

      </div>

      <div className="border-t border-purple-700 py-5 text-center">
        © 2026 All Rights Reserved
      </div>

    </footer>
  );
}