import { useState, useEffect, useRef } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Jayne Adams",
    specialty: "Gynecologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    id: 2,
    name: "Dr. Aviana Lexa",
    specialty: "Physician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
  },
  {
    id: 3,
    name: "Dr. Eddie Shock",
    specialty: "Osteopaths",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  },
  {
    id: 4,
    name: "Dr. Marcus Reid",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
  },
  {
    id: 5,
    name: "Dr. Sophia Lane",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    id: 6,
    name: "Dr. Nathan Cruz",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80",
  },
];

const marqueeWords = [
  "Emergency Services", "Expert Physicians", "Advanced Care",
  "Patient First", "24/7 Support", "Trusted Health",
];

const SocialIcon = ({ children, href = "#" }) => (
  <a
    href={href}
    style={{
      width: 34, height: 34, borderRadius: "50%",
      background: "white",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      transition: "transform 0.18s, background 0.18s",
      color: "#0f172a",
      textDecoration: "none",
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "#0d9488"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "scale(1.12)"; }}
    onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#0f172a"; e.currentTarget.style.transform = "scale(1)"; }}
  >
    {children}
  </a>
);

const DoctorCard = ({ doctor }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ flexShrink: 0, width: 280 }}>
      {/* Image block */}
      <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 320 }}>
        <img
          src={doctor.image}
          alt={doctor.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />

        {/* Social popup */}
        {open && (
          <div style={{
            position: "absolute", right: 56, bottom: 10,
            display: "flex", flexDirection: "column", gap: 8,
            animation: "popIn 0.2s ease forwards",
          }}>
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M15.232 9.232L20 4"/></svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </SocialIcon>
          </div>
        )}

        {/* Share toggle button */}
        <button
          onClick={() => setOpen(p => !p)}
          style={{
            position: "absolute", right: 12, bottom: 12,
            width: 38, height: 38, borderRadius: "50%",
            background: open ? "#0d9488" : "#0f172a",
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, transform 0.2s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </button>
      </div>

      {/* Info */}
      <div style={{ paddingTop: 14, paddingLeft: 4 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>{doctor.name}</h3>
        <p style={{ fontSize: 13, color: "#64748b" }}>{doctor.specialty}</p>
      </div>
    </div>
  );
};

const MedicalProfessionals = () => {
  const [offset, setOffset] = useState(0);
  const [marqueeOffset, setMarqueeOffset] = useState(0);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const marqRef = useRef(null);
  const CARD_W = 296; // 280 + 16 gap
  const maxOffset = (doctors.length - 3) * CARD_W;

  // Marquee
  useEffect(() => {
    const ITEM_W = 320;
    const total = marqueeWords.length * ITEM_W;
    let last = null;
    const step = (ts) => {
      if (last !== null) setMarqueeOffset(p => (p + 0.55) % total);
      last = ts;
      marqRef.current = requestAnimationFrame(step);
    };
    marqRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(marqRef.current);
  }, []);

  const prev = () => setOffset(p => Math.max(0, p - CARD_W));
  const next = () => setOffset(p => Math.min(maxOffset, p + CARD_W));

  const doubled = [...marqueeWords, ...marqueeWords];

  return (
    <section style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif", background: "#fff", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');
        @keyframes popIn {
          from { opacity: 0; transform: translateY(8px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .doctors-section { padding: 72px 40px 56px; max-width: 1200px; margin: 0 auto; }
        @media (max-width: 640px) { .doctors-section { padding: 48px 20px 40px; } }

        .nav-arrow {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid #e2e8f0;
          background: white; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.18s, border-color 0.18s, transform 0.18s;
          color: #475569;
        }
        .nav-arrow:hover {
          background: #0d9488; border-color: #0d9488; color: white;
          transform: scale(1.08);
        }
        .nav-arrow:disabled { opacity: 0.35; cursor: not-allowed; }
        .nav-arrow:disabled:hover { background: white; border-color: #e2e8f0; color: #475569; transform: none; }

        /* Two-tone marquee */
        .marquee-strip {
          overflow: hidden;
          border-top: 1px solid #f1f5f9;
        }
        .marquee-track {
          display: inline-flex;
          will-change: transform;
        }
        .marquee-item {
          display: inline-flex; align-items: center;
          white-space: nowrap;
        }
        .mq-dark {
          font-size: clamp(28px, 4vw, 56px);
          font-weight: 900; letter-spacing: -0.025em;
          color: #0d1f3c; text-transform: uppercase;
          padding: 20px 28px;
        }
        .mq-teal {
          font-size: clamp(28px, 4vw, 56px);
          font-weight: 900; letter-spacing: -0.025em;
          color: #0d9488; text-transform: uppercase;
          padding: 20px 28px;
        }
        .mq-star { font-size: 20px; color: #94a3b8; padding: 0 4px; }
      `}</style>

      <div className="doctors-section">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            padding: "5px 16px", borderRadius: 999,
            border: "1px solid #e2e8f0", background: "white",
            fontSize: 12, fontWeight: 600, color: "#374151",
            marginBottom: 14,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0d9488" }} />
            Medical Professionals
          </div>

          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 48px)",
            fontWeight: 800, color: "#0d1f3c",
            lineHeight: 1.2, letterSpacing: "-0.02em",
          }}>
            Meet the Health Experts<br />
            Behind{" "}
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic", fontWeight: 600,
              color: "#0d9488",
            }}>
              Your Care
            </span>
          </h2>
        </div>

        {/* Slider */}
        <div style={{ position: "relative" }}>
          {/* Cards viewport */}
          <div style={{ overflow: "hidden" }}>
            <div
              ref={trackRef}
              style={{
                display: "flex", gap: 16,
                transform: `translateX(-${offset}px)`,
                transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {doctors.map(doc => (
                <DoctorCard key={doc.id} doctor={doc} />
              ))}
            </div>
          </div>

          {/* Arrow controls */}
          <div style={{
            display: "flex", justifyContent: "center", gap: 12,
            marginTop: 36,
          }}>
            <button className="nav-arrow" onClick={prev} disabled={offset === 0}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            {/* Dot indicators */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {Array.from({ length: doctors.length - 2 }).map((_, i) => {
                const active = Math.round(offset / CARD_W) === i;
                return (
                  <button
                    key={i}
                    onClick={() => setOffset(i * CARD_W)}
                    style={{
                      width: active ? 28 : 8, height: 8,
                      borderRadius: 99, border: "none", cursor: "pointer",
                      background: active ? "#0d9488" : "#e2e8f0",
                      transition: "width 0.3s, background 0.2s",
                      padding: 0,
                    }}
                  />
                );
              })}
            </div>

            <button className="nav-arrow" onClick={next} disabled={offset >= maxOffset}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Two-tone marquee strip */}
      <div className="marquee-strip">
        <div
          className="marquee-track"
          style={{ transform: `translateX(-${marqueeOffset}px)` }}
        >
          {doubled.map((word, i) => (
            <span className="marquee-item" key={i}>
              <span className={i % 2 === 0 ? "mq-dark" : "mq-teal"}>{word}</span>
              <span className="mq-star">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalProfessionals;


