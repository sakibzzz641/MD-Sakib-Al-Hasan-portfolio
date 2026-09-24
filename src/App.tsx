import React, { useState } from 'react';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroMetrics } from './components/HeroMetrics';
import { About } from './components/About';
import { MathematicsDataScience } from './components/MathematicsDataScience';
import { Workflow } from './components/Workflow';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RecruiterSnapshotModal } from './components/RecruiterSnapshotModal';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-[#0b0f17] text-slate-100'
        : 'bg-[#f8fafc] text-slate-900'
    }`}>
      {/* Subtle Viewport Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Sticky Global Navigation */}
      <Navbar
        onOpenRecruiterSnapshot={() => setIsRecruiterModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenRecruiterSnapshot={() => setIsRecruiterModalOpen(true)} />

        {/* Selected Project Metrics */}
        <HeroMetrics />

        {/* About Section & Snapshot */}
        <About />

        {/* Technical Skills & Coursework */}
        <Skills />

        {/* Featured Case Study & Filterable Projects */}
        <Projects />

        {/* Mathematics Meets Data Science Bridge */}
        <MathematicsDataScience />

        {/* 8-Stage Data Science Workflow */}
        <Workflow />

        {/* Professional Experience */}
        <Experience />

        {/* Academic Education */}
        <Education />

        {/* Verified Certifications */}
        <Certifications />

        {/* Direct Contact & Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Snapshot Modal */}
      <RecruiterSnapshotModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />
    </div>
  );
}
