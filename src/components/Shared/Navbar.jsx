import { useState, useEffect } from "react";
import {
  ChevronDown,
  Phone,
  ArrowRight,
  Globe,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "HOME", dropdown: ["Home V1", "Home V2", "Home V3"] },
  { label: "PAGES", dropdown: ["About Us", "Our Team", "Testimonials", "FAQ"] },
  { label: "SERVICES", dropdown: ["Cardiology", "Neurology", "Pediatrics"] },
  { label: "CASE STUDIES", dropdown: ["Case Study V1", "Case Study V2"] },
  { label: "BLOGS", dropdown: ["Blog Grid", "Blog List"] },
  { label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 lg:px-12 transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "bg-[#0d1b34]/95 shadow-lg"
            : "bg-[#0a1428]/60 border-b border-white/10"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="h-10" src="https://i.ibb.co.com/zd4RVhD/image.png" alt="" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-xs font-bold tracking-wider text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                {item.label}
                {item.dropdown && <ChevronDown size={14} />}
              </button>

              {/* Dropdown */}
              {item.dropdown && open === item.label && (
                <div className="absolute top-full left-0  w-48 bg-[#0f213f] border border-white/10 rounded-xl shadow-2xl py-2">
                  {item.dropdown.map((d) => (
                    <a
                      key={d}
                      href="#"
                      className="block px-5 py-2 text-sm text-white/80 hover:text-teal-400 hover:bg-white/5 transition-all"
                    >
                      {d}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Appointment */}
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-bold hover:scale-105 transition-all shadow-lg">
            Appointment
            <ArrowRight size={14} />
          </button>

          {/* Language */}
          <button className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-lg hover:border-teal-400 hover:bg-teal-400/10 transition">
            <Globe size={16} className="text-white/80" />
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-[72px] left-0 right-0 bg-[#0d1b34] border-t border-white/10 px-6 py-6 space-y-4 lg:hidden z-40">
          {navLinks.map((item) => (
            <div key={item.label} className="text-white font-semibold">
              {item.label}
            </div>
          ))}

          <button className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold">
            Book Appointment
          </button>
        </div>
      )}

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
}
