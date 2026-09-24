import React from 'react';
import { 
  FileText, 
  ExternalLink, 
  Download, 
  FileCode, 
  FileArchive, 
  FileSpreadsheet, 
  File as GenericFile
} from 'lucide-react';
import { ProjectFile } from '../types';

interface ProjectFilesProps {
  files: ProjectFile[];
}

export const ProjectFiles: React.FC<ProjectFilesProps> = ({ files }) => {
  if (!files || files.length === 0) {
    return (
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 text-center">
        No external files attached. Additional notebooks or artifacts can be added via <code>src/data/projects.ts</code>.
      </div>
    );
  }

  const getFileIcon = (type: string) => {
    switch (type.toUpperCase()) {
      case 'IPYNB':
      case 'PY':
        return <FileCode className="w-5 h-5 text-amber-400" />;
      case 'ZIP':
      case 'TAR':
        return <FileArchive className="w-5 h-5 text-indigo-400" />;
      case 'CSV':
      case 'XLSX':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'PDF':
      case 'DOCX':
      case 'PPTX':
        return <FileText className="w-5 h-5 text-rose-400" />;
      default:
        return <GenericFile className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type.toUpperCase()) {
      case 'IPYNB':
        return 'bg-amber-950/80 dark:bg-amber-950/80 light:bg-amber-100 text-amber-400 dark:text-amber-400 light:text-amber-800 border-amber-800/60 dark:border-amber-800/60 light:border-amber-300 font-semibold';
      case 'ZIP':
        return 'bg-indigo-950/80 dark:bg-indigo-950/80 light:bg-indigo-100 text-indigo-400 dark:text-indigo-400 light:text-indigo-800 border-indigo-800/60 dark:border-indigo-800/60 light:border-indigo-300 font-semibold';
      case 'CSV':
      case 'XLSX':
        return 'bg-emerald-950/80 dark:bg-emerald-950/80 light:bg-emerald-100 text-emerald-400 dark:text-emerald-400 light:text-emerald-800 border-emerald-800/60 dark:border-emerald-800/60 light:border-emerald-300 font-semibold';
      case 'PDF':
        return 'bg-rose-950/80 dark:bg-rose-950/80 light:bg-rose-100 text-rose-400 dark:text-rose-400 light:text-rose-800 border-rose-800/60 dark:border-rose-800/60 light:border-rose-300 font-semibold';
      default:
        return 'bg-cyan-950/80 dark:bg-cyan-950/80 light:bg-cyan-100 text-cyan-400 dark:text-cyan-400 light:text-cyan-800 border-cyan-800/60 dark:border-cyan-800/60 light:border-cyan-300 font-semibold';
    }
  };

  return (
    <div className="space-y-3">
      {files.map((file, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all gap-3"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
              {getFileIcon(file.type)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-100 font-mono">
                  {file.name}
                </span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border uppercase ${getTypeBadgeColor(file.type)}`}>
                  {file.type}
                </span>
                {file.size && (
                  <span className="text-[10px] text-slate-500 font-mono">
                    {file.size}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {file.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 sm:self-center">
            {file.isExternal ? (
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 dark:text-cyan-300 light:text-cyan-900 bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800 dark:border-cyan-800 light:border-cyan-300 hover:bg-cyan-900/60 dark:hover:bg-cyan-900/60 light:hover:bg-cyan-100 transition-colors shadow-xs"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <a
                href={file.url}
                download={file.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
