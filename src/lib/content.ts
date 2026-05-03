import siteData from "./site-data.json";

// --- Type definitions ---

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface WhyItem {
  title: string;
  description: string;
}

export interface PricingRow {
  size: string;
  price: string;
}

export interface InsuranceRow {
  service: string;
  withHome: string;
  standalone: string;
}

export interface AdditionalRow {
  service: string;
  note: string;
  price: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  trustBullets: string[];
  heroImage: { type: "placeholder" | "image"; imagePath: string };
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneRaw: string;
  serviceArea: string;
  serviceAreaBadge: string;
}

export interface PricingData {
  homeInspectionTitle: string;
  insuranceInspectionsTitle: string;
  additionalServicesTitle: string;
  homeInspection: PricingRow[];
  insuranceInspections: InsuranceRow[];
  additionalServices: AdditionalRow[];
  disclaimer: string;
}

export interface LogoConfig {
  type: "text" | "image";
  imagePath: string;
  imageHeight: number;
}

export interface SiteData {
  businessName: string;
  logo: LogoConfig;
  copyright: string;
  brandStatement: string;
  contact: ContactInfo;
  navLinks: NavLink[];
  footerLinks: NavLink[];
  hero: HeroData;
  trustBar: string[];
  services: Service[];
  whyChooseUs: WhyItem[];
  pricing: PricingData;
  processSteps: ProcessStep[];
  credentials: string[];
  inspectionTypes: string[];
}

// --- Typed exports ---

const data = siteData as SiteData;

export const businessName = data.businessName;
export const logo = data.logo;
export const copyright = data.copyright;
export const brandStatement = data.brandStatement;
export const contact = data.contact;
export const navLinks = data.navLinks;
export const footerLinks = data.footerLinks;
export const hero = data.hero;
export const trustBar = data.trustBar;
export const services = data.services;
export const whyChooseUs = data.whyChooseUs;
export const pricing = data.pricing;
export const processSteps = data.processSteps;
export const credentials = data.credentials;
export const inspectionTypes = data.inspectionTypes;

export default data;
