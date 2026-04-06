import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Hammock Property Inspections",
  description:
    "Transparent home inspection pricing for Florida's Space Coast. See rates for full inspections, wind mitigation, 4-point, and more.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
