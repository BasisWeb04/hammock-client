import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Hammock Property Inspections",
  description:
    "Licensed and insured Florida home inspector with 30+ years experience, civil engineering background, and FAA-certified drone capability.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
