import { useParams } from "react-router-dom";
import GradientBackground from "../components/GradientBackground";
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
      videoLinks: [
        "/videos/Simple/D-mart shoot 1.mp4",
        "/videos/Simple/Low energy DO THIS1.mp4",
        "/videos/Simple/mpsc upsc difference.mp4",
      ],
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
        "/videos/VFX/Bottle.mp4",
        "/videos/VFX/MAINNN.mp4",
        "/videos/VFX/rasungun main2.mp4",
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
        "/videos/Transitional/1.mp4",
        "/videos/Transitional/Groww 2.mp4",
        "/videos/Transitional/groww.mp4",
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
        "/videos/Commercial/1022 (1).mp4",
        "/videos/Commercial/Egg reel.mp4",
        "/videos/Commercial/new ad.mp4",
      ],
    },
  };

  const currentContent = pageContent[category] || pageContent["Simple"]; // Default to Simple if category not found

  return (
    <GradientBackground>
      <CategoryCard
        headline={currentContent.headline}
        services={currentContent.services}
        videoLinks={currentContent.videoLinks}
        category={category}
      />
    </GradientBackground>
  );
}

export default CategoryDetails;
