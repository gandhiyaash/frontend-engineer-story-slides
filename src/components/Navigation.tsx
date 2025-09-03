import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  totalSections,
  onNext,
  onPrev,
  onGoTo
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center space-x-4 bg-white/95 backdrop-blur-xl rounded-full px-6 py-3 shadow-xl border border-gray-200/50 hover:shadow-2xl animate-ultra-smooth hover:scale-102 hover:-translate-y-1 animate-slide-up delay-1000">
        <button
          onClick={onPrev}
          disabled={currentSection === 0}
          className="p-2 text-gray-600 hover:text-gray-900 animate-smooth-hover disabled:opacity-50 disabled:cursor-not-allowed rounded-full hover:bg-gray-100 hover:scale-110 hover:animate-wiggle"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoTo(index)}
              className={`w-2 h-2 rounded-full animate-ultra-smooth hover:scale-150 ${
                index === currentSection
                  ? 'bg-orange-500 w-6 animate-pulse-glow'
                  : 'bg-gray-300 hover:bg-orange-400 hover:animate-wiggle'
              }`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSection === totalSections - 1}
          className="p-2 text-gray-600 hover:text-gray-900 animate-smooth-hover disabled:opacity-50 disabled:cursor-not-allowed rounded-full hover:bg-gray-100 hover:scale-110 hover:animate-wiggle"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navigation;