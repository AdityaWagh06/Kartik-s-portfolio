import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-12 flex flex-col items-center justify-center px-6 text-white text-center">
        
        {/* Profile Image */}
        <motion.img
          src="/assets/about .jpg" // Make sure this image is in /public/assets/
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-red-600 shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-red-600 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          🎬 Video Editor | Storyteller | Content Builder
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-gray-200 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I help creators and brands stand out with short-form content, YouTube edits, motion graphics, and cinematic reels. Clean cuts, smooth transitions, and engaging visuals are my signature. Let's make your content pop!
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          className="flex gap-6 mt-8 text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="https://www.instagram.com/ktrs_49?igsh=MXhlM2h5MHNlbDE0cA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://www.youtube.com/@ktrs_9" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/kartik-shinde-032123304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
