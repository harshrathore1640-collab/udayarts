import React, { useState } from 'react';

interface CraftImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | 'auto';
  fallbackTone?: string;
  title?: string;
  subtitle?: string;
  priority?: boolean;
}

export const CraftImage: React.FC<CraftImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  fallbackTone = '#2A2520',
  title,
  subtitle,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Aspect ratio classes
  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
        ? 'aspect-[4/3]'
        : aspectRatio === '3/4'
          ? 'aspect-[3/4]'
          : aspectRatio === '1/1'
            ? 'aspect-square'
            : '';

  return (
    <div
      className={`relative overflow-hidden bg-[#24211D] ${aspectClass} ${className}`}
      style={{ backgroundColor: fallbackTone }}
    >
      {/* Fallback Architectural Bas-Relief Graphic */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none transition-opacity duration-700 ${
          hasError || !isLoaded ? 'opacity-100 z-0' : 'opacity-0 -z-10'
        }`}
        style={{
          background: `radial-gradient(ellipse at 50% 35%, rgba(150, 118, 75, 0.28) 0%, rgba(40, 35, 30, 0.92) 70%, rgba(26, 23, 20, 0.98) 100%), ${fallbackTone}`,
        }}
      >
        {/* Subtle Architectural Stone Grid & Jaali Motif */}
        <div className="relative mb-3 flex items-center justify-center">
          <svg
            className="w-20 h-20 text-[#96764B]/50 transition-transform duration-500 group-hover:scale-110"
            viewBox="0 0 120 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            {/* Outer Sanctum Mandala */}
            <circle cx="60" cy="60" r="54" strokeDasharray="3 3" opacity="0.6" />
            <circle cx="60" cy="60" r="46" stroke="#96764B" strokeWidth="0.8" />
            {/* Eight-fold Lotus Star Geometry */}
            <polygon points="60,14 74,46 106,60 74,74 60,106 46,74 14,60 46,46" stroke="#96764B" opacity="0.8" />
            <polygon points="60,26 84,60 60,94 36,60" stroke="#96764B" opacity="0.5" />
            <circle cx="60" cy="60" r="16" fill="rgba(150, 118, 75, 0.15)" stroke="#96764B" />
            <circle cx="60" cy="60" r="6" fill="#96764B" opacity="0.6" />
            {/* Chisel Alignment Axes */}
            <line x1="60" y1="6" x2="60" y2="114" stroke="#96764B" strokeDasharray="2 3" opacity="0.4" />
            <line x1="6" y1="60" x2="114" y2="60" stroke="#96764B" strokeDasharray="2 3" opacity="0.4" />
          </svg>
        </div>

        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#96764B] font-sans font-medium">
          {subtitle || 'Uday Arts Atelier'}
        </span>
        {title && (
          <h4 className="text-sm sm:text-base font-serif text-[#F7F4EE]/90 max-w-sm mt-1.5 [text-wrap:balance]">
            {title}
          </h4>
        )}
        <span className="mt-2 text-[10px] uppercase tracking-widest text-[#DED6CA]/50 font-sans">
          Handcrafted Canonical Stonecraft
        </span>
      </div>

      {/* Main Image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          }`}
        />
      )}

      {/* Subtle hairline edge vignette */}
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10" />
    </div>
  );
};
