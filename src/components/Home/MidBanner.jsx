import { FiUsers } from "react-icons/fi";

const MidBanner = () => {
  return (
    <section className="relative w-full h-[clamp(320px,42vw,520px)] overflow-hidden font-sans">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1800&q=85"
        alt="Doctor with patient"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      {/* Glass Stats Card */}
      <div className="absolute  right-0  bottom-0
                      bg-white/15 backdrop-blur-xl backdrop-saturate-150
                      border border-white/30 rounded-t-2xl
                      px-9 py-8 w-72
                      shadow-2xl text-white
                      ">

        {/* Doctor Icon */}
        <div className="mb-3">
          <FiUsers size={40}/>
        </div>

        {/* Text */}
        <p className="text-md font-medium leading-relaxed tracking-wide">
          Over 20 Years of Medical Excellence and 15,000+ Successful Treatments
        </p>

        {/* Highlight Number */}
        <h2 className="mt-4 text-[4rem] font-bold leading-none tracking-tight">
          99.9%
        </h2>
      </div>
    </section>
  );
};

export default MidBanner;