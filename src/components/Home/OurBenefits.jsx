import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Health Treatments",
    desc: "Tailored treatment plans focused on your recovery.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Advanced Facilities",
    desc: "Equipped with the latest technology for accurate diagnoses.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Expert Physicians",
    desc: "Highly trained specialists providing personalized care.",
  },
];

const stats = [
  { label: "Expert Doctor", value: 82 },
  { label: "Patient Satisfaction", value: 74 },
  { label: "Success Case", value: 98 },
];

const specialties = [
  "Cardiology", "Dental Care", "Physical Therapy", "Psychiatry",
  "Oncology", "Pediatrics", "Ophthalmology", "Orthopedics",
  "Neurology", "Dermatology",
];

const AnimatedBar = ({ value, animate }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (animate) {
      const t = setTimeout(() => setWidth(value), 200);
      return () => clearTimeout(t);
    }
  }, [animate, value]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          background: "linear-gradient(135deg, #0d9488, #0891b2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 800, color: "white", flexShrink: 0,
        }}>
          {value}%
        </div>
        <span style={{ fontSize: 13, color: "rgba(200,220,240,0.9)", fontWeight: 500 }}>{stats.find(s => s.value === value)?.label}</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${width}%`,
          background: "linear-gradient(90deg, #0d9488, #2dd4bf)",
          borderRadius: 99,
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
        }} />
      </div>
    </div>
  );
};

const OurBenefits = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [marqueeOffset, setMarqueeOffset] = useState(0);
  const animRef = useRef(null);
  const doubled = [...specialties, ...specialties];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let last = null;
    const step = (ts) => {
      if (last !== null) {
        setMarqueeOffset((prev) => {
          const total = specialties.length * 200;
          return (prev + 0.5) % total;
        });
      }
      last = ts;
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');
        .rc-section {
          display: grid;
          grid-template-columns: 42% 1fr;
          min-height: 480px;
          background: #0a1628;
        }
        @media (max-width: 900px) {
          .rc-section { grid-template-columns: 1fr; }
          .rc-image-col { min-height: 280px; }
        }
        .rc-image-col {
          position: relative;
          overflow: hidden;
        }
        .rc-image-col img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .rc-content {
          background: #0d1f3c;
          padding: 48px 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        .rc-content::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1px solid rgba(45,212,191,0.4);
          font-size: 12px;
          font-weight: 600;
          color: #2dd4bf;
          background: rgba(13,148,136,0.1);
          width: fit-content;
          margin-bottom: 14px;
        }
        .benefit-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .benefit-row:last-child { border-bottom: none; }
        .benefit-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 12px;
          border: 1px solid rgba(45,212,191,0.25);
          background: rgba(13,148,136,0.1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .discover-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 10px;
          border: 1.5px solid #2dd4bf;
          background: transparent;
          color: #2dd4bf;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s, color 0.2s, transform 0.18s;
          margin-top: 20px;
          width: fit-content;
        }
        .discover-btn:hover {
          background: #2dd4bf;
          color: #0a1628;
          transform: translateX(3px);
        }
        .stats-row {
          display: flex;
          gap: 28px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin-top: auto;
          flex-wrap: wrap;
        }
        .marquee-strip {
          background: #0d9488;
          padding: 16px 0;
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-track {
          display: inline-flex;
          gap: 0;
          will-change: transform;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 0 24px;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: white;
          text-transform: uppercase;
        }
        .marquee-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          flex-shrink: 0;
        }
      `}</style>

      {/* Main hero block */}
      <div className="rc-section" ref={sectionRef}>
        {/* Left — doctor image */}
        <div className="rc-image-col">
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
            alt="Doctor with holographic cross"
          />
          {/* teal gradient overlay on right edge */}
          <div style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: 80,
            background: "linear-gradient(to right, transparent, #0d1f3c)",
          }} />
        </div>

        {/* Right — content */}
        <div className="rc-content">
          <div>
            {/* Top: heading + benefits side by side */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
              {/* Heading + CTA */}
              <div>
                <div className="badge">Our Benefits</div>
                <h2 style={{
                  fontSize: "clamp(22px, 2.6vw, 32px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.2,
                  marginBottom: 6,
                }}>
                  Reliable Care with
                </h2>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(22px, 2.6vw, 32px)",
                  color: "#2dd4bf",
                  marginBottom: 16,
                }}>
                  Mednix Healthcare
                </div>
                <p style={{ fontSize: 13, color: "rgba(180,210,230,0.75)", lineHeight: 1.7, maxWidth: 340 }}>
                  Our expert team combines state-of-the-art technology with personalized care to provide treatments designed around your unique health needs.
                </p>
                <button className="discover-btn">
                  Discover More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>

              {/* Benefits list */}
              <div>
                {benefits.map((b) => (
                  <div className="benefit-row" key={b.title}>
                    <div className="benefit-icon-wrap">{b.icon}</div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 3 }}>{b.title}</p>
                      <p style={{ fontSize: 12, color: "rgba(160,200,220,0.75)", lineHeight: 1.5 }}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats bars */}
          <div className="stats-row">
            {stats.map((s) => (
              <AnimatedBar key={s.label} value={s.value} animate={animate} />
            ))}
          </div>
        </div>
      </div>

      {/* Teal marquee strip */}
      <div className="marquee-strip">
        <div
          className="marquee-track"
          style={{ transform: `translateX(-${marqueeOffset}px)` }}
        >
          {doubled.map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;

