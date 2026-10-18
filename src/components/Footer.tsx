import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#24231E] text-[#F7F4EE] pt-20 pb-12 border-t border-[#3A332B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3A332B]">
          {/* Brand & Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#F7F4EE] block">
              {BRAND_CONFIG.name}
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#96764B] font-sans">
              {BRAND_CONFIG.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-[#DED6CA]/70 font-light leading-relaxed max-w-sm">
              National Award-winning master atelier with over 500+ projects executed across India.
              Crafting architectural stone sculptures and 3D installations with soul, passion,
              effort, and imagination for villas, hotels, colleges, schools, hospitals, commercial towers,
              fine dining restaurants, and temples.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#96764B] font-medium block">
              Exploration
            </span>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#DED6CA]/80">
              <li>
                <a href="#hero" className="hover:text-[#F7F4EE] transition-colors">
                  Atelier Home
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[#F7F4EE] transition-colors">
                  Our Four Disciplines
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-[#F7F4EE] transition-colors">
                  Sectors & Typologies (500+)
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#F7F4EE] transition-colors">
                  Accession Collections
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F7F4EE] transition-colors">
                  Architectural Process
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F7F4EE] transition-colors">
                  Signature Case Studies
                </a>
              </li>
              <li>
                <a href="#atelier" className="hover:text-[#F7F4EE] transition-colors">
                  Materials & Provenance
                </a>
              </li>
            </ul>
          </div>

          {/* Curatorial & Global Desks */}
          <div className="lg:col-span-4 space-y-4 text-xs text-[#DED6CA]/80">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#96764B] font-medium block">
              Atelier & Correspondence
            </span>
            <div>
              <span className="block text-[#F7F4EE] font-serif text-sm">
                Studio & Atelier
              </span>
              <p className="text-[11px] text-[#777168] mt-0.5">
                {BRAND_CONFIG.studioLocation}
              </p>
            </div>
            <div>
              <span className="block text-[#F7F4EE] font-serif text-sm">
                International Inquiries Desk
              </span>
              <p className="text-[11px] text-[#777168] mt-0.5">
                London · Dubai · New York · Singapore
              </p>
            </div>
            <div className="pt-2">
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#96764B] hover:text-[#DED6CA] transition-colors font-medium"
              >
                <span>{BRAND_CONFIG.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777168] font-sans">
          <p>© {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] uppercase tracking-wider">
            <span>National Award Winner</span>
            <span>·</span>
            <span>500+ Projects Across India</span>
            <span>·</span>
            <span>Worldwide Insured Dispatch</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
