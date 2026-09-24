import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Layers } from 'lucide-react';
import { ProjectImage } from '../types';

interface ProjectImageSliderProps {
  images?: ProjectImage[];
  fallbackImage: string;
  projectTitle: string;
  onImageClick?: () => void;
  aspectRatioClass?: string;
  showCaption?: boolean;
  className?: string;
  autoSlideInterval?: number; // In ms, default 4500. 0 = disabled
}

export const ProjectImageSlider: React.FC<ProjectImageSliderProps> = ({
  images = [],
  fallbackImage,
  projectTitle,
  onImageClick,
  aspectRatioClass = "aspect-[16/10]",
  showCaption = true,
  className = "",
  autoSlideInterval = 4500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Normalize image list
  const slides = images && images.length > 0 ? images : [{ src: fallbackImage, alt: projectTitle, caption: '' }];
  const hasMultiple = slides.length > 1;

  // Auto slide effect
  useEffect(() => {
    if (!hasMultiple || isHovered || autoSlideInterval <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [hasMultiple, isHovered, slides.length, autoSlideInterval]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // swipe left -> next
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      } else {
        // swipe right -> prev
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
    touchStartXRef.current = null;
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={`relative w-full overflow-hidden select-none group/slider ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={onImageClick}
    >
      {/* Slide Image Container */}
      <div className={`w-full ${aspectRatioClass} bg-slate-950 dark:bg-slate-950 light:bg-slate-100/90 flex items-center justify-center relative overflow-hidden`}>
        <img
          key={currentSlide.src}
          src={currentSlide.src}
          alt={currentSlide.alt || `${projectTitle} image ${currentIndex + 1}`}
          className="w-full h-full object-contain transition-all duration-300 group-hover/slider:scale-[1.02] animate-fadeIn"
          loading="lazy"
        />

        {/* Multi-Photo Counter Badge */}
        {hasMultiple && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 dark:bg-slate-950/80 light:bg-white/95 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 border border-cyan-500/40 dark:border-cyan-500/40 light:border-cyan-400 backdrop-blur-md shadow-md">
              <Layers className="w-3 h-3 text-cyan-400 light:text-cyan-600" />
              <span>{currentIndex + 1}/{slides.length}</span>
            </span>
          </div>
        )}

        {/* Left Slide Arrow */}
        {hasMultiple && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/70 dark:bg-slate-950/70 light:bg-white/95 hover:bg-cyan-950/90 dark:hover:bg-cyan-950/90 light:hover:bg-cyan-50 text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-white dark:hover:text-white light:hover:text-cyan-700 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 hover:border-cyan-400/80 flex items-center justify-center backdrop-blur-sm shadow-lg transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover/slider:opacity-100 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Right Slide Arrow */}
        {hasMultiple && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/70 dark:bg-slate-950/70 light:bg-white/95 hover:bg-cyan-950/90 dark:hover:bg-cyan-950/90 light:hover:bg-cyan-50 text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-white dark:hover:text-white light:hover:text-cyan-700 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 hover:border-cyan-400/80 flex items-center justify-center backdrop-blur-sm shadow-lg transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover/slider:opacity-100 hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Dot Indicators */}
        {hasMultiple && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/75 dark:bg-slate-950/75 light:bg-white/95 border border-slate-800 dark:border-slate-800 light:border-slate-300 backdrop-blur-sm shadow-md">
            {slides.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => handleDotClick(e, idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-200 cursor-pointer rounded-full ${
                    isActive
                      ? 'w-4 h-1.5 bg-cyan-400 dark:bg-cyan-400 light:bg-cyan-600 shadow-[0_0_6px_rgba(6,182,212,0.8)]'
                      : 'w-1.5 h-1.5 bg-slate-600 dark:bg-slate-600 light:bg-slate-300 hover:bg-slate-400 dark:hover:bg-slate-400 light:hover:bg-slate-500'
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Caption bar */}
      {showCaption && currentSlide.caption && (
        <div className="flex items-center justify-between pt-2 px-2.5 pb-1 text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border-t border-transparent light:border-slate-200">
          <span className="flex items-center gap-1.5 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 font-medium truncate">
            <ImageIcon className="w-3 h-3 text-cyan-400 light:text-cyan-600 shrink-0" />
            <span className="truncate">{currentSlide.caption}</span>
          </span>
          {hasMultiple && (
            <span className="text-slate-500 text-[10px] shrink-0 ml-2">
              Slide to view all ({slides.length})
            </span>
          )}
        </div>
      )}
    </div>
  );
};
