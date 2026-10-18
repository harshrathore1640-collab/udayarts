import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content.ts';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-[#28231E] text-[#F7F4EE] border-b border-[#3A332B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#3A332B] pb-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-2">
              Section D · The Architectural Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F7F4EE] [text-wrap:balance]">
              From Concept to Creation
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#DED6CA]/70 font-light leading-relaxed">
            A methodical four-stage sequence marrying computational 3D geometry with
            unhurried master stone carving.
          </p>
        </div>

        {/* Interactive Editorial Process Selector Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-5 text-left border rounded-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#96764B] ${
                activeStep === idx
                  ? 'bg-[#352D26] border-[#96764B] text-[#F7F4EE] shadow-sm'
                  : 'bg-[#201C18]/60 border-[#3A332B] text-[#777168] hover:border-[#96764B]/40 hover:text-[#DED6CA]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-lg tracking-widest text-[#96764B]">
                  {step.number}
                </span>
                <span className="text-[11px] uppercase tracking-wider font-sans text-[#777168]">
                  {step.timeline}
                </span>
              </div>
              <h3 className="font-serif text-base text-[#F7F4EE] font-medium">
                {step.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Detailed Active Step Presentation */}
        <div className="bg-[#201C18] border border-[#3A332B] p-8 sm:p-12 rounded-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#3A332B] pb-6 lg:pb-0 lg:pr-8">
              <span className="text-4xl sm:text-5xl font-serif text-[#96764B] block mb-2">
                {PROCESS_STEPS[activeStep].number}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F4EE]">
                {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className="mt-1 text-sm text-[#96764B] font-serif italic">
                {PROCESS_STEPS[activeStep].subtitle}
              </p>
              <span className="inline-block mt-4 px-3 py-1 text-xs uppercase tracking-wider font-sans text-[#DED6CA] bg-[#352D26] rounded-xs border border-[#3A332B]">
                Duration: {PROCESS_STEPS[activeStep].timeline}
              </span>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg text-[#DED6CA] font-light leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-[#96764B] font-sans font-medium mb-3">
                  Documented Atelier Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DED6CA]/90"
                    >
                      <Check className="w-4 h-4 text-[#96764B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
