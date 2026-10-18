import React, { useState } from 'react';
import { Maximize2, ArrowUpRight, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content.ts';
import type { GalleryItem, ProjectCategory } from '../types/index.ts';
import { CraftImage } from './CraftImage.tsx';

interface FeaturedGalleryProps {
  onInquireItem: (item: GalleryItem) => void;
}

export const FeaturedGallery: React.FC<FeaturedGalleryProps> = ({ onInquireItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeItemModal, setActiveItemModal] = useState<GalleryItem | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Works', value: 'all' },
    { label: 'Sacred Deities', value: 'sacred-idols' },
    { label: 'Architectural Jaali', value: 'architectural-engraving' },
    { label: '3D Craftsmanship', value: '3d-craftsmanship' },
    { label: 'Temple Sanctums', value: 'temple-sanctums' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="collections" className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-[#F7F4EE] text-[#24231F] border-b border-[#DED6CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#DED6CA] pb-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-2">
              Section C · Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#24231F] [text-wrap:balance]">
              Featured Craftsmanship
            </h2>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E9E0D2]/60 rounded-xs border border-[#DED6CA]">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all duration-200 rounded-xs whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#96764B] ${
                  selectedCategory === cat.value
                    ? 'bg-[#24231F] text-[#F7F4EE] shadow-xs'
                    : 'text-[#777168] hover:text-[#24231F]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {filteredItems.map((item, index) => {
            // Asymmetric layout rhythm
            const colSpan =
              item.aspect === 'wide'
                ? 'lg:col-span-8'
                : item.aspect === 'tall'
                  ? 'lg:col-span-4'
                  : 'lg:col-span-6';

            return (
              <div
                key={item.id}
                className={`${colSpan} group cursor-pointer`}
                onClick={() => setActiveItemModal(item)}
              >
                {/* Visual Container */}
                <div className="relative overflow-hidden bg-[#201D1A] rounded-xs border border-[#DED6CA] group-hover:border-[#96764B] transition-colors duration-300">
                  <CraftImage
                    src={item.image}
                    alt={item.title}
                    aspectRatio={item.aspect === 'tall' ? '3/4' : item.aspect === 'wide' ? '16/9' : '4/3'}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-103"
                    title={item.title}
                    subtitle={item.categoryLabel}
                  />

                  {/* Curatorial Hover Reveal Overlay */}
                  <div className="absolute inset-0 bg-[#24231F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F7F4EE] text-[#24231F] text-xs uppercase tracking-widest font-medium rounded-xs shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#96764B]" />
                      <span>Inspect Accession</span>
                    </span>
                  </div>
                </div>

                {/* Unboxed Metadata (NO PILL BADGES) */}
                <div className="mt-4 flex items-center gap-2 text-xs text-[#777168] font-sans">
                  <span className="uppercase tracking-widest text-[#96764B] font-medium">
                    {item.categoryLabel}
                  </span>
                  <span aria-hidden="true" className="text-[#DED6CA]">·</span>
                  <span className="truncate">{item.material}</span>
                </div>

                {/* Title */}
                <h3 className="mt-1 font-serif text-xl sm:text-2xl text-[#24231F] group-hover:text-[#96764B] transition-colors font-normal">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-[#777168] font-serif italic">
                  {item.dimensions}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Curatorial Accession Detail Modal */}
      {activeItemModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
        >
          <div className="bg-[#F7F4EE] border border-[#DED6CA] max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-xs shadow-2xl p-6 sm:p-10 relative text-[#24231F]">
            {/* Close Button */}
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-5 right-5 p-2 text-[#777168] hover:text-[#24231F] transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B]"
              aria-label="Close artwork details"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Accession Header */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#96764B] font-sans font-medium mb-1">
              <span>Accession Ref: {activeItemModal.id.toUpperCase()}</span>
              <span>·</span>
              <span>{activeItemModal.categoryLabel}</span>
            </div>

            <h3 id="gallery-modal-title" className="font-serif text-2xl sm:text-4xl text-[#24231F] font-normal [text-wrap:balance]">
              {activeItemModal.title}
            </h3>

            {/* Artwork Frame */}
            <div className="my-6 max-h-[50vh] overflow-hidden rounded-xs border border-[#DED6CA]">
              <CraftImage
                src={activeItemModal.image}
                alt={activeItemModal.title}
                aspectRatio="16/9"
                className="w-full h-full object-cover max-h-[50vh]"
                title={activeItemModal.title}
              />
            </div>

            {/* Curatorial Essay */}
            <p className="text-base text-[#777168] leading-relaxed max-w-3xl">
              {activeItemModal.description}
            </p>

            {/* Curatorial Specifications Grid */}
            <div className="mt-8 pt-6 border-t border-[#DED6CA] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div>
                <span className="block font-sans uppercase tracking-widest text-[#96764B] font-medium">
                  Material
                </span>
                <span className="block font-serif text-sm text-[#24231F] mt-1">
                  {activeItemModal.material}
                </span>
              </div>

              <div>
                <span className="block font-sans uppercase tracking-widest text-[#96764B] font-medium">
                  Carving Technique
                </span>
                <span className="block font-serif text-sm text-[#24231F] mt-1">
                  {activeItemModal.technique}
                </span>
              </div>

              <div>
                <span className="block font-sans uppercase tracking-widest text-[#96764B] font-medium">
                  Dimensions
                </span>
                <span className="block font-serif text-sm text-[#24231F] mt-1">
                  {activeItemModal.dimensions}
                </span>
              </div>

              <div>
                <span className="block font-sans uppercase tracking-widest text-[#96764B] font-medium">
                  Surface Patina
                </span>
                <span className="block font-serif text-sm text-[#24231F] mt-1">
                  {activeItemModal.finish}
                </span>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-[#DED6CA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#777168] italic font-serif">
                Bespoke scaling and alternative natural stone materials available on request.
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#777168] hover:text-[#24231F] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const item = activeItemModal;
                    setActiveItemModal(null);
                    onInquireItem(item);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#24231F] text-[#F7F4EE] text-xs uppercase tracking-[0.16em] font-medium rounded-xs hover:bg-[#38332E] transition-colors"
                >
                  <span>Inquire About This Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#96764B]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
