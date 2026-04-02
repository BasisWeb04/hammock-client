import Link from "next/link";
import { footerLinks, copyright as siteCopyright } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-12 pb-8 px-6 text-[13px] text-white/60">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="font-heading font-bold text-lg text-white tracking-tight"
          >
            Hammock{" "}
            <span className="text-white/40">Property Inspections</span>
          </Link>
          <p className="mt-1">Florida&apos;s Space Coast</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/50 text-[13px] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="w-full text-center mt-8 pt-6 border-t border-white/[0.08] text-xs text-white/35">
          {siteCopyright}
        </div>
      </div>
    </footer>
  );
}
