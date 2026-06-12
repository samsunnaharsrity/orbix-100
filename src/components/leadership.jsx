// import { mdMessage, directorMessage } from "@/data/leadership"; 
import { mdMessage, directorMessage } from "@/data/massages";

export default function Leadership() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-5xl font-bold text-center mb-12">
          নেতৃত্বের <span className="text-purple-700">বার্তা</span>
        </h2>


        <div className="grid lg:grid-cols-2 gap-8">

          <MessageCard
            data={mdMessage}
            img="/logo.jpg"
          />

          <MessageCard
            data={directorMessage}
            img="/logo.jpg"
          />

        </div>

      </div>
    </section>
  );
}

function MessageCard({ data, img }) {
  return (
    <div className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition bg-gradient-to-b from-white to-purple-50">

      {/* TOP INFO */}
      <div className="flex items-center gap-4 mb-4">

        <img
          src={img}
          alt={data.name}
          className="w-14 h-14 rounded-full object-cover border border-purple-200"
        />

        <div>
          <h3 className="text-base font-bold text-purple-700">
            {data.name}
          </h3>

          <p className="text-xs text-gray-500">
            {data.title}
          </p>
        </div>

      </div>

      {/* MESSAGE */}
      <p className="text-gray-700 text-sm leading-4 whitespace-pre-line">
        {data.message}
      </p>

    </div>
  );
}