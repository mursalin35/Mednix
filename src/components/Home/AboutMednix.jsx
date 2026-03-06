import { useRef } from "react";

const specialties = [
  "General Surgery",
  "Cardiology",
  "Neurology",
  "Dental Care",
  "Ophthalmology",
  "Orthopedics",
  "Pediatrics",
  "Oncology",
];

const hours = [
  { day: "Mon – Fri", time: "9:00 – 18:00" },
  { day: "Sat – Sun", time: "8:00 – 16:00" },
  { day: "Emergency", time: "24/7 Hours" },
];

const AboutMednix = () => {
  return (
    <section className="font-sans bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid gap-12 px-6 md:px-8 lg:px-12 py-16 md:py-20 grid-cols-1 lg:grid-cols-2 items-start">
        {/* LEFT */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gray-300 bg-white text-gray-700 font-semibold text-xs">
            <span className="w-2 h-2 rounded-full bg-teal-500 block" />
            About Mednix
          </div>

          <h2 className="text-[2rem] font-bold text-gray-900 leading-tight">
            Caring for You Like
            <br />
            <span className="  font-semibold italic text-teal-600 leading-tight">
              Family Health
            </span>
          </h2>

          {/* Hours card */}
          <div className=" relative ">
            <div className="lg:p-5 bg-white lg:absolute -top-25 lg:rounded-2xl right-0">
              <div className=" bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-t-2xl lg:rounded-xl p-6 shadow-xl">
                <p className="font-bold text-sm mb-4">Opening Hours:</p>
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-1 border-b last:border-b-0 text-xs font-medium"
                  >
                    <span className="text-white/80">{h.day}</span>
                    <span className="font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* cover photo */}
            <div className="rounded-b-2xl lg:rounded-xl overflow-hidden  h-72">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                alt="Medical team"
                className="w-full h-full object-cover object-top"
              />
              <div className=" bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8 pt-4 lg:pt-0">
          {/* Number image */}
          <div className="hidden relative">
            <div className="text-[clamp(72px,9vw,110px)] font-black text-gray-900 flex items-start gap-1">
              25
              <span className="text-[clamp(36px,5vw,56px)] text-teal-600 mt-3 font-black">
                +
              </span>
            </div>
           
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 mix-blend-multiply">
              <img
                src="https://www.chesshealthsolutions.com/wp-content/uploads/2023/10/iStock-1473559425.jpg"
                alt="overlay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* -------------------------- */}
  <div class="relative flex    bg-white min-h-[40px]">
  
  <div class="relative z-10">
    <h1 class="text-[200px]  font-black  leading-none tracking-tighter
               bg-[url('https://www.chenmed.com/sites/default/files/2024-06/Patient-Centered%20Care%20Strategies%20for%20Building%20Strong%20Doctor-Patient%20Relationships%20.jpg')] 
               bg-cover bg-center bg-no-repeat 
               bg-clip-text text-transparent 
               drop-shadow-2xl">
      25+
    </h1>
  </div>

</div>

          {/* __________________________________ */}

          {/* Experts */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
                "https://randomuser.me/api/portraits/men/32.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="expert"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-[11px] font-extrabold uppercase leading-snug tracking-widest text-gray-900">
              Trusted Experts in Medical
              <br />
              Health and Wellness
            </p>
          </div>

  

          {/* Description */}
          <p className="text-sm text-gray-500 max-w-[380px] leading-relaxed">
            We're committed to offering compassionate and comprehensive
            healthcare tailored to your needs. At Mednix, your health is our
            priority every step of the way.
          </p>

          {/* Button */}
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 text-white font-bold text-sm transition-transform transform hover:translate-x-1 hover:shadow-lg">
            Discover More
          </button>

          
        </div>
      </div>
    </section>
  );
};

export default AboutMednix;
