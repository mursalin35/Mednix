import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Orthopedic",
    desc: "Focuses on the diagnosis, treatment, and rehabilitation of conditions affecting the musculoskeletal system.",
    image: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
        <path d="M8 6h.01M16 6h.01M12 18v-4"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Diagnostics",
    desc: "Accurate testing and screening services to detect, monitor, and manage a wide range of medical conditions.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Diabetes Care",
    desc: "Comprehensive management of diabetes through medication, lifestyle changes, and continuous monitoring.",
    image: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Family Medicine",
    desc: "One of the defining features of family medicine is the continuity of care — physicians often build long-term relationships.",
    image: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Neurology",
    desc: "Neurology is the branch of medicine that focuses on the diagnosis, treatment, and management of nervous system disorders.",
    image: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Holistic Care",
    desc: "It recognizes that health is influenced by a combination of physical, emotional, mental, and spiritual well-being.",
    image: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "white",
        borderRadius: 16,
        border: `1.5px solid ${hovered ? "#0d9488" : "#e8f0f8"}`,
        padding: "28px 24px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        boxShadow: hovered
          ? "0 12px 40px rgba(13,148,136,0.14)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer",
        height: "100%",
      }}
    >
      {/* Icon tile + optional image */}
      <div style={{ marginBottom: 18 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: hovered
            ? "linear-gradient(135deg, #0a8a80, #0779a0)"
            : "linear-gradient(135deg, #0d9488, #0891b2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: service.image ? 14 : 0,
          transition: "background 0.25s",
          boxShadow: "0 4px 14px rgba(13,148,136,0.3)",
        }}>
          {service.icon}
        </div>

        {service.image && (
          <div style={{ borderRadius: 10, overflow: "hidden", height: 90 }}>
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "100%", height: "100%", objectFit: "cover",
                transition: "transform 0.4s ease",
                transform: hovered ? "scale(1.06)" : "scale(1)",
              }}
            />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 17, fontWeight: 700,
        color: hovered ? "#0d9488" : "#0f172a",
        marginBottom: 8, transition: "color 0.2s",
        lineHeight: 1.3,
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 13, color: "#64748b", lineHeight: 1.7,
        marginBottom: 20, flexGrow: 1,
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        {service.desc}
      </p>

      {/* CTA link */}
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        fontSize: 13, fontWeight: 700,
        color: hovered ? "#0d9488" : "#0f172a",
        borderTop: "1px solid #f1f5f9",
        paddingTop: 14,
        transition: "color 0.2s",
      }}>
        Explore Service
        <svg
          width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: "transform 0.2s", transform: hovered ? "translateX(4px)" : "translateX(0)" }}
        >
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>
    </div>
  );
};

const OurDepartment = () => (
  <section style={{
    fontFamily: "'DM Sans','Segoe UI',sans-serif",
    background: "#f8fafc",
    padding: "72px 40px 80px",
  }}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');
      .services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        max-width: 1100px;
        margin: 0 auto;
      }
      @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 580px) { .services-grid { grid-template-columns: 1fr; } }
    `}</style>

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
        Our Department
      </div>

      <h2 style={{
        fontSize: "clamp(24px, 3.5vw, 46px)",
        fontWeight: 800, color: "#0d1f3c",
        lineHeight: 1.2, letterSpacing: "-0.02em",
        maxWidth: 600, margin: "0 auto",
      }}>
        Comprehensive Medical<br />
        Services for{" "}
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic", fontWeight: 600,
          color: "#0d9488",
        }}>
          Your Health
        </span>
      </h2>
    </div>

    {/* Grid */}
    <div className="services-grid">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>

    {/* Bottom CTA */}
    <div style={{ textAlign: "center", marginTop: 44 }}>
      <button style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "13px 30px", borderRadius: 10,
        background: "linear-gradient(135deg, #0d9488, #0891b2)",
        color: "white", fontSize: 14, fontWeight: 700,
        border: "none", cursor: "pointer",
        fontFamily: "inherit",
        boxShadow: "0 4px 20px rgba(13,148,136,0.3)",
        transition: "transform 0.18s, box-shadow 0.18s",
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(13,148,136,0.4)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(13,148,136,0.3)"; }}
      >
        View All Services
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </button>
    </div>
  </section>
);

export default OurDepartment;

