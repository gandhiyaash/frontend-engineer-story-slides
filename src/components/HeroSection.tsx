import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto animate-fade-in px-2 md:px-0">
      <div className="mb-6 md:mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4 animate-bounce-in">
          Yash Gandhi
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl text-indigo-600 font-medium mb-4 md:mb-6 animate-slide-down delay-200 px-1">
          Frontend Engineer • Web & Mobile Apps • Bitcoiner
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-400 px-2">
          Passionate about creating exceptional user experiences with modern web technologies, 
          React Native applications, and exploring the Bitcoin ecosystem.
        </p>
      </div>

    </div>
  );
};

export default HeroSection;