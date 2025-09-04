import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';

const sections = [
  { id: 'hero', component: HeroSection },
  { id: 'summary', component: SummarySection },
  { id: 'skills', component: SkillsSection },
  { id: 'experience', component: ExperienceSection },
  { id: 'projects', component: ProjectsSection },
  { id: 'community', component: CommunitySection },
  { id: 'contact', component: ContactSection },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
  };

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="relative overflow-hidden">
        <div className="min-h-screen flex items-center justify-center p-4">
          <CurrentComponent />
        </div>
        
        <Navigation
          currentSection={currentSection}
          totalSections={sections.length}
          onNext={nextSection}
          onPrev={prevSection}
          onGoTo={goToSection}
        />
      </main>
    </div>
  );
}

export default App;