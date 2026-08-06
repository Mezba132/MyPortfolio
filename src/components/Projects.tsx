import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  Search,
  ExternalLink,
  Github,
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
  Zap,
  ChevronRight,
  Maximize2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    'All',
    'Enterprise',
    'AI',
    'Hotel Booking',
    'Real Estate',
    'E-Commerce',
    'Healthcare',
    'Crypto / Web3',
    'Dashboard',
    'SaaS',
    'WordPress / WooCommerce'
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="w-[90%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <FolderGit2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>Award-Winning Work & Deliverables</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Featured Enterprise &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">
              AI Software Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Explore a curated selection of 20+ production applications, SaaS platforms, AI hubs, and custom web systems.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Scrollable Categories Bar */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none bg-white/80 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-md shrink-0 shadow-sm dark:shadow-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAll(false);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 backdrop-blur-md shadow-sm dark:shadow-none"
            />
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="group rounded-3xl bg-white/80 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm dark:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full backdrop-blur-md"
            >
              {/* Card Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#0a0f1d] via-transparent to-transparent opacity-90" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                  {project.category}
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Quick Expand Button overlay */}
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveGalleryIndex(0);
                  }}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white border border-white/10 shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  title="View full project case study"
                >
                  <Maximize2 className="w-4 h-4 text-indigo-400" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-light">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {(project.techStack || []).slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-[10px] font-mono text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.techStack || []).length > 4 && (
                      <span className="px-2 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveGalleryIndex(0);
                    }}
                    className="flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                  >
                    <span>Full Case Study</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-md"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show All / Hide Projects Toggle Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setShowAll(true);
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-300 cursor-pointer group"
            >
              <span>
                {showAll ? 'Hide Projects' : `Show All Projects (${filteredProjects.length})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No matching projects found for &quot;{searchQuery}&quot;.
          </div>
        )}

        {/* Modal Detail View */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {selectedProject && (
                <div
                  onClick={() => setSelectedProject(null)}
                  className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 dark:bg-slate-950/95 backdrop-blur-2xl overflow-y-auto"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-4xl max-h-[88vh] bg-white dark:bg-[#0a0f1d] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-y-auto my-auto p-6 sm:p-8 text-slate-900 dark:text-white transition-colors duration-300"
                  >
                    {/* Header Close Button */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
                          {selectedProject.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                          <span>{selectedProject.timeline}</span>
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer z-20 shadow-sm"
                        title="Close modal"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Modal Gallery */}
                    <div className="space-y-4 mb-8">
                      <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/10 shadow-sm">
                        <img
                          src={
                            selectedProject.gallery?.[activeGalleryIndex] ||
                            selectedProject.image
                          }
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Thumbnail Selector */}
                      {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                        <div className="flex gap-3 overflow-x-auto pb-2">
                          {selectedProject.gallery.map((img, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveGalleryIndex(i)}
                              className={`w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 cursor-pointer transition-all ${
                                activeGalleryIndex === i
                                  ? 'border-indigo-500 scale-105 shadow-md'
                                  : 'border-transparent opacity-60 hover:opacity-100'
                              }`}
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-2 mb-8">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                        {selectedProject.title}
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        {selectedProject.subtitle}
                      </p>
                    </div>

                    {/* Tech Stack Matrix */}
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                        Technologies & Libraries
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-sm dark:shadow-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deep Dive Case Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Features List */}
                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4" />
                          <span>Key Features & Capabilities</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                          {selectedProject.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact & Results */}
                      <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/20 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                          <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          <span>Business Impact & Results</span>
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                          {selectedProject.results}
                        </p>
                        <div className="pt-2 border-t border-indigo-200 dark:border-indigo-500/20 text-[11px] text-slate-500 dark:text-slate-400">
                          <strong className="text-indigo-700 dark:text-indigo-300">Challenge Solved:</strong> {selectedProject.challenges}
                        </div>
                      </div>
                    </div>

                    {/* Modal Action Links */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-white/10">
                      <div className="flex items-center gap-3">
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs shadow-lg hover:bg-indigo-500 flex items-center gap-2 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Launch Live Demo</span>
                          </a>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-bold text-xs flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        Close Window
                      </button>
                    </div>

                  </motion.div>
                </div>
              )}
            </AnimatePresence>,
            document.body
          )}

      </div>
    </section>
  );
};
