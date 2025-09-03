import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Monitor, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const ProjectsSlide = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 'bitcoinpolicy',
      title: 'bitcoinpolicy.in',
      description: 'Bitcoin-focused frontend app providing policy insights and regulatory analysis for India.',
      image: 'https://images.unsplash.com/photo-1659018966825-43297e655ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NjgwNjExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://bitcoinpolicy.in',
      icon: Globe,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'sipstr',
      title: 'Sipstr Platform',
      description: 'Complete alcohol delivery ecosystem with multiple apps and comprehensive vendor management.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2NzQxMTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://vendor.sandbox.sipstr.com/',
      icon: Smartphone,
      color: 'from-blue-500 to-purple-500',
      subProjects: [
        { name: 'Customer App', icon: Smartphone, description: 'iOS/Android app for ordering' },
        { name: 'Delivery App', icon: Monitor, description: 'Driver app for deliveries' },
        { name: 'Vendor Dashboard', icon: Settings, description: 'Web dashboard for vendors' },
        { name: 'Admin Portal', icon: Globe, description: 'Administrative interface' }
      ]
    }
  ];

  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto">
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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="slide-subtitle"
          >
            Showcase of frontend development and Bitcoin ecosystem projects
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="bg-card border-2 border-[#f7931a]/20 rounded-2xl overflow-hidden shadow-lg hover:border-[#f7931a]/50 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
                    
                    {/* Project Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                      className="absolute top-4 right-4"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-foreground leading-relaxed mb-4 font-medium text-lg">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 + index * 0.2 + techIndex * 0.1 }}
                          >
                            <Badge variant="secondary" className="bg-[#f7931a]/10 text-[#f7931a] border-[#f7931a]/20">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      {/* Sub-projects for Sipstr */}
                      {project.subProjects && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                          className="mb-6"
                        >
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3">Platform Components:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.subProjects.map((subProject, subIndex) => {
                              const SubIcon = subProject.icon;
                              return (
                                <motion.div
                                  key={subProject.name}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: 1.6 + subIndex * 0.1 }}
                                  className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-[#f7931a]/10 transition-colors duration-200"
                                >
                                  <SubIcon className="h-4 w-4 text-[#f7931a]" />
                                  <span className="text-xs font-medium">{subProject.name}</span>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                        className="flex gap-3"
                      >
                        <Button 
                          className="flex-1 bg-[#f7931a] hover:bg-[#e65100] text-white"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="border-[#f7931a]/30 hover:border-[#f7931a] hover:bg-[#f7931a]/10"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlide;