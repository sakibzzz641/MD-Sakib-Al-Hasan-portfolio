import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle, 
  Calendar, 
  FileText, 
  Download, 
  ShieldCheck, 
  FileCheck,
  Sparkles
} from 'lucide-react';
import { certificationsData } from '../data/certifications';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 border-t border-[#1a2336] bg-[#090d15]/50 relative" aria-label="Certifications & Credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Verified Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Certifications
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
          </div>

          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            Formal technical certifications issued by recognized training institutes and government departments.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-[#0e1626] border border-[#1f2d47] p-6 sm:p-8 shadow-xl hover:border-slate-600 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col items-end text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {cert.date}
                    </span>
                    {cert.grade && (
                      <span className="mt-1 px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                        {cert.grade}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                  <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                  {cert.issuerBadge && (
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">
                      {cert.issuerBadge}
                    </span>
                  )}
                  {cert.credentialId && (
                    <span className="text-slate-500 text-[11px]">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Score breakdown if available (Ostad 100%, 97.3%, 94.7%) */}
                {cert.assessments && cert.assessments.length > 0 && (
                  <div className="mb-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Assessment Performance:</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center font-mono">
                      {cert.assessments.map((a) => (
                        <div key={a.name} className="p-2 rounded bg-slate-950 border border-slate-800">
                          <div className="text-[10px] text-slate-500">{a.name}</div>
                          <div className="text-xs sm:text-sm font-bold text-emerald-400">{a.score}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 mb-5">
                  {cert.skillsCovered.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons (Only active ones rendered, handles empty gracefully) */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-md shadow-cyan-600/20"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Physical Credential on File (ID: {cert.credentialId})</span>
                  </div>
                )}

                {cert.certificatePdf && (
                  <a
                    href={cert.certificatePdf}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
