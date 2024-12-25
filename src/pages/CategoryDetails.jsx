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
        "https://www.youtube.com/embed/simple1",
        "https://www.youtube.com/embed/simple2",
        "https://www.youtube.com/embed/simple3",
      ],
    },
    "Gym": {
      headline: "Gym Edits",
      services: [
        "Dynamic workout video edits",
        "High-energy transitions",
        "Custom fitness overlays",
        "Motivational soundtrack integration",
        "Progress tracking visuals",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/gym1",
        "https://www.youtube.com/embed/gym2",
        "https://www.youtube.com/embed/gym3",
      ],
    },
    "Advanced": {
      headline: "Advance Edits",
      services: [
        "Professional-grade tools",
        "Keyframe animation",
        "Color grading and correction",
        "Layered video compositions",
        "Advanced transitions and effects",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/advanced1",
        "https://www.youtube.com/embed/advanced2",
        "https://www.youtube.com/embed/advanced3",
      ],
    },
    "Creative": {
      headline: "Creative Edits",
      services: [
        "Custom animation tools",
        "Unique transitions and overlays",
        "Visual storytelling enhancements",
        "Special effects integration",
        "Artistic editing templates",
      ],
      videoLinks: [
        "https://www.youtube.com/embed/creative1",
        "https://www.youtube.com/embed/creative2",
        "https://www.youtube.com/embed/creative3",
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
