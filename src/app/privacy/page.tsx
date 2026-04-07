"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { businessName, contact } from "@/lib/content";

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-white py-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <RevealOnScroll>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
              Privacy
            </p>
            <h1 className="font-heading text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)] font-bold text-navy mb-4">
              Privacy Policy
            </h1>
            <p className="text-[13px] text-charcoal/60 mb-10">
              Last updated: April 2026
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="text-[15px] text-charcoal leading-relaxed mb-10">
              {businessName} respects your privacy. This page explains what
              information we collect, how we use it, and how it&apos;s protected.
              We aim to keep this short and clear — no legalese.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">
              What we collect
            </h2>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5">
              When you submit our contact form, we collect the information you
              provide: your name, email address, phone number, property address,
              square footage, inspection type, preferred date, and any message
              you include. We only collect what you choose to give us.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">
              How we use it
            </h2>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5">
              We use your information to respond to your inspection request,
              schedule services, and follow up about your inspection. That&apos;s
              it. We don&apos;t use your information for marketing campaigns or
              unrelated communications.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">
              How it&apos;s stored
            </h2>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5">
              Submissions are stored securely in a managed database service
              (Supabase) with industry-standard encryption. Access is limited to
              authorized personnel at {businessName}. Email notifications are
              delivered through a third-party email provider (Resend), which
              processes the message contents only to deliver the email.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">
              Cookies and tracking
            </h2>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5">
              This website does not use tracking cookies for advertising. We may
              use basic analytics tools (such as Google Analytics or Microsoft
              Clarity) to understand how visitors interact with the site so we
              can improve it. These tools collect anonymized usage data and do
              not identify you personally.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">
              Sharing with third parties
            </h2>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5">
              We do not sell, rent, or trade your information to third parties.
              The only third parties involved are the service providers listed
              above (Supabase for storage, Resend for email delivery), who are
              contractually bound to protect your data.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">
              Your choices
            </h2>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5">
              You can request that we delete the information you&apos;ve
              submitted at any time. Just contact us and we&apos;ll take care of
              it promptly.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-heading text-lg font-bold text-navy mb-3">
              Contact us
            </h2>
            <p className="text-[15px] text-charcoal leading-relaxed mb-12">
              If you have any questions about this privacy policy or how your
              information is handled, reach out at{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-teal hover:text-navy transition-colors underline"
              >
                {contact.email}
              </a>{" "}
              or{" "}
              <a
                href={`tel:${contact.phoneRaw}`}
                className="text-teal hover:text-navy transition-colors underline"
              >
                {contact.phone}
              </a>
              .
            </p>
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
            className="inline-flex items-center gap-2 bg-white text-navy px-7 py-3.5 font-semibold text-sm rounded-lg shadow-sm hover:-translate-y-px hover:shadow-lg transition-all duration-250"
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
