import {
  Search,
  Presentation,
  Home,
} from "lucide-react";

// Business Proposal Structure
export const menuItems = [
  { key: "overview", label: "Overview", icon: Home },
  { key: "customer-analysis", label: "Analysis", icon: Search },
  { key: "value-proposition", label: "Value Proposition", icon: Presentation },
  { key: "business-model", label: "Business Model", icon: Presentation },
  { key: "gtm", label: "GTM Strategy", icon: Presentation },
];

// Define submenus for each main section - Business Proposal Structure
export const subMenus: Record<string, { key: string; label: string }[]> = {
  overview: [
    { key: "about-morero", label: "About Morero" },
    { key: "founder", label: "Founder" },
    { key: "digital-transformation-proposal", label: "Digital Transformation Proposal" },
  ],
  "customer-analysis": [
    { key: "industry-analysis", label: "Industry Analysis" },
    { key: "digital-construction-analysis", label: "Digital Construction Analysis" },
    { key: "competitor-analysis", label: "Competitor Analysis" },
    { key: "primary-target-customer", label: "Primary Target Customer" },
    { key: "customer-pain-points", label: "Customer Pain Points" },
  ],
  "value-proposition": [
    { key: "market-position", label: "Market Position" },
    { key: "usp", label: "USP" },
    { key: "product-overview", label: "Product Overview" },
    { key: "system-architecture", label: "System Architecture" },
    { key: "future-development", label: "Future Development" },
  ],
  proposal: [
    { key: "value-fit", label: "Value Fit" },
    { key: "identified-needs", label: "Identified Needs" },
    { key: "plan", label: "Plan" },
    { key: "cost-options", label: "Cost Options" },
    { key: "terms-conditions", label: "Terms & Conditions" },
  ],
};

// Map menu keys to folder names - Business Proposal Structure
export const menuKeyToFolder: Record<string, string> = {
  overview: "overview",
  "customer-analysis": "customer-analysis",
  "value-proposition": "value-proposition",
  proposal: "proposal",
};

// Map submenu keys to file names (PascalCase) - Business Proposal Structure
export const subKeyToFile: Record<string, string> = {
  "digital-transformation-proposal": "DigitalTransformationProposal",
  "about-morero": "AboutMorero",
  "founder": "Founder",
  "industry-analysis": "IndustryAnalysis",
  "digital-construction-analysis": "DigitalTechnology",
  "competitor-analysis": "CompetitorAnalysis",
  "primary-target-customer": "PrimaryTargetCustomer",
  "customer-pain-points": "CustomerPainPoints",
  "market-position": "MarketPosition",
  "usp": "USP",
  "product-overview": "ProductOverview",
  "system-architecture": "SystemArchitecture",
  "future-development": "FutureDevelopment",
  "aspirations": "Aspirations",
  "value-fit": "ValueFit",
  "identified-needs": "IdentifiedNeeds",
  "plan": "Plan",
  "cost-options": "CostOptions",
  "terms-conditions": "TermsConditions",
};
