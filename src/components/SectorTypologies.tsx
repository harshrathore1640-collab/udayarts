import React, { useState } from 'react';
import { ArrowUpRight, Award, Check, Building2, Sparkles, Heart } from 'lucide-react';
import { PROJECT_SECTORS } from '../data/content.ts';
import type { ProjectSector } from '../types/index.ts';
import { CraftImage } from './CraftImage.tsx';

interface SectorTypologiesProps {
  onSelectSectorForEnquiry: (sectorName: string) => void;
}

export const SectorTypologies: React.FC<SectorTypologiesProps> = ({
  onSelectSectorForEnquiry,
}) => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>(PROJECT_SECTORS[0].id);

  const activeSector =
    PROJECT_SECTORS.find((s) => s.id === selectedSectorId) || PROJECT_SECTORS[0];

  return (
    <section id="sectors" className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-[#F7F4EE] text-[#24231F] border-b border-[#DED6CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* National Award & 500+ Milestone Strip */}
        <div className="mb-16 p-6 sm:p-8 bg-[#E9E0D2]/50 border border-[#DED6CA] rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xs bg-[#24231F] text-[#96764B] flex items-center justify-center shrink-0 shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans">
                  Honored Recognition
                </span>
                <span className="text-[#DED6CA]">·</span>
                <span className="text-xs font-serif italic text-[#777168]">
                  National Award for Craftsmanship
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#24231F] mt-0.5">
                500+ Landmark Architectural Commissions Across India & Globally
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#777168] shrink-0 border-t md:border-t-0 md:border-l border-[#DED6CA] pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-between md:justify-start">
            <div>
              <span className="block font-serif text-2xl font-normal text-[#24231F]">500+</span>
              <span className="text-[11px] uppercase tracking-wider text-[#96764B]">Projects Delivered</span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-normal text-[#24231F]">Pan-India</span>
              <span className="text-[11px] uppercase tracking-wider text-[#96764B]">All States & Desks</span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-normal text-[#24231F]">National</span>
              <span className="text-[11px] uppercase tracking-wider text-[#96764B]">Award Atelier</span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#DED6CA] pb-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-2">
              Sectors & Typologies · Versatility of Scale
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#24231F] [text-wrap:balance]">
              Spaces We Transform
            </h2>
            <p className="mt-3 text-base text-[#777168] font-light leading-relaxed">
              Villas, luxury hotels, fine dining restaurants, colleges and schools, healthcare
              institutions, commercial flagships, and sacred sanctum temples.
            </p>
          </div>

          {/* Philosophy Statement Box */}
          <div className="max-w-md bg-[#24231F] text-[#F7F4EE] p-5 rounded-xs border border-[#3A332B] space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#96764B] font-sans font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Guiding Essence</span>
            </div>
            <p className="font-serif text-sm sm:text-base italic leading-relaxed text-[#E9E0D2]">
              &ldquo;Emotions and passions. Soul, unyielding effort, and boundless imagination
              breathed into every stone commission.&rdquo;
            </p>
          </div>
        </div>

        {/* Interactive Sector Selector Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist">
          {PROJECT_SECTORS.map((sector) => {
            const isSelected = sector.id === selectedSectorId;
            return (
              <button
                key={sector.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedSectorId(sector.id)}
                className={`px-4 py-2.5 text-xs font-sans uppercase tracking-[0.16em] font-medium whitespace-nowrap shrink-0 rounded-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#96764B] ${
                  isSelected
                    ? 'bg-[#24231F] text-[#F7F4EE] shadow-xs'
                    : 'bg-[#E9E0D2]/60 text-[#777168] hover:text-[#24231F] hover:bg-[#E9E0D2]'
                }`}
              >
                {sector.name}
              </button>
            );
          })}
        </div>

        {/* Active Sector Showcase Card */}
        <div className="bg-[#E9E0D2]/30 border border-[#DED6CA] rounded-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10">
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xs overflow-hidden border border-[#DED6CA] group shadow-sm">
                <CraftImage
                  src={activeSector.image}
                  alt={activeSector.name}
                  aspectRatio="16/9"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-104"
                  title={activeSector.name}
                  subtitle={activeSector.tagline}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-sans uppercase tracking-[0.2em] bg-[#24231F]/90 text-[#F7F4EE] backdrop-blur-xs rounded-xs">
                    National Award Excellence
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-[#777168] font-serif italic">
                <span>Representative Commission Portfolio</span>
                <span className="font-sans not-italic text-[11px] text-[#96764B]">
                  {activeSector.scopeExample}
                </span>
              </div>
            </div>

            {/* Narrative & Specifications Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-1">
                  Architectural Typology
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#24231F]">
                  {activeSector.name}
                </h3>
                <p className="mt-1 text-sm font-serif italic text-[#777168]">
                  {activeSector.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#777168] font-light leading-relaxed">
                {activeSector.description}
              </p>

              {/* Bespoke Craft Highlights */}
              <div className="pt-4 border-t border-[#DED6CA] space-y-2.5">
                <span className="block text-xs uppercase tracking-[0.2em] text-[#96764B] font-sans font-medium">
                  Atelier Architectural Applications
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#24231F]">
                  {activeSector.craftHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#96764B] shrink-0 mt-0.5" />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#777168] italic font-serif">
                  Custom 3D CAD modeling, material selection & structural engineering included.
                </span>

                <button
                  onClick={() => onSelectSectorForEnquiry(activeSector.name)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#24231F] text-[#F7F4EE] text-xs uppercase tracking-[0.16em] font-medium rounded-xs hover:bg-[#38332E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B] shadow-xs"
                >
                  <span>Commission for {activeSector.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#96764B]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
