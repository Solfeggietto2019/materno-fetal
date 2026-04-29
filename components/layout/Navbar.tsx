'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { SECTIONS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'Inicio', href: `#${SECTIONS.home}` },
    { label: 'Acerca de', href: `#${SECTIONS.about}` },
    { label: 'Servicios', href: `#${SECTIONS.services}` },
    { label: 'Contacto', href: `#${SECTIONS.contact}` },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav className="sticky top-0 z-30 bg-white shadow-md">
      <div className="container-wrapper">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.jpeg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline text-sm font-bold text-secondary max-w-xs">
              Dra. Adriana Martínez
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() =>
                  handleNavClick(link.href.replace('#', ''))
                }
                className="text-dark hover:text-secondary transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              href="http://wa.link/to2gu3"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
            >
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-lightBg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() =>
                    handleNavClick(link.href.replace('#', ''))
                  }
                  className="block w-full text-left px-4 py-2 text-dark hover:bg-lightBg hover:text-secondary rounded transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                href="http://wa.link/to2gu3"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                fullWidth
                className="mt-4"
              >
                Agendar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
