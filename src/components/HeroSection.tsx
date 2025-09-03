import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Yash Gandhi
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xl md:text-2xl text-muted-foreground">
              <span>Frontend Engineer</span>
              <span className="hidden md:block">•</span>
              <span>Bitcoiner</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting intuitive user experiences and building the future of Bitcoin-powered applications
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;