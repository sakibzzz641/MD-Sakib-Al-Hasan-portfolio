import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  Cpu, 
  PieChart, 
  Terminal, 
  FileSpreadsheet, 
  Check, 
  BookOpen, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { skillCategoriesData } from '../data/skills';
import { courseworkData } from '../data/coursework';

export const Skills: React.FC = () => {
  const [showCoursework, setShowCoursework] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-teal-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-[#1a2336] bg-[#090d15]/60 relative" aria-label="Technical Skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Core Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="text-xs text-slate-400 font-mono">
              Evaluated through hands-on project implementations
            </span>
            <button
              onClick={() => setShowCoursework(!showCoursework)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 hover:bg-cyan-900/60 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>{showCoursework ? 'Hide Coursework' : 'View Verified Coursework'}</span>
              {showCoursework ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Verified Coursework Breakdown Panel (Collapsible) */}
        {showCoursework && (
          <div className="mb-12 p-6 rounded-2xl bg-[#0e1626] border border-cyan-800/60 shadow-xl space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Structured Coursework Syllabus (Ostad &amp; Academic Training)</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">10 Modules Completed</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {courseworkData.map((course, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <span className="font-mono text-[10px] text-cyan-400">0{i+1}.</span>
                    <span>{course.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.focus.map((f, j) => (
                      <span key={j} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Grid by Category (No fake percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategoriesData.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-[#0e1626]/80 border border-[#1f2d47] p-6 shadow-lg hover:border-slate-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-snug line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item p-2 rounded-lg bg-slate-900/40 hover:bg-slate-900/90 border border-transparent hover:border-slate-800 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.7)] shrink-0 ${skill.highlight ? 'ring-2 ring-cyan-400/30' : ''}`} />
                          <span className="group-hover/item:text-cyan-300 transition-colors">{skill.name}</span>
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                            Core
                          </span>
                        )}
                        {!skill.highlight && skill.level === 'Basic' && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/80">
                            Basic
                          </span>
                        )}
                      </div>
                      {skill.note && (
                        <p className="text-[11px] text-slate-400 mt-1 pl-3 leading-tight">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
