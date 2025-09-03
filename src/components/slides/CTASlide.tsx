import { motion } from 'framer-motion';
import { Github, Download, MessageCircle, Bitcoin } from 'lucide-react';
import { Button } from '../ui/button';

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const CTASlide = () => {
  const contactMethods = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@gandhiyaash',
      href: 'https://github.com/gandhiyaash',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: MessageCircle,
      label: 'Signal',
      value: 'Connect on Signal',
      href: 'https://signal.me/#eu/8aHfKi_H373qHseAIesZ1VF0c_EKoyqRSnTib1ZCbNlW_dZyffRGG6oEjFZsMtdH',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: XIcon,
      label: 'X',
      value: '@__yashgandhi__',
      href: 'https://x.com/__yashgandhi__',
      color: 'from-gray-800 to-black'
    }
  ];

  return (
    <div className="h-full flex items-center justify-center px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#f7931a]/10 border border-[#f7931a]/20"
            >
              <Bitcoin className="h-4 w-4 text-[#f7931a]" />
              <span className="text-[#f7931a] font-medium text-sm">Ready to collaborate?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="slide-title-visible leading-tight"
            >
              Let's build intuitive<br />
              <span className="text-[#f7931a]">Bitcoin-powered apps</span><br />
              together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="slide-subtitle max-w-2xl mx-auto leading-relaxed text-foreground font-medium"
            >
              Whether you need a frontend specialist, Bitcoin expertise, or a passionate team member 
              who understands both worlds.
            </motion.p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="cursor-pointer"
                  onClick={() => window.open(method.href, '_blank')}
                >
                  <div className="bg-card border border-border rounded-lg p-3 hover:border-[#f7931a]/50 hover:shadow-sm transition-all duration-200 flex items-center gap-3 min-w-[140px]">
                    <div className="w-8 h-8 bg-[#f7931a]/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-[#f7931a]" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-foreground text-sm">{method.label}</h4>
                      <p className="text-xs text-muted-foreground">{method.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="px-6 py-3 bg-[#f7931a] hover:bg-[#e65100] text-white transition-colors duration-200"
              onClick={() => window.open('mailto:yashbtc@proton.me?subject=Let\'s collaborate!&body=Hi Yash,%0A%0AI saw your presentation and would like to discuss...', '_blank')}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-6 py-3 border-border hover:border-[#f7931a] hover:bg-[#f7931a]/5 transition-all duration-200"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Yash_Gandhi_Resume.pdf';
                link.download = 'Yash_Gandhi_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-sm text-muted-foreground"
          >
            <p>Open to full-time opportunities, consulting, and exciting Bitcoin projects</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASlide;