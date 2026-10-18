import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CraftImage } from './CraftImage.tsx';

interface SectionIntroProps {
  onOpenEnquiry: () => void;
}

export const SectionIntro: React.FC<SectionIntroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F4EE] text-[#24231F] border-b border-[#DED6CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Eyebrow & Index */}
        <div className="flex items-center justify-between border-b border-[#DED6CA] pb-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans">
            Introduction · The Art of the Chisel
          </span>
          <span className="text-xs tracking-widest text-[#777168] font-sans">
            EST. JAIPUR ATELIER
          </span>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Philosophical Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#24231F] leading-[1.15] [text-wrap:balance]">
              Where sacred tradition converges with monumental 3D precision, soul, and imagination.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#777168] font-light leading-relaxed max-w-2xl">
              <p>
                At Uday Arts, stone is not cold mineral; it is a sacred canvas. With over{' '}
                <strong className="text-[#24231F] font-medium">500+ projects executed across India</strong>{' '}
                and recognized with the prestigious <strong className="text-[#96764B] font-medium">National Award</strong>,
                our master sculptors pour deep emotions, authentic passions, tireless efforts, and
                boundless imagination into every single commission.
              </p>
              <p>
                Whether crafting monumental installations for private luxury villas, heritage hotels,
                inspirational college and school campuses, healing hospitals, commercial flagships, or
                sacred temple sanctums, our creations combine hereditary stone carving lineage with
                cutting-edge 3D spatial engineering.
              </p>
            </div>

            {/* Curatorial Highlights Definition Strip */}
            <div className="pt-6 border-t border-[#DED6CA] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#96764B] font-sans font-medium">
                  National Awarded
                </span>
                <span className="text-sm font-serif text-[#24231F] mt-1 block">
                  Excellence in master architectural stone carving
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#96764B] font-sans font-medium">
                  500+ Landmark Works
                </span>
                <span className="text-sm font-serif text-[#24231F] mt-1 block">
                  Executed across all Indian states & international sites
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-xs uppercase tracking-wider text-[#96764B] font-sans font-medium">
                  Soul & Imagination
                </span>
                <span className="text-sm font-serif text-[#24231F] mt-1 block">
                  Uncompromised effort and emotion in every detail
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#24231F] hover:text-[#96764B] transition-colors py-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B]"
              >
                <span>Inquire About Bespoke Commissions</span>
                <ArrowUpRight className="w-4 h-4 text-[#96764B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Complementary Craftsmanship Image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <CraftImage
                src="https://openaccess-cdn.clevelandart.org/1987.147/1987.147_web.jpg"
                alt="Master sculptor fine detailing a stone deity statue"
                aspectRatio="4/3"
                className="rounded-xs shadow-md border border-[#DED6CA]"
                title="Master Hand Chiseling Detail"
                subtitle="Chiseled Sandstone Sculpture"
              />
              <div className="mt-3 flex items-center justify-between text-xs text-[#777168] font-serif italic">
                <span>Fig. 01 — Direct chisel sculpting of sacred deity drapery</span>
                <span className="font-sans not-italic text-[11px] uppercase tracking-wider text-[#96764B]">
                  Atelier Archive
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
