import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Cog, Rocket, Users } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Building,
      title: 'Enterprise-Scale Engineering',
      description: 'Led development of mission-critical financial applications serving millions of users across global markets.',
      achievements: ['99.9% uptime SLA', 'Multi-region deployment', 'Regulatory compliance'],
    },
    {
      icon: Cog,
      title: 'Advanced Automation',
      description: 'Implemented sophisticated CI/CD pipelines and infrastructure automation reducing deployment time by 80%.',
      achievements: ['Docker containerization', 'Kubernetes orchestration', 'Automated testing'],
    },
    {
      icon: Rocket,
      title: 'Strategic Deployment',
      description: 'Architected and executed deployment strategies for high-frequency trading systems and real-time analytics.',
      achievements: ['Zero-downtime deployments', 'Blue-green deployment', 'Performance optimization'],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven track record in enterprise-scale engineering at Barclays
          </p>
        </div>

        <div className="mb-12">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 flex-shrink-0">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">Frontend Engineer</h3>
                      <p className="text-lg text-primary font-medium">Barclays Investment Bank</p>
                    </div>
                    <Badge variant="outline" className="text-sm mt-2 md:mt-0">
                      2021 - Present
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Developed and maintained critical trading platforms and risk management systems 
                    used by thousands of traders and analysts across global markets. Specialized in 
                    high-performance React applications with real-time data processing and complex 
                    financial calculations.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'WebSocket', 'D3.js', 'Docker', 'Kubernetes', 'Jenkins', 'AWS'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">{exp.title}</h4>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;