import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Bitcoin, Zap, BookOpen } from 'lucide-react';

const IdentitySection = () => {
  const identities = [
    {
      icon: Bitcoin,
      title: 'Bitcoin Maximalist',
      description: 'Passionate advocate for Bitcoin as sound money and the future of financial sovereignty.',
      highlights: ['Hodler since 2019', 'Lightning Network enthusiast', 'Self-custody advocate'],
    },
    {
      icon: BookOpen,
      title: 'Bitshala Community',
      description: 'Active contributor to Bitcoin education and helping newcomers understand the technology.',
      highlights: ['Educational content creator', 'Community workshops', 'Open source contributions'],
    },
    {
      icon: Zap,
      title: 'Lightning SDK Learning',
      description: 'Currently exploring Lightning Network development to build next-generation payment solutions.',
      highlights: ['Payment channels', 'Invoice generation', 'Real-time settlements'],
    },
  ];

  return (
    <section id="identity" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Identity & Passion</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond code, I'm deeply involved in the Bitcoin ecosystem and community education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {identities.map((identity, index) => {
            const IconComponent = identity.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{identity.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {identity.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {identity.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 border border-orange-200">
            <Bitcoin className="h-4 w-4" />
            <span className="text-sm font-medium">Building the Bitcoin future, one app at a time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;