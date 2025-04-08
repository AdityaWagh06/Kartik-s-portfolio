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
      <div className="border-2 border-gray-400 rounded-lg px-6 py-3 mb-8 text-center bg-black bg-opacity-50">
        <h1 className="text-3xl font-bold text-red-500">{headline}</h1>
      </div>

      {/* Mobile View with scroll fix */}
      <div className="block md:hidden w-full h-[calc(100vh-5rem)] overflow-y-auto pb-10">
        {/* Phones Section */}
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hidden">
          <div className="flex gap-6 w-max py-4 px-4">
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
                <PhoneFrame videoLink={videoLink} />
              </motion.div>
            ))}
          </div>
          {/* Scroll Hint */}
          {currentIndex < videoLinks.length - 1 && (
            <div className="absolute bottom-4 right-4 text-sm text-gray-400 animate-pulse">
              Swipe →
            </div>
          )}
        </div>

        {/* Services */}
        <div className="w-full text-left space-y-6 mt-8 px-4">
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

      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-start gap-10 md:gap-28 w-full max-w-6xl">
        <div className="w-full md:w-auto">
          <div className="flex gap-10">
            {videoLinks.map((videoLink, index) => (
              <PhoneFrame key={index} videoLink={videoLink} />
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

function PhoneFrame({ videoLink }) {
  return (
    <motion.div
      className="relative w-[220px] h-[450px] rounded-[35px] shadow-xl flex-shrink-0"
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
      <div className="absolute right-[-2px] top-[100px] w-[3px] h-[60px] bg-[#2b2b2b] rounded-l-md"></div>
      <div className="absolute left-[-2px] top-[85px] w-[3px] h-[25px] bg-[#2b2b2b] rounded-r-md"></div>
      <div className="absolute left-[-2px] top-[120px] w-[3px] h-[25px] bg-[#2b2b2b] rounded-r-md"></div>

      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[95px] h-[25px] bg-black rounded-[14px] z-20">
        <div className="absolute right-[20px] top-1/2 transform -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-[#1a1a1a] border-[2px] border-[#2b2b2b]"></div>
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
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[45px] h-[3px] bg-[#2b2b2b] rounded-full"></div>
      <div className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2 w-[10px] h-[4px] bg-[#2b2b2b] rounded-[2px]"></div>
    </motion.div>
  );
}

export default CategoryCard;
