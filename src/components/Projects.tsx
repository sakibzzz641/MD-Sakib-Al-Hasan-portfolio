import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Search, 
  FileText, 
  Database, 
  Layers, 
  BookOpen, 
  Sparkles, 
  Image as ImageIcon,
  PlayCircle,
  FileCode,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { Project } from '../types';
import { projectsData, projectCategories } from '../data/projects';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<Project | null>(null);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()));

      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured project is Customer Segmentation
  const featuredProject = projectsData.find((p) => p.featured);

  // Fallback image helper based on category
  const getCoverImage = (project: Project) => {
    if (project.images && project.images.length > 0) {
      return project.images[0].src;
    }
    if (project.category.includes('Classification')) {
      return '/images/projects/placeholders/classification-placeholder.svg';
    }
    if (project.category.includes('Data Analysis') || project.category.includes('EDA')) {
      return '/images/projects/placeholders/data-analysis-placeholder.svg';
    }
    return '/images/projects/placeholders/default-ml-placeholder.svg';
  };

  // Render prioritized resources
  const renderResourceButtons = (project: Project) => {
    const buttons = [];

    // 1. GitHub
    if (project.githubUrl) {
      buttons.push(
        <a
          key="github"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      );
    }

    // 2. Live Demo
    if (project.liveUrl) {
      buttons.push(
        <a
          key="live"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
        >
          <PlayCircle className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>
      );
    }

    // 3. Case Study
    if (project.caseStudy) {
      buttons.push(
        <button
          key="casestudy"
          onClick={() => setActiveCaseStudyProject(project)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 hover:bg-cyan-900/60 transition-colors cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>Case Study</span>
        </button>
      );
    }

    // 4. Notebook
    if (project.notebookUrl) {
      buttons.push(
        <a
          key="notebook"
          href={project.notebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 bg-amber-950/60 border border-amber-800/60 hover:bg-amber-900/60 transition-colors"
        >
          <FileCode className="w-3.5 h-3.5" />
          <span>Notebook</span>
        </a>
      );
    }

    // 5. Dataset
    if (project.datasetUrl) {
      buttons.push(
        <a
          key="dataset"
          href={project.datasetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900/60 transition-colors"
        >
          <Database className="w-3.5 h-3.5" />
          <span>Dataset</span>
        </a>
      );
    }

    // 6. Documentation
    if (project.documentationUrl) {
      buttons.push(
        <a
          key="doc"
          href={project.documentationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Docs</span>
        </a>
      );
    }

    // 7. Presentation
    if (project.presentationUrl) {
      buttons.push(
        <a
          key="pres"
          href={project.presentationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 hover:bg-indigo-900/60 transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Slides</span>
        </a>
      );
    }

    // 8. Video
    if (project.videoUrl) {
      buttons.push(
        <a
          key="video"
          href={project.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-300 bg-rose-950/60 border border-rose-800/60 hover:bg-rose-900/60 transition-colors"
        >
          <PlayCircle className="w-3.5 h-3.5" />
          <span>Video</span>
        </a>
      );
    }

    return buttons;
  };

  return (
    <section id="projects" className="py-20 border-t border-[#1a2336] relative" aria-label="Data Science Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Applied Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Featured Projects &amp; Case Studies
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            Production-grade machine learning pipelines, exploratory data analyses, and statistical modeling backed by clean version-controlled code.
          </p>
        </div>

        {/* FEATURED PROJECT HERO SHOWCASE */}
        {featuredProject && (
          <div className="mb-14 rounded-2xl bg-[#0e1626] border border-cyan-800/60 p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-cyan-500/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 blur-3xl pointer-events-none rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Project
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                    {featuredProject.category}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono">● {featuredProject.status}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-snug">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {featuredProject.shortDescription}
                </p>

                {/* Verified Metrics Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Dataset</span>
                    <span className="text-slate-200 font-bold">8,950 Accounts</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Features</span>
                    <span className="text-slate-200 font-bold">15 Variables</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">PCA Variance</span>
                    <span className="text-cyan-400 font-bold">95% (9 comps)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Silhouette</span>
                    <span className="text-emerald-400 font-bold">s = 0.2600 (k=2)</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featuredProject.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {featuredProject.technologies.length > 6 && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono bg-slate-900 text-slate-500">
                      +{featuredProject.technologies.length - 6} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setActiveCaseStudyProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View In-Depth Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Preview Banner */}
              <div className="lg:col-span-5">
                <div
                  onClick={() => setActiveCaseStudyProject(featuredProject)}
                  className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 p-3 shadow-xl cursor-pointer group/img"
                  title="Click to view full case study and charts"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900 flex items-center justify-center">
                    <img
                      src={getCoverImage(featuredProject)}
                      alt="PCA Explained Variance for Customer Segmentation"
                      className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>PCA Cumulative Variance Curve</span>
                    </span>
                    <span className="text-slate-500">3 Charts Available</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
            {projectCategories.map((category) => {
              const categoryThemes: Record<string, { active: string; hover: string; dot: string }> = {
                'All': {
                  active: 'bg-cyan-950/80 text-cyan-300 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.3)]',
                  hover: 'hover:text-cyan-300 hover:border-cyan-500/60 hover:bg-cyan-950/40 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]',
                  dot: 'bg-cyan-400'
                },
                'Machine Learning': {
                  active: 'bg-purple-950/80 text-purple-300 border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.3)]',
                  hover: 'hover:text-purple-300 hover:border-purple-500/60 hover:bg-purple-950/40 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]',
                  dot: 'bg-purple-400'
                },
                'Classification': {
                  active: 'bg-sky-950/80 text-sky-300 border-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.3)]',
                  hover: 'hover:text-sky-300 hover:border-sky-500/60 hover:bg-sky-950/40 hover:shadow-[0_0_10px_rgba(14,165,233,0.2)]',
                  dot: 'bg-sky-400'
                },
                'Clustering': {
                  active: 'bg-amber-950/80 text-amber-300 border-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.3)]',
                  hover: 'hover:text-amber-300 hover:border-amber-500/60 hover:bg-amber-950/40 hover:shadow-[0_0_10px_rgba(245,158,11,0.2)]',
                  dot: 'bg-amber-400'
                },
                'Data Analysis': {
                  active: 'bg-emerald-950/80 text-emerald-300 border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]',
                  hover: 'hover:text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-950/40 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)]',
                  dot: 'bg-emerald-400'
                },
                'EDA': {
                  active: 'bg-rose-950/80 text-rose-300 border-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.3)]',
                  hover: 'hover:text-rose-300 hover:border-rose-500/60 hover:bg-rose-950/40 hover:shadow-[0_0_10px_rgba(244,63,94,0.2)]',
                  dot: 'bg-rose-400'
                }
              };
              const theme = categoryThemes[category] || categoryThemes['All'];
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg border whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? `${theme.active} font-bold`
                      : `bg-[#0e1626]/70 text-slate-400 border-slate-800 ${theme.hover}`
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      isSelected ? `${theme.dot} scale-125` : 'bg-slate-600'
                    }`}
                  />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies, titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#0e1626] border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>
        </div>

        {/* Filtered Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0e1626]/80 border border-[#1f2d47] overflow-hidden shadow-lg flex flex-col justify-between hover:border-slate-600 transition-all group"
            >
              <div>
                {/* Card Thumbnail / Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-800 p-2 flex items-center justify-center">
                  <img
                    src={getCoverImage(project)}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-slate-900/90 text-cyan-300 border border-slate-700 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-950 text-cyan-400 border border-cyan-800">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Year: {project.date}</span>
                    <span className="text-emerald-400">● {project.status}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Project Metrics snippet */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="p-2 rounded bg-slate-900/80 border border-slate-800/80">
                          <span className="text-slate-500 text-[9px] block uppercase">{m.label}</span>
                          <span className="text-slate-200 font-bold truncate block">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Priority Resources (Only active ones rendered) */}
              <div className="p-5 pt-0 border-t border-slate-800/60 mt-3 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {renderResourceButtons(project)}
                </div>

                {project.caseStudy && (
                  <button
                    onClick={() => setActiveCaseStudyProject(project)}
                    className="p-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    title="View Full Case Study"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#0e1626] border border-slate-800 space-y-2">
            <p className="text-sm font-semibold text-slate-300">No matching projects found.</p>
            <p className="text-xs text-slate-500 font-mono">
              Try adjusting your category filter or search query.
            </p>
          </div>
        )}

      </div>

      {/* Case Study Modal Trigger */}
      {activeCaseStudyProject && (
        <CaseStudyModal
          project={activeCaseStudyProject}
          onClose={() => setActiveCaseStudyProject(null)}
        />
      )}
    </section>
  );
};
