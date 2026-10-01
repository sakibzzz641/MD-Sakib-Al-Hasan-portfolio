import React, { useState, useEffect, useMemo } from 'react';
import {
  Clock,
  CheckCircle2,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Copy,
  Check,
  ExternalLink,
  FileText,
  Code2,
  Layers,
  Sparkles,
  Filter,
  ArrowRight,
  BarChart3,
  Database,
  Cpu,
  HelpCircle,
  Lightbulb,
  Github
} from 'lucide-react';
import { projectTimelinesData, getProjectTimeline } from '../data/projectTimelines';
import { ProjectMilestone, TimelinePhase } from '../types';

interface ProjectTimelineProps {
  onOpenCaseStudy?: (projectId: string) => void;
  initialProjectId?: string;
}

export const ProjectTimeline: React.FC<ProjectTimelineProps> = ({
  onOpenCaseStudy,
  initialProjectId = 'customer-segmentation'
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(initialProjectId);
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<string>('all');
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [isTourPlaying, setIsTourPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<'visual' | 'matrix'>('visual');

  // Sync if initialProjectId changes
  useEffect(() => {
    if (initialProjectId) {
      setSelectedProjectId(initialProjectId);
      setSelectedPhaseFilter('all');
    }
  }, [initialProjectId]);

  const currentTimeline = useMemo(() => {
    return getProjectTimeline(selectedProjectId) || projectTimelinesData[0];
  }, [selectedProjectId]);

  // Filtered milestones based on phase filter
  const displayedMilestones = useMemo(() => {
    if (selectedPhaseFilter === 'all') {
      return currentTimeline.milestones;
    }
    return currentTimeline.milestones.filter((m) => m.phaseId === selectedPhaseFilter);
  }, [currentTimeline, selectedPhaseFilter]);

  const [activeMilestoneId, setActiveMilestoneId] = useState<string>(
    currentTimeline.milestones[0]?.id || ''
  );

  // Update active milestone when project or filter changes
  useEffect(() => {
    if (displayedMilestones.length > 0) {
      const exists = displayedMilestones.some((m) => m.id === activeMilestoneId);
      if (!exists) {
        setActiveMilestoneId(displayedMilestones[0].id);
      }
    }
  }, [displayedMilestones, activeMilestoneId]);

  // Current active milestone object
  const activeMilestone: ProjectMilestone | undefined = useMemo(() => {
    return currentTimeline.milestones.find((m) => m.id === activeMilestoneId) || currentTimeline.milestones[0];
  }, [currentTimeline, activeMilestoneId]);

  // Milestone navigation index
  const activeIndex = useMemo(() => {
    return displayedMilestones.findIndex((m) => m.id === activeMilestone?.id);
  }, [displayedMilestones, activeMilestone]);

  // Auto-tour player
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isTourPlaying && displayedMilestones.length > 1) {
      timer = setInterval(() => {
        setActiveMilestoneId((prevId) => {
          const currentIndex = displayedMilestones.findIndex((m) => m.id === prevId);
          const nextIndex = (currentIndex + 1) % displayedMilestones.length;
          return displayedMilestones[nextIndex].id;
        });
      }, 4000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTourPlaying, displayedMilestones]);

  const handleNextMilestone = () => {
    if (displayedMilestones.length === 0) return;
    const nextIndex = (activeIndex + 1) % displayedMilestones.length;
    setActiveMilestoneId(displayedMilestones[nextIndex].id);
  };

  const handlePrevMilestone = () => {
    if (displayedMilestones.length === 0) return;
    const prevIndex = (activeIndex - 1 + displayedMilestones.length) % displayedMilestones.length;
    setActiveMilestoneId(displayedMilestones[prevIndex].id);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="w-full bg-[#0b121e]/90 dark:bg-[#0b121e]/90 light:bg-slate-50/80 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-300 p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/5 blur-3xl pointer-events-none rounded-full" />

      {/* 1. Header & Project Selection Tabs */}
      <div className="space-y-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-300/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Development Lifecycle &amp; Milestones</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Interactive Project Roadmap
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 max-w-2xl">
              Inspect each engineering phase, mathematical validation gate, and benchmarked deliverable chronologically from raw data ingestion to production insight.
            </p>
          </div>

          {/* View Mode & Tour Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsTourPlaying(!isTourPlaying)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                isTourPlaying
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm'
                  : 'bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-500/60'
              }`}
              title={isTourPlaying ? 'Pause milestone walkthrough' : 'Start automated milestone walkthrough'}
            >
              {isTourPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pause Tour</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Walkthrough</span>
                </>
              )}
            </button>

            {/* View Switcher: Visual Timeline vs Matrix View */}
            <div className="flex items-center p-1 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-200/80 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs font-mono">
              <button
                onClick={() => setViewMode('visual')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'visual'
                    ? 'bg-cyan-950 dark:bg-cyan-950 light:bg-white text-cyan-300 dark:text-cyan-300 light:text-cyan-900 font-semibold shadow-xs'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200'
                }`}
              >
                Visual Flow
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-cyan-950 dark:bg-cyan-950 light:bg-white text-cyan-300 dark:text-cyan-300 light:text-cyan-900 font-semibold shadow-xs'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200'
                }`}
              >
                Phase Matrix
              </button>
            </div>
          </div>
        </div>

        {/* Selected Project Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3" role="tablist" aria-label="Select Complex Project">
          {projectTimelinesData.map((project) => {
            const isSelected = selectedProjectId === project.projectId;
            return (
              <button
                key={project.projectId}
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedProjectId(project.projectId);
                  setSelectedPhaseFilter('all');
                  setIsTourPlaying(false);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-cyan-50/80 border-cyan-500/80 dark:border-cyan-500/80 light:border-cyan-600 shadow-[0_0_15px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/40'
                    : 'bg-[#0e1626]/70 dark:bg-[#0e1626]/70 light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-slate-600 dark:hover:border-slate-600 light:hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono mb-1.5">
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 truncate">
                      {project.category}
                    </span>
                    <span className={`w-2 h-2 rounded-full shrink-0 ${
                      isSelected ? 'bg-cyan-400 ring-4 ring-cyan-500/20' : 'bg-slate-600'
                    }`} />
                  </div>
                  <h4 className={`text-xs sm:text-sm font-bold leading-tight line-clamp-1 ${
                    isSelected ? 'text-cyan-300 dark:text-cyan-300 light:text-cyan-900' : 'text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-slate-100'
                  }`}>
                    {project.projectTitle}
                  </h4>
                </div>

                <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{project.duration.split(' ')[0]} {project.duration.split(' ')[1]}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{project.totalPhases} Phases</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-semibold">{project.totalMilestones} Milestones</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Project Summary Banner */}
        <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/90 border border-slate-800 dark:border-slate-800 light:border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block font-semibold">
              Project Scope &amp; Architecture
            </span>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed max-w-3xl">
              {currentTimeline.summary}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {currentTimeline.caseStudyId && onOpenCaseStudy && (
              <button
                onClick={() => onOpenCaseStudy(currentTimeline.projectId)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xs transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Full Case Study</span>
              </button>
            )}
            {currentTimeline.githubUrl && (
              <a
                href={currentTimeline.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-800 dark:bg-slate-800 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* 2. Interactive Phase Progress Bar & Filter Track */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Phases &amp; Gates Progression ({currentTimeline.phases.length} Phases Total)</span>
            </span>
            <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-semibold">
              ● All Gates Verified
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2" role="tablist" aria-label="Development Phases">
            <button
              onClick={() => setSelectedPhaseFilter('all')}
              className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                selectedPhaseFilter === 'all'
                  ? 'bg-cyan-950 dark:bg-cyan-950 light:bg-cyan-100 border-cyan-500 dark:border-cyan-500 light:border-cyan-600 text-cyan-300 dark:text-cyan-300 light:text-cyan-900 font-bold shadow-xs'
                  : 'bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] font-mono text-slate-500 uppercase">View All</div>
              <div className="text-xs font-semibold truncate mt-0.5">All Phases ({currentTimeline.milestones.length} M)</div>
            </button>

            {currentTimeline.phases.map((phase) => {
              const isPhaseActive = selectedPhaseFilter === phase.id;
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhaseFilter(phase.id)}
                  className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                    isPhaseActive
                      ? 'bg-cyan-950 dark:bg-cyan-950 light:bg-cyan-100 border-cyan-500 dark:border-cyan-500 light:border-cyan-600 text-cyan-300 dark:text-cyan-300 light:text-cyan-900 font-bold shadow-xs'
                      : 'bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>Phase 0{phase.phaseNumber}</span>
                    <span>{phase.timeframe}</span>
                  </div>
                  <div className="text-xs font-semibold truncate mt-0.5 text-slate-200 dark:text-slate-200 light:text-slate-800">
                    {phase.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. VISUAL FLOW VIEW */}
        {viewMode === 'visual' && (
          <div className="space-y-6 pt-2">
            
            {/* Horizontal Timeline Track Node Bar */}
            <div className="relative">
              {/* Connecting Line Track */}
              <div className="hidden sm:block absolute top-6 left-6 right-6 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500/80 -z-0" />

              <div className="flex items-stretch gap-3 overflow-x-auto pb-3 pt-1 px-1 relative z-10 scrollbar-thin">
                {displayedMilestones.map((milestone, idx) => {
                  const isActive = activeMilestone?.id === milestone.id;
                  return (
                    <button
                      key={milestone.id}
                      onClick={() => {
                        setActiveMilestoneId(milestone.id);
                        setIsTourPlaying(false);
                      }}
                      className={`flex-1 min-w-[200px] max-w-[240px] p-3.5 rounded-xl border text-left transition-all cursor-pointer relative shrink-0 ${
                        isActive
                          ? 'bg-cyan-950/80 dark:bg-cyan-950/80 light:bg-cyan-50 border-cyan-400 dark:border-cyan-400 light:border-cyan-600 shadow-[0_0_16px_rgba(6,182,212,0.25)] scale-[1.02]'
                          : 'bg-[#0e1626] dark:bg-[#0e1626] light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-slate-600 dark:hover:border-slate-600 light:hover:border-slate-400'
                      }`}
                    >
                      {/* Top Node Indicator */}
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                          isActive
                            ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/50'
                            : 'bg-slate-800 text-slate-300 dark:text-slate-300 light:text-slate-700'
                        }`}>
                          {milestone.milestoneNumber}
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-cyan-400" />
                          <span>{milestone.period}</span>
                        </span>
                      </div>

                      {/* Milestone Title & Phase */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 light:text-slate-500 block truncate">
                          {milestone.phaseName}
                        </span>
                        <h5 className={`text-xs font-bold line-clamp-2 ${
                          isActive ? 'text-cyan-300 dark:text-cyan-300 light:text-cyan-900' : 'text-slate-200 dark:text-slate-200 light:text-slate-800'
                        }`}>
                          {milestone.title}
                        </h5>
                      </div>

                      {/* Key Metric Snapshot */}
                      {milestone.keyMetric && (
                        <div className="mt-3 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-[10px] font-mono flex items-center justify-between">
                          <span className="text-slate-500 truncate">{milestone.keyMetric.label}</span>
                          <span className="text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-bold ml-1">{milestone.keyMetric.value}</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Deep Active Milestone Inspector Drawer */}
            {activeMilestone && (
              <div className="rounded-2xl bg-[#0e1626] dark:bg-[#0e1626] light:bg-white border border-cyan-800/50 dark:border-cyan-800/50 light:border-slate-300 p-5 sm:p-7 shadow-xl relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left Column: Scope, Deliverables & Challenges */}
                  <div className="flex-1 space-y-5">
                    
                    {/* Milestone Breadcrumb & Title */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                        <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800 font-bold">
                          MILESTONE 0{activeMilestone.milestoneNumber}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{activeMilestone.phaseName}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400 font-medium">● {activeMilestone.status}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-slate-400">{activeMilestone.period}</span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                        {activeMilestone.title}
                      </h4>

                      <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 mt-2 leading-relaxed">
                        {activeMilestone.summary}
                      </p>
                    </div>

                    {/* Key Deliverables */}
                    <div>
                      <h5 className="font-mono text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Key Engineering Deliverables:</span>
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeMilestone.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100/80 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-200 dark:text-slate-200 light:text-slate-800"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Challenge & Engineering Solution Callout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-amber-950/20 dark:bg-amber-950/20 light:bg-amber-50/80 border border-amber-800/40 dark:border-amber-800/40 light:border-amber-300 text-xs space-y-1.5">
                        <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                          <HelpCircle className="w-3 h-3" />
                          <span>Technical Challenge</span>
                        </span>
                        <p className="text-slate-300 dark:text-slate-300 light:text-slate-800 leading-relaxed">
                          {activeMilestone.technicalChallenge}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-950/20 dark:bg-emerald-950/20 light:bg-emerald-50/80 border border-emerald-800/40 dark:border-emerald-800/40 light:border-emerald-300 text-xs space-y-1.5">
                        <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                          <Lightbulb className="w-3 h-3" />
                          <span>Engineering Solution</span>
                        </span>
                        <p className="text-slate-300 dark:text-slate-300 light:text-slate-800 leading-relaxed">
                          {activeMilestone.engineeringSolution}
                        </p>
                      </div>
                    </div>

                    {/* Tools & Artifact Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs font-mono">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-slate-500 text-[11px]">Stack:</span>
                        {activeMilestone.toolsUsed.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 rounded bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-[10px]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {activeMilestone.artifactName && (
                        <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                          <Code2 className="w-3.5 h-3.5" />
                          <span>Artifact: {activeMilestone.artifactName}</span>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Key Metric Card & Code Snippet */}
                  <div className="w-full lg:w-80 shrink-0 space-y-4">
                    
                    {/* Key Metric Card */}
                    {activeMilestone.keyMetric && (
                      <div className="p-4 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-1 shadow-sm">
                        <span className="font-mono text-[10px] text-slate-500 uppercase block">
                          Verified Milestone Metric
                        </span>
                        <div className="text-2xl font-extrabold text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-mono tabular-nums">
                          {activeMilestone.keyMetric.value}
                        </div>
                        <div className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                          {activeMilestone.keyMetric.label}
                        </div>
                        <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-snug pt-1">
                          {activeMilestone.keyMetric.context}
                        </p>
                      </div>
                    )}

                    {/* Executable Code / Script Snippet */}
                    {activeMilestone.codeSnippet && (
                      <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
                        <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <Code2 className="w-3 h-3 text-cyan-400" />
                            <span>{activeMilestone.codeSnippet.language.toUpperCase()} Snippet</span>
                          </span>
                          <button
                            onClick={() => handleCopyCode(activeMilestone.codeSnippet!.code)}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                            title="Copy code snippet"
                          >
                            {copiedSnippet ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-3 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-44 scrollbar-thin">
                          <code>{activeMilestone.codeSnippet.code}</code>
                        </pre>
                      </div>
                    )}

                    {/* Step-through Previous / Next Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={handlePrevMilestone}
                        className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Prev Step</span>
                      </button>
                      <button
                        onClick={handleNextMilestone}
                        className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-mono text-white bg-cyan-600 hover:bg-cyan-500 transition-colors cursor-pointer font-bold shadow-xs"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* 4. MATRIX VIEW (All Milestones Table) */}
        {viewMode === 'matrix' && (
          <div className="rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 overflow-hidden bg-slate-900/40 dark:bg-slate-900/40 light:bg-white shadow-lg mt-3">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 border-b border-slate-800 dark:border-slate-800 light:border-slate-300">
                    <th className="py-3 px-4">#</th>
                    <th className="py-3 px-4">Milestone</th>
                    <th className="py-3 px-4">Phase</th>
                    <th className="py-3 px-4">Timeframe</th>
                    <th className="py-3 px-4">Metric / Gate</th>
                    <th className="py-3 px-4">Artifact</th>
                    <th className="py-3 px-4 text-right">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 dark:divide-slate-800/60 light:divide-slate-200">
                  {currentTimeline.milestones.map((m) => (
                    <tr
                      key={m.id}
                      className="hover:bg-slate-800/40 dark:hover:bg-slate-800/40 light:hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-cyan-400 font-bold">M0{m.milestoneNumber}</td>
                      <td className="py-3 px-4 font-sans font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                        {m.title}
                      </td>
                      <td className="py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-600">
                        {m.phaseName}
                      </td>
                      <td className="py-3 px-4 text-slate-400 dark:text-slate-400 light:text-slate-600">
                        {m.period}
                      </td>
                      <td className="py-3 px-4 text-emerald-400 font-bold">
                        {m.keyMetric ? `${m.keyMetric.value} (${m.keyMetric.label})` : 'Completed'}
                      </td>
                      <td className="py-3 px-4 text-slate-400">
                        {m.artifactName || 'Notebook'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => {
                            setActiveMilestoneId(m.id);
                            setViewMode('visual');
                          }}
                          className="px-2.5 py-1 rounded bg-cyan-950 dark:bg-cyan-950 light:bg-cyan-100 text-cyan-300 dark:text-cyan-300 light:text-cyan-900 border border-cyan-800 dark:border-cyan-800 light:border-cyan-300 hover:bg-cyan-900 transition-colors cursor-pointer text-[11px]"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
