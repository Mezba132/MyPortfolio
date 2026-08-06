import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  Heart,
  ArrowUp
} from 'lucide-react';
import { AnalyticsData, PortfolioData } from '../types';

interface FooterProps {
  profile: PortfolioData['profile'];
  analytics?: AnalyticsData;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onNavigate
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#03060d] text-slate-600 dark:text-slate-400 pt-16 pb-12 border-t border-slate-200 dark:border-white/10 relative overflow-hidden">
      <div className="w-[90%] mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand & Summary */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30">
                N
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">{profile.name}</h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">Senior Full Stack & AI Developer</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md font-light">
              Architecting high-scale enterprise CRM engines, Next.js 15 applications, NestJS microservices, and AI integrations with sub-second performance.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.githubUrl || profile.github || 'https://github.com/csmezba'}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-200 shadow-sm dark:shadow-none"
                title="GitHub (csmezba)"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl || profile.linkedin || 'https://www.linkedin.com/in/mezba132/'}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-blue-500/50 transition-all duration-200 shadow-sm dark:shadow-none"
                title="LinkedIn (mezba132)"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email || 'csmezba@gmail.com'}`}
                className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-200 shadow-sm dark:shadow-none"
                title="Gmail (csmezba@gmail.com)"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profile.facebookUrl || 'https://www.facebook.com/people/Mira-Labs-BD/61591933573568/'}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-blue-600/50 transition-all duration-200 shadow-sm dark:shadow-none"
                title="Facebook (Mira Labs BD)"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={profile.instagramUrl || 'https://www.instagram.com/mira.labs29'}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-pink-500/50 transition-all duration-200 shadow-sm dark:shadow-none"
                title="Instagram (mira.labs29)"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="flex flex-wrap md:flex-col gap-x-6 gap-y-2 text-xs font-medium">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer text-slate-600 dark:text-slate-400 font-light"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Nokibul Amin Mezba. Built with</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors cursor-pointer shadow-sm dark:shadow-none"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
