import React from 'react';
import { Code, Settings, Bitcoin } from 'lucide-react';

const SummarySection: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Specialist',
      description: 'React • React Native • TypeScript • Next.js',
      color: 'bg-blue-100 text-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      icon: Settings,
      title: 'DevOps Minded',
      description: 'CI/CD • Automation • Production • AWS',
      color: 'bg-green-100 text-green-600',
      bgColor: 'bg-green-500'
    },
    {
      icon: Bitcoin,
      title: 'Bitcoin Ecosystem',
      description: 'Bitshala • Lightning SDK • Education • Open Source',
      color: 'bg-orange-100 text-orange-600',
      bgColor: 'bg-orange-500'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center px-2 md:px-0">
      <div className="mb-8 md:mb-12 animate-bounce-in">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 animate-typing">
          Professional Summary
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed px-2">
          <p className="animate-slide-right delay-300">
            <strong>Frontend/UI Engineer</strong> with expertise in React, React Native, TypeScript, Next.js and Node.js.
          </p>
          <p className="animate-slide-left delay-500">
            Experienced in creating intuitive user interfaces, implementing automation workflows, and managing production deployments with modern DevOps practices.
          </p>
          <p className="animate-slide-right delay-700">
            <strong>Active Bitshala community member</strong>, currently mastering Bitcoin fundamentals and Lightning Network SDK development.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm hover:shadow-2xl animate-ultra-smooth hover:scale-110 hover:-translate-y-4 animate-bounce-in group cursor-pointer"
            style={{ animationDelay: `${800 + index * 200}ms` }}
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 ${skill.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:animate-wiggle animate-float group-hover:shadow-lg animate-smooth-hover`}>
              <skill.icon size={20} className="md:w-6 md:h-6 text-white group-hover:scale-125 animate-smooth-hover" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1.5 md:mb-2 group-hover:text-indigo-600 animate-smooth-hover">
              {skill.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-700 animate-smooth-hover">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummarySection;