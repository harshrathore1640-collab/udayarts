import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEnquiryForm, generateEnquiryReference, formatWhatsAppUrl } from './validation.ts';

test('validateEnquiryForm catches empty or incomplete fields', () => {
  const result = validateEnquiryForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.projectType);
  assert.ok(result.errors.location);
  assert.ok(result.errors.details);
});

test('validateEnquiryForm validates invalid emails and short phone numbers', () => {
  const result = validateEnquiryForm({
    fullName: 'Ar. Devendra Mehta',
    email: 'invalid-email-address',
    phone: '123',
    projectType: 'sacred-idols',
    location: 'London, UK',
    details: 'Too short',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.details);
  assert.equal(result.errors.fullName, undefined);
  assert.equal(result.errors.projectType, undefined);
  assert.equal(result.errors.location, undefined);
});

test('validateEnquiryForm succeeds on valid inputs', () => {
  const result = validateEnquiryForm({
    fullName: 'Siddharth Singhania',
    email: 'siddharth@singhania-estates.com',
    phone: '+91 98201 12345',
    projectType: 'temple-sanctums',
    location: 'Geneva, Switzerland',
    details: 'Commissioning a 9ft Makrana white marble sanctum with intricate ceiling filigree for private residence.',
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('generateEnquiryReference generates consistent format', () => {
  const ref = generateEnquiryReference(1713400000000);
  assert.match(ref, /^UA-\d{4}-\d{4}$/);
});

test('formatWhatsAppUrl constructs proper wa.me link with encoded text', () => {
  const url = formatWhatsAppUrl('+91 98200 12345', 'Hello Uday Arts, I wish to discuss an architectural commission.');
  assert.ok(url.startsWith('https://wa.me/919820012345?text='));
  assert.ok(url.includes('architectural%20commission'));
});
