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
    <section
      className="py-16 px-4"
      style={{
        background: "#ffffff",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap');

        .insight-card {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #f0f0f0;
          background: #fff;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }
        .insight-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.12);
        }
        .insight-card:hover .card-img {
          transform: scale(1.04);
        }
        .card-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .tag-pill {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid #d8e0ea;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #4a5568;
          background: #f8fafc;
        }
        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          font-size: 12px;
          font-weight: 500;
          color: #374151;
          background: white;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="badge-pill inline-flex mb-5"
            style={{ border: "1px solid #cbd5e1" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#0d9488" }}
            />
            <span className="text-xs font-medium text-gray-600">
              Latest News &amp; Updates
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#0f172a", fontFamily: "'DM Sans', sans-serif" }}
          >
            Latest Health Insights Your
          </h2>
          <div
            className="text-4xl md:text-5xl mt-1"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 600,
              color: "#0d9488",
            }}
          >
            Wellness Journey
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="insight-card">
              {/* Image container */}
              <div className="relative overflow-hidden" style={{ height: 260 }}>
                <img src={post.image} alt={post.title} className="card-img" />
                {/* Date overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                  }}
                >
                  <span
                    className="text-white text-xs font-semibold tracking-widest uppercase"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold mb-4 leading-snug"
                  style={{ color: "#0f172a" }}
                >
                  {post.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
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
