import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Facebook, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  const [isCopiedPhone, setIsCopiedPhone] = useState(false);
  const [formNotice, setFormNotice] = useState<string | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setIsCopiedEmail(true);
      setTimeout(() => setIsCopiedEmail(false), 2000);
    } else {
      setIsCopiedPhone(true);
      setTimeout(() => setIsCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormNotice('Please fill in your name, email, and message.');
      return;
    }

    // Construct mailto link fallback
    const subjectLine = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${profileData.email}?subject=${subjectLine}&body=${bodyContent}`;
    
    // Inform user and trigger email client safely
    setFormNotice('Opening your email client to send message...');
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 border-t border-[#1a2336] relative" aria-label="Contact Information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Contact &amp; Connect
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
          </div>

          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            Available for full-time Junior Data Scientist, Data Analyst positions, technical interviews, and collaborative research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0e1626] border border-[#1f2d47] p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-slate-100 font-mono">
                Direct Channels
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Email</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors font-mono"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.email, 'email')}
                  className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {isCopiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Phone</span>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors font-mono"
                    >
                      {profileData.displayPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.phone.replace('tel:', ''), 'phone')}
                  className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {isCopiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="p-2 rounded-lg bg-slate-950 text-rose-400 border border-slate-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {profileData.location}
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Online Profiles:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0077b5] text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#0077b5]" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-white" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                </div>

                {/* Secondary social link */}
                <div className="pt-1">
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-[#1877f2] text-xs font-mono text-slate-400 hover:text-slate-200 transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Facebook className="w-4 h-4 text-[#1877f2]" />
                      <span>Facebook (Secondary Social)</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Mailto fallback */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0e1626] border border-[#1f2d47] p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-slate-100 font-mono">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Junior Data Scientist / Data Analyst Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Sakib, we reviewed your customer segmentation project and would like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {formNotice && (
                  <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-800 text-xs font-mono text-cyan-300">
                    {formNotice}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Mail Client</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-mono mt-2">
                  No automated third-party tracking. Opens standard mailto directly to sakibzzz641@gmail.com.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
