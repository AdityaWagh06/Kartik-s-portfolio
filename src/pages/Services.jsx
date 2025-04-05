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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: "url('/background.jpg')", // Ensure this image exists
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Services
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-300 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I offer high-quality video editing, content creation, and cinematic storytelling.
        </motion.p>

        {/* Service List */}
        <motion.div
          className="space-y-4 text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p>🎬 Video Editing</p>
          <p>📸 Photo Retouching</p>
          <p>🎥 Cinematic Effects</p>
          <p>📝 Content Creation</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
