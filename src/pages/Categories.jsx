import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

function Categories() {
  const [loading, setLoading] = useState(
    Object.fromEntries([0, 1, 2, 3].map((index) => [index, true]))
  );

  const categories = [
    { name: 'Simple Edits', image: '/assets/cap.jpg', route: 'Simple' },
    { name: 'VFX Edits', image: '/assets/cover1.jpg', route: 'VFX' },
    { name: 'Transitional Edits', image: '/assets/cover1.jpg', route: 'Transitional' },
    { name: 'Commercial Edits', image: '/assets/cover1.jpg', route: 'Commercial' },
  ];

  const navigate = useNavigate();

  const handleImageLoad = (index) => {
    setLoading((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="relative h-screen overflow-y-auto bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
        style={{
          backgroundImage: "url('assets/money.webp')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-20">
        <motion.div
          className="text-center w-full max-w-7xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-red-600"
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
                {/* Mobile: h-40, Tablet: h-56, Desktop: h-64 */}
                <div className="w-full h-40 sm:h-56 lg:h-64 relative">
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