import { trustBar } from "@/lib/content";

const TRUST_ICONS = [
  // Licensed - shield
  <svg key="licensed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  // Insured - shield
  <svg key="insured" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  // Drone-Equipped - propeller
  <svg key="drone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-5.07-2.83 2.83M9.76 14.24l-2.83 2.83m0-10.14 2.83 2.83m4.48 4.48 2.83 2.83" />
  </svg>,
  // Clear Reports - document
  <svg key="reports" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>,
  // Professional Service - check
  <svg key="service" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>,
];

export default function TrustBar() {
  return (
    <div className="bg-navy py-6 px-6">
      <div className="max-w-[1140px] mx-auto flex justify-center flex-wrap gap-5 md:gap-12">
        {trustBar.map((label, i) => (
          <div
            key={label}
            className="flex items-center gap-2.5 text-white/90 text-[13.5px] font-medium tracking-wide"
          >
            <span className="w-5 h-5 opacity-70">{TRUST_ICONS[i]}</span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
