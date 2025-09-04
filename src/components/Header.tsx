import React from 'react';
import { Github, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 animate-slide-down shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-semibold text-xl text-gray-900 hover:text-orange-500 animate-smooth-hover cursor-pointer animate-slide-right delay-300 hover:scale-105">
          Yash Gandhi
        </div>
        
        <div className="flex items-center space-x-4 animate-slide-left delay-500">
          <a
            href="https://github.com/gandhiyaash"
            className="p-2 text-gray-600 hover:text-gray-900 animate-smooth-hover rounded-full hover:bg-gray-100 hover:scale-125 hover:animate-wiggle hover:shadow-md hover:-translate-y-0.5"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:yashbtc@proton.me"
            className="p-2 text-gray-600 hover:text-gray-900 animate-smooth-hover rounded-full hover:bg-gray-100 hover:scale-125 hover:animate-wiggle hover:shadow-md hover:-translate-y-0.5"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;