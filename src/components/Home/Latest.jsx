const posts = [
  {
    id: 1,
    date: "SEPTEMBER 12, 2025",
    title: "Doctor-Approved Ways To Stay Healthy",
    tags: ["ADMIN", "HEALTH & WELLNESS"],
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    id: 2,
    date: "SEPTEMBER 12, 2025",
    title: "What To Expect During Your First Visit To Our Clinic",
    tags: ["ADMIN", "PATIENT CARE"],
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80",
  },
  {
    id: 3,
    date: "SEPTEMBER 12, 2025",
    title: "Telemedicine Or In-Person Care: What's Best?",
    tags: ["ADMIN", "VIRTUAL CARE"],
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  },
];

const Latest = () => {
  return (
    <section className="py-16 px-4 bg-white font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-5 border border-slate-300 rounded-full px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-teal-700" />
            <span className="text-xs font-medium text-gray-600">
              Latest News &amp; Updates
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Latest Health Insights Your
          </h2>
          <div className="text-4xl md:text-5xl mt-1 italic font-semibold text-teal-700 font-serif">
            Wellness Journey
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md transition-transform duration-250 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              {/* Image container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105"
                />
                {/* Date overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-white text-xs font-semibold tracking-widest uppercase">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-4 leading-snug text-slate-900">
                  {post.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-slate-100 rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;