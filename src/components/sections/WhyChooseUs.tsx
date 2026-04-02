"use client";

import { whyChooseUs } from "@/lib/content";
import RevealOnScroll from "@/components/RevealOnScroll";

const WHY_ICONS = [
  // Clear Reports - document
  <svg key="reports" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>,
  // Drone - propeller
  <svg key="drone" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4m0 12v4m10-10h-4M6 12H2" />
  </svg>,
  // Engineering - building/house
  <svg key="eng" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
  </svg>,
  // Experience - clock
  <svg key="exp" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>,
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1140px] mx-auto">
        <RevealOnScroll>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
            Why Hammock Property Inspections
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,1.2rem+1.3vw,2rem)] font-bold text-navy mb-4 max-w-[600px]">
            Why clients choose Hammock Property Inspections
          </h2>
          <p className="text-[15px] text-gray-600 max-w-[560px] leading-relaxed mb-12">
            No jargon. No unnecessary alarm. Just clear, professional reporting.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUs.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 75}>
              <div className="flex gap-4 p-6 rounded-lg bg-background border border-navy/[0.04]">
                <div className="w-11 h-11 shrink-0 bg-teal/[0.12] rounded-[10px] flex items-center justify-center text-teal">
                  {WHY_ICONS[i]}
                </div>
                <div>
                  <h3 className="font-heading text-[15px] font-bold text-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
