import React from 'react';
import { motion } from 'motion/react';
import {
  UserCheck,
  GraduationCap,
  CheckCircle2,
  Cpu,
  Layers,
  Globe2,
  Shield,
  Lightbulb,
  HeartHandshake,
  Target,
  Compass
} from 'lucide-react';
import { PortfolioData } from '../types';

interface AboutProps {
  data: PortfolioData['profile'];
  education: PortfolioData['education'];
}

export const About: React.FC<AboutProps> = ({ data, education }) => {
  const coreCompetencies = [
    { title: 'Enterprise CRM & SaaS', desc: 'Designing multi-tenant backend architectures with NestJS, PostgreSQL, and role-based security.', icon: Layers },
    { title: 'AI & LLM Systems', desc: 'Integrating Gemini AI and OpenAI APIs for automated RAG, lead scoring, and intelligent agents.', icon: Cpu },
    { title: 'Scalable Microservices & APIs', desc: 'Building high-throughput RESTful and GraphQL endpoints optimized with Redis caching.', icon: Globe2 },
    { title: 'Web3 & Decentralized Apps', desc: 'Integrating smart contracts with Web3.js, token presales, staking portals, and wallet auth.', icon: Shield },
    { title: 'Cloud Infrastructure & DevOps', desc: 'Deploying dockerized applications on AWS (S3, EC2, RDS) and GCP with automated CI/CD.', icon: Target }
  ];

  const qualities = [
    'Visionary System Architecture',
    'Analytical Problem Solving',
    'Cross-Functional Team Leadership',
    'User Experience (UX) Empathy',
    'Clean Code & Agile Discipline',
    'Time & Project Management'
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="w-[90%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <UserCheck className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>Professional Profile & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Engineering Precision meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">
              AI Innovation
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Discover the developer journey, core philosophy, and technical mastery behind building award-winning enterprise software solutions.
          </p>
        </div>

        {/* Top Bento Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Professional Narrative Card (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white/80 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm dark:shadow-none"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2 mb-4">
                <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <span>The Story of Nokibul Amin Mezba</span>
              </h3>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a dedicated <strong className="text-slate-900 dark:text-white font-semibold">Senior Full Stack Software Engineer</strong> with over 5 years of enterprise level experience (7+ years total development experience) delivering robust, secure, and highly scalable web applications.
                </p>

                <p>
                  My technical expertise centers on modern full-stack web engineering—specifically mastering <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Node.js, NestJS, Next.js 15, and React</strong>, complemented by deep proficiency in AWS cloud services and SQL/NoSQL databases (PostgreSQL, MongoDB, Redis).
                </p>

                <p>
                  I skillfully manage the entire advanced web development lifecycle: from initial architectural system design and UI/UX prototyping to backend security, microservice optimization, and cloud deployment. My recent focus centers on empowering enterprise clients through <strong className="text-purple-600 dark:text-purple-300 font-semibold">Gemini AI / OpenAI API integrations and Web3 dApp development</strong>.
                </p>
              </div>
            </div>

            {/* Personal Qualities Badges */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">Core Qualities & Leadership</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {qualities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight Bento Cards (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-indigo-50/90 dark:bg-gradient-to-br dark:from-indigo-900/40 dark:via-[#0a0f1d] dark:to-[#0a0f1d] text-slate-900 dark:text-white border border-indigo-200 dark:border-indigo-500/30 shadow-sm dark:shadow-2xl space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl border border-indigo-500/20 dark:border-indigo-500/30">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white font-display">Engineering Philosophy</h4>
                    <p className="text-xs text-indigo-600 dark:text-indigo-300">Maintainable, Tested, & High Performance</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                  "Great code is not just about making things work—it is about crafting self-documenting, resilient systems that empower businesses to scale effortlessly while delivering unforgettable user experiences."
                </p>
              </div>
              <div className="pt-4 border-t border-indigo-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-indigo-700 dark:text-indigo-300">
                <span>Clean Architecture</span>
                <span>Sub-100ms Target</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md space-y-3 shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 flex items-center justify-center font-bold border border-purple-500/20 dark:border-purple-500/30">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Client & Team Collaboration</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Proactive Communication</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Leveraging agile sprint planning with Jira, Postman, and Slack to bridge the gap between business specifications and technical execution seamlessly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Competencies Matrix */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-8">
            Core Areas of Enterprise Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCompetencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-sm dark:shadow-none"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-display">
                      {comp.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {comp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Bento Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
              Academic Qualifications & Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md hover:border-indigo-500/40 transition-all relative overflow-hidden shadow-sm dark:shadow-none"
              >
                <span className="text-[11px] font-bold font-mono text-indigo-700 dark:text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full inline-block mb-3">
                  {edu.period}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-display mb-1">
                  {edu.degree}
                </h4>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {edu.institution}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-indigo-500 dark:text-indigo-400 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
