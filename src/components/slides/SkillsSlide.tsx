import { motion } from 'framer-motion';
import { Smartphone, Database, Cloud } from 'lucide-react';

const SkillsSlide = () => {
  const skillGroups = [
    {
      title: 'Frontend & Mobile',
      icon: Smartphone,
      color: 'from-blue-600 via-blue-500 to-indigo-600',
      solidColor: 'bg-blue-600',
      accentColor: 'border-blue-400',
      bgPattern: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 60%)',
      skills: ['React', 'React Native', 'Next.js', 'TypeScript', 'Expo', 'Tailwind CSS']
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      color: 'from-emerald-600 via-emerald-500 to-teal-600',
      solidColor: 'bg-emerald-600',
      accentColor: 'border-emerald-400',
      bgPattern: 'radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 0%, transparent 60%)',
      skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MySQL', 'MongoDB']
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'from-orange-600 via-orange-500 to-red-600',
      solidColor: 'bg-orange-600',
      accentColor: 'border-orange-400',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 60%)',
      skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Testing']
    }
  ];

  return (
    <div className="h-full flex items-center justify-center px-8 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/5">
      {/* Enhanced background decoration with better visibility */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500/15 rounded-full blur-2xl" />
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-orange-500/15 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="slide-title-visible"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="slide-subtitle max-w-2xl mx-auto"
          >
            Specialized in modern technologies and development practices
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <div className="h-96 rounded-3xl p-8 text-white shadow-2xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden border-2 border-white/30"
                  style={{ 
                    background: index === 0 
                      ? 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #4f46e5 100%)'
                      : index === 1 
                      ? 'linear-gradient(135deg, #059669 0%, #10b981 50%, #0d9488 100%)'
                      : 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #dc2626 100%)'
                  }}
                >
                  {/* Strong background overlay for maximum visibility */}
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-3xl" />

                  <div className="flex flex-col h-full relative z-10">
                    {/* Enhanced Icon with maximum visibility */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="w-18 h-18 mb-8 flex items-center justify-center bg-white/25 rounded-2xl backdrop-blur-sm shadow-xl border-2 border-white/50"
                    >
                      <IconComponent className="w-11 h-11 text-white drop-shadow-2xl" />
                    </motion.div>

                    {/* Title with maximum contrast */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                      className="text-2xl font-bold mb-8 text-white drop-shadow-xl"
                    >
                      {group.title}
                    </motion.h3>

                    {/* Skills Grid with maximum visibility */}
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      {group.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 1.2 + index * 0.2 + skillIndex * 0.1,
                            type: "spring",
                            stiffness: 150
                          }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <div className="bg-white/30 hover:bg-white/40 text-white border-2 border-white/40 hover:border-white/60 transition-all duration-300 text-sm py-3 px-4 w-full rounded-lg backdrop-blur-md shadow-lg font-semibold text-center">
                            {skill}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Strong hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlide;