import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Sparkles, 
  Check, 
  Copy, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { downloadCvPdf } from '../utils/cvDownload';

interface RecruiterSnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterSnapshotModal: React.FC<RecruiterSnapshotModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruiter-snapshot-title"
    >
      <div className="bg-[#0c121e] border border-cyan-800/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-auto animate-in zoom-in-95 duration-200">
        
        {/* Top Badges & Close Button */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                Recruiter Snapshot
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                30–60 Second Executive Candidate Summary
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Recruiter Snapshot"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Candidate Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative group shrink-0">
              <div className="w-16 h-16 rounded-xl p-0.5 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20 overflow-hidden">
                <img
                  src={profileData.photo}
                  alt={profileData.name}
                  className="w-full h-full rounded-[10px] object-cover object-top bg-slate-900"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== profileData.photoGithubRaw) {
                      target.src = profileData.photoGithubRaw;
                    }
                  }}
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0c121e]" title="Available" />
            </div>

            <div>
              <h2 id="recruiter-snapshot-title" className="text-xl sm:text-2xl font-black text-slate-100 font-mono tracking-tight">
                {profileData.name}
              </h2>
              <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                {profileData.title}
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            
            {/* Core Competencies */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase">Core Stack &amp; Skills</span>
              <div className="text-xs text-slate-200 font-medium">
                Python, SQL, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn
              </div>
              <div className="text-[11px] text-slate-400">
                Regression, Clustering, Classification, Feature Engineering, PCA, EDA
              </div>
            </div>

            {/* Academic Track */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase">Academic Background</span>
              <div className="text-xs text-slate-200 font-medium">
                B.Sc. (Hons) in Mathematics
              </div>
              <div className="text-[11px] text-slate-400">
                4th Year — Running (Expected 2027) · Govt. Shaheed Asad College
              </div>
            </div>

          </div>

          {/* Featured Project Snapshot */}
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-cyan-300">Featured Work: Customer Segmentation</span>
              <span className="text-emerald-400 font-semibold">k=2 · s=0.2600</span>
            </div>
            <p className="text-xs text-slate-300 leading-snug">
              Segmented 8,950 credit card customers using K-Means, Hierarchical &amp; DBSCAN across 15 features with 9 PCA components capturing 95% variance.
            </p>
          </div>

          {/* Contact Fast Copy Actions */}
          <div className="space-y-2 pt-1 font-mono text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.email}</span>
              </div>
              <button
                onClick={() => copyToClipboard(profileData.email, 'email')}
                className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.displayPhone}</span>
              </div>
              <button
                onClick={() => copyToClipboard(profileData.phone.replace('tel:', ''), 'phone')}
                className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 cursor-pointer"
              >
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <a
              href={profileData.cv.downloadPath}
              download={profileData.cv.fileName}
              onClick={(e) => {
                e.preventDefault();
                downloadCvPdf();
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/25 transition-all cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV PDF</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
