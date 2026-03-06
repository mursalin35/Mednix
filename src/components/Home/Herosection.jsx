import { useState, useEffect, useRef } from "react";
import { ArrowUp, ArrowDown, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1600&q=85",
    badge: "Trusted Specialists",
    heading: ["Your Trusted Partner", "Health and Wellness"],
    desc: "Our experienced medical team combines the latest technology with personalized attention to provide you with exceptional healthcare tailored to your unique needs.",
    cta: "Meet Our Team",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=85",
    badge: "Advanced Care",
    heading: ["Compassionate Care,", "Exceptional Results"],
    desc: "From routine check-ups to complex procedures, our specialists deliver world-class treatment using cutting-edge facilities and evidence-based medicine.",
    cta: "Our Services",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[88vh] min-h-[520px] max-h-[760px] overflow-hidden">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
            i === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061226]/90 via-[#061226]/60 to-transparent z-20" />

      {/* Content */}
      <div className="absolute inset-0 z-30 flex items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-xl text-white space-y-6 animate-fadeInUp">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="bg-teal-600 text-white text-[10px] font-extrabold tracking-widest px-3 py-1 rounded">
              MEDNIX
            </span>
            <span className="text-xs tracking-widest font-semibold uppercase text-white/80">
              {slide.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            {slide.heading[0]} <br />
            {slide.heading[1]}
          </h1>
        </div>
      </div>

      {/* Info Card */}
      <div className="absolute bottom-12 right-6 md:right-16 lg:right-24 bg-white rounded-2xl p-8 max-w-sm shadow-2xl z-30 space-y-4">
        <p className="text-sm text-slate-600 leading-relaxed">
          {slide.desc}
        </p>

        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-bold hover:translate-x-1 transition-all">
          {slide.cta}
          <ArrowRight size={14} />
        </button>

        

      </div>

      {/* Arrows */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col">
        <button
          onClick={prev}
          className="w-12 h-12 bg-white backdrop-blur-md rounded-tl-selector border border-white/20 text-black flex items-center justify-center hover:bg-teal-600 transition "
        >
          <ArrowUp size={18} />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 bg-white backdrop-blur-md border-t rounded-bl-selector border-black/80 text-black flex items-center justify-center hover:bg-teal-600 transition"
        >
          <ArrowDown size={18} />
        </button>
      </div>

      {/* Spacer if navbar fixed */}
      <div className="h-[72px]" />
    </section>
  );
}