import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

      {/* Enhanced Navigation Controls - Mobile Optimized */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-6 md:gap-8 z-50 px-4"
        style={{ zIndex: 9999 }}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-white/90 backdrop-blur-md border-2 border-gray-300 hover:bg-[#f7931a]/10 hover:border-[#f7931a] disabled:opacity-30 transition-all duration-300 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl"
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden">Prev</span>
        </Button>

        {/* Clean Dot Navigation - Mobile Optimized */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-md rounded-full border-2 border-gray-300 shadow-lg">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#f7931a] w-4 sm:w-5 md:w-6 h-1.5 sm:h-2'
                  : 'bg-gray-400 hover:bg-gray-300 w-1.5 sm:w-2 h-1.5 sm:h-2'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title={`Go to ${slide.title}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-white/90 backdrop-blur-md border-2 border-gray-300 hover:bg-[#f7931a]/10 hover:border-[#f7931a] disabled:opacity-30 transition-all duration-300 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl"
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" />
        </Button>
      </motion.div>

      {/* Enhanced Slide Counter - Mobile Optimized */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="fixed top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-50 bg-white/90 backdrop-blur-md border-2 border-gray-300 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg"
        style={{ zIndex: 9999 }}
      >
        <span className="text-[#f7931a] font-semibold text-xs sm:text-sm">{currentSlide + 1}</span>
        <span className="mx-1 sm:mx-2 text-gray-600 text-xs sm:text-sm">/</span>
        <span className="text-gray-600 text-xs sm:text-sm">{slides.length}</span>
      </motion.div>

      {/* Enhanced Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50" style={{ zIndex: 9999 }}>
        <motion.div
          className="h-full bg-gradient-to-r from-[#f7931a] via-[#ffa726] to-[#f7931a] shadow-lg"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default PitchDeck;