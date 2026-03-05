import { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { LuMonitor } from "react-icons/lu";
import { MdShowChart } from "react-icons/md";
import TextMarquee from "./TextMarquee";

const benefits = [
  {
    icon: <MdShowChart size={35} color="#38b2ac" />,
    title: "Health Treatments",
    desc: "Tailored treatment plans focused on your recovery.",
  },
  {
    icon: <LuMonitor size={35} color="#38b2ac" />,
    title: "Advanced Facilities",
    desc: "Equipped with the latest technology for accurate diagnoses.",
  },
  {
    icon: <FaRegUser size={35} color="#38b2ac" />,
    title: "Expert Physicians",
    desc: "Highly trained specialists providing personalized care.",
  },
];

const stats = [
  { label: "Expert Doctor", value: 82 },
  { label: "Patient Satisfaction", value: 74 },
  { label: "Success Case", value: 98 },
];

const AnimatedBar = ({ value, animate, label }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (animate) setTimeout(() => setWidth(value), 200);
  }, [animate, value]);

  return (
    <div className="flex-1 flex flex-col gap-1.5">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center text-[11px] font-extrabold text-white flex-shrink-0">
          {value}%
        </div>
        <span className="text-xs font-medium text-slate-300">{label}</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-700 to-teal-400 rounded-full transition-all duration-[1200ms] ease-in-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const OurBenefits = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAnimate(true),
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="font-sans overflow-hidden">
      <div className="grid md:grid-cols-[42%_1fr] min-h-[480px] bg-[#0a1628]">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
            alt="Doctor with holographic cross"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="bg-[#0d1f3c] p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-teal-400/40 text-teal-400 text-xs font-semibold bg-teal-900/10 mb-3">
                Our Benefits
              </span>
              <h2 className="text-white font-extrabold text-[clamp(22px,2.6vw,32px)] leading-tight mb-1">
                Reliable Care with
              </h2>
              <p className="font-serif italic font-semibold text-teal-400 text-[clamp(22px,2.6vw,32px)] mb-4">
                Mednix Healthcare
              </p>
              <p className="text-[13px] text-slate-300/75 leading-relaxed max-w-[340px]">
                Our expert team combines state-of-the-art technology with
                personalized care to provide treatments designed around your
                unique health needs.
              </p>
              <button className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-teal-400 text-teal-400 font-bold text-sm mt-5 hover:bg-teal-400 hover:text-[#0a1628] hover:translate-x-1 transition">
                Discover More
              </button>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 py-3 border-b last:border-b-0 border-white/5"
                >
                  <div className="w-13 h-13 flex items-center justify-center rounded-lg border border-teal-400/25 bg-teal-900/10 flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">
                      {b.title}
                    </p>
                    <p className="text-slate-300/75 text-xs leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-7 pt-7 border-t border-white/10 flex-wrap mt-auto">
            {stats.map((s) => (
              <AnimatedBar
                key={s.label}
                value={s.value}
                animate={animate}
                label={s.label}
              />
            ))}
          </div>
        </div>
      </div>
     
      {/* Text slide  */}
      <div>
        <TextMarquee
          items={[
            "Cardiology",
            "Dental Care",
            "Physical Therapy",
            "Psychiatry",
            "Oncology",
            "Pediatrics",
            "Ophthalmology",
            "Orthopedics",
            "Neurology",
            "Dermatology",
          ]}
          speed={18}
          bgColor="#00a8b8 "
          textColor="#ffff"
          iconColor="#ffff"
          textSize="1rem"
        />
      </div>
    </section>
  );
};

export default OurBenefits;
