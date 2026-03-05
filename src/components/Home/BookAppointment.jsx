import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    "Cardiology",
    "Dentistry",
    "Eye Care",
    "Neurology",
    "Oncology",
    "Pediatrics",
    "Psychology",
    "Therapy",
  ];
  const doctors = [
    "Dr. Sapphire Rose",
    "Dr. Melissa Jewel",
    "Dr. Xeinna Chris",
    "Dr. Cathy Divine",
    "Dr. Arietta Preston",
    "Dr. Woulfe Nick",
  ];

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const InputField = ({ name, placeholder, type = "text" }) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={form[name]}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-slate-900 bg-white outline-none focus:border-teal-700 transition-colors"
    />
  );

  const SelectField = ({ name, placeholder, options }) => (
    <div className="relative">
      <select
        name={name}
        value={form[name]}
        onChange={handleChange}
        className={`w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 text-sm ${
          form[name] ? "text-slate-900" : "text-gray-400"
        } bg-white cursor-pointer outline-none focus:border-teal-700 transition-colors appearance-none`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );

  return (
    <section className="bg-gray-100 py-16 px-4 font-sans">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10">
        {/* LEFT — image + contact */}
        <div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
              alt="Medical team"
              className="w-full h-[360px] object-cover rounded-2xl"
            />
          </div>

          {/* Contact info */}
          <div className="mt-9 pl-1">
            <p className="text-sm text-gray-500 mb-7 max-w-[420px] leading-relaxed">
              If you have general questions about our services, doctors, or
              clinic policies, feel free to reach out via email and Call us
              directly.
            </p>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-teal-50 border border-teal-100 flex-shrink-0">
                  <MdOutlineMailOutline />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">
                    Need Assistance?
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    info@example.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-teal-50 border border-teal-100 flex-shrink-0">
                  <IoCallOutline />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">
                    Patient &amp; Appointment Enquiries
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    +4800 45 678 900
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="relative">
          {/* Dot map background */}
          <div className="absolute top-0 right-0 w-[55%] h-full bg-[radial-gradient(circle,_#cbd5e1_1px,_transparent_1px)] bg-[length:18px_18px] opacity-40 pointer-events-none rounded-r-2xl mask-image-[linear-gradient(to_left,_rgba(0,0,0,0.5)_0%,_transparent_100%)]" />

          {/* Form Card */}
          <div className="relative bg-white rounded-2xl p-9 shadow-xl z-10 lg:-ml-20 lg:mt-20">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Book An Appointment
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputField name="name" placeholder="Your Name" />
                <InputField
                  name="email"
                  placeholder="Email Address"
                  type="email"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputField name="phone" placeholder="Phone" type="tel" />
                <SelectField
                  name="department"
                  placeholder="Select Department"
                  options={departments}
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <SelectField
                  name="doctor"
                  placeholder="Select Doctor"
                  options={doctors}
                />
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border border-gray-300 text-sm ${
                    form.date ? "text-slate-900" : "text-gray-400"
                  } bg-white cursor-pointer outline-none focus:border-teal-700 transition-colors`}
                />
              </div>

              {/* Textarea */}
              <textarea
                name="message"
                placeholder="Type Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-slate-900 bg-white outline-none focus:border-teal-700 transition-colors resize-vertical leading-relaxed"
              />

              {/* Submit */}
              <div className="mt-2">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-700 to-teal-500 text-white font-bold px-8 py-3 rounded-xl cursor-pointer hover:shadow-lg active:translate-y-0"
                >
                  {submitted ? "✓ Appointment Booked!" : "Book Appointment"}
                </button>
              </div>

              {submitted && (
                <p className="text-sm font-medium text-teal-700 mt-2">
                  We'll confirm your appointment shortly via email.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
