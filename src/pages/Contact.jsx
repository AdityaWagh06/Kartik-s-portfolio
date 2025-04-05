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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: "url('/background.jpg')", // Same background
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
          Contact Me
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-300 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Let's connect! Reach out for collaborations or inquiries.
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          className="flex space-x-6 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="mailto:kartik@example.com" className="bg-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition">
            📧 Email Me
          </a>
          <a href="https://www.instagram.com/kartik" target="_blank" rel="noopener noreferrer" className="bg-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition">
            📷 Instagram
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
