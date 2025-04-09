import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";

function CategoryDetails() {
  const { category } = useParams();

  const pageContent = {
    Standard: {
      headline: "Standard Tier",
      services: [
        "Basic Cut & Trim",
        "Color Correction (Basic)",
        "Background Music",
        "Text Overlay (Minimal)",
        "1x Revision",
        "Format: Reels / Shorts",
        "Ideal For: Gym Reels, Talking Head Clips, Simple Edits",
        "Duration: Up to 30–60 seconds",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/XketsEFyYXY",
        "https://www.youtube.com/embed/sITZd_wjO3A",
        "https://www.youtube.com/embed/rAicFgSh9R0",
      ],
    },
    Premium: {
      headline: "Premium Tier",
      services: [
        "Advanced Cutting + Smooth Transitions",
        "Color Correction & Light Grading",
        "Basic Motion Graphics ",
        "B-Roll Placement",
        "Sound Effects & Audio Balancing",
        "Up to 2 Revisions",
        "Duration: 60s – 5 minutes",
        "Delivery: 2–4 Days",
        "Ideal For: YouTube Shorts, Product Reels",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/81Oa3IRvPaw",
        "https://www.youtube.com/embed/RAttAK6Gz7Y",
        "https://www.youtube.com/embed/Ytympw4avso",
      ],
    },
    Elite: {
      headline: "Elite Tier",
      services: [
        "Cinematic Editing + Dynamic Transitions",
        "Full Color Grading",
        "Custom Motion Graphics & Animation",
        "Sound Design",
        "Hooks, Captions, Effects (like zoom-ins, meme pop-ups)",
        "Up to 3 Revisions",
        "Duration: 5+ minutes or premium reels",
        "Delivery: 3–7 Days",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/gFDJljyXkmo",
        "https://www.youtube.com/embed/KGLL-il6WWA",
        "https://www.youtube.com/embed/kXU_H-Iwyro",
      ],
    },
    Long: {
      headline: "Long Videos",
      services: [
        "Custom animation tools",
        "Unique transitions and overlays",
        "Visual storytelling enhancements",
        "Special effects integration",
        "Artistic editing templates",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/XdTWrckH9J4", // best
        "https://www.youtube.com/embed/eiaSyw4Y6aA",
        "https://www.youtube.com/embed/7TyZTJ3KQBQ", // best
      ],
    },
  };

  const formatCategory = (str) => {
    if (!str) return "Standard";
    const lower = str.toLowerCase();
    if (lower.includes("long")) return "Long";
    if (lower.includes("premium")) return "Premium";
    if (lower.includes("elite")) return "Elite";
    return "Standard";
  };

  const currentContent =
    pageContent[formatCategory(category)] || pageContent["Standard"];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Navbar (fixed as is) */}
      <Navbar />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
        style={{
          backgroundImage: "url('/assets/money.webp')",
        }}
      ></div>

      {/* Scrollable section starts below navbar (works on mobile) */}
      <div className="relative z-10 h-[calc(100vh-4rem)] overflow-y-auto pt-4 pb-32 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CategoryCard
            headline={currentContent.headline}
            services={currentContent.services}
            videoLinks={currentContent.videoLinks}
            category={formatCategory(category)}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default CategoryDetails;
