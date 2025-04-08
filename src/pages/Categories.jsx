import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

function Categories() {
  const [loading, setLoading] = useState(
    Object.fromEntries([0, 1, 2, 3].map((index) => [index, true]))
  );

  const categories = [
    { name: 'Standard', image: '/assets/cap.jpg', route: 'Standard' },
    { name: 'Premium', image: '/assets/cover1.jpg', route: 'Premium' },
    { name: 'Elite', image: '/assets/cover1.jpg', route: 'Elite' },
    { name: 'Long Videos', image: '/assets/cover1.jpg', route: 'Long videos' },
  ];

  const navigate = useNavigate();

  const handleImageLoad = (index) => {
    setLoading((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
        style={{
          backgroundImage: "url('assets/money.webp')",
        }}
      ></div>

      {/* Scrollable Content Container */}
      <div className="relative z-10 pt-20 pb-12 h-[calc(100vh-6rem)] overflow-y-auto">
        <motion.div
          className="text-center w-full max-w-7xl mx-auto px-4 min-h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl md:text-6xl font-bold mb-8 -mt-5 md:mb-12 text-red-600"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Categories
          </motion.h1>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="relative bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 group hover:shadow-xl hover:shadow-red-900/30"
                onClick={() => navigate(`/categories/${category.route}`)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="w-full h-40 sm:h-56 lg:h-60 relative">
                  {loading[index] && (
                    <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-70">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                    </div>
                  )}
                  <img
                    src={category.image}
                    alt={`Preview of ${category.name}`}
                    className={`w-full h-full object-cover ${loading[index] ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-500 p-4">
                    <h2 className="text-white text-lg md:text-xl font-bold text-center group-hover:text-red-400 transition-colors duration-300">
                      {category.name}
                    </h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Categories;