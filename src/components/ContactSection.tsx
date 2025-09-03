import React from 'react';
import { Mail, MessageCircle, Download, Github, Signal, X } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Github,
      platform: 'GitHub',
      handle: '@yashbtcash',
      color: 'bg-gray-900 hover:bg-gray-800',
      textColor: 'text-white'
    },
    {
      icon: Signal,
      platform: 'Signal',
      handle: 'Connect on Signal',
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white'
    },
    {
      icon: X,
      platform: 'X',
      handle: '@___yashgandhi___',
      color: 'bg-black hover:bg-gray-900',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12 animate-bounce-in">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-float animate-pulse-glow">
            <MessageCircle size={32} className="text-white animate-wiggle" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Ready to collaborate?
        </h2>
        
        <div className="space-y-2 mb-8">
          <p className="text-xl text-gray-700 animate-slide-right delay-300">
            Let's build intuitive
          </p>
          <p className="text-xl text-orange-500 font-semibold animate-scale-in delay-500 animate-pulse-glow">
            Bitcoin-powered apps
          </p>
          <p className="text-xl text-orange-500 font-semibold animate-scale-in delay-500 animate-pulse-glow">
            Bitcoin-powered apps
          </p>
          <p className="text-xl text-gray-700 animate-slide-left delay-700">
            together
          </p>
        </div>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in delay-800">
          Whether you need a frontend specialist, Bitcoin expertise, or a passionate team member 
          who understands both worlds.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href="#"
            className={`${method.color} ${method.textColor} rounded-xl p-6 animate-ultra-smooth hover:scale-105 hover:-translate-y-3 hover:shadow-2xl animate-bounce-in flex flex-col items-center space-y-3 group`}
            style={{ animationDelay: `${1000 + index * 200}ms` }}
          >
            <method.icon size={24} className="group-hover:scale-125 group-hover:animate-wiggle animate-smooth-hover" />
            <div className="text-center">
              <div className="font-medium group-hover:animate-pulse">{method.platform}</div>
              <div className="text-sm opacity-90">{method.handle}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-scale-in delay-1600">
        <a
          href="mailto:yashbtc@proton.me"
          className="flex items-center justify-center space-x-3 px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 animate-ultra-smooth hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-pulse-glow group"
        >
          <Mail size={20} className="group-hover:animate-wiggle" />
          <span className="font-medium">Get in Touch</span>
        </a>
        
        <button className="flex items-center justify-center space-x-3 px-8 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 animate-ultra-smooth hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
          <Download size={20} className="group-hover:animate-wiggle" />
          <span className="font-medium">Download Resume</span>
        </button>
      </div>

      <p className="text-gray-500 text-sm animate-fade-in delay-1800">
        Open to full-time opportunities, consulting, and exciting Bitcoin projects
      </p>
    </div>
  );
};

export default ContactSection;