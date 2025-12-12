// Types for financial model data
export interface FinancialAssumption {
  id: string;
  field: string;
  category: "market" | "conversions" | "cost";
  rowType: "input" | "calculation";
  formula?: string; // Only for calculations
  // Monthly data starting from Jan 2026 for 5 years (60 months)
  months: (number | string)[];
  dataSource?: "ons" | "manual" | "calculated"; // Track data source
}

// Import ONS API functions
// import { updateNewWorkOrdersWithONSData } from './onsApi';

// Helper function to generate monthly progression
const generateMonthlyProgression = (
  startValue: number,
  endValue: number,
  isPercentage: boolean = false,
  isCurrency: boolean = false,
): (number | string)[] => {
  const months: (number | string)[] = [];
  const increment = (endValue - startValue) / 59; // 60 months total (0-59)

  for (let i = 0; i < 60; i++) {
    const value = startValue + increment * i;
    if (isPercentage) {
      months.push(`${value.toFixed(1)}%`);
    } else if (isCurrency) {
      months.push(`£${Math.round(value).toLocaleString()}`);
    } else {
      months.push(Math.round(value * 100) / 100);
    }
  }
  return months;
};

// Mock database for financial assumptions
export const financialAssumptions: FinancialAssumption[] = [
  // Market Assumptions
  {
    id: "new_work_orders",
    field: "New Work Orders (£)",
    category: "market",
    rowType: "input",
    dataSource: "ons", // Will be updated with real ONS data
    months: generateMonthlyProgression(240000, 320000, false, true),
  },
  {
    id: "market_growth_rate",
    field: "Market Growth Rate (%)",
    category: "market",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(3.5, 5.5, true),
  },
  {
    id: "average_project_value",
    field: "Average Project Value (£)",
    category: "market",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(240000, 320000, false, true),
  },
  {
    id: "eligible_percentage",
    field: "Eligible Percentage (%)",
    category: "market",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(25, 35, true),
  },
  {
    id: "penetration_target",
    field: "Penetration Target (%)",
    category: "market",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(1.0, 2.0, true),
  },

  // Conversion Assumptions
  {
    id: "lead_to_qualified",
    field: "Conversion: Lead to Qualified (%)",
    category: "conversions",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(70, 80, true),
  },
  {
    id: "qualified_to_demo",
    field: "Conversion: Qualified to Demo (%)",
    category: "conversions",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(45, 55, true),
  },
  {
    id: "demo_to_proposal",
    field: "Conversion: Demo to Proposal (%)",
    category: "conversions",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(50, 60, true),
  },
  {
    id: "proposal_to_win",
    field: "Conversion: Proposal to Win (%)",
    category: "conversions",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(35, 45, true),
  },
  {
    id: "overall_conversion",
    field: "Overall Conversion (%)",
    category: "conversions",
    rowType: "calculation",
    formula:
      "Lead to Qualified × Qualified to Demo × Demo to Proposal × Proposal to Win",
    dataSource: "calculated",
    months: generateMonthlyProgression(5.5, 11.9, true),
  },

  // Cost Assumptions
  {
    id: "cost_per_lead",
    field: "Cost per Lead (£)",
    category: "cost",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(60, 80, false, true),
  },
  {
    id: "marketing_spend",
    field: "Marketing Spend (£)",
    category: "cost",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(18000, 26000, false, true),
  },
  {
    id: "sales_spend",
    field: "Sales Spend (£)",
    category: "cost",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(8500, 10500, false, true),
  },
  {
    id: "technology_costs",
    field: "Technology Costs (£)",
    category: "cost",
    rowType: "input",
    dataSource: "manual",
    months: generateMonthlyProgression(6000, 8000, false, true),
  },
];

// Generate month labels for headers
export const getMonthLabels = (): string[] => {
  const labels: string[] = [];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let year = 2026; year <= 2030; year++) {
    for (let month = 0; month < 12; month++) {
      labels.push(`${months[month]} ${year.toString().slice(-2)}`);
    }
  }
  return labels;
};

// API-like functions for data access
export const getAssumptionsByCategory = (
  category: "market" | "conversions" | "cost",
): FinancialAssumption[] => {
  return financialAssumptions.filter(
    (assumption) => assumption.category === category,
  );
};

export const getAllAssumptions = (): FinancialAssumption[] => {
  return financialAssumptions;
};

export const getAllAssumptionsWithONSData = async (): Promise<
  FinancialAssumption[]
> => {
  // Create a copy of assumptions to update with ONS data
  const assumptionsCopy = JSON.parse(JSON.stringify(financialAssumptions));
  
  // For now, return the assumptions as-is since ONS API integration is handled elsewhere
  return assumptionsCopy;
};

export const getAssumptionById = (
  id: string,
): FinancialAssumption | undefined => {
  return financialAssumptions.find((assumption) => assumption.id === id);
};

// Future: Replace these with real API calls
export const fetchAssumptions = async (): Promise<FinancialAssumption[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return financialAssumptions;
};

export const updateAssumption = async (
  id: string,
  updates: Partial<FinancialAssumption>,
): Promise<FinancialAssumption> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 200));
  const index = financialAssumptions.findIndex((a) => a.id === id);
  if (index !== -1) {
    financialAssumptions[index] = {
      ...financialAssumptions[index],
      ...updates,
    };
    return financialAssumptions[index];
  }
  throw new Error("Assumption not found");
};


