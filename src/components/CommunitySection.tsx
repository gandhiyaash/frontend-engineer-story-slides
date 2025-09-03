import React from 'react';
import { BookOpen, Zap, Users, Bitcoin } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const learningAreas = [
    {
      icon: BookOpen,
      title: 'Mastering Bitcoin',
      description: 'Deep diving into Bitcoin fundamentals, cryptography, and protocol mechanics',
      progress: 65,
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'Lightning SDK',
      description: 'Exploring Lightning Network development for instant Bitcoin payments',
      progress: 40,
      color: 'bg-yellow-500'
    },
    {
      icon: Users,
      title: 'Bitshala Community',
      description: 'Active member contributing to Bitcoin education and open-source projects',
      progress: 80,
      color: 'bg-orange-600'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12 animate-bounce-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
          Community & Learning
        </h2>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl mb-12 animate-scale-in delay-300 transition-all duration-500 hover:scale-105 group">
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl mb-12 animate-scale-in delay-300 animate-ultra-smooth hover:scale-102 hover:-translate-y-2 group cursor-pointer">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-float group-hover:animate-pulse-glow">
            <Bitcoin size={32} className="text-white group-hover:animate-rotate-slow" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
          Bitcoiner & Frontend Builder
        </h3>
        
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8 group-hover:text-gray-800 animate-smooth-hover">
          Building the intersection between great user experiences and Bitcoin's revolutionary 
          technology. Committed to creating intuitive applications that make Bitcoin accessible 
          to everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {learningAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 animate-ultra-smooth hover:scale-105 hover:-translate-y-3 animate-bounce-in group cursor-pointer hover:shadow-lg"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div className={`w-12 h-12 ${area.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle animate-float group-hover:shadow-lg animate-smooth-hover`}>
                <area.icon size={24} className="text-white group-hover:scale-125 animate-smooth-hover" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 animate-smooth-hover">
                {area.title}
              </h4>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 animate-smooth-hover">
                {area.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-orange-600">{area.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full animate-ultra-smooth group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 animate-pulse-glow group-hover:shadow-lg"
                    style={{ width: `${area.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className="bg-orange-50 rounded-2xl p-6 mb-24 animate-slide-up delay-1000 hover:bg-orange-100 animate-ultra-smooth hover:scale-102 hover:-translate-y-2 group cursor-pointer hover:shadow-lg">
        <div className="flex items-center justify-center space-x-2 text-orange-600 group-hover:text-orange-700 animate-smooth-hover">
          <Bitcoin size={20} className="group-hover:animate-wiggle" />
          <span className="font-medium italic">
            "Not your keys, not your coins. Not your code, not your app."
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;