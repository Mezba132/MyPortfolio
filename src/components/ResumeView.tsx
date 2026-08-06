import React from 'react';
import {
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { PortfolioData } from '../types';

interface ResumeViewProps {
  profile: PortfolioData['profile'];
  experiences: PortfolioData['experiences'];
  education: PortfolioData['education'];
  onTriggerDownload: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({
  profile,
  experiences,
  education,
  onTriggerDownload
}) => {
  const handlePrint = () => {
    onTriggerDownload();
    window.print();
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="w-[92%] sm:w-[88%] lg:w-[80%] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Official Curriculum Vitae
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Formatted printable resume of Nokibul Amin Mezba. Click below to save as PDF.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={handlePrint}
              className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF Resume</span>
            </button>
          </div>
        </div>

        {/* Formatted Printable Paper Card */}
        <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-200 space-y-8 font-sans print:p-0 print:shadow-none print:border-none">
          
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b-2 border-slate-900">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight font-display text-slate-900">
                {profile.name}
              </h1>
              <p className="text-sm font-bold text-indigo-600 mt-1">
                {profile.title} | AI & Web3 Developer
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-600" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>{profile.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-indigo-600" />
                <span>github.com/csmezba</span>
              </div>
            </div>
          </div>

          {/* Profile Statement */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Professional Profile
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              {profile.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs">
                    <span className="text-slate-900 text-sm font-display">{exp.role}</span>
                    <span className="text-indigo-600 font-mono">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700">
                    {exp.company} — {exp.location}
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Education</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {education.map((edu) => (
                <div key={edu.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">{edu.degree}</div>
                  <div className="text-indigo-600 font-semibold text-[11px]">{edu.institution}</div>
                  <div className="text-slate-500 text-[10px] font-mono">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Languages & Personal Hobbies */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-4 text-xs text-slate-600">
            <div>
              <span className="font-bold text-slate-900 block mb-1">Languages:</span>
              <span>English (Fluent / Professional), Bengali (Native)</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">Hobbies & Passions:</span>
              <span>Open Source Development, Gaming, Traveling, Technology Research</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
