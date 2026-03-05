import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Sapphire Rose",
    specialty: "Dental",
    rating: 4,
    text: "The medical team is incredibly knowledgeable and thorough. I felt confident in their care every step of the way. I'm so thankful for their expertise.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Melissa Jewel",
    specialty: "Therapy",
    rating: 5,
    text: "The medical team is incredibly knowledgeable and thorough. I felt confident in their care every step of the way. I'm so thankful for their expertise.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    name: "Xeinna Chris",
    specialty: "Psychology",
    rating: 4,
    text: "The medical team is incredibly knowledgeable and thorough. I felt confident in their care every step of the way. I'm so thankful for their expertise.",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    id: 4,
    name: "Cathy Divine",
    specialty: "Pediatrics",
    rating: 4,
    text: "The medical team is incredibly knowledgeable and thorough. I felt confident in their care every step of the way. I'm so thankful for their expertise.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 5,
    name: "Arietta Preston",
    specialty: "Cardiology",
    rating: 4,
    text: "From the moment I walked in, I felt genuinely cared for. The doctors took the time to explain everything and answered all my questions.",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    id: 6,
    name: "Woulfe Nick",
    specialty: "Oncology",
    rating: 5,
    text: "Everyone from the reception to the doctors was friendly and professional. The clinic is clean, modern, and welcoming. They treat you like a person.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 7,
    name: "Daniel Carter",
    specialty: "Neurology",
    rating: 5,
    text: "Exceptional care from start to finish. The staff was warm, attentive, and truly invested in my recovery. I couldn't have asked for better treatment.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 8,
    name: "Lena Park",
    specialty: "Dermatology",
    rating: 4,
    text: "My experience at the clinic was outstanding. Every team member showed genuine compassion and professionalism throughout my entire visit.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#f59e0b" : "none"}
          stroke={star <= rating ? "#f59e0b" : "#d1d5db"}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, dimmed }) {
  return (
    <div
      style={{
        minWidth: 260,
        maxWidth: 260,
        background: "white",
        borderRadius: 16,
        border: "1px solid #e8eef6",
        padding: "20px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: dimmed ? 0.35 : 1,
        transform: dimmed ? "scale(0.96)" : "scale(1)",
        flexShrink: 0,
      }}
    >
      {/* Author */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={review.image}
          alt={review.name}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #e0eaf8",
          }}
        />
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", lineHeight: 1.2 }}>
            {review.name}
          </p>
          <p style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{review.specialty}</p>
        </div>
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: 13,
          color: "#475569",
          lineHeight: 1.65,
          marginBottom: 16,
          fontStyle: "italic",
        }}
      >
        "{review.text}"
      </p>

      <StarRating rating={review.rating} />
    </div>
  );
}

function CarouselRow({ items, reverse = false }) {
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const animRef = useRef(null);
  const speed = reverse ? -0.4 : 0.4;
  const doubled = [...items, ...items];

  useEffect(() => {
    let lastTime = null;
    const step = (timestamp) => {
      if (lastTime !== null) {
        const delta = timestamp - lastTime;
        setOffset((prev) => {
          const cardWidth = 276; // 260 + 16 gap
          const totalWidth = items.length * cardWidth;
          let next = prev + speed * (delta / 16);
          if (next > totalWidth) next -= totalWidth;
          if (next < 0) next += totalWidth;
          return next;
        });
      }
      lastTime = timestamp;
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [items.length, speed]);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 16,
          width: "max-content",
          transform: `translateX(${-offset}px)`,
          willChange: "transform",
        }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} dimmed={false} />
        ))}
      </div>
    </div>
  );
}

export default function Feedback() {
  const row1 = reviews;
  const row2 = [...reviews].reverse();

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #f0f6ff 0%, #ffffff 60%)",
        padding: "80px 0 60px",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 56, padding: "0 16px" }}>
        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            color: "#0d1f3c",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Feedback from
          <br />
          <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                fontSize: 26,
              }}
            >
              🩺
            </span>
            Our Patient
          </span>
        </h2>
      </div>

      {/* Row 1 — left to right */}
      <div style={{ marginBottom: 20 }}>
        <CarouselRow items={row1} reverse={false} />
      </div>

      {/* Row 2 — right to left */}
      <CarouselRow items={row2} reverse={true} />
    </section>
  );
}