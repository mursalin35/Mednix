import { useState } from "react";
import { CiMedicalCase } from "react-icons/ci";

const cases = [
  {
    id: 1,
    title: "General Dentistry",
    category: "Dental",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=85",
    size: "large",
  },
  {
    id: 2,
    title: "Optometry Care",
    category: "Retina",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=900&q=85",
    size: "large",
  },
  {
    id: 3,
    title: "Cardiac Surgery",
    category: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&q=85",
    size: "small",
  },
  {
    id: 4,
    title: "Neurology Diagnosis",
    category: "Neurology",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=85",
    size: "small",
  },
];

const CaseCard = ({ item, tall }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-shadow ${
        hovered
          ? "shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
          : "shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
      }`}
      style={{ minHeight: tall ? 500 : 234 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-full object-cover block transition-transform ${
          hovered ? "scale-103" : "scale-100"
        }`}
      />

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-5 py-3 bg-white/95 backdrop-blur-md border-t border-white/60 transition-colors">
        <span className="text-[14px] font-bold text-slate-900 tracking-tight">
          {item.title}
        </span>
        <span className="text-[11px] font-bold text-teal-700 uppercase bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full tracking-widest">
          {item.category}
        </span>
      </div>
    </div>
  );
};

const ClinicalSection = () => (
  <section className="bg-gradient-to-b from-teal-50 to-gray-100 font-sans py-18 px-10 lg:px-20">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-[clamp(28px,4vw,58px)] font-extrabold text-slate-900 leading-tight tracking-tight">
        Clinical Insights
        <br />
        <span className="inline-flex items-center gap-3 mt-2 justify-center">
          <span className="w-13 h-13 bg-gradient-to-br from-blue-500 to-teal-700 rounded-full flex items-center justify-center">
            <CiMedicalCase size={30} />
          </span>
          Case Studies
        </span>
      </h2>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-[1200px] mx-auto">
      <CaseCard item={cases[0]} tall />
      <CaseCard item={cases[1]} tall />
      <CaseCard item={cases[2]} />
      <CaseCard item={cases[3]} />
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-br from-teal-700 to-teal-500 text-white font-bold text-sm rounded-xl shadow-md cursor-pointer">
        View All Case Studies
      </button>
    </div>
  </section>
);

export default ClinicalSection;
