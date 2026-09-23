import React from 'react';
import { Users, Layers, TrendingUp, GitMerge, Info } from 'lucide-react';
import { profileData } from '../data/profile';

export const HeroMetrics: React.FC = () => {
  const metricIcons = [
    <Users className="w-5 h-5 text-cyan-400" />,
    <Layers className="w-5 h-5 text-sky-400" />,
    <TrendingUp className="w-5 h-5 text-emerald-400" />,
    <GitMerge className="w-5 h-5 text-indigo-400" />
  ];

  return (
    <section className="relative z-10 -mt-4 pb-12" aria-label="Selected Project Metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Context Header */}
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center gap-1.5 font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className="font-semibold text-slate-300 tracking-wider uppercase">Selected Project Metrics</span>
            <span className="text-slate-500 hidden sm:inline">(from Customer Segmentation & Clustering Project)</span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono hidden md:inline">
            Verified Kaggle / Banking Dataset Work
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profileData.selectedProjectMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="group relative rounded-xl bg-[#0e1626]/80 border border-[#1f2d47] p-5 shadow-lg hover:border-cyan-500/50 hover:bg-[#121c30] transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  {metricIcons[idx % metricIcons.length]}
                </div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                  METRIC 0{idx + 1}
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                {metric.value}
              </div>

              <div className="text-xs font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>

              <p className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
