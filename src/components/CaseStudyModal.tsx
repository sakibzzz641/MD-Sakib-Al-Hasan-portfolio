import React, { useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Layers, 
  Cpu, 
  BarChart, 
  FileText, 
  Image as ImageIcon,
  FolderOpen
} from 'lucide-react';
import { Project } from '../types';
import { ImageGalleryLightbox } from './ImageGalleryLightbox';
import { ProjectFiles } from './ProjectFiles';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'study' | 'pipeline' | 'visuals' | 'files'>('study');
  const cs = project.caseStudy;

  if (!cs) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="bg-[#0c121e] border border-[#1f2d47] rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-[#1f2d47] bg-[#090d15] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
              <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                CASE STUDY
              </span>
              <span className="text-slate-400">{project.category}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Date: {project.date}</span>
            </div>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-slate-100">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Repo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="px-6 border-b border-[#1f2d47] bg-[#0c121e] flex gap-2 sm:gap-6 overflow-x-auto text-xs font-semibold font-mono">
          <button
            onClick={() => setActiveTab('study')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-all duration-200 cursor-pointer whitespace-nowrap px-1 ${
              activeTab === 'study'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-cyan-400 hover:border-cyan-400/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Full Case Study</span>
          </button>

          <button
            onClick={() => setActiveTab('pipeline')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-all duration-200 cursor-pointer whitespace-nowrap px-1 ${
              activeTab === 'pipeline'
                ? 'border-purple-400 text-purple-300'
                : 'border-transparent text-slate-400 hover:text-purple-400 hover:border-purple-400/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>10-Stage Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('visuals')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-all duration-200 cursor-pointer whitespace-nowrap px-1 ${
              activeTab === 'visuals'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-emerald-400 hover:border-emerald-400/60'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Charts &amp; Visuals ({project.images.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('files')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-all duration-200 cursor-pointer whitespace-nowrap px-1 ${
              activeTab === 'files'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-amber-400 hover:border-amber-400/60'
            }`}
          >
            <FolderOpen className="w-4 h-4" />
            <span>Resources &amp; Files ({project.files.length})</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-8 text-slate-300 text-sm leading-relaxed">
          
          {activeTab === 'study' && (
            <div className="space-y-8 max-w-4xl mx-auto">
              
              {/* Executive Summary & Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-slate-400 text-[11px] font-mono">{m.label}</div>
                    <div className="text-xl font-bold font-mono text-cyan-300 mt-1">{m.value}</div>
                    {m.description && <div className="text-[10px] text-slate-500 mt-0.5">{m.description}</div>}
                  </div>
                ))}
              </div>

              {/* 1. Problem & Dataset */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <span className="text-cyan-400 font-mono text-sm">01.</span>
                  <span>Problem Statement &amp; Dataset Scope</span>
                </h3>
                <p>{cs.problem}</p>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs text-slate-300">
                  <strong className="text-cyan-400">Dataset Overview: </strong>{cs.dataset}
                </div>
              </div>

              {/* 2. Data Cleaning & Feature Engineering */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <span className="text-cyan-400 font-mono text-sm">02.</span>
                  <span>Data Cleaning &amp; Feature Engineering</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase">Data Cleaning Protocol:</span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {cs.dataCleaning.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="font-mono text-xs font-bold text-emerald-400 uppercase">Feature Engineering &amp; Scaling:</span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {cs.featureEngineering.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Dimensionality Reduction & PCA */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <span className="text-cyan-400 font-mono text-sm">03.</span>
                  <span>Dimensionality Reduction (PCA)</span>
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {cs.dimensionalityReduction.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Model Benchmarking Table */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <span className="text-cyan-400 font-mono text-sm">04.</span>
                  <span>Clustering Algorithm Benchmark</span>
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-900 text-slate-300 uppercase text-[10px] border-b border-slate-800">
                      <tr>
                        <th className="p-3">Algorithm</th>
                        <th className="p-3">Hyperparameters</th>
                        <th className="p-3">Silhouette Score</th>
                        <th className="p-3">Key Strengths</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {cs.modelComparison.map((row, idx) => (
                        <tr key={idx} className={idx === 0 ? 'bg-cyan-950/20' : 'bg-slate-950/40'}>
                          <td className="p-3 font-bold text-slate-200 flex items-center gap-1.5">
                            {idx === 0 && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                            <span>{row.algorithm}</span>
                          </td>
                          <td className="p-3 text-cyan-300">{row.kOrEps}</td>
                          <td className="p-3 font-bold text-emerald-400">{row.silhouetteScore}</td>
                          <td className="p-3 text-slate-300 font-sans">{row.strengths}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. Business Implications & Strategic Recommendations */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <span className="text-cyan-400 font-mono text-sm">05.</span>
                  <span>Actionable Business Recommendations</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {cs.businessImplications.map((imp, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                      <div className="font-mono text-cyan-400 font-bold">Strategy 0{idx + 1}</div>
                      <p className="text-slate-200">{imp}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Limitations & Next Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2 text-xs">
                  <div className="font-mono text-amber-400 font-bold flex items-center gap-1.5 uppercase">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Project Limitations</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-300">
                    {cs.limitations.map((lim, i) => (
                      <li key={i}>• {lim}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2 text-xs">
                  <div className="font-mono text-sky-400 font-bold flex items-center gap-1.5 uppercase">
                    <TrendingUp className="w-4 h-4" />
                    <span>Future Engineering Iterations</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-300">
                    {cs.nextSteps.map((step, i) => (
                      <li key={i}>• {step}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'pipeline' && (
            <div className="max-w-2xl mx-auto py-4 space-y-3">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-100">
                  Data Processing &amp; Modeling Pipeline
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Sequential execution graph from raw data ingestion to commercial interpretation
                </p>
              </div>

              {cs.workflowPipeline.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-slate-200 text-sm">{step}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Stage 0{idx + 1}</span>
                  </div>
                  {idx < cs.workflowPipeline.length - 1 && (
                    <div className="w-0.5 h-5 bg-gradient-to-b from-cyan-500 to-blue-500 my-1" />
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'visuals' && (
            <div className="space-y-4">
              <div className="text-center max-w-lg mx-auto mb-4">
                <h3 className="text-base font-bold text-slate-100">Project Visualizations &amp; Charts</h3>
                <p className="text-xs text-slate-400">
                  Interactive lightbox gallery of verified PCA explained variance, silhouette benchmarking, and cluster scatter projections.
                </p>
              </div>
              <ImageGalleryLightbox images={project.images} projectTitle={project.title} />
            </div>
          )}

          {activeTab === 'files' && (
            <div className="space-y-4">
              <div className="text-center max-w-lg mx-auto mb-4">
                <h3 className="text-base font-bold text-slate-100">Project Files &amp; Reproducibility</h3>
                <p className="text-xs text-slate-400">
                  Jupyter notebooks, dependencies, and environment specifications hosted on GitHub.
                </p>
              </div>
              <ProjectFiles files={project.files} />
            </div>
          )}

        </div>

        {/* Modal Footer with Direct Actions */}
        <div className="p-4 sm:p-5 border-t border-[#1f2d47] bg-[#090d15] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 font-mono">
            Repository: <span className="text-slate-300">sakibzzz641/Customer-Segmentation-Kmeans-dbscan-clustering</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-md shadow-cyan-600/20"
              >
                <Github className="w-4 h-4" />
                <span>Open GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
