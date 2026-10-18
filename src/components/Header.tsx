import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content.ts';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Craft', href: '#craft' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Collections', href: '#collections' },
    { label: 'Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'Atelier', href: '#atelier' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#DED6CA] py-3.5 shadow-xs'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B]"
            aria-label="Uday Arts Home"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.2em] font-semibold transition-colors duration-200 ${
                isScrolled ? 'text-[#24231F]' : 'text-[#F7F4EE]'
              }`}
            >
              {BRAND_CONFIG.name}
            </span>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left ${
                  isScrolled
                    ? 'text-[#777168] hover:text-[#24231F] after:bg-[#96764B]'
                    : 'text-[#F7F4EE]/80 hover:text-[#F7F4EE] after:bg-[#F7F4EE]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium rounded-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B] ${
                isScrolled
                  ? 'bg-[#24231F] text-[#F7F4EE] hover:bg-[#38332E]'
                  : 'bg-[#F7F4EE] text-[#24231F] hover:bg-[#E9E0D2]'
              }`}
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#96764B]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96764B] ${
                isScrolled ? 'text-[#24231F] hover:bg-[#E9E0D2]/50' : 'text-[#F7F4EE] hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#24231E] text-[#F7F4EE] animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#3A342D]">
            <span className="font-serif text-xl tracking-[0.2em] font-semibold text-[#F7F4EE]">
              {BRAND_CONFIG.name}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#E9E0D2] hover:text-white"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 px-8 py-8 flex flex-col justify-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-wide text-[#E9E0D2] hover:text-[#96764B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="p-8 border-t border-[#3A342D] space-y-4 bg-[#1E1A17]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#96764B] text-[#F7F4EE] text-xs uppercase tracking-[0.2em] font-medium rounded-xs hover:bg-[#85663F] transition-colors"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[11px] uppercase tracking-widest text-[#777168]">
              {BRAND_CONFIG.internationalDesk}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
