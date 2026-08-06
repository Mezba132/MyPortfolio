import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Sparkles,
  LayoutDashboard,
  Server,
  Cpu,
  Globe,
  CheckCircle2,
  Clock,
  ArrowRight,
  Calculator,
  X,
  Send,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  services: ServiceItem[];
  onNavigateContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onNavigateContact }) => {
  const [calculatorOpen, setCalculatorOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0]?.id || '');
  const [projectScope, setProjectScope] = useState<'MVP' | 'Standard' | 'Enterprise'>('Standard');
  const [aiIntegration, setAiIntegration] = useState<boolean>(true);
  const [timelineUrgency, setTimelineUrgency] = useState<'Standard' | 'Rush'>('Standard');
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedServices = showAll ? services : services.slice(0, 3);

  // Dynamic Icon Mapper
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code': return Code;
      case 'Sparkles': return Sparkles;
      case 'LayoutDashboard': return LayoutDashboard;
      case 'Server': return Server;
      case 'Cpu': return Cpu;
      case 'Globe': return Globe;
      default: return Code;
    }
  };

  // Quote Calculator math
  const baseService = services.find((s) => s.id === selectedServiceId) || services[0];
  const basePriceNumber = parseInt(baseService?.startingPrice.replace(/[^0-9]/g, '') || '1499', 10);
  const scopeMultiplier = projectScope === 'MVP' ? 0.75 : projectScope === 'Standard' ? 1.0 : 1.8;
  const aiAddon = aiIntegration ? 400 : 0;
  const urgencyMultiplier = timelineUrgency === 'Rush' ? 1.25 : 1.0;
  const calculatedTotal = Math.round((basePriceNumber * scopeMultiplier + aiAddon) * urgencyMultiplier);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="w-[90%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>High-Value Engineering Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Specialized Development &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">
              Consulting Services
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Turnkey software solutions delivered with senior precision, clean architecture, and guaranteed performance.
          </p>

          <button
            onClick={() => setCalculatorOpen(true)}
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 cursor-pointer transition-transform hover:scale-105"
          >
            <Calculator className="w-4 h-4 text-indigo-200" />
            <span>Interactive Project Cost & Scope Estimator</span>
          </button>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((srv, idx) => {
            const Icon = getIcon(srv.iconName);
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-white/80 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group backdrop-blur-md"
              >
                <div className="space-y-4">
                  {/* Icon & Starting Price Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Starting At</span>
                      <span className="text-lg font-extrabold text-slate-900 dark:text-white font-mono">{srv.startingPrice}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
                      {srv.tagline}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {srv.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-2">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                      What's Included
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {srv.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Est: {srv.estimatedDelivery}</span>
                  </span>

                  <button
                    onClick={() => {
                      setSelectedServiceId(srv.id);
                      setCalculatorOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-xs font-bold hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show All / Hide Services Toggle Button */}
        {services.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setShowAll(true);
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-300 cursor-pointer group"
            >
              <span>
                {showAll ? 'Hide Services' : `Show All Services (${services.length})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

        {/* Scope Calculator Modal */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {calculatorOpen && (
                <div
                  onClick={() => setCalculatorOpen(false)}
                  className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/90 dark:bg-slate-950/95 backdrop-blur-2xl"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-2xl bg-white dark:bg-[#0a0f1d] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto my-8"
                  >
                    <button
                      onClick={() => setCalculatorOpen(false)}
                      className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold border border-indigo-500/30">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                          Interactive Project Scope & Cost Calculator
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Estimate scope parameters for Nokibul Amin Mezba</p>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Select Core Service
                      </label>
                      <select
                        value={selectedServiceId}
                        onChange={(e) => setSelectedServiceId(e.target.value)}
                        className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.id} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                            {s.title} ({s.startingPrice})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Scope Tier */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Project Scale Tier
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['MVP', 'Standard', 'Enterprise'] as const).map((tier) => (
                          <button
                            key={tier}
                            onClick={() => setProjectScope(tier)}
                            className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              projectScope === tier
                                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                                : 'bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10'
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* AI Addon */}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          Include Gemini AI / LLM Feature Integration
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">Automated assistants, RAG search, lead scoring</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={aiIntegration}
                        onChange={(e) => setAiIntegration(e.target.checked)}
                        className="w-5 h-5 accent-indigo-500 cursor-pointer"
                      />
                    </div>

                    {/* Timeline Urgency */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Delivery Speed
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['Standard', 'Rush'] as const).map((urg) => (
                          <button
                            key={urg}
                            onClick={() => setTimelineUrgency(urg)}
                            className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              timelineUrgency === urg
                                ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                                : 'bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10'
                            }`}
                          >
                            {urg === 'Standard' ? 'Standard Timeline' : 'Accelerated Rush Sprint (+25%)'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Result Estimate Card */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900 to-purple-900 text-white flex items-center justify-between border border-indigo-500/30">
                      <div>
                        <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest block">
                          Estimated Project Investment
                        </span>
                        <span className="text-3xl font-extrabold font-display">${calculatedTotal.toLocaleString()} USD</span>
                      </div>

                      <button
                        onClick={() => {
                          setCalculatorOpen(false);
                          onNavigateContact();
                        }}
                        className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs shadow-lg hover:bg-slate-200 cursor-pointer flex items-center gap-2"
                      >
                        <span>Proceed & Book Project</span>
                        <Send className="w-3.5 h-3.5 text-indigo-600" />
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
