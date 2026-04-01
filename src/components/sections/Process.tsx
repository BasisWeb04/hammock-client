"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Process() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1140px] mx-auto text-center">
        <RevealOnScroll>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
            How It Works
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,1.2rem+1.3vw,2rem)] font-bold text-navy mb-4 max-w-[600px] mx-auto">
            A straightforward process
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {PROCESS_STEPS.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 100}>
              <div className="p-8">
                <div className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center font-heading text-xl font-bold mx-auto mb-5">
                  {step.number}
                </div>
                <h3 className="font-heading text-base font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-[13.5px] text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
