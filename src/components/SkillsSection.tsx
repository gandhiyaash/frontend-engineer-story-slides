import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      id: 'react',
      title: 'React',
      description: 'Building scalable and performant web applications',
      technologies: ['Hooks', 'Context API', 'Next.js', 'Vite'],
      color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    },
    {
      id: 'react-native',
      title: 'React Native',
      description: 'Cross-platform mobile app development',
      technologies: ['Expo', 'Navigation', 'Async Storage', 'Push Notifications'],
      color: 'bg-purple-500/10 text-purple-600 border-purple-200',
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      description: 'Type-safe JavaScript development',
      technologies: ['Type Systems', 'Generics', 'Utility Types', 'Strict Mode'],
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description: 'Creating intuitive and accessible user interfaces',
      technologies: ['Figma', 'Design Systems', 'Accessibility', 'Prototyping'],
      color: 'bg-green-500/10 text-green-600 border-green-200',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized in modern frontend technologies and user experience design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                hoveredSkill === skill.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${skill.color}`}>
                    <span className="text-2xl font-bold">{skill.title.charAt(0)}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground mb-4">{skill.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;