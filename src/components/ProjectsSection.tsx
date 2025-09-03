import React from 'react';
import { ExternalLink, Smartphone, Globe, Database, Shield } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'bitcoinpolicy.in',
      description: 'Bitcoin-focused frontend app providing policy insights and regulatory analysis for India.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      color: 'bg-orange-500'
    },
    {
      title: 'Sipstr Platform',
      description: 'Complete alcohol delivery ecosystem with multiple apps and comprehensive vendor management.',
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
      components: [
        { icon: Smartphone, name: 'Customer App' },
        { icon: Smartphone, name: 'Delivery App' },
        { icon: Database, name: 'Vendor Dashboard' },
        { icon: Shield, name: 'Admin Portal' }
      ],
      color: 'bg-blue-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 animate-bounce-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 animate-slide-up delay-300">
          Showcase of frontend development and Bitcoin ecosystem projects
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl animate-ultra-smooth hover:scale-105 hover:-translate-y-6 animate-scale-in group cursor-pointer"
            style={{ animationDelay: `${500 + index * 300}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover animate-ultra-smooth group-hover:scale-115 group-hover:rotate-1"
              />
              <div className="absolute top-4 right-4">
                <div className={`w-8 h-8 ${project.color} rounded-full flex items-center justify-center animate-float group-hover:animate-pulse-glow`}>
                  {index === 0 ? <Globe size={16} className="text-white group-hover:animate-wiggle" /> : <Smartphone size={16} className="text-white group-hover:animate-wiggle" />}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 animate-smooth-hover">
                {project.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 animate-smooth-hover">
                {project.description}
              </p>

              {project.components && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">Platform Components:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.components.map((component, compIndex) => (
                      <div key={compIndex} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-indigo-600 animate-smooth-hover cursor-pointer hover:scale-105 hover:-translate-y-0.5">
                        <component.icon size={14} className="hover:animate-wiggle" />
                        <span>{component.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 animate-smooth-hover hover:scale-110 cursor-pointer hover:-translate-y-1 hover:shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 animate-ultra-smooth hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-pulse-glow group">
                <ExternalLink size={16} className="hover:animate-wiggle" />
                <span>Live Demo</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;