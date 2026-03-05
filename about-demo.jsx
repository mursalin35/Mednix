import React from "react";

const AboutMednix = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Branding and Main Image */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Top Label */}
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              About Mednix
            </span>
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-6xl md:text-7xl font-semibold text-[#1a234e] leading-tight">
              Caring for You Like
              <br />
              <span
                className="font-serif italic text-[#13a3b5]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Family Health
              </span>
            </h1>
          </div>

          {/* Main Image with Opening Hours Overlay */}
          <div className="relative mt-4">
            {/* Main Team Photo */}
            <div className="overflow-hidden rounded-[3rem] aspect-[16/10] md:aspect-[1.5/1]">
              <img
                className="w-full h-full object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtPQUjJ2M55j9oHCDEcrstyLu2MhMhEqZbWIqJE8uzb_FoL0DXPzOO9VyhV21x7ti2GllkfJxH6Lmw6u81B08hbuWs7f1ICKyRgUaXsYbiXoVp-iaKdMdL2fzk1ZBZRPgPrXqTtoBZbD6twWNZWMHuLSppNY89_95GneCb4Ykg5AYl56vyh3aR-Kt4kqqi8eXMQYxRFq7ZcWjVjXgIskrdiEhjtaeLBgy9ksXcTcfhqBx58Gy-Us9tqFoDje1GtnDLha8O4ff0Rw"
                alt="Our Medical Team"
              />
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#13a3b5] rounded-[2rem] p-8 text-white w-full md:w-80 shadow-xl md:absolute md:-top-32 md:-right-4 lg:right-0 z-10 mt-6 md:mt-0">
              <h3 className="text-2xl font-medium mb-6">Opening Hours:</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-sm">Mon - Fri</span>
                  <span className="text-sm font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-sm">Sat - Sun</span>
                  <span className="text-sm font-semibold">8:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Emergency</span>
                  <span className="text-sm font-semibold">24/7 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stats and CTA */}
        <div className="lg:col-span-4 flex flex-col justify-end pt-12 lg:pt-48">
          {/* Large Masked Number */}
          <div className="relative mb-8">
            <div
              className="select-none text-[16rem] font-extrabold leading-[1] tracking-[-0.05em]"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuD-mgO3thazIpZQ6xV4D3Xn3dN1GAJEGwaj_ABCB6kOfVDXFvGd9t6T6hAL3CA6VmC08e340GrUbxALumCVv_-cma2sKS4E8Dds4GbCQMmt5ZSS_ExzdUOHbgPDeJ3zoYN3Ci3IM_1RzE-RhTNS4qf19b0W9-YF-XYCyiLtCtJR73WI-3cRCWok1w545-WaRjHP2YaI3U4nz_oheYi9FxvX811yKRYajr8wC1hGIQV_xSLtxH37LMLqQc0iYjJRztMXtukI_94dg)",
                backgroundPosition: "80% 40%",
                backgroundSize: "cover",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              25+
            </div>
          </div>

          {/* Trusted Experts Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwJJaPh-_LgUCREn8wRwafr5e0avdeMCvAUCSHP0SPWCSRefJX8LqpIyuPZK09uz3wRetoXHzGP1vs1jGHdXNWJFMgvjAkRyH2VSPj5t9dh3PndIVeRnNk8zMv8EU-tEW8V3Qm8cREGhnXM5o9pDn2X1M90WFbwybnIOYns-wqHMW0095fKL0Iy8c3j7MqinG_hRNhsfKpppuoqkb1Rlnxu98VLBU0UzhOWbO5vCt_vDD8QsU-gltsDI-pGydumZyi73HMnZoDhg"
                  alt="Doctor 1"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYSo4Y9KAb9a6GoVdkisPxwNCqU8RbSLrK_8n_eug-qvzlloE_E_kcGpiU2kJOw4O32cm9WYTDDwmmj61oSkCB-rKUfo19XWnPSw4xdzaM5T3zblQ-3QzGzwSpS_VDu6QEhOyh7OElJ7Huk0qSPuzjzU3Pnb9Uexq1IPtzqejk9BJJN-lxxND_FKuVOdkHhWVC0XytJ0mBKdXUIBuTloyCDNH2c8VchlOy3_-3U3Qno_KSPxwt4fic3sU1syrPuZAOVtVMWEKweQ"
                  alt="Doctor 2"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB7Gu951WDwz8A-lvzuTO3zYBzDnujcG4aJQqjdwEocfy-UxwzXqObEQgADU0QKnvfYwPsEe1r3V4wKFGEd5T4HCGNlERgkHtddBcRHMmPK71FtHz_sgTJKsh6P_vbfWgKkxZKkjXeQCPi6j6vWTo8J8vg_9Vqd7p_mVRWRZtFHNOdc51ftwDcNtA7_5z5hC1k3YnT5byX-OdWQLzrd_dmW98lr80UskC5sm2Ss94RSZQ_t7c0U1ekLkA10-Y6u8yWbfICkKb_0Q"
                  alt="Doctor 3"
                />
              </div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#1a234e] max-w-[180px]">
                Trusted Experts in Medical Health and Wellness
              </p>
            </div>

            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              We're committed to offering compassionate and comprehensive healthcare tailored to your needs. At Mednix, your health is our priority every step of the way.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center bg-[#13a3b5] hover:bg-[#108a9a] transition-colors rounded-xl p-1 pr-1 group"
              >
                <span className="text-white font-medium px-6 py-3">Discover More</span>
                <span className="bg-white rounded-lg p-3 text-[#13a3b5] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMednix;