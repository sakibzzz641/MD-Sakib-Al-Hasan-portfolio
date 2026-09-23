import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Github, 
  Linkedin, 
  Database, 
  Cpu, 
  Binary, 
  CheckCircle2, 
  FileText
} from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

interface HeroProps {
  onOpenRecruiterSnapshot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterSnapshot }) => {
  const [activeTab, setActiveTab] = useState<'clustering' | 'regression'>('clustering');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Cluster data points for visualization
  const clusterPoints = [
    { x: 75, y: 85, c: 0, val: '$1,240 / 12 txn' },
    { x: 95, y: 110, c: 0, val: '$1,890 / 18 txn' },
    { x: 120, y: 70, c: 0, val: '$950 / 9 txn' },
    { x: 140, y: 100, c: 0, val: '$2,100 / 22 txn' },
    { x: 110, y: 135, c: 0, val: '$1,420 / 15 txn' },
    { x: 80, y: 125, c: 0, val: '$1,100 / 11 txn' },
    { x: 155, y: 85, c: 0, val: '$2,450 / 25 txn' },
    { x: 130, y: 120, c: 0, val: '$1,650 / 16 txn' },
    
    { x: 260, y: 200, c: 1, val: 'Cash Adv: $4,200' },
    { x: 285, y: 175, c: 1, val: 'Cash Adv: $5,100' },
    { x: 310, y: 220, c: 1, val: 'Cash Adv: $6,800' },
    { x: 270, y: 240, c: 1, val: 'Cash Adv: $4,900' },
    { x: 330, y: 190, c: 1, val: 'Cash Adv: $7,200' },
    { x: 295, y: 215, c: 1, val: 'Cash Adv: $5,600' },
    { x: 345, y: 235, c: 1, val: 'Cash Adv: $8,100' },
    { x: 250, y: 225, c: 1, val: 'Cash Adv: $3,900' }
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" aria-label="Hero Introduction">
      {/* Background radial glow & math grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{profileData.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-[1.12]">
              Turning Data Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Meaningful Insights.
              </span>
            </h1>

            {/* Subheadline & Description */}
            <div className="space-y-3 max-w-2xl text-slate-300 dark:text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                {profileData.subheadline}
              </p>
              <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
                {profileData.summary}
              </p>
            </div>

            {/* Quick Skill Tags Pill Row */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-cyan-300">
                Python
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-sky-300">
                SQL
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-indigo-300">
                Data Analysis
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-emerald-300">
                Machine Learning
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-blue-300">
                Data Visualization
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-amber-300">
                Mathematics Background
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.cv.downloadPath}
                download={profileData.cv.fileName}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 hover:bg-slate-700/60 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <button
                onClick={onOpenRecruiterSnapshot}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-900/40 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Recruiter Snapshot</span>
              </button>
            </div>

            {/* Social Links & Trust indicator */}
            <div className="flex items-center gap-4 pt-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="font-mono text-slate-500">Profiles:</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="underline-offset-4 hover:underline">github.com/sakibzzz641</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-[#0077b5] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="underline-offset-4 hover:underline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Animated Data Intelligence Visualization */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#0e1626]/90 border border-[#1f2d47] p-5 shadow-2xl backdrop-blur-sm overflow-hidden">
              
              {/* Header bar of the visualizer card */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    pca_clustering_eval.py
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900/80 rounded-md p-0.5 border border-slate-800">
                  <button
                    onClick={() => setActiveTab('clustering')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                      activeTab === 'clustering'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    PCA k=2
                  </button>
                  <button
                    onClick={() => setActiveTab('regression')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                      activeTab === 'regression'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    Residuals
                  </button>
                </div>
              </div>

              {/* Statistical Notation Overlay Chips */}
              <div className="grid grid-cols-3 gap-2 mb-3 font-mono text-[11px]">
                <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                  <div className="text-slate-500 text-[10px]">Silhouette (k=2)</div>
                  <div className="text-cyan-400 font-bold">s = 0.2600</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                  <div className="text-slate-500 text-[10px]">PCA Cum. Var</div>
                  <div className="text-emerald-400 font-bold">R² = 95.0%</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                  <div className="text-slate-500 text-[10px]">Sample n</div>
                  <div className="text-indigo-400 font-bold">N = 8,950</div>
                </div>
              </div>

              {/* Interactive Vector Canvas / Chart Area */}
              <div className="relative w-full aspect-[4/3] bg-[#070b12] rounded-xl border border-slate-800/90 p-2 overflow-hidden">
                <svg viewBox="0 0 400 300" className="w-full h-full select-none">
                  {/* Subtle coordinate grid lines */}
                  <g stroke="#1a2538" strokeWidth="0.8" strokeDasharray="3 3">
                    <line x1="40" y1="40" x2="360" y2="40" />
                    <line x1="40" y1="100" x2="360" y2="100" />
                    <line x1="40" y1="160" x2="360" y2="160" />
                    <line x1="40" y1="220" x2="360" y2="220" />
                    <line x1="40" y1="260" x2="360" y2="260" />

                    <line x1="100" y1="30" x2="100" y2="260" />
                    <line x1="180" y1="30" x2="180" y2="260" />
                    <line x1="260" y1="30" x2="260" y2="260" />
                    <line x1="340" y1="30" x2="340" y2="260" />
                  </g>

                  {/* Math Formula Background Watermark */}
                  <g fill="#1e293b" opacity="0.35" className="font-mono text-[9px]">
                    <text x="50" y="55">E[X] = Σ x·P(X=x)</text>
                    <text x="250" y="55">d(p,q) = √Σ(pi - qi)²</text>
                    <text x="50" y="250">argmin Σ ||xi - μk||²</text>
                    <text x="250" y="250">s(i) = (b(i) - a(i)) / max</text>
                  </g>

                  {activeTab === 'clustering' ? (
                    <>
                      {/* Cluster 0 Halo (Purchasers) */}
                      <ellipse cx="115" cy="105" rx="65" ry="45" fill="rgba(6, 182, 212, 0.12)" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 2" />
                      {/* Cluster 1 Halo (Cash Advance) */}
                      <ellipse cx="295" cy="210" rx="70" ry="50" fill="rgba(244, 63, 94, 0.12)" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4 2" />

                      {/* Cluster Separation Boundary */}
                      <path d="M 210 30 Q 190 140, 215 270" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.7" />

                      {/* Centroids */}
                      <g stroke="#ffffff" strokeWidth="1.5">
                        <polygon points="115,95 122,110 108,110" fill="#06b6d4" />
                        <polygon points="295,200 302,215 288,215" fill="#f43f5e" />
                      </g>

                      {/* Data Points */}
                      {clusterPoints.map((pt, i) => (
                        <circle
                          key={i}
                          cx={pt.x}
                          cy={pt.y}
                          r={hoveredPoint === i ? 6 : 4}
                          fill={pt.c === 0 ? '#06b6d4' : '#f43f5e'}
                          className="cursor-pointer transition-all duration-150"
                          onMouseEnter={() => setHoveredPoint(i)}
                          onMouseLeave={() => setHoveredPoint(null)}
                        />
                      ))}

                      {/* Interactive Tooltip on hover */}
                      {hoveredPoint !== null && (
                        <g>
                          <rect
                            x={Math.min(clusterPoints[hoveredPoint].x + 10, 260)}
                            y={Math.max(clusterPoints[hoveredPoint].y - 25, 35)}
                            width="110"
                            height="24"
                            rx="4"
                            fill="#0f172a"
                            stroke="#38bdf8"
                            strokeWidth="1"
                          />
                          <text
                            x={Math.min(clusterPoints[hoveredPoint].x + 65, 315)}
                            y={Math.max(clusterPoints[hoveredPoint].y - 9, 51)}
                            fill="#f8fafc"
                            fontSize="9"
                            fontFamily="JetBrains Mono, monospace"
                            textAnchor="middle"
                          >
                            {clusterPoints[hoveredPoint].val}
                          </text>
                        </g>
                      )}
                    </>
                  ) : (
                    <>
                      {/* Regression View */}
                      <line x1="50" y1="240" x2="350" y2="60" stroke="#3b82f6" strokeWidth="2.5" />
                      {/* Confidence band */}
                      <polygon points="50,225 350,45 350,75 50,255" fill="rgba(59, 130, 246, 0.12)" />

                      {/* Residual lines and points */}
                      {[
                        { x: 90, y: 200, py: 216 },
                        { x: 130, y: 175, py: 192 },
                        { x: 170, y: 180, py: 168 },
                        { x: 210, y: 135, py: 144 },
                        { x: 250, y: 110, py: 120 },
                        { x: 290, y: 115, py: 96 },
                        { x: 330, y: 65, py: 72 }
                      ].map((d, i) => (
                        <g key={i}>
                          <line x1={d.x} y1={d.y} x2={d.x} y2={d.py} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
                          <circle cx={d.x} cy={d.y} r="4.5" fill="#38bdf8" />
                        </g>
                      ))}
                    </>
                  )}

                  {/* Axes Labels */}
                  <text x="350" y="275" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono" textAnchor="end">PC1 (Purchase Activity) →</text>
                  <text x="25" y="45" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono" transform="rotate(-90 25 45)" textAnchor="end">PC2 (Cash Advance) →</text>
                </svg>
              </div>

              {/* Live Status Footer */}
              <div className="flex items-center justify-between pt-3 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pipeline: Scaled · PCA · K-Means Evaluated</span>
                </div>
                <span className="text-cyan-400">Status: Validated</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
