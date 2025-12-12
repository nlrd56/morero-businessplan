import { lazy } from "react";

// Overview pages
const DigitalTransformationProposal = lazy(
  () => import("@/pages/overview/Values")
);
const AboutMorero = lazy(
  () => import("@/pages/overview/AboutMorero")
);
const Founder = lazy(
  () => import("@/pages/overview/Founder")
);

// Customer Analysis pages
const IndustryAnalysis = lazy(() => import("@/pages/customer-analysis/IndustryAnalysis"));
const DigitalTechnology = lazy(() => import("@/pages/customer-analysis/DigitalTechnology"));
const PrimaryTargetCustomer = lazy(() => import("@/pages/customer-analysis/PrimaryTargetCustomer"));
const CompetitorAnalysis = lazy(() => import("@/pages/customer-analysis/CompetitorAnalysis"));
const CustomerPainPoints = lazy(() => import("@/pages/customer-analysis/CustomerPainPoints"));

// Value Proposition pages
const MarketPosition = lazy(() => import("@/pages/value-proposition/MarketPosition"));
const USP = lazy(() => import("@/pages/value-proposition/USP"));
const ProductOverview = lazy(() => import("@/pages/value-proposition/ProductOverview"));
const SystemArchitecture = lazy(() => import("@/pages/value-proposition/SystemArchitecture"));
const FutureDevelopment = lazy(() => import("@/pages/value-proposition/FutureDevelopment"));

// Proposal pages
const ValueFit = lazy(() => import("@/pages/proposal/ValueFit"));
const IdentifiedNeeds = lazy(() => import("@/pages/proposal/IdentifiedNeeds"));
const Plan = lazy(() => import("@/pages/proposal/Plan"));
const CostOptions = lazy(() => import("@/pages/proposal/CostOptions"));
const TermsConditions = lazy(() => import("@/pages/proposal/TermsConditions"));

// Business Proposal Content Menu
export const contentMenus: Record<
  string,
  { key: string; label: string; component: React.ReactNode }[]
> = {
  overview: [
    {
      key: "about-morero",
      label: "About Morero",
      component: <AboutMorero />,
    },
    {
      key: "founder",
      label: "Founder",
      component: <Founder />,
    },
    {
      key: "digital-transformation-proposal",
      label: "Digital Transformation Proposal",
      component: <DigitalTransformationProposal />,
    },
  ],
  "customer-analysis": [
    {
      key: "industry-analysis",
      label: "Industry Analysis",
      component: <IndustryAnalysis />,
    },
    {
      key: "digital-construction-analysis",
      label: "Digital Construction Analysis",
      component: <DigitalTechnology />,
    },
    {
      key: "competitor-analysis",
      label: "Competitor Analysis",
      component: <CompetitorAnalysis />,
    },
    {
      key: "primary-target-customer",
      label: "Primary Target Customer",
      component: <PrimaryTargetCustomer />,
    },
    {
      key: "customer-pain-points",
      label: "Customer Pain Points",
      component: <CustomerPainPoints />,
    },
  ],
  proposal: [
    {
      key: "value-fit",
      label: "Value Fit",
      component: <ValueFit />,
    },
    {
      key: "identified-needs",
      label: "Identified Needs",
      component: <IdentifiedNeeds />,
    },
    {
      key: "plan",
      label: "Plan",
      component: <Plan />,
    },
    {
      key: "cost-options",
      label: "Cost Options",
      component: <CostOptions />,
    },
    {
      key: "terms-conditions",
      label: "Terms & Conditions",
      component: <TermsConditions />,
    },
  ],
  "value-proposition": [
    {
      key: "market-position",
      label: "Market Position",
      component: <MarketPosition />,
    },
    {
      key: "usp",
      label: "USP",
      component: <USP />,
    },
    {
      key: "product-overview",
      label: "Product Overview",
      component: <ProductOverview />,
    },
    {
      key: "system-architecture",
      label: "System Architecture",
      component: <SystemArchitecture />,
    },
    {
      key: "future-development",
      label: "Future Development",
      component: <FutureDevelopment />,
    },
  ],
};
