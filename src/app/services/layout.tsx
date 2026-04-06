import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspection Services — Hammock Property Inspections",
  description:
    "Full home inspections, 4-point, wind mitigation, pre-listing, pool & spa, and roof condition reports on Florida's Space Coast.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
