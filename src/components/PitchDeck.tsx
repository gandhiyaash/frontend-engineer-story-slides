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

  // Keyboard navigation
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

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
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

      {/* Enhanced Navigation Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 z-20"
      >
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="glass-effect hover:bg-[#f7931a]/10 hover:border-[#f7931a]/30 disabled:opacity-30 transition-all duration-300 rounded-xl px-4 py-2 text-sm font-medium shadow-soft hover:shadow-glow"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {/* Clean Dot Navigation */}
        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#f7931a] w-6'
                  : 'bg-gray-400 hover:bg-gray-300'
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
          className="glass-effect hover:bg-[#f7931a]/10 hover:border-[#f7931a]/30 disabled:opacity-30 transition-all duration-300 rounded-xl px-4 py-2 text-sm font-medium shadow-soft hover:shadow-glow"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </motion.div>

      {/* Enhanced Slide Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="absolute top-6 right-6 z-20 glass-effect rounded-xl px-4 py-2 shadow-soft"
      >
        <span className="text-[#f7931a] font-semibold text-sm">{currentSlide + 1}</span>
        <span className="mx-2 text-muted-foreground text-sm">/</span>
        <span className="text-muted-foreground text-sm">{slides.length}</span>
      </motion.div>

      {/* Enhanced Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-border/20 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-[#f7931a] via-[#ffa726] to-[#f7931a] shadow-glow"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default PitchDeck;