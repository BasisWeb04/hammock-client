"use client";

import Link from "next/link";
import { services } from "@/lib/content";
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
  // Pool & Spa - water
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

export default function ServicesPage() {
  return (
    <>
      <section className="bg-background py-20 px-6">
        <div className="max-w-[1140px] mx-auto">
          <RevealOnScroll>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
              Services
            </p>
            <h1 className="font-heading text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)] font-bold text-navy mb-4 max-w-[600px]">
              Inspection Services
            </h1>
            <p className="text-[15px] text-gray-600 max-w-[560px] leading-relaxed mb-12">
              We provide residential inspection services designed to deliver
              clear, practical information.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => {
              const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
                <RevealOnScroll key={service.title} delay={i * 75}>
                  <a href={`#${slug}`} id={slug} className="block bg-white p-7 rounded-lg shadow-sm border border-navy/[0.06] transition-all duration-300 hover:shadow-md hover:-translate-y-[3px]">
                    <div className="w-10 h-10 bg-teal/10 rounded-[10px] flex items-center justify-center text-teal mb-4">
                      {SERVICE_ICONS[i]}
                    </div>
                    <h2 className="font-heading text-base font-bold text-navy mb-1.5">
                      {service.title}
                    </h2>
                    <p className="text-[13.5px] text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </a>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy text-center py-20 px-6">
        <RevealOnScroll>
          <h2 className="text-white font-heading text-[clamp(1.5rem,1.2rem+1.3vw,2rem)] font-bold max-w-[500px] mx-auto mb-7 leading-[1.3]">
            Need an inspection?
            <br />
            Let&apos;s make this easy.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-navy px-7 py-3.5 font-semibold text-sm rounded-lg shadow-sm hover:-translate-y-px hover:shadow-md transition-all duration-250"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            Request an Inspection
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
