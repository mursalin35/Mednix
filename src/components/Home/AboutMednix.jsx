import { useEffect, useRef, useState } from "react";

const specialties = [
  "General Surgery", "Cardiology", "Neurology", "Dental Care",
  "Ophthalmology", "Orthopedics", "Pediatrics", "Oncology",
];

const hours = [
  { day: "Mon – Fri", time: "9:00 – 18:00" },
  { day: "Sat – Sun", time: "8:00 – 16:00" },
  { day: "Emergency", time: "24/7 Hours" },
];

const AboutMednix = () => {
  const [count, setCount] = useState(0);
  const [marqueeOffset, setMarqueeOffset] = useState(0);
  const sectionRef = useRef(null);
  const animRef = useRef(null);
  const countStarted = useRef(false);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countStarted.current) {
          countStarted.current = true;
          let start = 0;
          const target = 25;
          const duration = 1800;
          const step = (target / duration) * 16;
          const interval = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(interval); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Marquee animation
  useEffect(() => {
    const ITEM_W = 260;
    const total = specialties.length * ITEM_W;
    let last = null;
    const step = (ts) => {
      if (last !== null) {
        setMarqueeOffset((p) => (p + 0.6) % total);
      }
      last = ts;
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const doubled = [...specialties, ...specialties];

  return (
    <section style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif", background: "#fff", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 40px 60px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; padding: 48px 20px 40px; }
          .right-col { order: -1; }
        }

        /* Left column */
        .about-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: 999px;
          border: 1px solid #e2e8f0;
          font-size: 12px; font-weight: 600; color: #374151;
          background: white; margin-bottom: 16px;
        }
        .about-heading {
          font-size: clamp(26px, 3.2vw, 42px);
          font-weight: 800; color: #0f172a;
          line-height: 1.15; letter-spacing: -0.02em;
          margin-bottom: 4px;
        }
        .about-heading-italic {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic; font-weight: 600;
          font-size: clamp(26px, 3.2vw, 42px);
          color: #0d9488; line-height: 1.2;
          margin-bottom: 28px; display: block;
        }

        /* Hours card */
        .hours-card {
          background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);
          border-radius: 16px;
          padding: 24px 28px;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
          box-shadow: 0 12px 40px rgba(13,148,136,0.28);
        }
        .hours-title {
          font-size: 15px; font-weight: 700; color: white;
          margin-bottom: 16px; letter-spacing: 0.01em;
        }
        .hours-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          font-size: 13px;
        }
        .hours-row:last-child { border-bottom: none; padding-bottom: 0; }
        .hours-day { color: rgba(255,255,255,0.85); font-weight: 500; }
        .hours-time { color: white; font-weight: 700; }

        /* Team photo grid */
        .photo-grid {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          height: 300px;
        }
        .photo-grid img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          display: block;
        }

        /* Right column */
        .stat-block {
          position: relative;
          margin-bottom: 28px;
        }
        .stat-number {
          font-size: clamp(72px, 9vw, 110px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #0f172a;
          display: flex; align-items: flex-start; gap: 4px;
          position: relative;
        }
        .stat-plus {
          font-size: clamp(36px, 5vw, 56px);
          color: #0d9488;
          margin-top: 12px;
          font-weight: 900;
        }
        .stat-img-overlay {
          position: absolute;
          inset: 0;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          mix-blend-mode: multiply;
          opacity: 0.18;
          pointer-events: none;
        }
        .stat-img-overlay img {
          width: 100%; height: 100%; object-fit: cover;
        }

        /* Expert row */
        .expert-row {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 14px;
        }
        .avatar-stack { display: flex; }
        .avatar-stack img {
          width: 38px; height: 38px; border-radius: 50%;
          border: 2px solid white; object-fit: cover;
          margin-left: -10px;
        }
        .avatar-stack img:first-child { margin-left: 0; }
        .expert-label {
          font-size: 11px; font-weight: 800;
          letter-spacing: 0.07em; color: #0f172a;
          text-transform: uppercase; line-height: 1.3;
        }

        .about-desc {
          font-size: 14px; color: #64748b;
          line-height: 1.75; margin-bottom: 24px;
          max-width: 380px;
        }

        .discover-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 24px; border-radius: 10px;
          background: linear-gradient(135deg, #0d9488, #0891b2);
          color: white; font-size: 14px; font-weight: 700;
          border: none; cursor: pointer; font-family: inherit;
          transition: transform 0.18s, box-shadow 0.2s;
        }
        .discover-btn:hover {
          transform: translateX(4px);
          box-shadow: 0 6px 20px rgba(13,148,136,0.38);
        }

        /* Marquee */
        .marquee-strip {
          overflow: hidden; padding: 24px 0;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }
        .marquee-track {
          display: inline-flex; gap: 0;
          will-change: transform;
        }
        .marquee-item {
          display: inline-flex; align-items: center; gap: 18px;
          padding: 0 32px;
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: #0f172a;
          white-space: nowrap;
          text-transform: uppercase;
        }
        .marquee-star {
          font-size: 22px; color: #94a3b8; flex-shrink: 0;
        }
      `}</style>

      {/* ── MAIN CONTENT ── */}
      <div className="about-grid" ref={sectionRef}>

        {/* LEFT */}
        <div>
          <div className="about-badge">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0d9488", flexShrink: 0 }} />
            About Mednix
          </div>

          <h2 className="about-heading">Caring for You Like</h2>
          <span className="about-heading-italic">Family Health</span>

          {/* Hours card sits above image */}
          <div style={{ position: "relative" }}>
            <div className="hours-card">
              <p className="hours-title">Opening Hours:</p>
              {hours.map((h) => (
                <div className="hours-row" key={h.day}>
                  <span className="hours-day">{h.day}</span>
                  <span className="hours-time">{h.time}</span>
                </div>
              ))}
            </div>

            {/* Team photo */}
            <div className="photo-grid">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                alt="Medical team"
              />
              {/* subtle gradient at bottom */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
                background: "linear-gradient(to top, rgba(255,255,255,0.5), transparent)",
              }} />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-col" style={{ paddingTop: 12 }}>

          {/* 25+ stat with doctor image texture */}
          <div className="stat-block">
            <div style={{ position: "relative", display: "inline-block" }}>
              <div className="stat-number">
                {count}
                <span className="stat-plus">+</span>
              </div>
              {/* doctor image clipped behind number */}
              <div style={{
                position: "absolute", inset: 0, overflow: "hidden",
                borderRadius: 8, pointerEvents: "none",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80"
                  alt=""
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    opacity: 0.12,
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
              Years of Excellence
            </p>
          </div>

          {/* Expert row */}
          <div className="expert-row">
            <div className="avatar-stack">
              {[
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
                "https://randomuser.me/api/portraits/men/32.jpg",
              ].map((src, i) => (
                <img key={i} src={src} alt="expert" />
              ))}
            </div>
            <p className="expert-label">Trusted Experts in Medical<br />Health and Wellness</p>
          </div>

          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg,#0d9488,#0891b2)", borderRadius: 99, marginBottom: 18 }} />

          <p className="about-desc">
            We're committed to offering compassionate and comprehensive healthcare tailored to your needs. At Mednix, your health is our priority every step of the way.
          </p>

          <button className="discover-btn">
            Discover More
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          {/* Small trust badges */}
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            {["ISO Certified", "24/7 Support", "5★ Rated"].map((b) => (
              <span key={b} style={{
                padding: "6px 14px", borderRadius: 999,
                background: "#f0fdfa",
                border: "1px solid #ccfbf1",
                fontSize: 11, fontWeight: 700,
                color: "#0d9488", letterSpacing: "0.04em",
              }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div className="marquee-strip">
        <div
          className="marquee-track"
          style={{ transform: `translateX(-${marqueeOffset}px)` }}
        >
          {doubled.map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="marquee-star">✳</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMednix;
