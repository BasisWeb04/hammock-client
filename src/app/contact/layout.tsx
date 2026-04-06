import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request an Inspection — Hammock Property Inspections",
  description:
    "Request a home inspection on Florida's Space Coast. Tell us about the property and we'll respond promptly with next steps.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
