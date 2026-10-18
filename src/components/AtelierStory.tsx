import React, { useState } from 'react';
import { MATERIAL_SPECS } from '../data/content.ts';
import { CraftImage } from './CraftImage.tsx';

export const AtelierStory: React.FC = () => {
  const [activeMaterialIndex, setActiveMaterialIndex] = useState(0);

  return (
    <section id="atelier" className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-[#28231E] text-[#F7F4EE] border-b border-[#3A332B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-xs overflow-hidden border border-[#3A332B]">
              <CraftImage
                src="https://openaccess-cdn.clevelandart.org/2007.155/2007.155_web.jpg"
                alt="Master stone carver working in atelier studio"
                aspectRatio="3/4"
                className="w-full object-cover"
                title="The Sculptor's Hand"
                subtitle="Monolithic Granite Masterwork"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-[#777168] font-serif italic">
              <span>Rajasthan Atelier Workshop · Raw block to finished sanctum</span>
              <span className="font-sans not-italic text-[#96764B] uppercase tracking-wider text-[11px]">
                Tradition & Innovation
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Material Lineage */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-2">
                Section F · The Atelier Narrative
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F7F4EE] leading-[1.15] [text-wrap:balance]">
                Honoring the Sacred Grain, Sculpting for Epochs
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#DED6CA] font-light leading-relaxed">
              <p>
                True craftsmanship requires patience that resists industrial haste.
                At Uday Arts, every monolithic idol and architectural panel passes
                through hereditary carvers whose fingertips understand the fracture
                planes and crystalline density of Indian stone.
              </p>
              <p>
                We do not mask stone with synthetic lacquers; instead, we hone surfaces
                using traditional agate stones, water, and natural oils until the marble
                glows with internal luminescence. This reverence for authenticity ensures
                our installations endure centuries without losing their sharp definition.
              </p>
            </div>

            {/* Material Taxonomy Selector */}
            <div className="pt-6 border-t border-[#3A332B]">
              <span className="text-xs uppercase tracking-[0.2em] text-[#96764B] font-sans font-medium block mb-4">
                Curated Material Mastery
              </span>

              {/* Material Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {MATERIAL_SPECS.map((mat, idx) => (
                  <button
                    key={mat.name}
                    onClick={() => setActiveMaterialIndex(idx)}
                    className={`px-3 py-1.5 text-xs font-sans uppercase tracking-wider rounded-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#96764B] ${
                      activeMaterialIndex === idx
                        ? 'bg-[#96764B] text-[#F7F4EE]'
                        : 'bg-[#201C18] text-[#777168] hover:text-[#DED6CA] border border-[#3A332B]'
                    }`}
                  >
                    {mat.name.split(' ')[0]} {mat.name.split(' ')[1] || ''}
                  </button>
                ))}
              </div>

              {/* Active Material Card */}
              <div className="bg-[#201C18] border border-[#3A332B] p-6 rounded-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl text-[#F7F4EE]">
                    {MATERIAL_SPECS[activeMaterialIndex].name}
                  </h4>
                  <span className="text-xs font-sans uppercase tracking-wider text-[#96764B]">
                    {MATERIAL_SPECS[activeMaterialIndex].origin}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#DED6CA] leading-relaxed">
                  {MATERIAL_SPECS[activeMaterialIndex].character}
                </p>
                <div className="pt-3 border-t border-[#3A332B] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#777168]">
                  <span>
                    <strong className="text-[#DED6CA]">Best Suited For: </strong>
                    {MATERIAL_SPECS[activeMaterialIndex].applications}
                  </span>
                  <span>
                    <strong className="text-[#DED6CA]">Durability: </strong>
                    {MATERIAL_SPECS[activeMaterialIndex].durability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
