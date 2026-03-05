import React from "react";

const MedicalProfessionals = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="layout-container flex h-full grow flex-col">
        {/* Main Section */}
        <main className="flex flex-1 flex-col items-center py-12 px-6 lg:px-20 max-w-7xl mx-auto w-full justify-center">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex h-8 items-center justify-center gap-x-2 rounded-full bg-primary/10 px-4 mb-6">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                Medical Professionals
              </p>
            </div>
            <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-3xl">
              Meet the Health Experts Behind Your Care
            </h1>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
              Our world-class team is dedicated to providing compassionate,
              innovative care tailored to your unique health needs.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Dr. Whitney Kyle */}
            <div className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/5 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              <div
                className="aspect-[4/5] w-full bg-cover bg-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAeTfmeCXFOkIFgPvp4cb0t4WB_g7UDnrU7bJqATasORA_u4tEPQPSltPK5sR2n-8N11QdFWWhkejk73oOdvlE3QoNjdTEUdwPRF2NA7ndIZT942s14-9yaiRzLRVunNnX1povja-PlRziq3xEnEGXb0Mx-2hD-OlXQtp6cLhcNmQ_Y645AonTpiVOPqoyIOwKOoJd4QxWGeVPsx37z5D4sebzgiZxF7e45nwmIBU57euuGzENTSbCyO-ay7SZZqCL_YFfyUBoTg')",
                }}
                data-alt="Female dentist in white lab coat smiling"
              ></div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Dr. Whitney Kyle
                </h3>
                <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Dentist
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2">
                  Specialist in restorative and cosmetic dentistry with over 12
                  years of clinical experience.
                </p>
              </div>
              <button className="absolute bottom-4 right-4 flex items-center justify-center size-10 rounded-full bg-white dark:bg-slate-700 shadow-md text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>

            {/* Dr. Lawson Bourne */}
            <div className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/5 overflow-hidden transition-all hover:shadow-xl">
              <div
                className="aspect-[4/5] w-full bg-cover bg-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRJWNOrgFczLmaI8WZCxm61Jd1-X110PdkIsZi2hxuqv_kf5ZbQQ9zuN5riJqYU8k71_fPwpCMauypaD1Cg9no5rCC85sFPpJcDhhTWmXtlsFTnJ_eBf-icxvy7L18AOYtVzDY3ZYYBSgMUAcZmLQKZzoNAPLqZyaquBAH6sxyG8Ypus7iIr7A58YjgSH8_S-LJBdLCt9vUx23uaWm_JgzD3guLwNeDlLKoYAIKCBMbFHSv8Cw21T8Zmn4Vrzy8gMYHTwM3eWlxw')",
                }}
                data-alt="Male surgeon in white lab coat posing professionally"
              ></div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Dr. Lawson Bourne
                </h3>
                <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Surgeon
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2">
                  Board-certified general surgeon focusing on minimally invasive
                  techniques and patient recovery.
                </p>
              </div>
              {/* Share Menu Overlay */}
              <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-end justify-end p-4">
                <div className="flex flex-col gap-3 items-center">
                  <button className="size-10 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-lg">
                      social_leaderboard
                    </span>
                  </button>
                  <button className="size-10 rounded-full bg-black text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-lg">close</span>
                  </button>
                  <button className="size-10 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-lg">chat</span>
                  </button>
                  <button className="size-12 rounded-full bg-primary text-white shadow-xl flex items-center justify-center mt-2">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Dr. Hailey Marie */}
            <div className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/5 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              <div
                className="aspect-[4/5] w-full bg-cover bg-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPk_xxYGdcNfIDYoqGSHOEbUQQw_tuH5Dowb_iTuraSyRlOy9bKp1re7UdjOdvYrvUVoY4Pg5R5YnVQ4TpK6O-LRJYKv8Re93m-KuNSW_MLPzC1KUIDZXRvOn2YBWDNDHbMgPjZ52DN44fr-AmR25Xt-xRefpLvCSSMWIdZVRzw3osfIsCU-AV4LbRvMrZmIeYonn1iyHehpo3-qDuK1QGf-LZjD6OzniAlOHiMw4_GFN6cP0zwCBRbZtkpRy2XSRwLTQB8XIG1A')",
                }}
                data-alt="Female cardiologist in white lab coat smiling warmly"
              ></div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Dr. Hailey Marie
                </h3>
                <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Cardiologist
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2">
                  Dedicated to heart health, preventive care, and advanced
                  cardiovascular diagnostics.
                </p>
              </div>
              <button className="absolute bottom-4 right-4 flex items-center justify-center size-10 rounded-full bg-white dark:bg-slate-700 shadow-md text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MedicalProfessionals;

