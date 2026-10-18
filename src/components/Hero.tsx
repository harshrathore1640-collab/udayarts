import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content.ts';
import { CraftImage } from './CraftImage.tsx';

interface HeroProps {
  onExploreCraft: () => void;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCraft, onOpenEnquiry }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#24231E] text-[#F7F4EE] overflow-hidden"
    >
      {/* Background Craftsmanship Visual with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <CraftImage
          src="https://openaccess-cdn.clevelandart.org/1961.93/1961.93_web.jpg"
          alt="Master hand-carved stone temple sanctum and architectural sculpture"
          className="w-full h-full object-cover"
          fallbackTone="#201D1A"
          title="Uday Arts Master Atelier"
          subtitle="Artisanal Architecture & Sacred Sculpture"
        />
        {/* Measured curatorial contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24231E] via-[#24231E]/60 to-[#24231E]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(36,35,31,0.6)_100%)] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-32 pb-24 text-center flex flex-col items-center">
        {/* Restrained Eyebrow Kicker */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-px bg-[#96764B]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-sans text-[#E9E0D2]/90 font-medium">
            National Award Atelier · 500+ Projects All Over India
          </span>
          <span className="w-6 h-px bg-[#96764B]" />
        </div>

        {/* Major Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F7F4EE] font-normal leading-[1.08] max-w-4xl [text-wrap:balance]">
          Artistry Carved <br className="hidden sm:inline" />
          <span className="italic font-light text-[#E9E0D2]">Into Eternity</span>
        </h1>

        {/* Lead Supporting Statement */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-[#DED6CA] max-w-3xl font-light leading-relaxed">
          Infusing emotion, passion, soul, and boundless imagination into every creation.
          Architectural stone sculptures and 3D crafting for luxury villas, prestigious hotels,
          schools, colleges, hospitals, commercial towers, fine dining, and sacred temple sanctums.
        </p>

        {/* Balanced CTA Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Primary Button */}
          <button
            onClick={onExploreCraft}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#F7F4EE] text-[#24231F] text-xs uppercase tracking-[0.2em] font-medium rounded-xs hover:bg-[#E9E0D2] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B] shadow-sm"
          >
            <span>Explore Our Craft</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#96764B]" />
          </button>

          {/* Secondary Text Link / Button */}
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#F7F4EE] hover:text-[#96764B] border border-[#F7F4EE]/30 hover:border-[#96764B] rounded-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B]"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Curatorial Provenance Strip */}
        <div className="mt-16 pt-8 border-t border-[#F7F4EE]/15 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-3xl text-left">
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#96764B] font-sans">
              Recognition
            </span>
            <span className="block text-sm font-serif text-[#F7F4EE] mt-1">
              National Award Winner
            </span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#96764B] font-sans">
              Milestone
            </span>
            <span className="block text-sm font-serif text-[#F7F4EE] mt-1">
              500+ Projects Across India
            </span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#96764B] font-sans">
              Philosophy
            </span>
            <span className="block text-sm font-serif text-[#F7F4EE] mt-1">
              Soul, Emotion & Effort
            </span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#96764B] font-sans">
              Sectors
            </span>
            <span className="block text-sm font-serif text-[#F7F4EE] mt-1">
              Villas, Hotels, Campuses & Temples
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#E9E0D2]">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-[#E9E0D2] to-transparent" />
      </div>
    </section>
  );
};
