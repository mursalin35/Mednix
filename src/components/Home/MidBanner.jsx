import { useEffect, useRef, useState } from "react";

const useCountUp = (target, duration = 2000, triggered = false) => {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!triggered || started.current) return;
    started.current = true;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setValue(target); clearInterval(interval); }
      else setValue(Math.floor(current * 10) / 10);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [triggered, target, duration]);
  return value;
};

const MidBanner = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const rate = useCountUp(99.9, 2200, visible);
  const years = useCountUp(20, 1800, visible);
  const treatments = useCountUp(15000, 2400, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(320px, 42vw, 520px)",
        overflow: "hidden",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .stats-card {
          position: absolute;
          top: 50%; right: 18%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.14);
          backdrop-filter: blur(18px) saturate(1.4);
          -webkit-backdrop-filter: blur(18px) saturate(1.4);
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: 20px;
          padding: 32px 36px;
          min-width: 240px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
          color: white;
        }
        @media (max-width: 768px) {
          .stats-card {
            right: 50%; transform: translate(50%, -50%);
            min-width: 200px;
          }
        }

        .rate-num {
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: white;
          line-height: 1;
          margin-top: 10px;
        }

        .pill-badges {
          position: absolute;
          bottom: 28px; left: 40px;
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .pill {
          padding: 6px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          font-size: 12px; font-weight: 700;
          color: white; letter-spacing: 0.04em;
          white-space: nowrap;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-in { animation: fadeSlideUp 0.7s ease forwards; }
      `}</style>

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1800&q=85"
        alt="Doctor with patient"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 30%",
          display: "block",
        }}
      />

      {/* Left dark gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, rgba(10,22,44,0.45) 0%, rgba(10,22,44,0.1) 50%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Floating glass stats card */}
      <div className={`stats-card ${visible ? "anim-in" : ""}`} style={{ opacity: visible ? undefined : 0 }}>
        {/* Doctor icon */}
        <div style={{ marginBottom: 10 }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>

        {/* Description */}
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.55, maxWidth: 180, marginBottom: 2 }}>
          Over <strong style={{ color: "white" }}>{Math.floor(years)}+ Years</strong> of Medical Excellence and{" "}
          <strong style={{ color: "white" }}>{treatments >= 15000 ? "15,000+" : `${Math.floor(treatments).toLocaleString()}+`}</strong> Successful Treatments
        </p>

        {/* Big rate */}
        <div className="rate-num">
          {rate >= 99.9 ? "99.9" : rate.toFixed(1)}%
        </div>

        {/* Label */}
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 4, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          Success Rate
        </p>

        {/* Mini divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.2)", margin: "16px 0 12px" }} />

        {/* Mini stats row */}
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { val: "500+", label: "Doctors" },
            { val: "50+", label: "Specialties" },
          ].map(s => (
            <div key={s.label}>
              <p style={{ fontSize: 18, fontWeight: 800, color: "white", lineHeight: 1 }}>{s.val}</p>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginTop: 2, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom pill badges */}
      <div className="pill-badges">
        {["ISO Certified", "24/7 Emergency", "Award Winning Care"].map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
    </section>
  );
};

export default MidBanner;