import { motion } from "framer-motion";
import { useState, useRef } from "react";

function CategoryCard({ category, headline, services, videoLinks }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phoneScrollRef = useRef(null);

  const handlePhoneScroll = () => {
    if (!phoneScrollRef.current) return;
    const scrollLeft = phoneScrollRef.current.scrollLeft;
    const itemWidth = 220 + 24; // phone width + gap
    const index = Math.round(scrollLeft / itemWidth);
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center text-white px-4">
      {/* ✅ Shared Headline (Mobile + PC) */}
      <div className="w-full text-center mb-4 md:mb-6">
        <div className="inline-block border-2 border-gray-400 rounded-lg px-6 py-3 bg-black bg-opacity-50">
          <h1 className="text-2xl md:text-3xl font-bold text-red-500">{headline}</h1>
        </div>
      </div>

      {/* ✅ Mobile View */}
      <div className="block md:hidden w-full overflow-y-auto max-h-[calc(100vh-4rem)] pt-2 pb-20">
        {/* Phone Carousel */}
        <div
          className="overflow-x-auto snap-x snap-mandatory scrollbar-hidden -mx-4 px-4"
          onScroll={handlePhoneScroll}
          ref={phoneScrollRef}
        >
          <div className="flex gap-6 w-max py-4 pr-10">
            {videoLinks.map((videoLink, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="snap-center flex-shrink-0"
              >
                <PhoneFrame videoLink={videoLink} isMobile />
              </motion.div>
            ))}
            {/* Extra spacer for better scroll to last dot */}
            <div className="w-[60px]"></div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-2 space-x-2">
          {videoLinks.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-red-500 scale-110" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Services Section */}
        <div className="text-left mt-6 space-y-4">
          <h2 className="text-2xl font-bold text-red-500 border-b border-red-600 pb-1">
            Services Included
          </h2>
          <ul className="text-base space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-200">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ✅ Desktop View (unchanged) */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-start gap-10 md:gap-28 w-full max-w-6xl mt-10">
        {/* Phones */}
        <div className="w-full md:w-auto">
          <div className="flex gap-10">
            {videoLinks.map((videoLink, index) => (
              <PhoneFrame key={index} videoLink={videoLink} isMobile={false} />
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex-1 text-left space-y-6 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-red-500 border-b border-red-600 pb-2">
            Services Included
          </h2>
          <ul className="text-lg space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-200">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ videoLink, isMobile }) {
  return (
    <motion.div
      className={`relative ${
        isMobile ? "w-[180px] h-[360px]" : "w-[220px] h-[450px]"
      } rounded-[35px] shadow-xl flex-shrink-0`}
      style={{
        background: "linear-gradient(145deg, #2b2b2b, #1a1a1a)",
        boxShadow: `
          0 8px 25px rgba(0, 0, 0, 0.2),
          inset 0 2px 5px rgba(255, 255, 255, 0.1),
          inset 0 -3px 5px rgba(0, 0, 0, 0.2)
        `,
      }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[76px] h-[20px] bg-black rounded-[14px] z-20">
        <div className="absolute right-[16px] top-1/2 transform -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#1a1a1a] border-[2px] border-[#2b2b2b]"></div>
      </div>

      {/* Screen */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-[35px] overflow-hidden"
        style={{
          border: "6px solid #1a1a1a",
          background: "linear-gradient(145deg, #2b2b2b, #1a1a1a)",
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-[29px] overflow-hidden">
            <iframe
              src={videoLink}
              title="video"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CategoryCard;
