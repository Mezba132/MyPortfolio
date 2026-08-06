import React from 'react';
import { motion } from 'motion/react';
import {
  FileCode2,
  CheckCircle2,
  Layers,
  Zap,
  TrendingUp,
  Server,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      <div className="w-[85%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <FileCode2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Deep Architectural Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Enterprise System Architecture{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">
              Case Studies
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed breakdowns of high-scale engineering challenges, system redesigns, and measured business outcomes.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-md"
            >
              {/* Top Banner & Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                    <span>{cs.client}</span>
                    <span>•</span>
                    <span>{cs.role}</span>
                    <span>•</span>
                    <span>{cs.period}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                    {cs.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cs.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 text-xs font-bold text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overview & Problem Statement */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Project Overview</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                    {cs.overview}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/20 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                    <span>Core Technical Problem</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-light">
                    {cs.problem}
                  </p>
                </div>
              </div>

              {/* Research & Architecture Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span>Research & Bottleneck Analysis</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-light">
                    {cs.research.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Target Architecture Blueprint</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-light">
                    {cs.architecture.map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Measured Metrics Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Measured Benchmark Results</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cs.performanceMetrics.map((pm, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center"
                    >
                      <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-display">
                        {pm.value}
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                        {pm.metric}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {pm.change} improvement
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Business Result */}
              <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/40 text-slate-900 dark:text-white border border-indigo-200 dark:border-indigo-500/30">
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Final Impact</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-light">
                  {cs.results}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
