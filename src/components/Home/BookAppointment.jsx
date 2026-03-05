import { useState } from "react";

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", department: "", doctor: "", date: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const departments = ["Cardiology", "Dentistry", "Eye Care", "Neurology", "Oncology", "Pediatrics", "Psychology", "Therapy"];
  const doctors = ["Dr. Sapphire Rose", "Dr. Melissa Jewel", "Dr. Xeinna Chris", "Dr. Cathy Divine", "Dr. Arietta Preston", "Dr. Woulfe Nick"];

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const inputBase = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1.5px solid #e2e8f0",
    fontSize: 14,
    color: "#0f172a",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const InputField = ({ name, placeholder, type = "text" }) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={form[name]}
      onChange={handleChange}
      style={inputBase}
      onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
    />
  );

  const SelectField = ({ name, placeholder, options }) => (
    <div style={{ position: "relative" }}>
      <select
        name={name}
        value={form[name]}
        onChange={handleChange}
        style={{ ...inputBase, appearance: "none", paddingRight: 40, color: form[name] ? "#0f172a" : "#94a3b8", cursor: "pointer" }}
        onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
        onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <svg style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );

  return (
    <section style={{ background: "#f8fafc", fontFamily: "'DM Sans', 'Segoe UI', sans-serif", padding: "60px 16px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        .appt-img { border-radius: 18px; width: 100%; height: 360px; object-fit: cover; display: block; }
        .form-card {
          background: white;
          border-radius: 20px;
          padding: 36px 32px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.10);
          position: relative;
          z-index: 2;
        }
        @media (min-width: 1024px) {
          .form-card { margin-left: -80px; margin-top: 80px; }
        }
        .dot-map {
          position: absolute;
          top: 0; right: 0;
          width: 55%;
          height: 100%;
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 18px 18px;
          opacity: 0.45;
          pointer-events: none;
          border-radius: 0 20px 20px 0;
          mask-image: linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%);
        }
        .book-btn {
          background: linear-gradient(135deg, #0d9488, #0891b2);
          color: white;
          border: none;
          border-radius: 10px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.18s, box-shadow 0.18s;
          font-family: inherit;
        }
        .book-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(13,148,136,0.35); }
        .book-btn:active { transform: translateY(0); }
        .contact-row { display: flex; align-items: center; gap: 14px; }
        .contact-icon {
          width: 44px; height: 44px; border-radius: 50%;
          background: #f0fdfa;
          border: 1.5px solid #ccfbf1;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}
          className="lg:grid-cols-2">

          {/* LEFT — image + contact */}
          <div>
            {/* Image */}
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
                alt="Medical team"
                className="appt-img"
              />
            </div>

            {/* Contact info */}
            <div style={{ marginTop: 36, paddingLeft: 4 }}>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 28, maxWidth: 420 }}>
                If you have general questions about our services, doctors, or clinic policies, feel free to reach out via email and Call us directly.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Email */}
                <div className="contact-row">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500, marginBottom: 2 }}>Need Assistance?</p>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>info@example.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-row">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.81 19.79 19.79 0 0 1 1.6 1.18 2 2 0 0 1 3.57-.01h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15.3v.01z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500, marginBottom: 2 }}>Patient &amp; Appointment Enquiries</p>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>+4800 45 678 900</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div style={{ position: "relative" }}>
            <div className="dot-map" />

            <div className="form-card">
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", marginBottom: 24, letterSpacing: "-0.02em" }}>
                Book An Appointment
              </h2>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <InputField name="name" placeholder="Your Name" />
                  <InputField name="email" placeholder="Email Address" type="email" />
                </div>

                {/* Row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <InputField name="phone" placeholder="Phone" type="tel" />
                  <SelectField name="department" placeholder="Select Department" options={departments} />
                </div>

                {/* Row 3 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <SelectField name="doctor" placeholder="Select Doctor" options={doctors} />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    style={{ ...inputBase, color: form.date ? "#0f172a" : "#94a3b8", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                {/* Textarea */}
                <textarea
                  name="message"
                  placeholder="Type Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputBase, resize: "vertical", lineHeight: 1.6 }}
                  onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />

                {/* Submit */}
                <div style={{ marginTop: 4 }}>
                  <button type="submit" className="book-btn">
                    {submitted ? "✓ Appointment Booked!" : "Book Appointment"}
                  </button>
                </div>

                {submitted && (
                  <p style={{ fontSize: 13, color: "#0d9488", fontWeight: 500 }}>
                    We'll confirm your appointment shortly via email.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;