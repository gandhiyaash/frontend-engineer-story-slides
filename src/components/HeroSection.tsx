import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-bounce-in">
          Yash Gandhi
        </h1>
        <h2 className="text-2xl md:text-3xl text-indigo-600 font-medium mb-6 animate-slide-down delay-200">
          Frontend Engineer • Web & Mobile Apps • Bitcoiner
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-400">
          Passionate about creating exceptional user experiences with modern web technologies, 
          React Native applications, and exploring the Bitcoin ecosystem.
        </p>
      </div>

    </div>
  );
};

export default HeroSection;