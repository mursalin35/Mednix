import React from "react";

const services = [
  {
    title: "Orthopedic",
    description:
      "Specialized care for musculoskeletal conditions, from joint pain to surgical recovery.",
    icon: "orthopedics",
  },
  {
    title: "Diagnostics",
    description:
      "Advanced screening and diagnostic testing for accurate health assessments.",
    icon: "biotech",
  },
  {
    title: "Diabetes Care",
    description:
      "Comprehensive management and support for type 1 and type 2 diabetes.",
    icon: "glucose",
  },
];

const OurDepartment = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-snug">
          Comprehensive Medical Services for <br />
          <span className="text-accent-teal italic font-serif">Your Health</span>
        </h1>
        <div className="mt-4 w-24 h-1.5 bg-primary/20 mx-auto rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-primary"></div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="service-card group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl">
                {service.icon}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              {service.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Explore Service
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDepartment;