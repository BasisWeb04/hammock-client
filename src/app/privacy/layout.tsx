import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Hammock Property Inspections",
  description:
    "How Hammock Property Inspections collects, stores, and protects your information.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
