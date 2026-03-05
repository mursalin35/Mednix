import React from "react";
import { Phone, ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#0B1B3B] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">+</span>
          </div>
          <h1 className="text-white text-2xl font-semibold">Mednix</h1>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-8 text-white font-medium">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">HOME</label>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">PAGES</label>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">SERVICES</label>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">CASE STUDIES</label>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">BLOGS</label>
          </div>

          <a className="cursor-pointer">CONTACT</a>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-6">
          
          {/* Emergency Call */}
          <div className="flex items-center gap-2 text-white">
            <Phone size={20} />
            <div className="text-sm">
              <p className="opacity-70">Emergency Call:</p>
              <p className="font-semibold">(888) 4567890</p>
            </div>
          </div>

          {/* Appointment Button */}
          <button className="btn bg-teal-500 hover:bg-teal-600 border-none text-white rounded-xl px-6">
            Appointment
            <ArrowRight size={18} />
          </button>

          {/* Grid Icon Button */}
          <button className="btn btn-outline border-white text-white rounded-xl">
            ▦
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-white">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-4 shadow bg-white rounded-box w-52 text-black"
            >
              <li><a>Home</a></li>
              <li><a>Pages</a></li>
              <li><a>Services</a></li>
              <li><a>Case Studies</a></li>
              <li><a>Blogs</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;