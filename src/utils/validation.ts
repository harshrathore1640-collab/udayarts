import type { EnquiryFormData, FormValidationErrors } from '../types/index.ts';

/**
 * Validates the Bespoke Enquiry form inputs.
 * Ensures all required fields are present and correctly formatted.
 */
export function validateEnquiryForm(data: Partial<EnquiryFormData>): {
  isValid: boolean;
  errors: FormValidationErrors;
} {
  const errors: FormValidationErrors = {};

  // Full Name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please provide your full name (minimum 2 characters).';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address for curatorial correspondence.';
  }

  // Phone / WhatsApp validation (minimum 7 digits, allowing +, spaces, hyphens)
  const phoneDigits = (data.phone || '').replace(/\D/g, '');
  if (!data.phone || phoneDigits.length < 7) {
    errors.phone = 'Please provide a valid phone or WhatsApp number with country code.';
  }

  // Project Type validation
  if (!data.projectType || data.projectType.trim() === '') {
    errors.projectType = 'Please select a primary project classification.';
  }

  // Location validation
  if (!data.location || data.location.trim().length < 2) {
    errors.location = 'Please indicate your project site or destination city / country.';
  }

  // Details validation
  if (!data.details || data.details.trim().length < 15) {
    errors.details = 'Please describe your requirements, artistic vision, or scale (minimum 15 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates an architectural commission reference ID (e.g. "UA-2026-8742")
 */
export function generateEnquiryReference(seedTimestamp?: number): string {
  const ts = seedTimestamp || Date.now();
  const year = new Date(ts).getFullYear();
  const suffix = (ts % 9000 + 1000).toString();
  return `UA-${year}-${suffix}`;
}

/**
 * Formats a clean WhatsApp click-to-chat URL with pre-filled message
 */
export function formatWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanedNumber = phoneNumber.replace(/[^\d+]/g, '').replace('+', '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanedNumber}?text=${encodedText}`;
}
