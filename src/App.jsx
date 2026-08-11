import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroTopology } from './components/HeroTopology';
import { ProjectShowcase } from './components/ProjectShowcase';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SkillsMatrix } from './components/SkillsMatrix';
import { TradeoffsSection } from './components/TradeoffsSection';
import { ContactTerminal } from './components/ContactTerminal';
import { Footer } from './components/Footer';
import { BackgroundCanvas } from './components/BackgroundCanvas';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Interactive Ambient Circuit Particles & Background Grid Canvas */}
      <BackgroundCanvas />

      <Header onOpenContact={() => scrollToSection('contact')} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroTopology
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        <ProjectShowcase onSelectProject={(project) => setSelectedProject(project)} />

        <SkillsMatrix />

        <TradeoffsSection />

        <ContactTerminal />
      </main>

      <Footer />

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
