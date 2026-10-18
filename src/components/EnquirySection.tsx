import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content.ts';
import type { EnquiryFormData, FormValidationErrors } from '../types/index.ts';
import { validateEnquiryForm, generateEnquiryReference, formatWhatsAppUrl } from '../utils/validation.ts';

interface EnquirySectionProps {
  initialProjectType?: string;
  initialProjectNote?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialProjectType,
  initialProjectNote,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: initialProjectType || 'sacred-idols',
    location: '',
    dimensionsOrScale: '',
    details: initialProjectNote ? `Regarding: ${initialProjectNote}\n\n` : '',
    preferredMaterial: 'Makrana Pure White Marble',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    submittedAt: string;
    data: EnquiryFormData;
  } | null>(null);

  // Update form if props change
  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
    if (initialProjectNote) {
      setFormData((prev) => ({
        ...prev,
        details: `Regarding: ${initialProjectNote}\n\n${prev.details.replace(/^Regarding: .*\n\n/, '')}`,
      }));
    }
  }, [initialProjectType, initialProjectNote]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateEnquiryForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulated robust submission
    setTimeout(() => {
      const refId = generateEnquiryReference();
      setSubmissionResult({
        referenceId: refId,
        submittedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        data: { ...formData },
      });
      setIsSubmitting(false);
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  const handleResetForm = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'sacred-idols',
      location: '',
      dimensionsOrScale: '',
      details: '',
      preferredMaterial: 'Makrana Pure White Marble',
    });
  };

  return (
    <section id="contact" className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-[#F7F4EE] text-[#24231F] border-b border-[#DED6CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Consultation Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-medium font-sans block mb-2">
                Section G · Commission Inquiry
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#24231F] [text-wrap:balance]">
                Initiate a Commission Dialogue
              </h2>
            </div>

            <p className="text-base text-[#777168] font-light leading-relaxed">
              Whether you are an architect coordinating an international temple sanctum,
              an interior designer curating a private residence foyer, or an individual
              seeking a bespoke sacred deity, our senior master sculptors review every brief.
            </p>

            <div className="pt-6 border-t border-[#DED6CA] space-y-5 text-xs sm:text-sm">
              <div>
                <span className="block font-sans uppercase tracking-widest text-[#96764B] font-medium text-xs">
                  Atelier & Studio
                </span>
                <span className="block font-serif text-[#24231F] mt-1 text-base">
                  {BRAND_CONFIG.studioLocation}
                </span>
              </div>

              <div>
                <span className="block font-sans uppercase tracking-widest text-[#96764B] font-medium text-xs">
                  Direct Curatorial Correspondence
                </span>
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="font-serif text-[#24231F] hover:text-[#96764B] transition-colors mt-1 block text-base"
                >
                  {BRAND_CONFIG.email}
                </a>
              </div>

              <div>
                <span className="block font-sans uppercase tracking-widest text-[#96764B] font-medium text-xs">
                  Immediate WhatsApp Atelier Desk
                </span>
                <a
                  href={formatWhatsAppUrl(
                    BRAND_CONFIG.whatsappNumber,
                    'Hello Uday Arts Atelier, I would like to initiate an architectural commission inquiry.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans font-medium text-[#24231F] hover:text-[#96764B] transition-colors mt-1"
                >
                  <MessageSquare className="w-4 h-4 text-[#96764B]" />
                  <span>{BRAND_CONFIG.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <span className="block font-sans uppercase tracking-widest text-[#96764B] font-medium text-xs">
                  Global Crating & Dispatch
                </span>
                <span className="block text-[#777168] mt-1">
                  Custom shock-absorbing timber crates (ISPM-15 certified) with comprehensive transit insurance.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div className="lg:col-span-7 bg-[#E9E0D2]/40 border border-[#DED6CA] p-8 sm:p-10 rounded-xs shadow-xs">
            {submissionResult ? (
              <div className="space-y-6 text-center py-6 animate-in fade-in">
                <div className="w-14 h-14 bg-[#96764B]/10 rounded-full flex items-center justify-center mx-auto text-[#96764B]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#96764B] font-sans font-medium">
                    Commission Request Registered
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#24231F] mt-1">
                    Thank You, {submissionResult.data.fullName}
                  </h3>
                  <p className="mt-2 text-sm text-[#777168] max-w-md mx-auto">
                    Your inquiry has been allocated to our curatorial desk. A senior sculptor
                    will review your spatial parameters within 24 business hours.
                  </p>
                </div>

                {/* Reference Receipt */}
                <div className="bg-[#F7F4EE] border border-[#DED6CA] p-5 rounded-xs text-left text-xs max-w-md mx-auto space-y-2">
                  <div className="flex justify-between border-b border-[#DED6CA] pb-2">
                    <span className="text-[#777168]">Reference Code:</span>
                    <strong className="font-mono text-[#24231F]">{submissionResult.referenceId}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#DED6CA] pb-2">
                    <span className="text-[#777168]">Project Type:</span>
                    <span className="capitalize text-[#24231F] font-medium">
                      {submissionResult.data.projectType.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#777168]">Destination:</span>
                    <span className="text-[#24231F]">{submissionResult.data.location}</span>
                  </div>
                </div>

                {/* Quick WhatsApp Forwarding */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <a
                    href={formatWhatsAppUrl(
                      BRAND_CONFIG.whatsappNumber,
                      `Hello Uday Arts, I registered commission ${submissionResult.referenceId} for ${submissionResult.data.fullName}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#24231F] text-[#F7F4EE] text-xs uppercase tracking-wider font-medium rounded-xs hover:bg-[#38332E] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#96764B]" />
                    <span>Open on WhatsApp Desk</span>
                  </a>

                  <button
                    onClick={handleResetForm}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#777168] hover:text-[#24231F] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-[#DED6CA] pb-4">
                  <h3 className="font-serif text-2xl text-[#24231F]">
                    Bespoke Project Form
                  </h3>
                  <p className="text-xs text-[#777168] mt-1">
                    Please provide initial details. All information is held in strict commercial confidence.
                  </p>
                </div>

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-sans uppercase tracking-wider text-[#24231F] font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ar. Sunita Singhal"
                      className={`w-full px-3.5 py-2.5 bg-[#F7F4EE] border text-sm text-[#24231F] placeholder:text-[#777168]/50 rounded-xs transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#96764B] ${
                        errors.fullName ? 'border-red-500' : 'border-[#DED6CA]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-sans uppercase tracking-wider text-[#24231F] font-medium mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. studio@singhal-associates.com"
                      className={`w-full px-3.5 py-2.5 bg-[#F7F4EE] border text-sm text-[#24231F] placeholder:text-[#777168]/50 rounded-xs transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#96764B] ${
                        errors.email ? 'border-red-500' : 'border-[#DED6CA]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone/WhatsApp and Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-sans uppercase tracking-wider text-[#24231F] font-medium mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7911 123456"
                      className={`w-full px-3.5 py-2.5 bg-[#F7F4EE] border text-sm text-[#24231F] placeholder:text-[#777168]/50 rounded-xs transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#96764B] ${
                        errors.phone ? 'border-red-500' : 'border-[#DED6CA]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-xs font-sans uppercase tracking-wider text-[#24231F] font-medium mb-1.5">
                      Project Classification *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#F7F4EE] border border-[#DED6CA] text-sm text-[#24231F] rounded-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#96764B]"
                    >
                      <option value="villas">Luxury Villa & Private Residence</option>
                      <option value="hotels">Luxury Hotel & Heritage Resort</option>
                      <option value="restaurants">Fine Dining & Concept Restaurant</option>
                      <option value="schools-colleges">School, College & University Campus</option>
                      <option value="hospitals">Hospital, Healthcare & Healing Space</option>
                      <option value="commercial">Commercial Tower & Corporate Complex</option>
                      <option value="temple-sanctums">Temple Sanctum & Sacred Architecture</option>
                      <option value="sacred-idols">Sculptural Art & Divine Deity Idols</option>
                      <option value="architectural-engraving">Intricate Stone Engraving & Jaali</option>
                      <option value="3d-craftsmanship">Three-Dimensional Parametric Craft</option>
                      <option value="other">Other Bespoke Stone Commission</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Location and Scale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="location" className="block text-xs font-sans uppercase tracking-wider text-[#24231F] font-medium mb-1.5">
                      Site Destination / Country *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Dubai, London, Mumbai, New York"
                      className={`w-full px-3.5 py-2.5 bg-[#F7F4EE] border text-sm text-[#24231F] placeholder:text-[#777168]/50 rounded-xs transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#96764B] ${
                        errors.location ? 'border-red-500' : 'border-[#DED6CA]'
                      }`}
                    />
                    {errors.location && (
                      <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.location}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredMaterial" className="block text-xs font-sans uppercase tracking-wider text-[#24231F] font-medium mb-1.5">
                      Preferred Material Medium
                    </label>
                    <select
                      id="preferredMaterial"
                      name="preferredMaterial"
                      value={formData.preferredMaterial}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#F7F4EE] border border-[#DED6CA] text-sm text-[#24231F] rounded-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#96764B]"
                    >
                      <option value="Makrana Pure White Marble">Makrana Pure White Marble</option>
                      <option value="Dholpur Sandstone">Dholpur Natural Sandstone</option>
                      <option value="Honed Jet Black Granite">Honed Jet Black Granite</option>
                      <option value="Traditional Panchaloha Bronze">Traditional Panchaloha Bronze</option>
                      <option value="Open to Atelier Recommendation">Open to Atelier Recommendation</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="details" className="block text-xs font-sans uppercase tracking-wider text-[#24231F] font-medium mb-1.5">
                    Project Vision, Dimensions & Architectural Scope *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Provide desired dimensions, sanctuary ceiling heights, sacred canon references, or architectural drawings status..."
                    className={`w-full px-3.5 py-2.5 bg-[#F7F4EE] border text-sm text-[#24231F] placeholder:text-[#777168]/50 rounded-xs transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#96764B] resize-y ${
                      errors.details ? 'border-red-500' : 'border-[#DED6CA]'
                    }`}
                  />
                  {errors.details && (
                    <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.details}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#777168]">
                    Strict confidentiality assured. Never shared with third parties.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#24231F] text-[#F7F4EE] text-xs uppercase tracking-[0.2em] font-medium rounded-xs hover:bg-[#38332E] transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B] shadow-sm"
                  >
                    <span>{isSubmitting ? 'Registering Brief...' : 'Transmit Commission Brief'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#96764B]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
