import React from 'react';
import { ArrowUp, Github, Linkedin, Facebook, Heart, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { Tooltip } from './Tooltip';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1a2336] bg-[#070a10] py-12 text-slate-400 text-xs font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Rights */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-sm font-bold text-slate-200">
              {profileData.name}
            </div>
            <p className="text-slate-500">
              {profileData.title} · Chinishpur, Narsingdi, Bangladesh
            </p>
            <p className="text-[11px] text-slate-600">
              © {new Date().getFullYear()} MD. Sakib Al Hasan. All rights reserved.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#workflow" className="hover:text-cyan-400 transition-colors">Workflow</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Tooltip
                position="top"
                content="GitHub Profile"
                subtext="sakibzzz641 · ML & Code"
              >
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile (sakibzzz641)"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Tooltip>

              <Tooltip
                position="top"
                content="LinkedIn Profile"
                subtext="in/sakibzzz641 · Connect"
              >
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-[#0077b5] transition-colors"
                  aria-label="LinkedIn Profile (sakibzzz641)"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Tooltip>

              <Tooltip
                position="top"
                content="Facebook Profile"
                subtext="sakibzzz641 · Personal profile"
              >
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-[#1877f2] transition-colors"
                  aria-label="Facebook Profile (sakibzzz641)"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </Tooltip>
            </div>

            <Tooltip
              position="top"
              align="right"
              content="Back to Top"
              subtext="Scroll to header"
            >
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-950 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors cursor-pointer"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </Tooltip>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-2">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-500" />
            <span>Built with React 19, TypeScript, Tailwind CSS &amp; Vite</span>
          </div>
          <span>Deployable to Lovable, GitHub Pages, Vercel, and Netlify</span>
        </div>
      </div>
    </footer>
  );
};
