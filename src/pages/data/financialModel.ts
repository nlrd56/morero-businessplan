// Types for financial model data
export interface FinancialAssumption {
   id: string;
   field: string;
   description?: string; // Description for the assumption
   // All five categories needed for the tables
   category: "market" | "budgets" | "funnel" | "churn" | "growth"; 
   rowType: "input" | "calculation";
   formula?: string; // Only for calculations
   // Monthly data starting from Jan 2026 for 5 years (60 months)
   months: (number | string)[];
   dataSource?: "ons" | "manual" | "calculated"; // Track data source
   currency?: string; // New field for currency symbol
}
  
  // Helper function to generate monthly progression
  const generateMonthlyProgression = (
    startValue: number,
    endValue: number,
    isPercentage: boolean = false,
    isCurrency: boolean = false,
  ): (number | string)[] => {
    const months: (number | string)[] = [];
    const increment = (endValue - startValue) / 59; 
  
    for (let i = 0; i < 60; i++) {
      const value = startValue + increment * i;
      
      // Only format the first element for the single-column view
      if (i === 0) {
          if (isPercentage) {
              months.push(`${value.toFixed(2)}%`);
          } else if (isCurrency) {
              const formatted = value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
              months.push(`£${formatted}`);
          } else {
              months.push(parseFloat(value.toFixed(2)));
          }
      } else {
          // Subsequent months are raw numbers for potential future calculations
          months.push(parseFloat(value.toFixed(2)));
      }
    }
    return months;
  };
  
  // Mock database for financial assumptions
  export const financialAssumptions: FinancialAssumption[] = [
    
    // --- Market Assumptions ---
    {
      id: "market_new_orders",
      field: "Market New Orders Annual",
      description: "Market New Orders Annual",
      category: "market",
      rowType: "input",
      dataSource: "ons", 
      months: generateMonthlyProgression(42958000000, 45000000000, false, true),
      currency: "£",
    },
    {
      id: "industry_annual_growth",
      field: "Industry Annual Growth",
      category: "market",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(4.6, 5.0, true),
    },
    {
      id: "average_project_size",
      field: "Average Project Size",
      category: "market",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(10000000, 11000000, false, true),
      currency: "£",
    },
    {
      id: "inflation",
      field: "Inflation",
      category: "market",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(3.0, 3.2, true),
    },
  
    // --- Budgets Assumptions ---
    {
      id: "startup_capital",
      field: "Startup Capital",
      category: "budgets",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(46000, 46000, false, true),
      currency: "£",
    },
    {
      id: "customer_acquisition_budget",
      field: "Customer Acquisition Budget",
      category: "budgets",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(20, 18, true),
    },
    {
      id: "advertising_marketing_budget",
      field: "Advertising & Marketing Budget",
      category: "budgets",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(0.1, 0.1, true),
    },
    {
      id: "rd_budget",
      field: "R&D Budget",
      category: "budgets",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(3.0, 3.0, true),
    },
    {
      id: "event_hospitality_budgets",
      field: "Event & Hospitality Budgets",
      category: "budgets",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(0.3, 0.3, true),
    },
    {
      id: "stripe_billing_fee",
      field: "Stripe Billing Fee",
      category: "budgets",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(2.5, 2.5, true),
    },
    {
      id: "stripe_subscription_fee",
      field: "Stripe Subscription Fee",
      category: "budgets",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(0.7, 0.7, true),
    },
    {
      id: "stripe_transaction_fee",
      field: "Stripe Transaction Fee",
      category: "budgets",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(0.20, 0.20, false, true),
      currency: "£",
    },
    {
      id: "contingency",
      field: "Contingency",
      category: "budgets",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(10, 10, true),
    },
  
    // --- Funnel Assumptions ---
    {
      id: "eligible_percentage",
      field: "Eligible Percentage",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(40, 45, true),
    },
    {
      id: "max_tam_target",
      field: "Max TAM Target",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(60, 60, true),
    },
    {
      id: "max_sam_penetration",
      field: "Max SAM Penetration",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(10, 15, true),
    },
    {
      id: "lead_to_qualified",
      field: "Lead to Qualified",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(25, 30, true),
    },
    {
      id: "qualified_to_demo",
      field: "Qualified to Demo",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(40, 50, true),
    },
    {
      id: "demo_to_signed",
      field: "Demo to Signed",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(30, 40, true),
    },
    {
      id: "target_project_difficulty",
      field: "Target Project Difficulty",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(2, 2.5),
    },
    {
      id: "stretch_target_multiplier",
      field: "Stretch Target Multiplier",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(1.7, 1.8),
    },
    {
      id: "midpoint",
      field: "Midpoint",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(36, 48),
    },
    {
      id: "uptake",
      field: "Uptake",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(0.102, 0.15),
    },
    {
      id: "minimum_outreach",
      field: "Minimum Outreach",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(2, 3),
    },
    {
      id: "minimum_admin",
      field: "Minimum Admin",
      category: "funnel",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(10, 12),
    },
  
    // --- Churn Assumptions ---
    {
      id: "project_duration",
      field: "Project Duration (Months)",
      category: "churn",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(24, 30),
    },
    {
      id: "project_churn_rate",
      field: "Project Churn Rate",
      category: "churn",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(75, 70, true),
    },
    
    // --- Growth & Development Assumptions ---
    {
      id: "releases_per_month",
      field: "Releases per Month",
      category: "growth",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(0.25, 0.3),
    },
    {
      id: "features_per_release",
      field: "Features per Release",
      category: "growth",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(2.00, 2.5),
    },
    {
      id: "components_per_feature",
      field: "Components per Feature",
      category: "growth",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(4.00, 4.0),
    },
    {
      id: "api_per_feature",
      field: "API per Feature",
      category: "growth",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(2.00, 2.0),
    },
    {
      id: "tests_per_api_component",
      field: "Tests per API/Component",
      category: "growth",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(2.00, 2.5),
    },
    {
      id: "content_per_feature",
      field: "Content per Feature",
      category: "growth",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(4.00, 5.0),
    },
    {
      id: "mb_per_feature",
      field: "MB per feature",
      category: "growth",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(50.00, 60.0),
    },
    {
      id: "feature_support",
      field: "Feature Support",
      category: "growth",
      rowType: "input",
      dataSource: "manual",
      months: generateMonthlyProgression(12.00, 15.0),
    },
  
      // Removed old Conversion and Cost assumptions
  ];
  
  // Generate month labels for headers (Unchanged)
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
  
  // API-like functions for data access (Accepts all 5 categories)
  export const getAssumptionsByCategory = (
    category: "market" | "budgets" | "funnel" | "churn" | "growth",
  ): FinancialAssumption[] => {
    return financialAssumptions.filter(
      (assumption) => assumption.category === category,
    );
  };
  
  // ... (Rest of the service functions remain unchanged)
  export const getAllAssumptions = (): FinancialAssumption[] => {
    return financialAssumptions;
  };
  
  export const getAllAssumptionsWithONSData = async (): Promise<
    FinancialAssumption[]
  > => {
    const assumptionsCopy = JSON.parse(JSON.stringify(financialAssumptions));
    return assumptionsCopy;
  };
  
  export const getAssumptionById = (
    id: string,
  ): FinancialAssumption | undefined => {
    return financialAssumptions.find((assumption) => assumption.id === id);
  };
  
  export const fetchAssumptions = async (): Promise<FinancialAssumption[]> => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return financialAssumptions;
  };
  
  export const updateAssumption = async (
    id: string,
    updates: Partial<FinancialAssumption>,
  ): Promise<FinancialAssumption> => {
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