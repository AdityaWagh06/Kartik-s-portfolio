// pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '../components/GradientBackground';

function Home() {
  const navigate = useNavigate();

  return (
    <GradientBackground>
      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center px-4 md:px-10">
          <h1 className="text-5xl font-bold mb-6 text-red-600">Welcome to My Edits</h1>
          <p className="text-xl mb-6 text-gray-300">
            Hi, I'm Kartik, a creative editor with a passion for crafting stunning visuals and captivating stories.
            Explore my work and see how I can bring your ideas to life through my expertise in video editing, photo retouching,
            and content creation.
          </p>
          <button
            onClick={() => navigate('/categories')}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Play
          </button>
        </div>
      </div>
    </GradientBackground>
  );
}

export default Home;
