import { PiSpinner } from "react-icons/pi";

const MarqueeItem = ({ text, textColor, iconColor, textSize }) => (
  <span className="inline-flex items-center gap-6 px-4">
    <span
      className={`font-black tracking-widest uppercase`}
      style={{
        color: textColor,
        fontSize: textSize,
      }}
    >
      {text}
    </span>
    {/* Spinner Icon */}
    <span
      className="animate-spin"
      style={{
        color: iconColor,
        fontSize: `calc(${textSize} / 1.6)`, // icon slightly smaller
      }}
    >
      <PiSpinner />
    </span>
  </span>
);

const TextMarquee = ({
  items = [
    "Psychiatry",
    "Oncology",
    "Pediatrics",
    "Ophthalmology",
    "Cardiology",
    "Dentistry",
    "Eye Care",
    "Neurology",
  ],
  speed = 22, // animation duration in seconds
  bgColor = "transparent", // background color
  textColor = "#ffffff", // text color
  iconColor = "#14b8a6", // star color
  textSize = "2rem", // font size for text
}) => {
  return (
    <div
      className="relative overflow-hidden py-5"
      style={{
        background: bgColor,
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee ${speed}s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <MarqueeItem
            key={i}
            text={item}
            textColor={textColor}
            iconColor={iconColor}
            textSize={textSize}
          />
        ))}
      </div>
    </div>
  );
};

export default TextMarquee;
