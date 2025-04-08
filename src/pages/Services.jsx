import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/background.jpg')", // Make sure this exists in your public folder
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-12 flex flex-col items-center justify-center px-6 text-white text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-red-600 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          High-quality edits that bring your content to life with cinematic style and storytelling.
        </motion.p>

        <motion.div
          className="grid gap-4 text-sm md:text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p>🎬 Short & Long-Form Video Editing</p>
          <p>🎥 Cinematic Reels & Transitions</p>
          <p>🎧 Sound Design & Sync</p>
          <p>🖼️ Motion Graphics & Subtitles</p>
          <p>📝 Content Strategy for Social Media</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
