import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";

function CategoryDetails() {
  const { category } = useParams();

  const pageContent = {
    "Simple": {
      headline: "Simple Edits",
      services: [
        "Basic trimming and cutting tools",
        "Easy-to-use filters",
        "Quick transitions",
        "Pre-designed templates",
        "Lightweight export options",
      ],
      videoLinks:[
        "https://www.youtube.com/embed/gFDJljyXkmo",
        "https://www.youtube.com/embed/KGLL-il6WWA",
        "https://www.youtube.com/embed/kXU_H-Iwyro"
      ]
      ,
    },
    "VFX": {
      headline: "Gym Edits",
      services: [
        "Dynamic workout video edits",
        "High-energy transitions",
        "Custom fitness overlays",
        "Motivational soundtrack integration",
        "Progress tracking visuals",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/2Vv-BfVoq4g",
        "https://www.youtube.com/embed/eY52Zsg-KVI",
        "https://www.youtube.com/embed/ScMzIvxBSi4",
      ],
    },
    "Transitional": {
      headline: "Transitional Edits",
      services: [
        "Professional-grade tools",
        "Keyframe animation",
        "Color grading and correction",
        "Layered video compositions",
        "Advanced transitions and effects",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/kXYiU_JCYtU",
        "https://www.youtube.com/embed/LsoLEjrDogU",
        "https://www.youtube.com/embed/9bZkp7q19f0",
      ],
    },
    "Commercial": {
      headline: "Creative Edits",
      services: [
        "Custom animation tools",
        "Unique transitions and overlays",
        "Visual storytelling enhancements",
        "Special effects integration",
        "Artistic editing templates",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/IcrbM1l_BoI",
        "https://www.youtube.com/embed/fRh_vgS2dFE",
        "https://www.youtube.com/embed/tgbNymZ7vqY",
      ],
    },
  };

  const currentContent = pageContent[category] || pageContent["Simple"];

  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{
          backgroundImage: "url('assets/money.webp')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-12 min-h-screen text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CategoryCard
            headline={currentContent.headline}
            services={currentContent.services}
            videoLinks={currentContent.videoLinks}
            category={category}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default CategoryDetails;
