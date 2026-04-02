import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { contact } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section className="bg-navy text-center py-20 px-6">
      <RevealOnScroll>
        <h2 className="text-white font-heading text-[clamp(1.5rem,1.2rem+1.3vw,2rem)] font-bold max-w-[500px] mx-auto mb-7 leading-[1.3]">
          Need an inspection?
          <br />
          Let&apos;s make this easy.
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-navy px-7 py-3.5 font-semibold text-sm rounded-lg shadow-sm hover:-translate-y-px hover:shadow-md transition-all duration-250"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            Request an Inspection
          </Link>
          <a
            href={`tel:${contact.phoneRaw}`}
            className="inline-flex items-center gap-2 text-white px-7 py-3.5 font-semibold text-sm rounded-lg border-[1.5px] border-white/40 hover:border-white hover:bg-white/10 transition-all duration-250"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
