import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/background.jpg')", // Ensure this exists in public/
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
          Contact Me
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-8 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Let's connect and create something impactful together. Whether it's a reel, promo, or long-form content—I'm here for it.
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="mailto:ktshinde18@gmail.com"
            className="bg-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-700 transition"
          >
            📧 Email Me
          </a>
          <a
            href="https://www.instagram.com/ktrs_49?igsh=MXhlM2h5MHNlbDE0cA=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-700 transition"
          >
            📷 DM on Instagram
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
