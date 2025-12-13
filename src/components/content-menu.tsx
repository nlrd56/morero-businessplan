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

// Financial Model pages
const Summary = lazy(() => import("@/pages/financial-model/Summary"));
const Charts = lazy(() => import("@/pages/financial-model/Charts"));
const ProfitLoss = lazy(() => import("@/pages/financial-model/ProfitLoss"));
const Assumptions = lazy(() => import("@/pages/financial-model/Assumptions"));
const Resources = lazy(() => import("@/pages/financial-model/Resources"));
const Workload = lazy(() => import("@/pages/financial-model/Workload"));
const Revenue = lazy(() => import("@/pages/financial-model/Revenue"));
const Expenses = lazy(() => import("@/pages/financial-model/Expenses"));
const PriceValidation = lazy(() => import("@/pages/financial-model/PriceValidation"));

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
  "financial-model": [
    {
      key: "summary",
      label: "Summary",
      component: <Summary />,
    },
    {
      key: "charts",
      label: "Charts",
      component: <Charts />,
    },
    {
      key: "profit-loss",
      label: "Profit & Loss",
      component: <ProfitLoss />,
    },
    {
      key: "assumptions",
      label: "Assumptions",
      component: <Assumptions />,
    },
    {
      key: "resources",
      label: "Resources",
      component: <Resources />,
    },
    {
      key: "workload",
      label: "Workload",
      component: <Workload />,
    },
    {
      key: "revenue",
      label: "Revenue",
      component: <Revenue />,
    },
    {
      key: "expenses",
      label: "Expenses",
      component: <Expenses />,
    },
    {
      key: "price-validation",
      label: "Price Validation",
      component: <PriceValidation />,
    },
  ],
};
