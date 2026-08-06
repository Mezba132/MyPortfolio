import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock
} from 'lucide-react';
import { PortfolioData } from '../types';

interface ContactProps {
  data: PortfolioData['profile'];
  onContactSubmitted?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ data, onContactSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '$1,000 - $5,000'
  });

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSubmittedSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          budget: '$1,000 - $5,000'
        });
        if (onContactSubmitted) onContactSubmitted();
      } else {
        setErrorMessage(result.error || 'Failed to submit message. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error while sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="w-[90%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-blue-400">
              Extraordinary Together
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Have a project in mind, an enterprise role to discuss, or a custom AI system to build? Get in touch today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Card */}
            <div className="p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 shadow-2xl space-y-6 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white font-display">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Email Address</span>
                    <span className="text-sm font-bold text-white font-mono">{data.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${data.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Direct Line & WhatsApp</span>
                    <span className="text-sm font-bold text-white font-mono">{data.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Physical Location</span>
                    <span className="text-sm font-bold text-white">{data.address}</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for immediate freelance sprints or full-time roles.</span>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="p-6 rounded-3xl bg-indigo-950/40 border border-indigo-500/20 text-white space-y-3 backdrop-blur-md">
              <h4 className="font-bold text-sm font-display flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Fast Response Time Guaranteed</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                All inquiries submitted through this portal are directly processed and answered within 2 to 4 business hours.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0f1d] border border-white/10 shadow-2xl space-y-6 backdrop-blur-md">
              
              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below to receive a custom project scope proposal.
                </p>
              </div>

              {submittedSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-400 font-display">
                    Message Delivered Successfully!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Nokibul Amin Mezba will review your message and reply to your email shortly.
                  </p>
                  <button
                    onClick={() => setSubmittedSuccess(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Project Inquiry, Enterprise Role..."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Under $1,000" className="bg-slate-900 text-white">Under $1,000</option>
                        <option value="$1,000 - $5,000" className="bg-slate-900 text-white">$1,000 - $5,000</option>
                        <option value="$5,000 - $15,000" className="bg-slate-900 text-white">$5,000 - $15,000</option>
                        <option value="$15,000+" className="bg-slate-900 text-white">$15,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">
                      Message & Requirements
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your vision, timeline, tech stack, or goal..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-xl hover:bg-indigo-500 transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Delivering Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message & Proposal Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
