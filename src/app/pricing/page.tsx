"use client";

import Link from "next/link";
import { pricing } from "@/lib/content";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function PricingPage() {
  return (
    <>
      <section className="bg-background py-20 px-6">
        <div className="max-w-[1140px] mx-auto">
          <RevealOnScroll>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
              Pricing
            </p>
            <h1 className="font-heading text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)] font-bold text-navy mb-4 max-w-[600px]">
              Simple, transparent pricing
            </h1>
            <p className="text-[15px] text-gray-600 max-w-[560px] leading-relaxed mb-14">
              We believe pricing should be clear and easy to understand.
            </p>
          </RevealOnScroll>

          {/* Home Inspection Pricing */}
          <RevealOnScroll>
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-md max-w-[720px] border border-navy/[0.06] mb-8">
              <h2 className="font-heading text-lg font-bold text-navy mb-6">
                Home Inspection
              </h2>
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
            </div>
          </RevealOnScroll>

          {/* Insurance Inspections */}
          <RevealOnScroll>
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-md max-w-[720px] border border-navy/[0.06] mb-8">
              <h2 className="font-heading text-lg font-bold text-navy mb-6">
                Insurance Inspections
              </h2>

              {/* Desktop table header */}
              <div className="hidden sm:flex items-center py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 border-b border-navy/[0.06]">
                <span className="flex-1">Service</span>
                <span className="w-[140px] text-right">With Home Inspection</span>
                <span className="w-[100px] text-right">Standalone</span>
              </div>

              {/* Mobile table header */}
              <div className="flex sm:hidden items-center py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500 border-b border-navy/[0.06]">
                <span className="flex-1">Service</span>
                <span className="w-[60px] text-right">w/ Home</span>
                <span className="w-[60px] text-right">Alone</span>
              </div>

              {pricing.insuranceInspections.map((row, i) => (
                <div
                  key={row.service}
                  className={`flex items-center py-3.5 text-sm ${
                    i < pricing.insuranceInspections.length - 1
                      ? "border-b border-navy/[0.06]"
                      : ""
                  }`}
                >
                  <span className="flex-1 text-gray-600 pr-4">
                    {row.service}
                  </span>
                  <span className="w-[60px] sm:w-[140px] text-right font-semibold text-navy">
                    {row.withHome}
                  </span>
                  <span className="w-[60px] sm:w-[100px] text-right font-semibold text-navy">
                    {row.standalone}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Additional Services */}
          <RevealOnScroll>
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-md max-w-[720px] border border-navy/[0.06] mb-10">
              <h2 className="font-heading text-lg font-bold text-navy mb-6">
                Additional Inspection Services
              </h2>
              {pricing.additionalServices.map((row, i) => (
                <div
                  key={row.service}
                  className={`flex justify-between items-start py-3.5 text-sm ${
                    i < pricing.additionalServices.length - 1
                      ? "border-b border-navy/[0.06]"
                      : ""
                  }`}
                >
                  <div>
                    <span className="text-gray-600">{row.service}</span>
                    <span className="block text-[12px] text-gray-500 mt-0.5">
                      {row.note}
                    </span>
                  </div>
                  <span className="font-semibold text-navy shrink-0">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Disclaimer + CTA */}
          <RevealOnScroll>
            <div className="max-w-[720px]">
              <p className="text-[13.5px] text-gray-600 leading-relaxed mb-8">
                {pricing.disclaimer}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 font-semibold text-sm rounded-lg shadow-sm hover:bg-navy-light hover:-translate-y-px hover:shadow-md transition-all duration-250"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
                Request an Inspection
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
