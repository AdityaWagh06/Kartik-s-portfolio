// pages/Categories.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '../components/GradientBackground';

function Categories() {
  const [loading, setLoading] = useState(true);
  const categories = [
    { name: 'Simple Edits', image: '/src/assets/cover 1.jpg', route: 'Simple' },
    { name: 'Gym Edits', image: '/src/assets/cover 1.jpg', route: 'Gym' },
    { name: 'Advanced Edits', image: '/src/assets/cover 1.jpg', route: 'Advanced' },
    { name: 'Creative Edits', image: '/src/assets/cover 1.jpg', route: 'Creative' }, // Additional category
  ];

  const navigate = useNavigate();

  // Image onLoad function to set loading to false
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <GradientBackground>
      <div className="flex justify-center items-center h-full pt-16">
        <div className="text-center w-full max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Categories</h1>
          <div className="grid grid-cols-4 gap-6 w-full">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 group"
                onClick={() => navigate(`/categories/${category.route}`)}
              >
                <div className="w-full h-32 sm:h-40 lg:h-48 relative group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                  {/* If image is loading, show a spinner */}
                  {loading ? (
                    <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                      <div className="animate-spin border-4 border-t-4 border-gray-500 rounded-full w-12 h-12"></div>
                    </div>
                  ) : null}

                  <img
                    src={category.image}
                    alt={category.name}
                    className={`w-full h-full object-cover transition-transform transform group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={handleImageLoad} // On load, set loading to false
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-500">
                    <h2 className="text-white text-md sm:text-lg font-bold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {category.name}
                    </h2>
                  </div>
                </div>
                {/* Hover effect for the whole card */}
                <div className="absolute inset-0 group-hover:opacity-100 group-hover:scale-105 group-hover:rotate-6 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}

export default Categories;
