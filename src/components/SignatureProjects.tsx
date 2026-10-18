import React, { useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { SIGNATURE_PROJECTS } from '../data/content.ts';
import type { SignatureProject } from '../types/index.ts';
import { CraftImage } from './CraftImage.tsx';

interface SignatureProjectsProps {
  onOpenEnquiry: (projectName?: string) => void;
}

export const SignatureProjects: React.FC<SignatureProjectsProps> = ({ onOpenEnquiry }) => {
  const [selectedProject, setSelectedProject] = useState<SignatureProject | null>(null);

  return (
    <section id="projects" className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-[#F7F4EE] text-[#24231F] border-b border-[#DED6CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DED6CA] pb-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-2">
              Section E · Case Monograph
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#24231F] [text-wrap:balance]">
              Signature Projects
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#777168] font-light leading-relaxed">
            Exemplary architectural sanctums and bespoke sculptural installations
            demonstrating the breadth of Uday Arts commissions.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {SIGNATURE_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group bg-[#E9E0D2]/40 border border-[#DED6CA] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#96764B] hover:shadow-md cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <CraftImage
                  src={project.image}
                  alt={project.title}
                  aspectRatio="16/9"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  title={project.title}
                  subtitle={project.category}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-sans uppercase tracking-[0.2em] bg-[#24231F]/90 text-[#F7F4EE] backdrop-blur-xs rounded-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#777168] font-sans mb-1.5">
                    <span>{project.clientType}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#96764B] font-medium">{project.locationScope}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#24231F] font-normal group-hover:text-[#96764B] transition-colors [text-wrap:balance]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#777168] font-light leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#DED6CA] flex items-center justify-between text-xs">
                  <span className="text-[#777168]">{project.timeline}</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-[#24231F] group-hover:text-[#96764B] transition-colors uppercase tracking-wider">
                    <span>Examine Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#96764B]" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Signature Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div className="bg-[#F7F4EE] border border-[#DED6CA] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xs shadow-2xl p-6 sm:p-10 relative text-[#24231F]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 text-[#777168] hover:text-[#24231F] transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B]"
              aria-label="Close project monograph"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-1">
              {selectedProject.category} · {selectedProject.locationScope}
            </span>

            <h3 id="project-modal-title" className="font-serif text-2xl sm:text-3xl text-[#24231F] font-normal">
              {selectedProject.title}
            </h3>

            <div className="my-6">
              <CraftImage
                src={selectedProject.image}
                alt={selectedProject.title}
                aspectRatio="16/9"
                className="w-full rounded-xs border border-[#DED6CA]"
                title={selectedProject.title}
              />
            </div>

            <p className="text-sm sm:text-base text-[#777168] leading-relaxed">
              {selectedProject.overview}
            </p>

            <div className="mt-6 pt-6 border-t border-[#DED6CA] space-y-3">
              <span className="block text-xs uppercase tracking-[0.2em] text-[#96764B] font-sans font-medium">
                Architectural & Engineering Highlights
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#777168]">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#96764B] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DED6CA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-medium text-[#24231F]">Materials: </span>
                <span className="text-[#777168]">{selectedProject.materials}</span>
              </div>

              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onOpenEnquiry(title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#24231F] text-[#F7F4EE] text-xs uppercase tracking-[0.16em] font-medium rounded-xs hover:bg-[#38332E] transition-colors"
              >
                <span>Inquire About Similar Commission</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#96764B]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
