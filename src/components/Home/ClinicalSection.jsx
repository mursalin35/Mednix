import { useState } from "react";

const cases = [
  {
    id: 1,
    title: "General Dentistry",
    category: "Dental",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=85",
    size: "large", // spans 2 rows
  },
  {
    id: 2,
    title: "Optometry Care",
    category: "Retina",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=900&q=85",
    size: "large",
  },
  {
    id: 3,
    title: "Cardiac Surgery",
    category: "Cardiology",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&q=85",
    size: "small",
  },
  {
    id: 4,
    title: "Neurology Diagnosis",
    category: "Neurology",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=85",
    size: "small",
  },
];

const CaseCard = ({ item, tall }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 18,
        overflow: "hidden",
        height: tall ? "100%" : "100%",
        minHeight: tall ? 500 : 234,
        cursor: "pointer",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.22)"
          : "0 4px 20px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Background image */}
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%", height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      />

      {/* Hover overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered
          ? "linear-gradient(to top, rgba(13,148,136,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)"
          : "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 60%)",
        transition: "background 0.35s ease",
      }} />

      {/* Bottom info bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 20px",
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(255,255,255,0.6)",
        transition: "background 0.2s",
      }}>
        <span style={{
          fontSize: 14, fontWeight: 700, color: "#0f172a",
          letterSpacing: "-0.01em",
        }}>
          {item.title}
        </span>
        <span style={{
          fontSize: 11, fontWeight: 700,
          color: "#0d9488",
          background: "#f0fdfa",
          border: "1px solid #ccfbf1",
          padding: "3px 10px",
          borderRadius: 999,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}>
          {item.category}
        </span>
      </div>

      {/* Hover explore badge */}
      <div style={{
        position: "absolute", top: 16, right: 16,
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.85)",
        transition: "opacity 0.25s, transform 0.25s",
        background: "white",
        borderRadius: 999,
        padding: "6px 14px",
        fontSize: 12, fontWeight: 700,
        color: "#0d9488",
        display: "flex", alignItems: "center", gap: 6,
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
      }}>
        View Case
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>
    </div>
  );
};

const ClinicalSection = () => (
  <section style={{
    fontFamily: "'DM Sans','Segoe UI',sans-serif",
    background: "linear-gradient(180deg, #f0fdf8 0%, #f8fafc 100%)",
    padding: "72px 40px 80px",
  }}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

      .ci-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 500px 234px;
        gap: 16px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .ci-cell-1 { grid-column: 1; grid-row: 1 / 2; }
      .ci-cell-2 { grid-column: 2; grid-row: 1 / 2; }
      .ci-cell-3 { grid-column: 1; grid-row: 2 / 3; }
      .ci-cell-4 { grid-column: 2; grid-row: 2 / 3; }

      @media (max-width: 768px) {
        .ci-grid {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, 260px);
        }
        .ci-cell-1, .ci-cell-2, .ci-cell-3, .ci-cell-4 {
          grid-column: 1;
          grid-row: auto;
        }
      }
    `}</style>

    {/* Header */}
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <h2 style={{
        fontSize: "clamp(28px, 4vw, 58px)",
        fontWeight: 800,
        color: "#0d1f3c",
        lineHeight: 1.15,
        letterSpacing: "-0.025em",
      }}>
        Clinical Insights
        <br />
        <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
          {/* DNA / molecule icon */}
          <span style={{
            width: 52, height: 52,
            background: "linear-gradient(135deg, #3b82f6, #0d9488)",
            borderRadius: "50%",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            verticalAlign: "middle",
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/>
              <line x1="4" y1="21" x2="20" y2="21"/>
              <line x1="4" y1="3" x2="20" y2="3"/>
              <line x1="6" y1="12" x2="10" y2="12"/>
              <line x1="14" y1="12" x2="18" y2="12"/>
            </svg>
          </span>
          Case Studies
        </span>
      </h2>

      <p style={{
        fontSize: 15, color: "#64748b", lineHeight: 1.7,
        maxWidth: 480, margin: "16px auto 0",
      }}>
        Real-world clinical cases showcasing our team's expertise in diagnosis, treatment, and patient recovery across multiple specialties.
      </p>
    </div>

    {/* 4-image grid */}
    <div className="ci-grid">
      <div className="ci-cell-1"><CaseCard item={cases[0]} tall /></div>
      <div className="ci-cell-2"><CaseCard item={cases[1]} tall /></div>
      <div className="ci-cell-3"><CaseCard item={cases[2]} /></div>
      <div className="ci-cell-4"><CaseCard item={cases[3]} /></div>
    </div>

    {/* Bottom CTA */}
    <div style={{ textAlign: "center", marginTop: 44 }}>
      <button
        style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "13px 30px", borderRadius: 10,
          background: "linear-gradient(135deg, #0d9488, #0891b2)",
          color: "white", fontSize: 14, fontWeight: 700,
          border: "none", cursor: "pointer", fontFamily: "inherit",
          boxShadow: "0 4px 20px rgba(13,148,136,0.3)",
          transition: "transform 0.18s, box-shadow 0.18s",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(13,148,136,0.4)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(13,148,136,0.3)"; }}
      >
        View All Case Studies
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </button>
    </div>
  </section>
);

export default ClinicalSection;
