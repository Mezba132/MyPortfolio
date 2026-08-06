import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioData, AnalyticsData } from './types';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Services } from './components/Services';
import { Blog } from './components/Blog';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { CommandPalette } from './components/CommandPalette';
import { ReadingProgressBar } from './components/ReadingProgressBar';

export function App() {
  const [data, setData] = useState<PortfolioData>(initialPortfolioData);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageVisits: 1420,
    resumeDownloads: 340,
    contactSubmissions: 48
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app-theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    return 'dark';
  });
  const [activeSection, setActiveSection] = useState<string>('home');
  const [aiAssistantOpen, setAiAssistantOpen] = useState<boolean>(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);

  // Initialize theme class on document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    try {
      localStorage.setItem('app-theme', theme);
    } catch (e) {
      // localStorage may fail in restricted sandboxes
    }
  }, [theme]);

  // Global Ctrl+K or Cmd+K shortcut listener for Search Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch data & record page visit
  useEffect(() => {
    const initData = async () => {
      try {
        const res = await fetch('/api/portfolio');
        if (res.ok) {
          const fetchedData = await res.json();
          setData(fetchedData);
        }
      } catch (err) {
        console.warn('Using client fallback data', err);
      }

      // Record page visit
      try {
        const resVisit = await fetch('/api/analytics/visit', { method: 'POST' });
        if (resVisit.ok) {
          const stats = await resVisit.json();
          if (stats.analytics) {
            setAnalytics(stats.analytics);
          }
        }
      } catch (err) {
        // silent
      }
    };

    initData();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTriggerDownload = async () => {
    // 1. Post analytics count asynchronously
    try {
      const res = await fetch('/api/analytics/download-resume', { method: 'POST' });
      if (res.ok) {
        const result = await res.json();
        if (result.analytics) {
          setAnalytics(result.analytics);
        }
      }
    } catch (err) {
      // silent
    }

    // 2. Download PDF using Blob object URL to guarantee browser & iframe compatibility
    try {
      const res = await fetch('/api/resume/download');
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Nokibul_Amin_Mezba_Software_Engineer_Resume.pdf';
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        if (document.body.contains(a)) {
          document.body.removeChild(a);
        }
        window.URL.revokeObjectURL(url);
      }, 1500);
    } catch (err) {
      console.error('Blob PDF download failed, falling back to window location/open:', err);
      // Fallback: direct window trigger
      window.open('/api/resume/download', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#03060d] dark:text-slate-200 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300 relative overflow-x-hidden">
      {/* Scroll-linked Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Background Ambient Orbs for Bento Theme */}
      <div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-900/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      
      {/* Sticky Top Navigation */}
      <Navbar
        isDarkMode={theme === 'dark'}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="space-y-4">
        {/* Hero Section */}
        <Hero
          data={data.profile}
          stats={data.stats}
          onNavigate={handleNavigate}
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
          onTriggerDownload={handleTriggerDownload}
        />

        {/* About Section */}
        <About data={data.profile} education={data.education} />

        {/* Career Experience Section */}
        <Experience experiences={data.experiences} />

        {/* Skills Section */}
        <Skills categories={data.skills} />

        {/* Projects Section */}
        <Projects projects={data.projects} />

        {/* Certifications Section */}
        <Certifications certifications={data.certifications} />

        {/* Services & Estimator Section */}
        <Services
          services={data.services}
          onNavigateContact={() => handleNavigate('contact')}
        />

        {/* Technical Blog Section */}
        <Blog blogs={data.blogs} />

        {/* Testimonials Section */}
        <Testimonials testimonials={data.testimonials} />

        {/* Contact Section */}
        <Contact
          data={data.profile}
          onContactSubmitted={() => {
            setAnalytics((prev) => ({
              ...prev,
              contactSubmissions: prev.contactSubmissions + 1
            }));
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={data.profile}
        analytics={analytics}
        onNavigate={handleNavigate}
      />

      {/* Floating AI Agent Drawer */}
      <AiAssistantDrawer
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />

      {/* Command Palette / Search Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        data={data}
        onNavigate={handleNavigate}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
      />
    </div>
  );
}

export default App;
