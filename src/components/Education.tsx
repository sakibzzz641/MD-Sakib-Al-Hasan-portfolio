import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-[#1a2336] relative" aria-label="Academic Education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Academic Foundations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Education
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
          </div>

          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            Strong scientific and quantitative schooling establishing continuous mathematical rigor and analytical discipline.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className={`rounded-2xl border p-6 sm:p-8 shadow-xl transition-all ${
                idx === 0
                  ? 'bg-[#0e1626] border-cyan-800/70 hover:border-cyan-500'
                  : 'bg-[#0e1626]/70 border-[#1f2d47] hover:border-slate-600'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase bg-slate-900 text-cyan-400 border border-slate-700">
                      {edu.status}
                    </span>
                    {edu.session && (
                      <span className="text-xs font-mono text-slate-400">
                        Session: {edu.session}
                      </span>
                    )}
                    {edu.gpa && (
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {edu.degree}
                  </h3>

                  <div className="text-base font-semibold text-cyan-300">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-rose-400" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Education details / bullet points */}
              {edu.details && edu.details.length > 0 && (
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
