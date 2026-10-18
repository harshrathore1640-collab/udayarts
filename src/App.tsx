/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { SectionIntro } from './components/SectionIntro.tsx';
import { CraftCategories } from './components/CraftCategories.tsx';
import { SectorTypologies } from './components/SectorTypologies.tsx';
import { FeaturedGallery } from './components/FeaturedGallery.tsx';
import { ProcessTimeline } from './components/ProcessTimeline.tsx';
import { SignatureProjects } from './components/SignatureProjects.tsx';
import { AtelierStory } from './components/AtelierStory.tsx';
import { EnquirySection } from './components/EnquirySection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import type { GalleryItem } from './types/index.ts';

export default function App() {
  const [enquiryCategory, setEnquiryCategory] = useState<string>('sacred-idols');
  const [enquiryNote, setEnquiryNote] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCraft = () => {
    const el = document.getElementById('craft');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryForEnquiry = (categorySlug: string) => {
    setEnquiryCategory(categorySlug);
    setEnquiryNote(`Commission Category: ${categorySlug.replace('-', ' ').toUpperCase()}`);
    scrollToContact();
  };

  const handleSelectSectorForEnquiry = (sectorName: string) => {
    const lower = sectorName.toLowerCase();
    const mapped = lower.includes('villa')
      ? 'villas'
      : lower.includes('hotel')
        ? 'hotels'
        : lower.includes('restaurant')
          ? 'restaurants'
          : lower.includes('school') || lower.includes('college')
            ? 'schools-colleges'
            : lower.includes('hospital')
              ? 'hospitals'
              : lower.includes('commercial')
                ? 'commercial'
                : 'temple-sanctums';
    setEnquiryCategory(mapped);
    setEnquiryNote(`Project Typology: ${sectorName} (500+ Landmark Portfolio)`);
    scrollToContact();
  };

  const handleInquireGalleryItem = (item: GalleryItem) => {
    setEnquiryCategory(item.category);
    setEnquiryNote(`Artwork Accession: ${item.title} (${item.material})`);
    scrollToContact();
  };

  const handleInquireProject = (projectTitle?: string) => {
    if (projectTitle) {
      setEnquiryNote(`Case Study Reference: ${projectTitle}`);
    }
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#24231F] font-sans flex flex-col selection:bg-[#96764B]/20 selection:text-[#24231F]">
      {/* Top Header Bar */}
      <Header onOpenEnquiry={scrollToContact} />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onExploreCraft={handleExploreCraft}
          onOpenEnquiry={scrollToContact}
        />

        {/* Section A: Craftsmanship Introduction */}
        <SectionIntro onOpenEnquiry={scrollToContact} />

        {/* Section B: Explore Our Craft (4 Categories) */}
        <CraftCategories
          onSelectCategoryForEnquiry={handleSelectCategoryForEnquiry}
        />

        {/* Spaces We Transform: 500+ Projects Across India & Typologies */}
        <SectorTypologies
          onSelectSectorForEnquiry={handleSelectSectorForEnquiry}
        />

        {/* Section C: Featured Craftsmanship (Editorial Gallery & Lightbox) */}
        <FeaturedGallery onInquireItem={handleInquireGalleryItem} />

        {/* Section D: From Concept to Creation (Process Timeline) */}
        <ProcessTimeline />

        {/* Section E: Signature Projects */}
        <SignatureProjects onOpenEnquiry={handleInquireProject} />

        {/* Section F: Craftsmanship Story / Atelier */}
        <AtelierStory />

        {/* Section G: Bespoke Project Enquiry */}
        <EnquirySection
          initialProjectType={enquiryCategory}
          initialProjectNote={enquiryNote}
        />
      </main>

      {/* Section H: Footer */}
      <Footer />

      {/* Floating WhatsApp and Back-To-Top Actions */}
      <FloatingActions />
    </div>
  );
}
