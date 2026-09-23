import React from 'react';
import { 
  ArrowDown, 
  Binary, 
  Sigma, 
  Calculator, 
  BarChart2, 
  Cpu, 
  GitBranch, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export const MathematicsDataScience: React.FC = () => {
  const mathFoundations = [
    {
      title: "Statistics & Inference",
      mathConcepts: "Probability distributions, hypothesis tests, variance & confidence intervals",
      dsApplication: "Powers statistical significance testing, sample validation, and confidence bounds in modeling"
    },
    {
      title: "Linear Algebra & Matrices",
      mathConcepts: "Eigenvalues, eigenvectors, vector dot products & matrix decomposition",
      dsApplication: "Underpins Principal Component Analysis (PCA), distance metrics, and vectorized data manipulation"
    },
    {
      title: "Calculus & Optimization",
      mathConcepts: "Derivatives, gradients, chain rule & cost function minimization",
      dsApplication: "Guides loss function convergence, gradient descent, and distance-based clustering algorithms"
    },
    {
      title: "Discrete Math & Logic",
      mathConcepts: "Set theory, combinatorial logic & relational algebra",
      dsApplication: "Strengthens SQL queries, complex table joins, feature space partitioning, and condition trees"
    }
  ];

  return (
    <section className="py-20 border-t border-[#1a2336] bg-[#090d15]/50 relative" aria-label="Mathematics Meets Data Science">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Quantitative Rigor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Mathematics Meets Data Science
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A B.Sc. in Mathematics provides the foundational quantitative abstraction, 
            deductive reasoning, and probabilistic grounding required to master modern machine learning algorithms.
          </p>
        </div>

        {/* Visual Bridge Diagram */}
        <div className="rounded-2xl bg-[#0e1626] border border-[#1f2d47] p-6 sm:p-10 shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
            
            {/* Box 1: Mathematics */}
            <div className="md:col-span-5 rounded-xl bg-slate-900/90 border border-indigo-500/30 p-6 relative group hover:border-indigo-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  Academic Foundation
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  B.Sc. Curriculum
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 font-mono tracking-wide mb-4">
                MATHEMATICS
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="font-medium text-slate-200">Probability &amp; Mathematical Statistics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="font-medium text-slate-200">Linear Algebra &amp; Vector Spaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="font-medium text-slate-200">Quantitative Deductive Reasoning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="font-medium text-slate-200">Analytical &amp; Algorithmic Thinking</span>
                </li>
              </ul>
            </div>

            {/* Connecting Bridge Arrow */}
            <div className="md:col-span-1 flex flex-col items-center justify-center py-2">
              <div className="p-3 rounded-full bg-cyan-950/80 border border-cyan-700/80 text-cyan-400 shadow-md">
                <ArrowDown className="w-5 h-5 md:-rotate-90" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 mt-2 text-center uppercase tracking-tighter hidden md:block">
                Applies To
              </span>
            </div>

            {/* Box 2: Data Science */}
            <div className="md:col-span-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 p-6 relative group hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  Applied Engineering
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Practical Practice
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 font-mono tracking-wide mb-4">
                DATA SCIENCE
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="font-medium text-slate-200">Exploratory Data Analysis (EDA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="font-medium text-slate-200">Feature Engineering &amp; PCA Reduction</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="font-medium text-slate-200">Clustering &amp; Supervised Classification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="font-medium text-slate-200">Rigorous Model Validation &amp; Metrics</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Breakdown Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mathFoundations.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-[#0e1626]/70 border border-[#1f2d47] hover:border-slate-600 transition-all space-y-3"
            >
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                {item.title}
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-tighter">
                  Math Principle
                </div>
                <div className="text-xs text-slate-200 mt-0.5 leading-snug">
                  {item.mathConcepts}
                </div>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-tighter">
                  Data Science Impact
                </div>
                <div className="text-xs text-slate-300 mt-0.5 leading-snug">
                  {item.dsApplication}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
