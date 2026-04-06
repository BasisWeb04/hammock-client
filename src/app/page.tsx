import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Hammock Property Inspections | Florida's Space Coast Home Inspections",
  description:
    "Hammock Property Inspections provides clear, professional home inspections in Florida, combining thorough reporting, drone-assisted capability, and an analytical approach clients can trust.",
};
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PricingPreview from "@/components/sections/PricingPreview";
import Process from "@/components/sections/Process";
import ServiceArea from "@/components/sections/ServiceArea";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <PricingPreview />
      <Process />
      <ServiceArea />
      <FinalCTA />
    </>
  );
}
