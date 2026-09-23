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
    <div className="min-h-screen bg-[#0b0f17] dark:bg-[#0b0f17] light:bg-[#f8fafc] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-200">
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

        {/* Mathematics Meets Data Science Bridge */}
        <MathematicsDataScience />

        {/* 8-Stage Data Science Workflow */}
        <Workflow />

        {/* Technical Skills & Coursework */}
        <Skills />

        {/* Featured Case Study & Filterable Projects */}
        <Projects />

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
