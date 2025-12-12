import {
  Search,
  Presentation,
  Home,
} from "lucide-react";

// Business Proposal Structure
export const menuItems = [
  { key: "overview", label: "Overview", icon: Home },
  { key: "customer-analysis", label: "Analysis", icon: Search },
  { key: "proposal", label: "Proposal", icon: Presentation },
];

// Define submenus for each main section - Business Proposal Structure
export const subMenus: Record<string, { key: string; label: string }[]> = {
  overview: [
    { key: "about-morero", label: "About Morero" },
    { key: "founder", label: "Founder" },
    { key: "digital-transformation-proposal", label: "Digital Transformation Proposal" },
  ],
  "customer-analysis": [
    { key: "overview", label: "Overview" },
    { key: "company-overview", label: "Company Overview" },
    { key: "financial-legal", label: "Financial & Legal" },
    { key: "operations-market", label: "Operations & Market" },
    { key: "aspirations", label: "Aspirations" },
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
  proposal: "proposal",
};

// Map submenu keys to file names (PascalCase) - Business Proposal Structure
export const subKeyToFile: Record<string, string> = {
  "digital-transformation-proposal": "DigitalTransformationProposal",
  "about-morero": "AboutMorero",
  "founder": "Founder",
  "overview": "Overview",
  "company-overview": "CompanyOverview",
  "financial-legal": "FinancialLegal",
  "operations-market": "OperationsMarket",
  "aspirations": "Aspirations",
  "value-fit": "ValueFit",
  "identified-needs": "IdentifiedNeeds",
  "plan": "Plan",
  "cost-options": "CostOptions",
  "terms-conditions": "TermsConditions",
};
