import React from 'react';
import { Mail, MessageCircle, Download, Github, Signal, X } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Yash_Gandhi_Resume.pdf';
    link.download = 'Yash_Gandhi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactMethods = [
    {
      icon: Github,
      platform: 'GitHub',
      handle: '@gandhiyaash',
      color: 'bg-gray-900 hover:bg-gray-800',
      textColor: 'text-white',
      url: 'https://github.com/gandhiyaash'
    },
    {
      icon: Signal,
      platform: 'Signal',
      handle: 'Connect on Signal',
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white',
      url: 'https://signal.me/#eu/8aHfKi_H373qHseAIesZ1VF0c_EKoyqRSnTib1ZCbNlW_dZyffRGG6oEjFZsMtdH'
    },
    {
      icon: X,
      platform: 'X',
      handle: '@___yashgandhi___',
      color: 'bg-black hover:bg-gray-900',
      textColor: 'text-white',
      url: 'https://x.com/__yashgandhi__'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center px-2 md:px-0">
      <div className="mb-8 md:mb-12 animate-bounce-in">
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center animate-float animate-pulse-glow">
            <MessageCircle size={24} className="md:w-8 md:h-8 text-white animate-wiggle" />
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Ready to collaborate?
        </h2>
        
        <div className="space-y-1.5 md:space-y-2 mb-6 md:mb-8">
          <p className="text-lg md:text-xl text-gray-700 animate-slide-right delay-300">
            Let's build intuitive
          </p>
          <p className="text-lg md:text-xl text-orange-500 font-semibold animate-scale-in delay-500">
            Bitcoin-powered apps
          </p>
          <p className="text-lg md:text-xl text-gray-700 animate-slide-left delay-700">
            together
          </p>
        </div>
        
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-in delay-800 px-2">
          Whether you need a frontend specialist, Bitcoin expertise, or a passionate team member 
          who understands both worlds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 px-2 md:px-0">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${method.color} ${method.textColor} rounded-lg md:rounded-xl p-4 md:p-6 animate-ultra-smooth hover:scale-105 hover:-translate-y-3 hover:shadow-2xl animate-bounce-in flex flex-col items-center space-y-2 md:space-y-3 group`}
            style={{ animationDelay: `${1000 + index * 200}ms` }}
          >
            <method.icon size={20} className="md:w-6 md:h-6 group-hover:scale-125 group-hover:animate-wiggle animate-smooth-hover" />
            <div className="text-center">
              <div className="text-sm md:text-base font-medium group-hover:animate-pulse">{method.platform}</div>
              <div className="text-xs md:text-sm opacity-90">{method.handle}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8 animate-scale-in delay-1600 px-2 md:px-0">
        <a
          href="mailto:yashbtc@proton.me"
          className="flex items-center justify-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white rounded-lg md:rounded-xl hover:bg-orange-600 animate-ultra-smooth hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-pulse-glow group"
        >
          <Mail size={18} className="md:w-5 md:h-5 group-hover:animate-wiggle" />
          <span className="text-sm md:text-base font-medium">Get in Touch</span>
        </a>
        
        <button 
          onClick={handleResumeDownload}
          className="flex items-center justify-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 border border-gray-300 text-gray-700 rounded-lg md:rounded-xl hover:bg-gray-50 animate-ultra-smooth hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group"
        >
          <Download size={18} className="md:w-5 md:h-5 group-hover:animate-wiggle" />
          <span className="text-sm md:text-base font-medium">Download Resume</span>
        </button>
      </div>

      <p className="text-gray-500 text-xs md:text-sm animate-fade-in delay-1800 px-2">
        Open to full-time opportunities, consulting, and exciting Bitcoin projects
      </p>
    </div>
  );
};

export default ContactSection;