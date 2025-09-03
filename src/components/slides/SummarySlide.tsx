import { motion } from 'motion/react';
import { Code, Cog, Bitcoin } from 'lucide-react';

const SummarySlide = () => {
  const highlights = [
    {
      title: 'Frontend Specialist',
      description: 'React • React Native • TypeScript • Next.js',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      bgGlow: 'bg-blue-500/10'
    },
    {
      title: 'DevOps Minded',
      description: 'CI/CD • Automation • Production • AWS',
      icon: Cog,
      color: 'from-green-500 to-emerald-600',
      bgGlow: 'bg-green-500/10'
    },
    {
      title: 'Bitcoin Ecosystem',
      description: 'Bitshala • Lightning SDK • Education • Open Source',
      icon: Bitcoin,
      color: 'from-orange-500 to-yellow-500',
      bgGlow: 'bg-orange-500/10'
    }
  ];

  return (
    <div className="h-full flex items-center justify-center px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f7931a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Enhanced Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="slide-title-visible">
              Professional Summary
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f7931a] to-[#ffa726] mx-auto rounded-full" />
          </motion.div>

          {/* Enhanced Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="text-xl md:text-2xl leading-relaxed text-foreground max-w-4xl mx-auto space-y-6 font-medium">
              <p>
                Frontend/UI Engineer with expertise in{' '}
                <span className="text-foreground font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  React, React Native, TypeScript, Next.js
                </span>{' '}
                and{' '}
                <span className="text-foreground font-semibold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Node.js
                </span>.
              </p>
              <p>
                Experienced in creating intuitive user interfaces, implementing automation workflows, 
                and managing production deployments with modern DevOps practices.
              </p>
              <p>
                Active{' '}
                <span className="gradient-text font-semibold">Bitshala community member</span>, 
                currently mastering Bitcoin fundamentals and Lightning Network SDK development.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 } 
                  }}
                  className="group"
                >
                  <div className={`glass-effect rounded-3xl p-8 hover:border-[#f7931a]/30 transition-all duration-500 shadow-soft hover:shadow-xl relative overflow-hidden ${item.bgGlow}`}>
                    {/* Icon background glow */}
                    <div className={`absolute top-4 left-4 w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl opacity-10 blur-xl`} />
                    
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.0 + index * 0.2,
                        type: "spring",
                        stiffness: 150
                      }}
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-soft relative z-10`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-bold text-foreground group-hover:text-[#f7931a] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SummarySlide;