import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="w-[85%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Verified Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            AWS, AI & Microservices{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Validated knowledge in cloud architecture, generative AI application engineering, and enterprise system design.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="relative h-44 rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10">
                  <img
                    src={cert.badgeImage}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#0a0f1d] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 right-3 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
                    <ShieldCheck className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  {cert.issuer} • {cert.issueDate}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-white/5">
                  {(cert.skillsCovered || []).slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {(cert.skillsCovered || []).length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-600 dark:text-indigo-300 font-bold">
                      +{cert.skillsCovered.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Verification Detail */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {selectedCert && (
                <div
                  onClick={() => setSelectedCert(null)}
                  className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/90 dark:bg-slate-950/95 backdrop-blur-2xl"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-lg bg-white dark:bg-[#0a0f1d] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-2xl space-y-6"
                  >
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/30 shrink-0">
                        <Award className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                          {selectedCert.title}
                        </h3>
                        <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                          Issued by {selectedCert.issuer} ({selectedCert.issueDate})
                        </p>
                      </div>
                    </div>

                    {selectedCert.credentialId && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">Credential ID:</strong> {selectedCert.credentialId}
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                        Validated Competencies
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedCert.skillsCovered.map((skill, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-white/10 text-right">
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs cursor-pointer hover:bg-indigo-500 transition-colors"
                      >
                        Close Verification
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
