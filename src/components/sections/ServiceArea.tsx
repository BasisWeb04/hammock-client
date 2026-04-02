import RevealOnScroll from "@/components/RevealOnScroll";
import { contact } from "@/lib/content";

export default function ServiceArea() {
  return (
    <section className="bg-background py-24 px-6 text-center border-t border-navy/[0.04]">
      <div className="max-w-[1140px] mx-auto">
        <RevealOnScroll>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
            Service Area
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,1.2rem+1.3vw,2rem)] font-bold text-navy mb-4 max-w-[500px] mx-auto">
            Serving {contact.serviceArea} with professionalism and clarity
          </h2>
          <div className="mt-6">
            <span className="inline-block bg-white px-5 py-2 rounded-full text-sm font-medium text-navy shadow-sm border border-navy/[0.06]">
              {contact.serviceAreaBadge}
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
