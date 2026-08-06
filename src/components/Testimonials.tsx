import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="w-[90%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Star className="w-4 h-4 text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" />
            <span>Global Client & Executive Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            100% Client Satisfaction &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">
              Trust
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Feedback from CTOs, founders, and managing directors across USA, France, UAE, UK, and international enterprises.
          </p>
        </div>

        {/* Testimonial Slider Card */}
        {current && (
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl relative overflow-hidden space-y-6 backdrop-blur-md"
            >
              <Quote className="w-16 h-16 text-indigo-500/10 absolute top-6 right-6 pointer-events-none" />

              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold font-mono text-slate-600 dark:text-slate-400">5.0 / 5.0</span>
              </div>

              {/* Quote Content */}
              <blockquote className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-light leading-relaxed italic font-serif">
                "{current.comment}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-md"
                  />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                      <span>{current.name}</span>
                      <span className="text-lg">{current.flagEmoji}</span>
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                      {current.role} • {current.company}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                      Project: {current.projectRelation}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer shadow-sm dark:shadow-none"
                    title="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer shadow-sm dark:shadow-none"
                    title="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? 'w-8 bg-indigo-600 dark:bg-indigo-500' : 'w-2.5 bg-slate-300 dark:bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
