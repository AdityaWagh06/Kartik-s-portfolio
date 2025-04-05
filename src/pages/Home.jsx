import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // Import Navbar

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black ">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: "url('assets/money.webp')", // Make sure the image exists in `public/`
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center py-96 h-screen text-white">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-300 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          View My Work
        </motion.p>

        {/* Play Button */}
        <motion.button
          onClick={() => navigate("/categories")}
          className="bg-red-700 hover:bg-red-900 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg 
                     transition-transform transform hover:scale-105 flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          ▶ Play
        </motion.button>
      </div>
    </div>
  );
}

export default Home;
