import { motion } from 'motion/react';
import { Github, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSlide = () => {
  return (
    <div className="h-full flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#f7931a] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#ffa726] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 md:space-y-12"
        >
          {/* Enhanced Main Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            <motion.h1
              className="slide-title-visible tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              Yash Gandhi
            </motion.h1>
            
            {/* Enhanced Tagline - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground font-medium"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3">
                <span className="text-foreground font-semibold">Frontend Engineer</span> 
                <span className="hidden sm:inline mx-1 md:mx-3 text-[#f7931a]">•</span>
                <span className="text-foreground font-semibold">Web & Mobile Apps</span>
                <span className="hidden sm:inline mx-1 md:mx-3 text-[#f7931a]">•</span>
                <span className="gradient-text font-bold">Bitcoiner</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto px-2"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-foreground leading-relaxed font-medium">
              Passionate about creating exceptional user experiences with modern web technologies,
              React Native applications, and exploring the Bitcoin ecosystem.
            </p>
          </motion.div>

          {/* Enhanced Social Links - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center gap-4 sm:gap-6"
          >
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/gandhiyaash', color: 'hover:bg-gray-100' },
              { icon: Mail, label: 'Email', href: 'mailto:yashbtc@proton.me', color: 'hover:bg-green-50' },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-border/50 ${social.color} hover:border-[#f7931a]/50 transition-all duration-300 shadow-soft hover:shadow-glow group glass-effect`}
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-[#f7931a] transition-colors duration-300" />
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="pt-4 sm:pt-6 md:pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f7931a] to-[#ffa726] hover:from-[#ffa726] hover:to-[#f7931a] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-glow hover:shadow-xl transition-all duration-300 text-base sm:text-lg group"
                onClick={() => {
                  // Trigger next slide
                  const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
                  window.dispatchEvent(event);
                }}
              >
                <span className="hidden sm:inline">Explore My Journey</span>
                <span className="sm:hidden">View Portfolio</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlide;