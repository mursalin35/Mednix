import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1600&q=85",
    badge: "Trusted Specialists",
    heading: ["Your Trusted Partner", "Health and Wellness"],
    desc: "Our experienced medical team combines the latest technology with personalized attention to provide you with exceptional healthcare tailored to your unique needs.",
    cta: "Meet Our Team",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=85",
    badge: "Advanced Care",
    heading: ["Compassionate Care,", "Exceptional Results"],
    desc: "From routine check-ups to complex procedures, our specialists deliver world-class treatment using cutting-edge facilities and evidence-based medicine.",
    cta: "Our Services",
  },
];

const navLinks = [
  { label: "HOME", hasDropdown: true },
  { label: "PAGES", hasDropdown: true },
  { label: "SERVICES", hasDropdown: true },
  { label: "CASE STUDIES", hasDropdown: true },
  { label: "BLOGS", hasDropdown: true },
  { label: "CONTACT", hasDropdown: false },
];

const Herosection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setTextVisible(false);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
      setTimeout(() => setTextVisible(true), 80);
    }, 500);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const slide = slides[current];

  return (
    <div style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .hero-wrap {
          position: relative;
          width: 100%;
          height: 88vh;
          min-height: 520px;
          max-height: 760px;
          overflow: hidden;
          border-radius: 0 0 0 0;
        }

        .hero-bg {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center 20%;
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            90deg,
            rgba(6,18,38,0.82) 0%,
            rgba(6,18,38,0.55) 45%,
            rgba(6,18,38,0.15) 75%,
            transparent 100%
          );
        }

        /* Navbar */
        .mednix-nav {
          position: absolute; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px;
          height: 68px;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .nav-logo { display: flex; align-items: center; gap: 9px; text-decoration: none; }
        .nav-links { display: flex; align-items: center; gap: 4px; }
        .nav-link {
          display: flex; align-items: center; gap: 4px;
          padding: 8px 12px; border-radius: 8px;
          font-size: 13px; font-weight: 700; letter-spacing: 0.04em;
          color: #1e293b; cursor: pointer; transition: background 0.15s, color 0.15s;
          border: none; background: none; font-family: inherit;
        }
        .nav-link.active { background: #f0fdfa; color: #0d9488; }
        .nav-link:hover { background: #f8fafc; }
        .nav-right { display: flex; align-items: center; gap: 16px; }
        .emergency-call { display: flex; align-items: center; gap: 10px; }
        .appt-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 8px;
          background: linear-gradient(135deg, #0d9488, #0891b2);
          color: white; font-size: 13px; font-weight: 700;
          border: none; cursor: pointer; font-family: inherit;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .appt-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(13,148,136,0.4); }

        /* Hero content */
        .hero-content {
          position: absolute; bottom: 0; left: 0; right: 0; top: 68px;
          display: flex; align-items: center;
          padding: 0 60px;
          pointer-events: none;
        }
        .hero-left { max-width: 560px; pointer-events: all; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          margin-bottom: 20px;
        }
        .badge-mednix {
          background: #0d9488; color: white;
          font-size: 10px; font-weight: 800; letter-spacing: 0.12em;
          padding: 3px 10px; border-radius: 4px;
        }
        .badge-label {
          font-size: 12px; font-weight: 700; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.85); text-transform: uppercase;
        }
        .hero-heading {
          font-size: clamp(32px, 4.5vw, 62px);
          font-weight: 800;
          line-height: 1.1;
          color: white;
          letter-spacing: -0.02em;
          margin-bottom: 0;
        }

        /* Info card */
        .info-card {
          position: absolute;
          bottom: 60px; right: 60px;
          background: white;
          border-radius: 16px;
          padding: 28px 28px 24px;
          max-width: 310px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
          pointer-events: all;
        }
        .meet-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 8px;
          background: linear-gradient(135deg, #0d9488, #0891b2);
          color: white; font-size: 13px; font-weight: 700;
          border: none; cursor: pointer; font-family: inherit;
          margin-top: 18px;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .meet-btn:hover { transform: translateX(3px); box-shadow: 0 4px 16px rgba(13,148,136,0.4); }

        /* Slide nav arrows */
        .slide-arrows {
          position: absolute; right: 0; top: 50%; transform: translateY(-50%);
          display: flex; flex-direction: column; gap: 2px; z-index: 20;
        }
        .arrow-btn {
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.2);
          color: white; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.18s;
          border-radius: 4px 0 0 4px;
        }
        .arrow-btn:hover { background: rgba(13,148,136,0.6); }

        /* Dot indicators */
        .slide-dots {
          position: absolute; bottom: 28px; left: 60px;
          display: flex; gap: 8px; z-index: 20;
        }
        .dot {
          width: 28px; height: 4px; border-radius: 99px;
          background: rgba(255,255,255,0.35); cursor: pointer;
          transition: background 0.2s, width 0.3s;
        }
        .dot.active { background: #2dd4bf; width: 44px; }

        /* Text animation */
        .text-slide-in {
          animation: slideUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .text-hidden { opacity: 0; transform: translateY(12px); }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="mednix-nav">
        {/* Logo */}
        <a className="nav-logo" href="#">
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "linear-gradient(135deg, #0d9488, #0891b2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg viewBox="0 0 36 36" width="22" height="22" fill="none">
              <rect x="14" y="5" width="8" height="26" rx="2" fill="white" opacity="0.95"/>
              <rect x="5" y="14" width="26" height="8" rx="2" fill="white" opacity="0.95"/>
            </svg>
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>Mednix</span>
        </a>

        {/* Nav links */}
        <div className="nav-links">
          {navLinks.map((l, i) => (
            <button key={l.label} className={`nav-link${i === 0 ? " active" : ""}`}>
              {l.label}
              {l.hasDropdown && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="nav-right">
          <div className="emergency-call">
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "2px solid #0d9488",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.81 19.79 19.79 0 0 1 1.6 1.18 2 2 0 0 1 3.57 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15.3v.01z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 10, color: "#94a3b8", fontWeight: 500, lineHeight: 1 }}>Emergency Call:</p>
              <p style={{ fontSize: 14, fontWeight: 800, color: "#0f172a", lineHeight: 1.4 }}>(888) 4567890</p>
            </div>
          </div>

          <button className="appt-btn">
            Appointment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          <button style={{
            width: 38, height: 38, borderRadius: 8,
            border: "1.5px solid #e2e8f0", background: "white",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* ── HERO SLIDER ── */}
      <div className="hero-wrap">
        {/* Background images */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="hero-bg"
            style={{
              backgroundImage: `url(${s.image})`,
              opacity: i === current ? 1 : 0,
              transform: i === current ? "scale(1)" : "scale(1.04)",
              zIndex: i === current ? 1 : 0,
            }}
          />
        ))}

        {/* Overlay */}
        <div className="hero-overlay" style={{ zIndex: 2 }} />

        {/* Content */}
        <div className="hero-content" style={{ zIndex: 3 }}>
          <div className="hero-left">
            <div className={`hero-badge ${textVisible ? "text-slide-in" : "text-hidden"}`}
              style={{ animationDelay: "0.05s" }}>
              <span className="badge-mednix">MEDNIX</span>
              <span className="badge-label">{slide.badge}</span>
            </div>

            <h1 className={`hero-heading ${textVisible ? "text-slide-in" : "text-hidden"}`}
              style={{ animationDelay: "0.15s" }}>
              {slide.heading[0]}<br />{slide.heading[1]}
            </h1>
          </div>
        </div>

        {/* Info card — bottom right */}
        <div className="info-card" style={{ zIndex: 3 }}>
          <p className={`${textVisible ? "text-slide-in" : "text-hidden"}`}
            style={{
              fontSize: 13, color: "#475569", lineHeight: 1.7,
              animationDelay: "0.25s",
            }}>
            {slide.desc}
          </p>
          <button className="meet-btn">
            {slide.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

        {/* Slide arrows */}
        <div className="slide-arrows" style={{ zIndex: 10 }}>
          <button className="arrow-btn" onClick={prev}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
          <button className="arrow-btn" onClick={next}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="slide-dots" style={{ zIndex: 10 }}>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Herosection;