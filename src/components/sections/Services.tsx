"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import RevealOnScroll from "@/components/RevealOnScroll";

const SERVICE_ICONS = [
  // Full Home Inspection - house
  <svg key="home" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>,
  // 4-Point Inspection - grid
  <svg key="4pt" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 3v18" />
  </svg>,
  // Wind Mitigation - wind
  <svg key="wind" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.7 7.7a7.5 7.5 0 1 0 0 10.6" />
    <path d="M21 12h-4" />
  </svg>,
  // Pre-Listing - chart
  <svg key="listing" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>,
  // Homeowner Inspection - flag
  <svg key="owner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>,
  // Pool & Spa - circle/water
  <svg key="pool" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>,
  // Roof Condition - roof outline
  <svg key="roof" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 12 9-8 9 8" />
    <path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" />
  </svg>,
];

export default function Services() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-[1140px] mx-auto">
        <RevealOnScroll>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
            Services
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,1.2rem+1.3vw,2rem)] font-bold text-navy mb-4 max-w-[600px]">
            Comprehensive inspections with clarity where it matters most
          </h2>
          <p className="text-[15px] text-gray-600 max-w-[560px] leading-relaxed mb-12">
            We inspect the major visible and accessible systems of the home and
            provide a clear, organized report to help you make informed
            decisions. Our services are designed to provide clear, practical
            information — not overwhelm.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 75}>
              <Link href="/services" className="block bg-white p-7 rounded-lg shadow-sm border border-navy/[0.06] transition-all duration-300 hover:shadow-md hover:-translate-y-[3px]">
                <div className="w-10 h-10 bg-teal/10 rounded-[10px] flex items-center justify-center text-teal mb-4">
                  {SERVICE_ICONS[i]}
                </div>
                <h3 className="font-heading text-base font-bold text-navy mb-1.5">
                  {service.title}
                </h3>
                <p className="text-[13.5px] text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
