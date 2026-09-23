import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  ArrowUpRight 
} from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-[#1a2336] bg-[#090d15]/50 relative" aria-label="Work Experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Professional Background
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Experience &amp; Leadership
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
          </div>

          <div className="mt-4 md:mt-0 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 font-mono max-w-md">
            <span className="text-amber-400 font-semibold">Note for Recruiters: </span>
            Factual teaching experience highlighting disciplined communication and time management alongside ongoing academic degree.
          </div>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl bg-[#0e1626] border border-[#1f2d47] p-6 sm:p-8 shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono text-xs font-bold">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      Active Role
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {exp.role}
                  </h3>

                  <div className="text-base font-semibold text-cyan-300 mt-1">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Responsibilities &amp; Scope:
                </h4>
                <div className="space-y-2">
                  {exp.description.map((desc, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transferable Skills Callout Grid */}
              <div className="pt-5 border-t border-slate-800/80">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Transferable Data Science &amp; Workplace Capabilities:</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-mono text-xs">
                  {exp.transferableCapabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-center flex items-center justify-center"
                    >
                      {cap}
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
