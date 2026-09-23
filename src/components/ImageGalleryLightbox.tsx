import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from 'lucide-react';
import { ProjectImage } from '../types';

interface ImageGalleryLightboxProps {
  images: ProjectImage[];
  projectTitle: string;
}

export const ImageGalleryLightbox: React.FC<ImageGalleryLightboxProps> = ({
  images,
  projectTitle
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % images.length));
    }
  }, [lightboxIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? images.length - 1 : prev! - 1));
    }
  }, [lightboxIndex, images.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose, handleNext, handlePrev]);

  if (!images || images.length === 0) {
    return (
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
        <ImageIcon className="w-4 h-4 text-slate-500" />
        <span>No custom visual charts uploaded yet. Use technical placeholder.</span>
      </div>
    );
  }

  const currentImg = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <div className="space-y-4">
      {/* Thumbnail Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, idx) => (
          <div
            key={idx}
            onClick={() => setLightboxIndex(idx)}
            className="group relative rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/70 bg-slate-950/80 cursor-pointer transition-all duration-200"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900/80 flex items-center justify-center p-2">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 text-cyan-300 text-xs font-mono transition-opacity">
              <ZoomIn className="w-4 h-4" />
              <span>Click to Enlarge</span>
            </div>

            {/* Caption in thumbnail card */}
            {image.caption && (
              <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 text-[11px] text-slate-300 truncate">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && currentImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview: ${currentImg.alt}`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-slate-300 max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-cyan-300">
                {lightboxIndex! + 1} / {images.length}
              </span>
              <span className="text-sm font-semibold text-slate-200 hidden sm:inline truncate max-w-md">
                {projectTitle}
              </span>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image View with Nav Buttons */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full">
            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all z-10 cursor-pointer shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="max-h-[75vh] max-w-full flex items-center justify-center p-2">
              <img
                src={currentImg.src}
                alt={currentImg.alt}
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
              />
            </div>

            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all z-10 cursor-pointer shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Caption & Alt text */}
          <div className="max-w-3xl mx-auto w-full text-center">
            {currentImg.caption && (
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                {currentImg.caption}
              </p>
            )}
            <p className="text-xs text-slate-400 mt-1 font-mono">
              {currentImg.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
