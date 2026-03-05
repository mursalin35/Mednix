import { useState } from "react";

const MarqueeItem = ({ text }) => (
  <span className="inline-flex items-center gap-6 px-4">
    <span className="text-5xl font-black tracking-widest text-white uppercase">{text}</span>
    <span className="text-teal-400 text-3xl">✳</span>
  </span>
);

const Footer = () =>{
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const marqueeItems = [
    "Psychiatry", "Oncology", "Pediatrics", "Ophthalmology",
    "Cardiology", "Dentistry", "Eye Care", "Neurology",
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0d2137 40%, #1a1535 70%, #2d1a1a 100%)",
        fontFamily: "'Sora', 'DM Sans', sans-serif",
      }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,180,180,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(180,60,40,0.18) 0%, transparent 70%)",
          filter: "blur(50px)",
          transform: "translate(30%, -30%)",
        }}
      />

      {/* Main footer content */}
      <div className="relative z-10 px-8 pt-16 pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

          {/* Brand card */}
          <div
            className="rounded-2xl p-6 shadow-2xl"
            style={{ background: "rgba(255,255,255,0.97)" }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9">
                <div
                  className="absolute inset-0 rounded"
                  style={{ background: "linear-gradient(135deg, #00b4b4, #0077aa)" }}
                />
                <svg viewBox="0 0 36 36" className="absolute inset-0 w-full h-full" fill="none">
                  <rect x="14" y="6" width="8" height="24" rx="2" fill="white" opacity="0.9"/>
                  <rect x="6" y="14" width="24" height="8" rx="2" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span
                className="text-2xl font-black tracking-tight"
                style={{ color: "#0d1f3c" }}
              >
                Mednix
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: "#546e8a" }}>
              We dedicated to providing flexible &amp; accessible healthcare services.
            </p>

            <div className="space-y-3">
              {[
                { label: "Mon – Fri", time: "9:00 – 18:00" },
                { label: "Sat – Sun", time: "8:00 – 16:00" },
                { label: "Emergency", time: "24/7 Hours" },
              ].map(({ label, time }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-2 text-sm"
                  style={{ borderBottom: "1px solid #e8eef4" }}
                >
                  <span style={{ color: "#546e8a" }}>{label}</span>
                  <span className="font-semibold" style={{ color: "#0d1f3c" }}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 tracking-wide uppercase opacity-90">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About Us", "Our Doctors", "Contact", "Blog Classic"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm transition-all duration-200 hover:pl-2"
                    style={{ color: "rgba(180,210,230,0.8)" }}
                    onMouseEnter={e => e.target.style.color = "#2dd4bf"}
                    onMouseLeave={e => e.target.style.color = "rgba(180,210,230,0.8)"}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 tracking-wide uppercase opacity-90">
              Department
            </h3>
            <ul className="space-y-3">
              {["Eye Care", "Cardiology", "Dentist", "Pregnancy"].map((dept) => (
                <li key={dept}>
                  <a
                    href="#"
                    className="text-sm transition-all duration-200 hover:pl-2"
                    style={{ color: "rgba(180,210,230,0.8)" }}
                    onMouseEnter={e => e.target.style.color = "#2dd4bf"}
                    onMouseLeave={e => e.target.style.color = "rgba(180,210,230,0.8)"}
                  >
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base mb-2 tracking-wide uppercase opacity-90">
              Newsletter
            </h3>
            <p className="text-sm mb-5" style={{ color: "rgba(180,210,230,0.75)", lineHeight: 1.6 }}>
              Join the Community and Receive Our Monthly Newsletter Straight to Your Inbox
            </p>
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="w-full rounded-xl py-3 pl-4 pr-14 text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                }}
              />
              <button
                type="submit"
                className="absolute right-2 w-9 h-9 rounded-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                style={{ background: "linear-gradient(135deg, #00b4b4, #0099cc)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
            {submitted && (
              <p className="mt-2 text-xs text-teal-400 animate-pulse">
                ✓ Subscribed successfully!
              </p>
            )}
          </div>
        </div>

        {/* Contact bar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              ),
              label: "Visit Our Clinic",
              value: "5th Street, 21st Floor, New York, USA",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              ),
              label: "General Inquiries",
              value: "info@example.com",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.81 19.79 19.79 0 0 1 1.6 1.18 2 2 0 0 1 3.57-.01h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15.3v.01z"/>
                </svg>
              ),
              label: "Emergency Cases",
              value: "(888) 4567890",
            },
          ].map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #00b4b4, #0099cc)", color: "white" }}
              >
                {icon}
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "rgba(150,190,210,0.7)" }}>{label}</p>
                <p className="text-sm font-semibold text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div
        className="relative overflow-hidden py-5"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 22s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <MarqueeItem key={i} text={item} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 text-center py-4 text-xs"
        style={{ color: "rgba(150,180,200,0.55)" }}
      >
        © 2026, Mednix. Made with passion by ThemeHt.
      </div>
    </footer>
  );
}

export default Footer