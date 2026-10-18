import React, { useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { CRAFT_CATEGORIES } from '../data/content.ts';
import type { CraftCategory } from '../types/index.ts';
import { CraftImage } from './CraftImage.tsx';

interface CraftCategoriesProps {
  onSelectCategoryForEnquiry: (categorySlug: string) => void;
}

export const CraftCategories: React.FC<CraftCategoriesProps> = ({
  onSelectCategoryForEnquiry,
}) => {
  const [activeCategoryModal, setActiveCategoryModal] = useState<CraftCategory | null>(null);

  return (
    <section id="craft" className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-[#E9E0D2]/50 text-[#24231F] border-b border-[#DED6CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DED6CA] pb-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-2">
              Section B · Disciplines of the Atelier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#24231F] [text-wrap:balance]">
              Explore Our Craft
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#777168] font-light leading-relaxed">
            Four specialized divisions delivering artisanal masonry from sacred temple
            iconography to parametric architectural features.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CRAFT_CATEGORIES.map((craft, idx) => (
            <article
              key={craft.id}
              className="group bg-[#F7F4EE] border border-[#DED6CA] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#96764B]/60 hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <CraftImage
                  src={craft.image}
                  alt={craft.title}
                  aspectRatio="16/9"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  title={craft.title}
                  subtitle={craft.subtitle}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-sans uppercase tracking-[0.2em] bg-[#24231F]/90 text-[#F7F4EE] backdrop-blur-xs rounded-xs">
                    0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-sans uppercase tracking-widest text-[#96764B] font-medium block mb-1.5">
                    {craft.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#24231F] font-normal tracking-tight group-hover:text-[#96764B] transition-colors">
                    {craft.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#777168] font-light leading-relaxed line-clamp-3">
                    {craft.description}
                  </p>
                </div>

                {/* Key Material Specs Row */}
                <div className="mt-6 pt-5 border-t border-[#DED6CA]/70 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[#777168]">
                    <span className="font-medium text-[#24231F]">Primary: </span>
                    <span>{craft.materials[0]}</span>
                  </div>

                  <button
                    onClick={() => setActiveCategoryModal(craft)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#24231F] hover:text-[#96764B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#96764B]"
                    aria-label={`View full technical specifications for ${craft.title}`}
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#96764B]" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Category Specifications Modal */}
      {activeCategoryModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="category-modal-title"
        >
          <div className="bg-[#F7F4EE] border border-[#DED6CA] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xs shadow-2xl p-6 sm:p-8 relative text-[#24231F]">
            {/* Close Button */}
            <button
              onClick={() => setActiveCategoryModal(null)}
              className="absolute top-5 right-5 p-2 text-[#777168] hover:text-[#24231F] transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-1">
              Technical Monograph
            </span>
            <h3 id="category-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-[#24231F]">
              {activeCategoryModal.title}
            </h3>
            <p className="mt-1 text-sm text-[#777168] italic font-serif">
              {activeCategoryModal.subtitle}
            </p>

            <div className="my-6">
              <CraftImage
                src={activeCategoryModal.image}
                alt={activeCategoryModal.title}
                aspectRatio="16/9"
                className="w-full rounded-xs border border-[#DED6CA]"
                title={activeCategoryModal.title}
              />
            </div>

            <p className="text-sm text-[#777168] leading-relaxed">
              {activeCategoryModal.description}
            </p>

            {/* Structured Specifications Grid */}
            <div className="mt-6 pt-6 border-t border-[#DED6CA] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-medium text-[#24231F] uppercase tracking-wider block mb-1">
                  Canonical Materials
                </span>
                <ul className="space-y-1 text-[#777168]">
                  {activeCategoryModal.materials.map((m) => (
                    <li key={m} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#96764B] shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-medium text-[#24231F] uppercase tracking-wider block mb-1">
                  Atelier Techniques
                </span>
                <ul className="space-y-1 text-[#777168]">
                  {activeCategoryModal.techniques.map((t) => (
                    <li key={t} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#96764B] shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <span className="font-medium text-[#24231F] uppercase tracking-wider block">
                  Scale & Dimensions
                </span>
                <p className="text-[#777168] mt-0.5">{activeCategoryModal.dimensionsRange}</p>
              </div>

              <div className="pt-2">
                <span className="font-medium text-[#24231F] uppercase tracking-wider block">
                  Estimated Lead Time
                </span>
                <p className="text-[#777168] mt-0.5">{activeCategoryModal.leadTime}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-[#DED6CA] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setActiveCategoryModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#777168] hover:text-[#24231F] transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const slug = activeCategoryModal.slug;
                  setActiveCategoryModal(null);
                  onSelectCategoryForEnquiry(slug);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#24231F] text-[#F7F4EE] text-xs uppercase tracking-[0.16em] font-medium rounded-xs hover:bg-[#38332E] transition-colors"
              >
                <span>Commission This Category</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#96764B]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
