import React from 'react';
import { 
  MapPin, 
  Target, 
  GraduationCap, 
  Clock, 
  Award, 
  CheckCircle,
  ExternalLink,
  BrainCircuit,
  BookOpen
} from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-[#1a2336] relative" aria-label="About MD. Sakib Al Hasan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#0e1626]/80 border border-[#1f2d47] p-6 sm:p-8 space-y-5 shadow-lg">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {profileData.aboutParagraphs[0]}
              </p>
              
              <p className="text-base text-slate-300 leading-relaxed">
                {profileData.aboutParagraphs[1]}
              </p>

              {/* Core Tenets Checklist */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Quantitative reasoning grounded in pure & applied math</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Robust data cleaning & missing value strategies</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>PCA & multi-algorithm unsupervised benchmarking</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Translating algorithmic metrics into business value</span>
                </div>
              </div>

              {/* Verified Ostad Badge Callout */}
              <div className="mt-4 p-4 rounded-xl bg-cyan-950/30 dark:bg-cyan-950/30 light:bg-cyan-50/80 border border-cyan-800/40 dark:border-cyan-800/40 light:border-cyan-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-900/40 dark:bg-cyan-900/40 light:bg-cyan-100 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 border border-transparent light:border-cyan-200">
                    <Award className="w-5 h-5 text-cyan-400 light:text-cyan-700" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                      Ostad Certified Data Scientist &amp; ML Practitioner
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                      Completed Sept 2026 · Batch 56 · Assignment 100% · Quiz 97.3%
                    </div>
                  </div>
                </div>
                <a
                  href={socialLinks.ostadCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-cyan-300 dark:text-cyan-300 light:text-cyan-900 hover:text-cyan-200 dark:hover:text-cyan-200 light:hover:text-cyan-950 bg-cyan-900/50 dark:bg-cyan-900/50 light:bg-cyan-100 hover:bg-cyan-900/80 dark:hover:bg-cyan-900/80 light:hover:bg-cyan-200 border border-transparent light:border-cyan-300 transition-colors shrink-0 shadow-xs cursor-pointer"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400 light:text-cyan-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Professional Snapshot Card (Structured Recruiter Facts & Photo) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-[#0e1626]/90 border border-[#1f2d47] p-6 shadow-xl">
              
              {/* Photo & Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-5 border-b border-slate-800/80 mb-5">
                <div className="relative group shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 shadow-xl shadow-cyan-500/20 overflow-hidden">
                    <img
                      src={profileData.photo}
                      alt={`${profileData.name} - Junior Data Scientist`}
                      className="w-full h-full rounded-xl object-cover object-top bg-slate-900 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== profileData.photoGithubRaw) {
                          target.src = profileData.photoGithubRaw;
                        }
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] font-mono font-bold text-white border border-[#0e1626] shadow-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Active</span>
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-base font-bold text-slate-100 font-mono tracking-tight">
                      {profileData.name}
                    </h3>
                  </div>
                  <div className="text-xs font-semibold text-cyan-400 font-mono">
                    {profileData.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-snug pt-1">
                    Govt. Shaheed Asad College · Mathematics (4th Year) · Ostad Certified ML Specialist
                  </p>
                  <div className="pt-1.5 flex items-center justify-center sm:justify-start">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      ● Open to Junior / Analyst Roles
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-3 mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span>Key Attributes &amp; Focus</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 shrink-0 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                    <MapPin className="w-4 h-4 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase font-medium">Location</div>
                    <div className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">{profileData.snapshot.location}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">Chinishpur, Narsingdi Sadar, Bangladesh</div>
                  </div>
                </div>

                {/* Focus */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 shrink-0 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                    <BrainCircuit className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase font-medium">Domain Focus</div>
                    <div className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">{profileData.snapshot.focus}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">EDA, Feature Engineering, Machine Learning, Modeling</div>
                  </div>
                </div>

                {/* Academic Background */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 shrink-0 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                    <GraduationCap className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase font-medium">Academic Degree</div>
                    <div className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">{profileData.snapshot.academicBackground}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">Govt. Shaheed Asad College, Shibpur</div>
                  </div>
                </div>

                {/* Current Status */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 shrink-0 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase font-medium">Academic Status</div>
                    <div className="text-sm font-semibold text-amber-300 dark:text-amber-300 light:text-amber-800">{profileData.snapshot.currentStatus}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">Session 2021–2022 · Expected Completion: 2027</div>
                  </div>
                </div>

                {/* Career Target */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                  <div className="p-2 rounded-lg bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-100 text-cyan-400 dark:text-cyan-400 light:text-cyan-800 shrink-0 border border-cyan-800/40 dark:border-cyan-800/40 light:border-cyan-300">
                    <Target className="w-4 h-4 text-cyan-400 light:text-cyan-700" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-800 uppercase font-semibold">Career Target</div>
                    <div className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">{profileData.snapshot.targetRole}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">Ready for full-time junior roles &amp; analyst teams</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
