import React from 'react';
import { Smartphone, Server, Cloud } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: 'Frontend & Mobile',
      color: 'bg-blue-500',
      skills: [
        'React', 'React Native', 'Next.js', 'TypeScript',
        'Expo', 'Tailwind CSS'
      ]
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      color: 'bg-green-500',
      skills: [
        'Node.js', 'Express', 'REST APIs', 'GraphQL',
        'MySQL', 'MongoDB'
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      color: 'bg-orange-500',
      skills: [
        'Git', 'Docker', 'CI/CD', 'AWS',
        'Vercel', 'Testing'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12 animate-scale-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 bg-clip-text text-transparent animate-gradient">
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 animate-slide-up delay-300">
          Specialized in modern technologies and development practices
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl animate-ultra-smooth hover:scale-105 hover:-translate-y-6 animate-bounce-in group cursor-pointer"
            style={{ animationDelay: `${500 + index * 200}ms` }}
          >
            <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:animate-rotate-slow animate-float group-hover:shadow-xl animate-smooth-hover`}>
              <category.icon size={28} className="text-white group-hover:scale-125 animate-smooth-hover" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-6 group-hover:text-indigo-600 animate-smooth-hover">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 animate-smooth-hover hover:scale-110 hover:shadow-lg cursor-pointer hover:-translate-y-1"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;