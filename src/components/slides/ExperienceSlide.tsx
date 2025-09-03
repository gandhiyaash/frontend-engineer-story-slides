import { motion } from 'motion/react';
import { Building, Calendar } from 'lucide-react';
import { Badge } from '../ui/badge';

const ExperienceSlide = () => {

  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="slide-title-visible"
          >
            Experience
          </motion.h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {/* Current Role */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card border-2 border-[#f7931a]/20 rounded-2xl p-8 shadow-lg hover:border-[#f7931a]/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#f7931a] to-[#ffa726] rounded-2xl flex items-center justify-center">
                  <Building className="h-10 w-10 text-white" />
                </div>
              </motion.div>

              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-4"
                >
                  <h3 className="text-3xl font-bold text-foreground mb-2">Frontend Developer</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-xl text-[#f7931a] font-semibold">Evolotek.ai — Mumbai, India</p>
                    <Badge variant="outline" className="border-[#f7931a]/30 text-[#f7931a] mt-2 md:mt-0">
                      <Calendar className="h-3 w-3 mr-1" />
                      Jun 2024 – Aug 2025
                    </Badge>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-foreground leading-relaxed text-lg font-medium space-y-2"
                >
                  <p>• Spearheading UI/UX design and development for web and mobile apps using React, Next.js, and React Native</p>
                  <p>• Collaborating across the stack with Node.js + APIs while specializing in frontend delivery</p>
                  <p>• Established CI/CD pipelines, Dockerized deployments, and automation for faster, reliable releases</p>
                  <p>• Designed scalable, intuitive dashboards and client-facing portals improving user engagement</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Previous Role */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-card border-2 border-muted/20 rounded-2xl p-8 shadow-lg hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Building className="h-10 w-10 text-white" />
                </div>
              </motion.div>

              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="mb-4"
                >
                  <h3 className="text-3xl font-bold text-foreground mb-2">Software Engineer</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-xl text-blue-500 font-semibold">Barclays — New Jersey, US</p>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-500 mt-2 md:mt-0">
                      <Calendar className="h-3 w-3 mr-1" />
                      Jun 2023 – May 2024
                    </Badge>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-foreground leading-relaxed text-lg font-medium space-y-2"
                >
                  <p>• Delivered scalable enterprise apps with CI/CD pipelines, automation, and cloud deployments</p>
                  <p>• Implemented Dockerized services and automated pipelines to accelerate production releases</p>
                  <p>• Contributed to frontend dashboards, improving usability and system reliability</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSlide;