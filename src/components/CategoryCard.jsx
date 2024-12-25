function CategoryCard({ category, headline, services, videoLinks }) {
  return (
    <div className="min-h-screen flex flex-col items-center text-white pt-3">
      {/* Headline */}
      <div className="border-2 border-gray-400 rounded-lg px-6 py-3 mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">{headline}</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-28 w-full max-w-6xl">
        {/* Phones Section */}
        <div
          className="flex gap-10" // Removed overflow-x-auto
          style={{
            flexShrink: 0,
            justifyContent: "flex-start",
            width: "auto",
          }}
        >
          {videoLinks.map((videoLink, index) => (
            <div
              key={index}
              className="relative w-[220px] h-[450px] rounded-[35px] shadow-xl"
              style={{
                background: "linear-gradient(145deg, #2b2b2b, #1a1a1a)",
                boxShadow: `
                  0 8px 25px rgba(0, 0, 0, 0.2),
                  inset 0 2px 5px rgba(255, 255, 255, 0.1),
                  inset 0 -3px 5px rgba(0, 0, 0, 0.2)
                `,
              }}
            >
              {/* Power Button */}
              <div className="absolute right-[-2px] top-[100px] w-[3px] h-[60px] bg-[#2b2b2b] rounded-l-md"></div>

              {/* Volume Buttons */}
              <div className="absolute left-[-2px] top-[85px] w-[3px] h-[25px] bg-[#2b2b2b] rounded-r-md"></div>
              <div className="absolute left-[-2px] top-[120px] w-[3px] h-[25px] bg-[#2b2b2b] rounded-r-md"></div>

              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[95px] h-[25px] bg-black rounded-[14px] z-20">
                {/* Camera Dot */}
                <div className="absolute right-[20px] top-1/2 transform -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-[#1a1a1a] border-[2px] border-[#2b2b2b]"></div>
              </div>

              {/* Screen Content */}
              <div
                className="absolute top-0 left-0 w-full h-full rounded-[35px] overflow-hidden"
                style={{
                  border: "6px solid #1a1a1a",
                  background: "linear-gradient(145deg, #2b2b2b, #1a1a1a)",
                }}
              >
                <div className="relative w-full h-full">
                  {/* Screen Bezel */}
                  <div className="absolute inset-0 rounded-[29px] overflow-hidden">
                    <iframe
                      src={videoLink}
                      title={`video-${index}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Bottom Speaker & USB-C Port */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[45px] h-[3px] bg-[#2b2b2b] rounded-full"></div>
              <div className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2 w-[10px] h-[4px] bg-[#2b2b2b] rounded-[2px]"></div>
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="flex-1 text-left space-y-4">
          <h2 className="text-3xl font-bold text-red-500">Services Included</h2>
          <ul className="text-lg space-y-2">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
