import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      {/* No Background Image - Solid Black Background */}
      {/* Removed the background image div entirely */}

      {/* Main Content */}
      <div className="relative z-10 pt-42 pb-20 flex flex-col items-center justify-center h-screen text-white text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-300 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          🎬 What I Do
        </motion.p>

        {/* Description */}
        <motion.div
          className="text-lg text-gray-200 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p>
            I’m a video editor who helps creators, brands, and businesses bring their stories to life through powerful visuals. I specialize in short-form content like Instagram Reels and YouTube Shorts, focusing on clean cuts, impactful hooks, engaging text, and smooth transitions. I also work on YouTube vlogs, podcasts, and long-form videos, making sure they are well-paced, visually appealing, and ready to capture attention. Apart from content editing, I create motion graphics like logo animations, YouTube intros, and banners to give your brand a polished and professional look. My experience includes editing gym content, motivational reels, and promotional videos for companies. I don’t just edit videos, I help plan and build content that connects, performs, and leaves an impression. Whether you are an individual creator or a business, I make sure your videos stand out with clarity, style, and purpose.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;