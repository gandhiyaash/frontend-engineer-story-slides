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
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12 animate-bounce-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-typing">
          Professional Summary
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
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

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-2xl animate-ultra-smooth hover:scale-110 hover:-translate-y-4 animate-bounce-in group cursor-pointer"
            style={{ animationDelay: `${800 + index * 200}ms` }}
          >
            <div className={`w-12 h-12 ${skill.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle animate-float group-hover:shadow-lg animate-smooth-hover`}>
              <skill.icon size={24} className="text-white group-hover:scale-125 animate-smooth-hover" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 animate-smooth-hover">
              {skill.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-700 animate-smooth-hover">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummarySection;