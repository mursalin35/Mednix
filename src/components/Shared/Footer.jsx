import { BsSend } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import TextMarquee from "../Home/TextMarquee";

const Footer = () => (
  <footer className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#2d1a1a] text-white font-sans">
    
    {/* Ambient blobs */}
    <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,180,180,0.18)_0%,transparent_70%)] blur-[40px] -translate-x-1/3 -translate-y-1/3" />
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(180,60,40,0.18)_0%,transparent_70%)] blur-[50px] translate-x-1/3 -translate-y-1/3" />

    {/* Main content */}

    {/* <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-10 grid grid-cols-1 lg:grid-cols-4 gap-10"> */}
    <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-10 md:flex  gap-10">
      {/* Brand Card */}
      <div className="rounded-2xl p-6 shadow-2xl bg-white/95 mb-8 md:mb-0">
        <div className="flex items-center gap-2 mb-4">
          <img className="h-12" src="/src/assets/logo2.png" alt="" />
        </div>
        <p className="text-sm text-[#546e8a] leading-relaxed mb-5">
          We dedicated to providing flexible & accessible healthcare services.
        </p>
        <div className="space-y-3">
          {[
            { label: "Mon – Fri", time: "9:00 – 18:00" },
            { label: "Sat – Sun", time: "8:00 – 16:00" },
            { label: "Emergency", time: "24/7 Hours" },
          ].map(({ label, time }) => (
            <div
              key={label}
              className="flex border-b-1 border-b-gray-300 justify-between items-center py-2 text-sm "
            >
              <span className="text-[#546e8a]">{label}</span>
              <span className="font-semibold text-[#0d1f3c]">{time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* right section  */}
      <div>
        <div className="grid sm:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="text-white  font-bold text-base mb-5 mt-6 md:mt-0 tracking-wide uppercase opacity-90">
              Quick Links
            </h3>
            <ul className="space-y-3 ">
              {["About Us", "Our Doctors", "Contact", "Blog Classic"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm  text-[rgba(180,210,230,0.8)] hover:underline hover:text-teal-400"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 mt-6 md:mt-0 tracking-wide uppercase opacity-90">
              Department
            </h3>
            <ul className="space-y-3">
              {["Eye Care", "Cardiology", "Dentist", "Pregnancy"].map(
                (dept) => (
                  <li key={dept}>
                    <a
                      href="#"
                      className="text-sm  text-[rgba(180,210,230,0.8)] hover:underline hover:text-teal-400"
                    >
                      {dept}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base mb-2 mt-6 md:mt-0 tracking-wide uppercase opacity-90">
              Newsletter
            </h3>
            <p className="text-sm mb-5 text-[rgba(180,210,230,0.75)] leading-relaxed">
              Join the Community and Receive Our Monthly Newsletter Straight to
              Your Inbox
            </p>
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full rounded-xl py-3 pl-4 pr-14 text-sm outline-none bg-white/10 border border-white/15 backdrop-blur-sm text-white"
              />
              <button
                type="submit"
                className="absolute right-2 w-9 h-9 rounded-lg cursor-pointer flex items-center justify-center  bg-gradient-to-br from-teal-400 to-blue-700"
              >
                <BsSend />
              </button>
            </form>
          </div>
        </div>

        {/* Contact bar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ">
          {[
            {
              icon: <GrLocation />,
              label: "Visit Our Clinic",
              value: "Savar, Dhaka, Bangladesh",
            },
            {
              icon: <MdOutlineMailOutline />,
              label: "General Inquiries",
              value: "info@example.com",
            },
            {
              icon: <IoCallOutline />,
              label: "Emergency Cases",
              value: "(888) 4567890",
            },
          ].map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl px-4 py-3   bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center  bg-gradient-to-br from-teal-400 to-blue-700 text-white">
                {icon}
              </div>
              <div>
                <p className="text-xs mb-0.5 text-[rgba(150,190,210,0.7)]">
                  {label}
                </p>
                <p className="text-sm font-semibold text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div>
      <TextMarquee
        items={["React", "Next.js", "Node.js", "MongoDB"]}
        speed={18}
        bgColor=""
        textColor="#ffff"
        iconColor="#00e5ff"
        textSize="3rem"
      />
    </div>

    {/* Bottom bar */}
    <div className="relative z-10 mt-7 rounded-t-3xl text-center py-4 w-6/12 mx-auto bg-white font-semibold text-black/70">
      © 2026, Mednix. Made with passion by ThemeHt.
    </div>
  </footer>
);

export default Footer;
