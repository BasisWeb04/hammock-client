"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { credentials, brandStatement } from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <RevealOnScroll>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
              About
            </p>
            <h1 className="font-heading text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)] font-bold text-navy mb-8">
              About Hammock Property Inspections
            </h1>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5">
              Hammock Property Inspections provides clear, professional home
              inspections designed to help clients move forward with confidence.
            </p>
            <p className="text-[15px] text-charcoal leading-relaxed mb-10">
              Buying or selling a home can be stressful. Inspection results often
              play a key role in fast decisions, which is why our approach focuses
              on clarity, thoroughness, and straightforward communication.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="font-heading text-sm font-bold text-navy mb-4">
              Our background includes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {credentials.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <svg
                    className="w-5 h-5 text-teal shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[14px] text-charcoal leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5">
              This combination supports a disciplined, analytical approach while
              keeping the process simple and easy to understand.
            </p>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5">
              We believe the report matters just as much as the inspection. Our
              reporting process is designed to be clear, organized, and useful —
              not overwhelming.
            </p>
            <p className="text-[15px] text-charcoal leading-relaxed mb-12">
              When you work with Hammock Property Inspections, you can expect
              professionalism, responsiveness, and clear communication from start
              to finish.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="bg-background border border-navy/[0.06] rounded-lg p-8">
              <p className="text-[15px] text-navy leading-relaxed font-medium italic">
                &ldquo;{brandStatement}&rdquo;
              </p>
            </div>
          </RevealOnScroll>
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
