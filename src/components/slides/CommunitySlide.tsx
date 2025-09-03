import { motion } from 'motion/react';
import { BookOpen, Zap, Users, Bitcoin } from 'lucide-react';

const CommunitySlide = () => {
  const learningAreas = [
    {
      icon: BookOpen,
      title: 'Mastering Bitcoin',
      description: 'Deep diving into Bitcoin fundamentals, cryptography, and protocol mechanics',
      progress: 65
    },
    {
      icon: Zap,
      title: 'Lightning SDK',
      description: 'Exploring Lightning Network development for instant Bitcoin payments',
      progress: 40
    },
    {
      icon: Users,
      title: 'Bitshala Community',
      description: 'Active member contributing to Bitcoin education and open-source projects',
      progress: 80
    }
  ];

  return (
    <div className="h-full flex items-center justify-center px-8 bg-background">
      <div className="max-w-5xl mx-auto py-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="slide-title-visible"
          >
            Community & Learning
          </motion.h2>
        </motion.div>

        {/* Main Identity Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-4"
        >
          <div className="bg-card border border-border rounded-2xl p-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-12 h-12 mx-auto mb-4 bg-[#f7931a]/10 rounded-full flex items-center justify-center"
            >
              <Bitcoin className="h-6 w-6 text-[#f7931a]" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-[#f7931a] mb-4">
                Bitcoiner & Frontend Builder
              </h3>
              <p className="text-foreground leading-relaxed font-medium text-lg">
                Building the intersection between great user experiences and Bitcoin's revolutionary technology. 
                Committed to creating intuitive applications that make Bitcoin accessible to everyone.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Learning Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {learningAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-xl p-4 hover:border-[#f7931a]/50 hover:shadow-md transition-all duration-200"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="w-10 h-10 bg-[#f7931a]/10 rounded-lg flex items-center justify-center mb-3"
                >
                  <IconComponent className="h-5 w-5 text-[#f7931a]" />
                </motion.div>

                <h4 className="font-bold text-foreground mb-2 text-sm">{area.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {area.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-muted-foreground">Progress</span>
                    <span className="text-xs font-medium text-[#f7931a]">{area.progress}%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${area.progress}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                      className="h-2 bg-[#f7931a] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-4 mb-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f7931a]/10 border border-[#f7931a]/20">
            <Bitcoin className="h-3 w-3 text-[#f7931a]" />
            <span className="text-[#f7931a] font-medium text-xs">
              "Not your keys, not your coins. Not your code, not your app."
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunitySlide;