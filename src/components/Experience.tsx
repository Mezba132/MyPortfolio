import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [expandedId, setExpandedId] = useState<string>(experiences[0]?.id || '');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="w-[85%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Career Journey & Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            5+ Years of Proven{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">
              Enterprise Track Record
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From scaling enterprise CRM software and microservices to engineering dApps and AI agent applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-indigo-800 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#03060d] border-2 border-indigo-500 shadow-lg shadow-indigo-500/30 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
                  </div>

                  {/* Card Box */}
                  <div className={`sm:w-1/2 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10 sm:text-left'} pl-12 sm:pl-0`}>
                    <div
                      onClick={() => toggleExpand(exp.id)}
                      className={`p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#0a0f1d] border transition-all duration-300 cursor-pointer shadow-sm dark:shadow-2xl backdrop-blur-md ${
                        isExpanded
                          ? 'border-indigo-500/80 ring-1 ring-indigo-500/30'
                          : 'border-slate-200 dark:border-white/10 hover:border-indigo-500/40'
                      }`}
                    >
                      {/* Top Meta info */}
                      <div className={`flex items-center gap-2 mb-2 text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase animate-pulse">
                            Current Role
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      {/* Job Title & Company */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-1">
                        {exp.role}
                      </h3>

                      <div className={`flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-4 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{exp.company}</span>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Tech Pills Summary */}
                      <div className={`flex flex-wrap gap-1.5 mb-4 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        {(exp.technologies || []).slice(0, 5).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {(exp.technologies || []).length > 5 && (
                          <span className="px-2 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-bold text-indigo-600 dark:text-indigo-300">
                            +{exp.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Expand Button */}
                      <div className={`flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        <span>{isExpanded ? 'Hide Details' : 'View Key Responsibilities & Impact'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pt-5 mt-5 border-t border-slate-200 dark:border-white/10 text-left space-y-4"
                          >
                            {/* Responsibilities List */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                                {exp.responsibilities.map((resp, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Achievements List */}
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/20">
                                <h4 className="text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5 mb-2">
                                  <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                                  <span>Key Achievements</span>
                                </h4>
                                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-light">
                                  {exp.achievements.map((ach, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5">
                                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                                      <span>{ach}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Complete Tech Tags */}
                            <div>
                              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                Complete Stack
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((t, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-700 dark:text-slate-300"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
