import React, { useState } from 'react';
import { 
  workflowStepsData 
} from '../data/workflow';
import { 
  CheckCircle, 
  Wrench, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

export const Workflow: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const currentStep = workflowStepsData[selectedStepIndex];

  return (
    <section id="workflow" className="py-20 border-t border-[#1a2336] relative" aria-label="Data Science Workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Methodology &amp; Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              From Raw Data to Insight
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            A disciplined, 8-stage end-to-end data lifecycle ensuring reproducibility, analytical validity, and concrete business value.
          </p>
        </div>

        {/* 8-Step Interactive Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8" role="tablist" aria-label="Workflow Steps">
          {workflowStepsData.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <button
                key={step.step}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedStepIndex(idx)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-950/70 dark:bg-cyan-950/70 light:bg-cyan-50 border-cyan-500 dark:border-cyan-500 light:border-cyan-600 text-cyan-300 dark:text-cyan-300 light:text-cyan-900 shadow-lg shadow-cyan-900/30 light:shadow-cyan-600/15 light:ring-2 light:ring-cyan-500/40 font-bold scale-[1.02]'
                    : 'bg-[#0e1626]/80 dark:bg-[#0e1626]/80 light:bg-white border-[#1f2d47] dark:border-[#1f2d47] light:border-slate-300 text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-slate-900 hover:border-slate-600 dark:hover:border-slate-600 light:hover:border-cyan-500 light:hover:bg-slate-50'
                }`}
              >
                <span className={`font-mono text-xs font-bold ${isSelected ? 'text-cyan-400 dark:text-cyan-400 light:text-cyan-700' : 'text-slate-500 dark:text-slate-500 light:text-slate-500'}`}>
                  {step.step}
                </span>
                <span className={`text-xs font-semibold mt-1 ${isSelected ? 'text-slate-100 dark:text-slate-100 light:text-slate-900' : 'text-slate-400 dark:text-slate-400 light:text-slate-700'}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Presentation */}
        <div className="rounded-2xl bg-[#0e1626] border border-[#1f2d47] p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Description & Actions */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono text-sm font-bold">
                  STEP {currentStep.step}
                </span>
                <h3 className="text-2xl font-bold text-slate-100">
                  {currentStep.title}
                </h3>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              <div>
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                  Core Implementation Actions:
                </h4>
                <div className="space-y-2">
                  {currentStep.actions.map((action, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Tools & Ecosystem */}
            <div className="lg:col-span-4 bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Tools &amp; Techniques</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentStep.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-800/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Stage {selectedStepIndex + 1} of 8</span>
                <button
                  onClick={() => setSelectedStepIndex((prev) => (prev + 1) % workflowStepsData.length)}
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
