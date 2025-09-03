import React from 'react';
import { Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Lead Frontend Engineer',
      company: 'Evolotek.ai',
      location: 'Mumbai, India',
      period: 'Jun 2024 – Aug 2025',
      color: 'bg-orange-500',
      achievements: [
        'Spearheading UI/UX design and development for web and mobile apps using React, Next.js, and React Native',
        'Collaborating across the stack with Node.js + APIs while specializing in frontend delivery',
        'Established CI/CD pipelines, Dockerized deployments, and automation for faster, reliable releases',
        'Designed scalable, intuitive dashboards and client-facing portals improving user engagement'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Barclays',
      location: 'New Jersey, US',
      period: 'Jun 2023 – May 2024',
      color: 'bg-blue-500',
      achievements: [
        'Delivered scalable enterprise apps with CI/CD pipelines, automation, and cloud deployments',
        'Implemented Dockerized services and automated pipelines to accelerate production releases',
        'Contributed to frontend dashboards, improving usability and system reliability'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-scale-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent animate-gradient">
          Experience
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl animate-ultra-smooth hover:scale-102 hover:-translate-y-4 animate-slide-right group cursor-pointer"
            style={{ animationDelay: `${300 + index * 300}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow animate-float group-hover:shadow-xl animate-smooth-hover`}>
                  <Calendar size={24} className="text-white group-hover:scale-125 animate-smooth-hover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 animate-smooth-hover">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-orange-500 font-medium group-hover:text-orange-600 animate-smooth-hover">
                    {exp.company}
                  </p>
                  <p className="text-gray-600">
                    {exp.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-orange-500 font-medium mt-2 md:mt-0">
                <Calendar size={16} className="mr-2 group-hover:animate-wiggle" />
                {exp.period}
              </div>
            </div>

            <ul className="space-y-3">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start space-x-3 animate-slide-left" style={{ animationDelay: `${600 + index * 300 + achIndex * 100}ms` }}>
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 animate-pulse-glow"></div>
                  <span className="text-gray-700 leading-relaxed group-hover:text-gray-800 animate-smooth-hover">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;