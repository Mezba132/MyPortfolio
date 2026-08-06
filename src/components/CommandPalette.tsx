import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  X,
  Code2,
  Briefcase,
  Wrench,
  FolderGit2,
  Award,
  BookOpen,
  FileText,
  Mail,
  User,
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { PortfolioData } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onNavigate: (sectionId: string) => void;
  onOpenAiAssistant: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  data,
  onNavigate,
  onOpenAiAssistant
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle global Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build searchable items list
  const navigationItems = [
    { id: 'home', title: 'Home', section: 'Navigation', icon: Code2, action: () => onNavigate('home') },
    { id: 'about', title: 'About Nokibul Amin Mezba', section: 'Navigation', icon: User, action: () => onNavigate('about') },
    { id: 'experience', title: 'Experience & Career', section: 'Navigation', icon: Briefcase, action: () => onNavigate('experience') },
    { id: 'skills', title: 'Technical Skills & Stack', section: 'Navigation', icon: Wrench, action: () => onNavigate('skills') },
    { id: 'projects', title: 'Projects & Work', section: 'Navigation', icon: FolderGit2, action: () => onNavigate('projects') },
    { id: 'services', title: 'Services & Estimator', section: 'Navigation', icon: Award, action: () => onNavigate('services') },
    { id: 'blogs', title: 'Articles & Tech Blog', section: 'Navigation', icon: BookOpen, action: () => onNavigate('blogs') },
    { id: 'contact', title: 'Contact & Hire', section: 'Navigation', icon: Mail, action: () => onNavigate('contact') },
  ];

  const aiAction = {
    id: 'ai-assistant',
    title: 'Ask AI Assistant',
    subtitle: 'Chat with AI to learn more about experience and skills',
    section: 'Actions',
    icon: Sparkles,
    action: () => {
      onOpenAiAssistant();
      onClose();
    }
  };

  const projectItems = (data.projects || []).map((proj) => ({
    id: `proj-${proj.id}`,
    title: proj.title,
    subtitle: `${proj.category} — ${(proj.subtitle || '').slice(0, 60)}...`,
    section: 'Projects',
    icon: FolderGit2,
    action: () => {
      onNavigate('projects');
      onClose();
    }
  }));

  const blogItems = (data.blogs || []).map((b) => ({
    id: `blog-${b.id}`,
    title: b.title,
    subtitle: `${b.category} — ${b.readTime}`,
    section: 'Blog Posts',
    icon: BookOpen,
    action: () => {
      onNavigate('blogs');
      onClose();
    }
  }));

  const experienceItems = (data.experiences || []).map((exp) => ({
    id: `exp-${exp.id}`,
    title: `${exp.role} @ ${exp.company}`,
    subtitle: `${exp.period} — ${exp.location}`,
    section: 'Experience',
    icon: Briefcase,
    action: () => {
      onNavigate('experience');
      onClose();
    }
  }));

  const allSearchable = [
    aiAction,
    ...navigationItems,
    ...projectItems,
    ...blogItems,
    ...experienceItems
  ];

  const filtered = query.trim() === ''
    ? allSearchable
    : allSearchable.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())) ||
          item.section.toLowerCase().includes(query.toLowerCase())
      );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
        onClose();
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-2xl bg-slate-900 dark:bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col text-slate-200"
        >
          {/* Search Header Input */}
          <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
            <Search className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search projects, skills, sections, or ask AI..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded text-slate-400 hover:text-white mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-slate-800 border border-slate-700 rounded text-slate-400">
              ESC
            </kbd>
          </div>

          {/* Search Results List */}
          <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-800/40">
            {filtered.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-sm">
                No results found for &quot;<span className="text-white font-medium">{query}</span>&quot;
              </div>
            ) : (
              filtered.map((item, index) => {
                const Icon = item.icon;
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600/20 text-white border border-indigo-500/30'
                        : 'text-slate-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-semibold text-slate-100 truncate">
                          {item.title}
                        </div>
                        {item.subtitle && (
                          <div className="text-[11px] text-slate-400 truncate">
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-indigo-300 border border-slate-700/50">
                        {item.section}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-indigo-400' : 'text-slate-600'}`} />
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts hint */}
          <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-3">
              <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-400 font-mono">↑↓</kbd> Navigate</span>
              <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-400 font-mono">↵</kbd> Select</span>
              <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-400 font-mono">ESC</kbd> Close</span>
            </div>
            <span className="text-indigo-400 font-medium">Quick Search</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
