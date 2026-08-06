import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Wrench,
  Search,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categoryNames = ['All', ...categories.map((c) => c.category)];

  const allSkills = categories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.category }))
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesTab = activeTab === 'All' || s.category === activeTab;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 6);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="w-[85%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Wrench className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Technical Mastery & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Comprehensive Full-Stack &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">
              AI Skill Matrix
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Explore 25+ technologies, frameworks, and deployment environments mastered over 7+ years of engineering.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-white/80 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none">
            {categoryNames.map((name) => (
              <button
                key={name}
                onClick={() => {
                  setActiveTab(name);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === name
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Next.js)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAll(false);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 backdrop-blur-md shadow-sm dark:shadow-none"
            />
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden backdrop-blur-md shadow-sm dark:shadow-none"
            >
              {skill.featured && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Core Specialty</span>
                </div>
              )}

              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                    {skill.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-xl">
                  {skill.experienceYears}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-1.5 mb-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-500 dark:text-slate-400">Proficiency</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Show All / Hide Button */}
        {filteredSkills.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  const el = document.getElementById('skills');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setShowAll(true);
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 transition-all duration-300 cursor-pointer group"
            >
              <span>
                {showAll ? 'Hide Skills' : `Show All Skills (${filteredSkills.length})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No matching skills found for &quot;{searchQuery}&quot;. Try searching for Next.js, NestJS, Docker, or AI.
          </div>
        )}

      </div>
    </section>
  );
};
