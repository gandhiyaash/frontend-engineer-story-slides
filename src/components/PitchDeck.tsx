import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

// Import slide components
import HeroSlide from './slides/HeroSlide';
import SummarySlide from './slides/SummarySlide';
import SkillsSlide from './slides/SkillsSlide';
import ExperienceSlide from './slides/ExperienceSlide';
import ProjectsSlide from './slides/ProjectsSlide';
import CommunitySlide from './slides/CommunitySlide';
import CTASlide from './slides/CTASlide';

const slides = [
  { id: 'hero', component: HeroSlide, title: 'Intro' },
  { id: 'summary', component: SummarySlide, title: 'Summary' },
  { id: 'skills', component: SkillsSlide, title: 'Skills' },
  { id: 'experience', component: ExperienceSlide, title: 'Experience' },
  { id: 'projects', component: ProjectsSlide, title: 'Projects' },
  { id: 'community', component: CommunitySlide, title: 'Community' },
  { id: 'cta', component: CTASlide, title: 'Contact' },
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard and touch navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    const handleNextSlide = () => {
      nextSlide();
    };

    // Touch/swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = Math.abs(touchStartX - touchEndX);
      const minSwipeDistance = 50;

      if (swipeDistance > minSwipeDistance) {
        if (touchStartX > touchEndX) {
          // Swipe left - next slide
          nextSlide();
        } else {
          // Swipe right - previous slide
          prevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('nextSlide', handleNextSlide);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('nextSlide', handleNextSlide);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="h-screen bg-gradient-to-br from-background to-background/80 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(247, 147, 26, 0.05) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(247, 147, 26, 0.03) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(247, 147, 26, 0.02) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Slide Container */}
      <div className="h-full flex items-center justify-center relative z-10">        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              scale: { duration: 0.4 }
            }}
            className="w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Responsive Navigation Controls */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4 z-50 bg-white/95 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-xl border border-gray-200">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden">Prev</span>
        </button>

        {/* Responsive Dot Navigation */}
        <div className="flex items-center gap-1 sm:gap-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-orange-500 w-4 sm:w-6 h-1.5 sm:h-2'
                  : 'bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2 h-1.5 sm:h-2'
              }`}
              title={`Go to ${slide.title}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>

      {/* Responsive Slide Counter */}
      <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 bg-white/95 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg border border-gray-200">
        <span className="text-orange-500 font-semibold text-xs sm:text-sm">{currentSlide + 1}</span>
        <span className="mx-1 sm:mx-2 text-gray-400 text-xs sm:text-sm">/</span>
        <span className="text-gray-600 text-xs sm:text-sm">{slides.length}</span>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PitchDeck;