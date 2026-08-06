import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import fallbackPhoto from '../assets/photo.png';
import {
  Sparkles,
  ArrowRight,
  Download,
  FolderGit2,
  CheckCircle2,
  Bot,
  Zap,
  Globe,
  Star,
  Layers,
  ArrowUpRight,
  Terminal,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { PortfolioData } from '../types';
import { ParticlesCanvas } from './ParticlesCanvas';

interface HeroProps {
  data: PortfolioData['profile'];
  stats: PortfolioData['stats'];
  onNavigate: (sectionId: string) => void;
  onOpenAiAssistant: () => void;
  onTriggerDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  data,
  stats,
  onNavigate,
  onOpenAiAssistant,
  onTriggerDownload
}) => {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadClick = async () => {
    setDownloading(true);
    try {
      await onTriggerDownload();
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setDownloading(false), 1500);
    }
  };

  const subtitles = data.subtitles || [
    'Senior Full Stack & AI Specialist',
    'Next.js 15 | NestJS | TypeScript Expert',
    'Enterprise SaaS & CRM System Architect',
    'High-Performance Digital Architect'
  ];

  // Typing animation effect
  useEffect(() => {
    const targetText = subtitles[currentSubtitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText !== targetText) {
      timeout = setTimeout(() => {
        setTypedText(targetText.slice(0, typedText.length + 1));
      }, 70);
    } else if (!isDeleting && typedText === targetText) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedText !== '') {
      timeout = setTimeout(() => {
        setTypedText(targetText.slice(0, typedText.length - 1));
      }, 40);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentSubtitleIndex, subtitles]);

  const technologies = [
    { name: 'TypeScript', color: 'text-indigo-600 dark:text-indigo-300' },
    { name: 'Next.js 15', color: 'text-slate-900 dark:text-white' },
    { name: 'NestJS', color: 'text-red-600 dark:text-red-400' },
    { name: 'Node.js', color: 'text-emerald-700 dark:text-emerald-300' },
    { name: 'GraphQL', color: 'text-pink-600 dark:text-pink-300' },
    { name: 'Docker', color: 'text-cyan-700 dark:text-cyan-300' },
    { name: 'AWS Cloud', color: 'text-amber-700 dark:text-amber-300' },
    { name: 'OpenAI API', color: 'text-blue-600 dark:text-blue-400' },
    { name: 'Gemini AI', color: 'text-indigo-600 dark:text-indigo-400' },
    { name: 'PostgreSQL', color: 'text-sky-700 dark:text-sky-300' },
    { name: 'Prisma ORM', color: 'text-teal-700 dark:text-teal-300' },
    { name: 'Redis', color: 'text-orange-600 dark:text-orange-400' }
  ];

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* Background Particles Canvas */}
      <ParticlesCanvas className="opacity-40" />

      {/* Main Bento Grid Container */}
      <div className="w-[85%] mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Hero Bento Card (col-span-8) */}
          <div className="md:col-span-8 bg-gradient-to-br from-white/80 via-white/40 to-indigo-50/50 dark:from-white/10 dark:via-white/5 dark:to-transparent border border-slate-200 dark:border-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[420px] shadow-sm dark:shadow-none">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none">
              <svg className="w-48 h-48 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
              </svg>
            </div>

            <div>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-pulse" />
                <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-widest">
                  Available for Senior Roles & Enterprise Projects
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white mb-4">
                Building Modern, Scalable <br className="hidden sm:inline" />
                & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">AI-Powered</span> <br className="hidden sm:inline" />
                Digital Experiences
              </h1>

              {/* Typing subtitle */}
              <div className="h-7 mb-4 flex items-center">
                <span className="text-sm sm:text-base font-mono text-indigo-600 dark:text-indigo-300 font-bold flex items-center gap-1">
                  {typedText}
                  <span className="animate-pulse w-2 h-4 bg-indigo-500 dark:bg-indigo-400 inline-block" />
                </span>
              </div>

              {/* Bio summary */}
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-light">
                Senior Full Stack Engineer & AI Specialist crafting enterprise-grade SaaS, Web3 systems, and high-performance digital architectures with 7+ years of expertise.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3.5 rounded-2xl text-xs font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
              >
                <FolderGit2 className="w-4 h-4 text-indigo-200" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownloadClick}
                disabled={downloading}
                className="bg-indigo-50 hover:bg-indigo-100 dark:bg-white/5 dark:hover:bg-white/10 border border-indigo-200 dark:border-white/10 backdrop-blur-sm px-5 py-3.5 rounded-2xl text-xs font-bold text-indigo-900 dark:text-slate-300 transition-all cursor-pointer flex items-center gap-2 shadow-sm dark:shadow-none disabled:opacity-75"
              >
                <Download className={`w-4 h-4 text-indigo-600 dark:text-blue-400 ${downloading ? 'animate-bounce' : ''}`} />
                <span>{downloading ? 'Downloading PDF...' : 'Download Resume'}</span>
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 px-4 py-3.5 rounded-2xl text-xs font-bold text-purple-600 dark:text-purple-300 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Bot className="w-4 h-4 text-purple-500 dark:text-purple-400 animate-pulse" />
                <span>Ask AI</span>
              </button>
            </div>
          </div>

          {/* Profile Identity Card (col-span-4) - Full Length Image with Overlay Info */}
          <div className="md:col-span-4 bg-[#0a0f1d] border border-white/10 rounded-3xl relative overflow-hidden min-h-[420px] group flex flex-col justify-between p-6 shadow-2xl">
            {/* Full Length Profile Image with Smooth Zoom-In Motion */}
            <img
              src={data.avatarUrl || fallbackPhoto}
              alt={data.name}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== fallbackPhoto) {
                  target.src = fallbackPhoto;
                }
              }}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
            />

            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/30 to-black/20 pointer-events-none" />

            {/* Top Badge Overlay */}
            <div className="relative z-10 flex justify-end w-full">
              <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-xs text-emerald-400 font-semibold shadow-md">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span>Online & Available</span>
              </div>
            </div>

            {/* Bottom Overlay Content (Name, Title, Experience) */}
            <div className="relative z-10 flex flex-col items-center text-center w-full pt-20">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 font-display drop-shadow-md">
                {data.name}
              </h2>
              <p className="text-indigo-300 text-xs sm:text-sm font-semibold mb-3 drop-shadow">
                Senior Full Stack Engineer & AI Specialist
              </p>

              {/* Verified Experience Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold backdrop-blur-md shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>7+ Years Tech Experience</span>
              </div>
            </div>
          </div>

          {/* Stat Card 1: Builds */}
          <div className="md:col-span-3 sm:col-span-6 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 flex flex-col justify-center hover:border-indigo-500/40 transition-colors shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-1">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white leading-none font-display">30+</span>
              <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-[10px] uppercase text-slate-600 dark:text-slate-400 font-bold tracking-widest mt-1">Websites & Apps Built</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Enterprise & SaaS Platforms</span>
          </div>

          {/* Stat Card 2: Experience */}
          <div className="md:col-span-3 sm:col-span-6 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 flex flex-col justify-center hover:border-indigo-500/40 transition-colors shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-1">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white leading-none font-display">7+</span>
              <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            </div>
            <span className="text-[10px] uppercase text-slate-600 dark:text-slate-400 font-bold tracking-widest mt-1">Years Experience</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Full Stack Architecture</span>
          </div>

          {/* Stat Card 3: Enterprise */}
          <div className="md:col-span-3 sm:col-span-6 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 flex flex-col justify-center hover:border-indigo-500/40 transition-colors shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-1">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white leading-none font-display">15+</span>
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-[10px] uppercase text-slate-600 dark:text-slate-400 font-bold tracking-widest mt-1">Enterprise Projects</span>
            <span className="text-[11px] text-slate-500 mt-0.5">CRM, SaaS & Web3</span>
          </div>

          {/* Stat Card 4: AI & Global Clients */}
          <div className="md:col-span-3 sm:col-span-6 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 flex flex-col justify-center hover:border-indigo-500/40 transition-colors shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-1">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white leading-none font-display">100+</span>
              <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-[10px] uppercase text-slate-600 dark:text-slate-400 font-bold tracking-widest mt-1">Happy Global Clients</span>
            <span className="text-[11px] text-slate-500 mt-0.5">5-Star Feedback & Support</span>
          </div>

          {/* Tech Ecosystem Bento Card (col-span-8) */}
          <div className="md:col-span-8 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 relative overflow-hidden shadow-sm dark:shadow-none">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Tech Ecosystem & Core Stack</span>
              </h3>
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-indigo-500/40 rounded-full" />
                <span className="w-1.5 h-1.5 bg-indigo-500/40 rounded-full" />
                <span className="w-5 h-1.5 bg-indigo-500 rounded-full" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-indigo-500/40 hover:bg-indigo-50 dark:hover:bg-white/10 transition-colors"
                >
                  <span className={tech.color}>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Contact Status Bento Card (col-span-4) */}
          <div
            onClick={() => onNavigate('contact')}
            className="md:col-span-4 bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700 rounded-3xl p-6 flex flex-col justify-between cursor-pointer group hover:shadow-2xl hover:shadow-indigo-500/20 transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md text-white">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-8 text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-75 mb-1">
                Project Inquiry
              </p>
              <h3 className="text-xl font-bold font-display leading-tight">
                Let's Build Something Great Together
              </h3>
              <p className="text-xs opacity-80 font-light mt-1">
                Send a message or schedule a direct technical call.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
