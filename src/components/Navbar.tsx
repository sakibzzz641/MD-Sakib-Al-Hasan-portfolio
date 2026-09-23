import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  Sun, 
  Moon, 
  Briefcase, 
  Github, 
  Linkedin, 
  Facebook,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { Tooltip } from './Tooltip';

interface NavbarProps {
  onOpenRecruiterSnapshot: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRecruiterSnapshot,
  theme,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    {
      label: 'About',
      href: '#about',
      id: 'about',
      hoverClass: 'hover:text-cyan-400 dark:hover:text-cyan-300 light:hover:text-cyan-600 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/15 light:hover:bg-cyan-50 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]',
      activeClass: 'text-cyan-400 dark:text-cyan-300 light:text-cyan-600 bg-cyan-500/15 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.2)] font-semibold',
      dotClass: 'bg-cyan-400'
    },
    {
      label: 'Skills',
      href: '#skills',
      id: 'skills',
      hoverClass: 'hover:text-emerald-400 dark:hover:text-emerald-300 light:hover:text-emerald-600 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/15 light:hover:bg-emerald-50 hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]',
      activeClass: 'text-emerald-400 dark:text-emerald-300 light:text-emerald-600 bg-emerald-500/15 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)] font-semibold',
      dotClass: 'bg-emerald-400'
    },
    {
      label: 'Projects',
      href: '#projects',
      id: 'projects',
      hoverClass: 'hover:text-purple-400 dark:hover:text-purple-300 light:hover:text-purple-600 hover:bg-purple-500/10 dark:hover:bg-purple-500/15 light:hover:bg-purple-50 hover:border-purple-500/40 hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]',
      activeClass: 'text-purple-400 dark:text-purple-300 light:text-purple-600 bg-purple-500/15 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.2)] font-semibold',
      dotClass: 'bg-purple-400'
    },
    {
      label: 'Workflow',
      href: '#workflow',
      id: 'workflow',
      hoverClass: 'hover:text-amber-400 dark:hover:text-amber-300 light:hover:text-amber-600 hover:bg-amber-500/10 dark:hover:bg-amber-500/15 light:hover:bg-amber-50 hover:border-amber-500/40 hover:shadow-[0_0_12px_rgba(245,158,11,0.25)]',
      activeClass: 'text-amber-400 dark:text-amber-300 light:text-amber-600 bg-amber-500/15 border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.2)] font-semibold',
      dotClass: 'bg-amber-400'
    },
    {
      label: 'Experience',
      href: '#experience',
      id: 'experience',
      hoverClass: 'hover:text-sky-400 dark:hover:text-sky-300 light:hover:text-sky-600 hover:bg-sky-500/10 dark:hover:bg-sky-500/15 light:hover:bg-sky-50 hover:border-sky-500/40 hover:shadow-[0_0_12px_rgba(14,165,233,0.25)]',
      activeClass: 'text-sky-400 dark:text-sky-300 light:text-sky-600 bg-sky-500/15 border-sky-500/50 shadow-[0_0_10px_rgba(14,165,233,0.2)] font-semibold',
      dotClass: 'bg-sky-400'
    },
    {
      label: 'Education',
      href: '#education',
      id: 'education',
      hoverClass: 'hover:text-teal-400 dark:hover:text-teal-300 light:hover:text-teal-600 hover:bg-teal-500/10 dark:hover:bg-teal-500/15 light:hover:bg-teal-50 hover:border-teal-500/40 hover:shadow-[0_0_12px_rgba(20,184,166,0.25)]',
      activeClass: 'text-teal-400 dark:text-teal-300 light:text-teal-600 bg-teal-500/15 border-teal-500/50 shadow-[0_0_10px_rgba(20,184,166,0.2)] font-semibold',
      dotClass: 'bg-teal-400'
    },
    {
      label: 'Certifications',
      href: '#certifications',
      id: 'certifications',
      hoverClass: 'hover:text-rose-400 dark:hover:text-rose-300 light:hover:text-rose-600 hover:bg-rose-500/10 dark:hover:bg-rose-500/15 light:hover:bg-rose-50 hover:border-rose-500/40 hover:shadow-[0_0_12px_rgba(244,63,94,0.25)]',
      activeClass: 'text-rose-400 dark:text-rose-300 light:text-rose-600 bg-rose-500/15 border-rose-500/50 shadow-[0_0_10px_rgba(244,63,94,0.2)] font-semibold',
      dotClass: 'bg-rose-400'
    },
    {
      label: 'Contact',
      href: '#contact',
      id: 'contact',
      hoverClass: 'hover:text-fuchsia-400 dark:hover:text-fuchsia-300 light:hover:text-fuchsia-600 hover:bg-fuchsia-500/10 dark:hover:bg-fuchsia-500/15 light:hover:bg-fuchsia-50 hover:border-fuchsia-500/40 hover:shadow-[0_0_12px_rgba(217,70,239,0.25)]',
      activeClass: 'text-fuchsia-400 dark:text-fuchsia-300 light:text-fuchsia-600 bg-fuchsia-500/15 border-fuchsia-500/50 shadow-[0_0_10px_rgba(217,70,239,0.2)] font-semibold',
      dotClass: 'bg-fuchsia-400'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'skills', 'projects', 'workflow', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/90 dark:bg-[#0b0f17]/90 light:bg-white/90 backdrop-blur-md border-b border-[#1f293d]/80 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="MD. Sakib Al Hasan Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors uppercase font-mono">
                MD. Sakib Al Hasan
              </span>
              <span className="text-[10px] tracking-tight text-slate-400 dark:text-slate-400 light:text-slate-500">
                Junior Data Scientist · Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? link.activeClass
                      : `border-transparent text-slate-300 dark:text-slate-300 light:text-slate-700 ${link.hoverClass}`
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {isActive && (
                      <span className={`w-1.5 h-1.5 rounded-full ${link.dotClass} animate-pulse`} />
                    )}
                    <span>{link.label}</span>
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Recruiter Snapshot Button */}
            <Tooltip
              content="Recruiter Snapshot"
              subtext="60s summary for hiring teams"
              position="bottom"
            >
              <button
                onClick={onOpenRecruiterSnapshot}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-cyan-400 dark:text-cyan-300 bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-300 hover:bg-cyan-900/40 transition-colors shadow-sm cursor-pointer"
                aria-label="Open Recruiter Snapshot summary"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Recruiter Snapshot</span>
              </button>
            </Tooltip>

            {/* Download CV */}
            <Tooltip
              content="Curriculum Vitae"
              subtext="Download PDF (83 KB)"
              position="bottom"
            >
              <a
                href={profileData.cv.downloadPath}
                download={profileData.cv.fileName}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-md shadow-cyan-600/20 active:scale-95"
                aria-label="Download CV PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </Tooltip>

            {/* Social Icons */}
            <div className="flex items-center gap-1 border-l border-slate-700/60 pl-2 ml-1">
              <Tooltip
                content="GitHub Profile"
                subtext="sakibzzz641 · Repositories"
                position="bottom"
              >
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors rounded-md"
                  aria-label="GitHub Profile (sakibzzz641)"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Tooltip>

              <Tooltip
                content="LinkedIn Profile"
                subtext="sakibzzz641 · Professional network"
                position="bottom"
              >
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-[#0077b5] transition-colors rounded-md"
                  aria-label="LinkedIn Profile (sakibzzz641)"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Tooltip>

              <Tooltip
                content="Facebook Profile"
                subtext="sakibzzz641 · Personal profile"
                position="bottom"
              >
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-[#1877f2] transition-colors rounded-md"
                  aria-label="Facebook Profile (sakibzzz641)"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </Tooltip>

              {/* Theme Toggle */}
              <Tooltip
                content={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                subtext={theme === 'dark' ? 'Light background' : 'Dark slate background'}
                position="bottom"
                align="right"
              >
                <button
                  onClick={onToggleTheme}
                  className="p-1.5 text-slate-400 hover:text-amber-400 transition-colors rounded-md cursor-pointer ml-1"
                  aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-1">
            <Tooltip
              content={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              subtext="Toggle theme"
              position="bottom"
              align="right"
            >
              <button
                onClick={onToggleTheme}
                className="p-2 text-slate-400 hover:text-amber-400 transition-colors rounded-md cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </Tooltip>
            
            <Tooltip
              content={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              subtext="Navigation drawer"
              position="bottom"
              align="right"
            >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white focus:outline-none rounded-md"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#0c121e] border-b border-[#1f293d] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 border-b border-slate-800/80 pb-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRecruiterSnapshot();
              }}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/60"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Snapshot</span>
            </button>
            <a
              href={profileData.cv.downloadPath}
              download={profileData.cv.fileName}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-white bg-cyan-600"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV PDF</span>
            </a>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                    isActive
                      ? link.activeClass
                      : `border-transparent text-slate-300 dark:text-slate-300 light:text-slate-700 ${link.hoverClass}`
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span className={`w-1.5 h-1.5 rounded-full ${link.dotClass} animate-pulse`} />
                    )}
                    <span>{link.label}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center justify-around pt-3 border-t border-slate-800/80">
            <Tooltip position="top" content="GitHub" subtext="sakibzzz641">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </Tooltip>
            <Tooltip position="top" content="LinkedIn" subtext="sakibzzz641">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#0077b5]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </Tooltip>
            <Tooltip position="top" content="Facebook" subtext="sakibzzz641">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#1877f2]"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </Tooltip>
          </div>
        </div>
      )}
    </header>
  );
};
