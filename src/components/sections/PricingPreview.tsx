"use client";

import Link from "next/link";
import { pricing } from "@/lib/content";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function PricingPreview() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-[1140px] mx-auto">
        <RevealOnScroll>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
            Pricing
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,1.2rem+1.3vw,2rem)] font-bold text-navy mb-4 max-w-[600px]">
            Simple, transparent pricing
          </h2>
          <p className="text-[15px] text-gray-600 max-w-[560px] leading-relaxed mb-12">
            No guesswork. No need to call just to get a starting price.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl p-8 sm:p-10 shadow-md max-w-[640px] border border-navy/[0.06]">
            {pricing.homeInspection.map((row, i) => (
              <div
                key={row.size}
                className={`flex justify-between items-center py-3.5 text-sm ${
                  i < pricing.homeInspection.length - 1
                    ? "border-b border-navy/[0.06]"
                    : ""
                }`}
              >
                <span className="text-gray-600">{row.size}</span>
                <span className="font-semibold text-navy">{row.price}</span>
              </div>
            ))}
            <p className="text-[13.5px] text-gray-600 mt-5 leading-relaxed">
              We&apos;ll confirm pricing before the inspection — no surprises.
            </p>
            <Link
              href="/pricing"
              className="mt-8 flex items-center justify-center w-full bg-navy text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-navy-light hover:shadow-md hover:-translate-y-px transition-all duration-250 tracking-[0.01em]"
            >
              See Full Pricing
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
