
import React from 'react';
import Navbar from './Navbar';

function GradientBackground({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-red-800 via-red-900 to-black opacity-90"></div> 
      <div className="relative z-10">
  
        <Navbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default GradientBackground;
