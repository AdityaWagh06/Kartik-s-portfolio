import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function CategoryCard({ category, headline, services, videoLinks }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "left" && currentIndex < videoLinks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "right" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-white md:-mt-12">
      {/* Headline */}
      <div className="border-2 border-gray-400 rounded-lg px-4 py-2 -mt-10 md:mt-0 mb-6 md:mb-8 text-center bg-black bg-opacity-50">
        <h1 className="text-2xl md:text-3xl font-bold text-red-500">{headline}</h1>
      </div>

      {/* Mobile View with scroll fix */}
      <div className="block md:hidden w-full h-[calc(100vh-5rem)] overflow-y-auto pb-8">
        {/* Phones Section */}
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hidden">
          <div className="flex gap-4 md:gap-6 w-max py-2 md:py-4 px-2 md:px-4">
            {videoLinks.map((videoLink, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="snap-center flex-shrink-0"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -100) handleSwipe("left");
                  else if (info.offset.x > 100) handleSwipe("right");
                }}
              >
                <PhoneFrame videoLink={videoLink} isMobile={true} />
              </motion.div>
            ))}
          </div>
          {/* Scroll Hint */}
          {currentIndex < videoLinks.length - 1 && (
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 text-xs md:text-sm text-gray-400 animate-pulse">
              Swipe →
            </div>
          )}
        </div>

        {/* Services */}
        <div className="w-full text-left space-y-4 md:space-y-6 mt-6 md:mt-8 px-2 md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 border-b border-red-600 pb-1 md:pb-2">
            Services Included
          </h2>
          <ul className="text-base md:text-lg space-y-2 md:space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-1 md:mr-2">•</span>
                <span className="text-gray-200">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-start gap-10 md:gap-28 w-full max-w-6xl">
        <div className="w-full md:w-auto">
          <div className="flex gap-10">
            {videoLinks.map((videoLink, index) => (
              <PhoneFrame key={index} videoLink={videoLink} isMobile={false} />
            ))}
          </div>
        </div>

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
      className={`relative ${isMobile ? "w-[180px] h-[360px]" : "w-[220px] h-[450px]"} rounded-[35px] shadow-xl flex-shrink-0`}
      style={{
        background: "linear-gradient(145deg, #2b2b2b, #1a1a1a)",
        boxShadow: `
          0 8px 25px rgba(0, 0, 0, 0.2),
          inset 0 2px 5px rgba(255, 255, 255, 0.1),
          inset 0 -3px 5px rgba(0, 0, 0, 0.2)
        `,
      }}
    >
      {/* Buttons */}
      <div className={`absolute right-[-2px] top-[${isMobile ? "80px" : "100px"}] w-[3px] h-[${isMobile ? "48px" : "60px"}] bg-[#2b2b2b] rounded-l-md`}></div>
      <div className={`absolute left-[-2px] top-[${isMobile ? "68px" : "85px"}] w-[3px] h-[${isMobile ? "20px" : "25px"}] bg-[#2b2b2b] rounded-r-md`}></div>
      <div className={`absolute left-[-2px] top-[${isMobile ? "96px" : "120px"}] w-[3px] h-[${isMobile ? "20px" : "25px"}] bg-[#2b2b2b] rounded-r-md`}></div>

      {/* Dynamic Island */}
      <div className={`absolute top-2 md:top-3 left-1/2 transform -translate-x-1/2 w-[${isMobile ? "76px" : "95px"}] h-[${isMobile ? "20px" : "25px"}] bg-black rounded-[14px] z-20`}>
        <div className={`absolute right-[${isMobile ? "16px" : "20px"}] top-1/2 transform -translate-y-1/2 w-[${isMobile ? "6px" : "8px"}] h-[${isMobile ? "6px" : "8px"}] rounded-full bg-[#1a1a1a] border-[2px] border-[#2b2b2b]`}></div>
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

      {/* Bottom Ports */}
      <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[${isMobile ? "36px" : "45px"}] h-[3px] bg-[#2b2b2b] rounded-full`}></div>
      <div className={`absolute bottom-[2px] left-1/2 transform -translate-x-1/2 w-[${isMobile ? "8px" : "10px"}] h-[4px] bg-[#2b2b2b] rounded-[2px]`}></div>
    </motion.div>
  );
}

export default CategoryCard;