import { lazy } from "react";

// Overview pages
const DigitalTransformationProposal = lazy(
  () => import("@/pages/overview/DigitalTransformationProposal")
);
const AboutMorero = lazy(
  () => import("@/pages/overview/AboutMorero")
);
const Founder = lazy(
  () => import("@/pages/overview/Founder")
);

// Customer Analysis pages
const AnalysisOverview = lazy(() => import("@/pages/customer-analysis/Overview"));
const CompanyOverview = lazy(() => import("@/pages/customer-analysis/CompanyOverview"));
const FinancialLegal = lazy(() => import("@/pages/customer-analysis/FinancialLegal"));
const OperationsMarket = lazy(() => import("@/pages/customer-analysis/OperationsMarket"));
const Aspirations = lazy(() => import("@/pages/customer-analysis/Aspirations"));

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
      key: "overview",
      label: "Overview",
      component: <AnalysisOverview />,
    },
    {
      key: "company-overview",
      label: "Company Overview",
      component: <CompanyOverview />,
    },
    {
      key: "financial-legal",
      label: "Financial & Legal",
      component: <FinancialLegal />,
    },
    {
      key: "operations-market",
      label: "Operations & Market",
      component: <OperationsMarket />,
    },
    {
      key: "aspirations",
      label: "Aspirations",
      component: <Aspirations />,
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
};
