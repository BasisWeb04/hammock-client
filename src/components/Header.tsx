"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/content";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-navy/[0.08]">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between h-[72px] px-6">
        <Link href="/" className="font-heading font-bold text-lg text-navy tracking-tight">
          Hammock <span className="text-teal">Property Inspections</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal hover:text-navy transition-colors duration-200 tracking-[0.01em]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-navy text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-navy-light hover:shadow-md hover:-translate-y-px transition-all duration-250 tracking-[0.01em]"
          >
            Request an Inspection
          </Link>
        </nav>

        <button
          className="relative md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`absolute left-2 w-6 h-0.5 bg-navy transition-all duration-300 ${
              isMenuOpen ? "top-[19px] rotate-45" : "top-[13px]"
            }`}
          />
          <span
            className={`absolute left-2 w-6 h-0.5 bg-navy transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "top-[19px] opacity-100"
            }`}
          />
          <span
            className={`absolute left-2 w-6 h-0.5 bg-navy transition-all duration-300 ${
              isMenuOpen ? "top-[19px] -rotate-45" : "top-[25px]"
            }`}
          />
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
