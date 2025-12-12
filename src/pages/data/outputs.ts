// Types for financial model outputs
export interface FinancialOutput {
  id: string;
  metric: string;
  month: number;
  quarter: number;
  year2026: number | string;
  year2027: number | string;
  year2028: number | string;
  year2029: number | string;
  year2030: number | string;
  average: number | string;
  category: 'revenue' | 'costs' | 'profitability' | 'growth';
}

// Mock database for financial outputs
export const financialOutputs: FinancialOutput[] = [
  // Revenue Metrics
  {
    id: 'total_revenue',
    metric: 'Total Revenue',
    month: 240000,
    quarter: 720000,
    year2026: '£2,880,000',
    year2027: '£3,744,000',
    year2028: '£4,680,000',
    year2029: '£5,850,000',
    year2030: '£7,488,000',
    average: '£4,928,400',
    category: 'revenue'
  },
  {
    id: 'revenue_growth',
    metric: 'Revenue Growth Rate',
    month: 0,
    quarter: 0,
    year2026: '30%',
    year2027: '30%',
    year2028: '25%',
    year2029: '25%',
    year2030: '28%',
    average: '27.6%',
    category: 'revenue'
  },
  {
    id: 'avg_revenue_per_customer',
    metric: 'Average Revenue per Customer',
    month: 240000,
    quarter: 720000,
    year2026: '£240,000',
    year2027: '£260,000',
    year2028: '£280,000',
    year2029: '£300,000',
    year2030: '£320,000',
    average: '£280,000',
    category: 'revenue'
  },

  // Cost Metrics
  {
    id: 'total_costs',
    metric: 'Total Costs',
    month: 192000,
    quarter: 576000,
    year2026: '£2,304,000',
    year2027: '£2,995,200',
    year2028: '£3,744,000',
    year2029: '£4,680,000',
    year2030: '£5,990,400',
    average: '£3,942,720',
    category: 'costs'
  },
  {
    id: 'cost_of_sales',
    metric: 'Cost of Sales',
    month: 144000,
    quarter: 432000,
    year2026: '£1,728,000',
    year2027: '£2,246,400',
    year2028: '£2,808,000',
    year2029: '£3,510,000',
    year2030: '£4,492,800',
    average: '£2,957,040',
    category: 'costs'
  },
  {
    id: 'operating_expenses',
    metric: 'Operating Expenses',
    month: 48000,
    quarter: 144000,
    year2026: '£576,000',
    year2027: '£748,800',
    year2028: '£936,000',
    year2029: '£1,170,000',
    year2030: '£1,497,600',
    average: '£985,680',
    category: 'costs'
  },

  // Profitability Metrics
  {
    id: 'gross_profit',
    metric: 'Gross Profit',
    month: 96000,
    quarter: 288000,
    year2026: '£1,152,000',
    year2027: '£1,497,600',
    year2028: '£1,872,000',
    year2029: '£2,340,000',
    year2030: '£2,995,200',
    average: '£1,971,360',
    category: 'profitability'
  },
  {
    id: 'gross_margin',
    metric: 'Gross Margin %',
    month: 40,
    quarter: 40,
    year2026: '40%',
    year2027: '40%',
    year2028: '40%',
    year2029: '40%',
    year2030: '40%',
    average: '40%',
    category: 'profitability'
  },
  {
    id: 'net_profit',
    metric: 'Net Profit',
    month: 48000,
    quarter: 144000,
    year2026: '£576,000',
    year2027: '£748,800',
    year2028: '£936,000',
    year2029: '£1,170,000',
    year2030: '£1,497,600',
    average: '£985,680',
    category: 'profitability'
  },
  {
    id: 'net_margin',
    metric: 'Net Margin %',
    month: 20,
    quarter: 20,
    year2026: '20%',
    year2027: '20%',
    year2028: '20%',
    year2029: '20%',
    year2030: '20%',
    average: '20%',
    category: 'profitability'
  },

  // Growth Metrics
  {
    id: 'customer_count',
    metric: 'Total Customers',
    month: 1,
    quarter: 3,
    year2026: '12',
    year2027: '14.4',
    year2028: '16.7',
    year2029: '19.5',
    year2030: '23.4',
    average: '17.2',
    category: 'growth'
  },
  {
    id: 'customer_growth',
    metric: 'Customer Growth Rate',
    month: 0,
    quarter: 0,
    year2026: '20%',
    year2027: '20%',
    year2028: '16%',
    year2029: '17%',
    year2030: '20%',
    average: '18.6%',
    category: 'growth'
  },
  {
    id: 'market_share',
    metric: 'Market Share %',
    month: 0.083,
    quarter: 0.25,
    year2026: '1.0%',
    year2027: '1.2%',
    year2028: '1.4%',
    year2029: '1.7%',
    year2030: '2.0%',
    average: '1.46%',
    category: 'growth'
  }
];

// API-like functions for data access
export const getOutputsByCategory = (category: 'revenue' | 'costs' | 'profitability' | 'growth'): FinancialOutput[] => {
  return financialOutputs.filter(output => output.category === category);
};

export const getAllOutputs = (): FinancialOutput[] => {
  return financialOutputs;
};

export const getOutputById = (id: string): FinancialOutput | undefined => {
  return financialOutputs.find(output => output.id === id);
};

// Future: Replace these with real API calls
export const fetchOutputs = async (): Promise<FinancialOutput[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return financialOutputs;
};

export const updateOutput = async (id: string, updates: Partial<FinancialOutput>): Promise<FinancialOutput> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 200));
  const index = financialOutputs.findIndex(o => o.id === id);
  if (index !== -1) {
    financialOutputs[index] = { ...financialOutputs[index], ...updates };
    return financialOutputs[index];
  }
  throw new Error('Output not found');
};

// Types for marketing funnel outputs
export interface MarketingFunnelOutput {
  id: string;
  month: number;
  year: number;
  scenario: string;
  
  // Lookup fields (from Assumptions)
  new_work_orders: number;
  avg_project_value: number;
  eligible_percentage: number;
  penetration_target: number;
  conversion_proposal: number;
  conversion_demo: number;
  conversion_qualified: number;
  conversion_lead: number;
  cost_per_lead: number;
  
  // Calculated fields
  tam_projects: number;
  eligible_projects: number;
  signed_projects_target: number;
  proposals_required: number;
  demos_required: number;
  qualified_leads_required: number;
  raw_leads_required: number;
  planned_lead_cost: number;
  planned_budget_total: number;
}

// Helper function to extract numeric value from assumption data
const extractNumericValue = (value: number | string): number => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    // Remove currency symbols and commas
    const cleanValue = value.replace(/[£$,]/g, '');
    // Remove percentage sign and convert to decimal
    if (cleanValue.includes('%')) {
      return parseFloat(cleanValue.replace('%', '')) / 100;
    }
    return parseFloat(cleanValue) || 0;
  }
  return 0;
};

// Calculate marketing funnel outputs for a given month
export const calculateMarketingFunnelOutput = (
  monthIndex: number,
  assumptions: any[],
  scenario: string = 'base'
): MarketingFunnelOutput => {
  
  // Helper function to get assumption value by ID
  const getAssumptionValue = (id: string): number => {
    const assumption = assumptions.find(a => a.id === id);
    if (!assumption || !assumption.months[monthIndex]) return 0;
    return extractNumericValue(assumption.months[monthIndex]);
  };

  // Get lookup values from assumptions
  const new_work_orders = getAssumptionValue('new_work_orders');
  const avg_project_value = getAssumptionValue('average_project_value');
  const eligible_percentage = getAssumptionValue('eligible_percentage');
  const penetration_target = getAssumptionValue('penetration_target');
  const conversion_proposal = getAssumptionValue('proposal_to_win');
  const conversion_demo = getAssumptionValue('demo_to_proposal');
  const conversion_qualified = getAssumptionValue('qualified_to_demo');
  const conversion_lead = getAssumptionValue('lead_to_qualified');
  const cost_per_lead = getAssumptionValue('cost_per_lead');

  // Calculate derived values
  const tam_projects = avg_project_value > 0 ? Math.round(new_work_orders / avg_project_value) : 0;
  const eligible_projects = Math.round(tam_projects * eligible_percentage);
  const signed_projects_target = eligible_projects * penetration_target;
  const proposals_required = conversion_proposal > 0 ? Math.ceil(signed_projects_target / conversion_proposal) : 0;
  const demos_required = conversion_demo > 0 ? Math.ceil(proposals_required / conversion_demo) : 0;
  const qualified_leads_required = conversion_qualified > 0 ? Math.ceil(demos_required / conversion_qualified) : 0;
  const raw_leads_required = conversion_lead > 0 ? Math.ceil(qualified_leads_required / conversion_lead) : 0;
  const planned_lead_cost = raw_leads_required * cost_per_lead;
  const planned_budget_total = planned_lead_cost; // Can be extended to include other spend

  // Calculate month and year from index
  const startYear = 2026;
  const year = startYear + Math.floor(monthIndex / 12);
  const month = (monthIndex % 12) + 1;

  return {
    id: `${year}-${month.toString().padStart(2, '0')}`,
    month,
    year,
    scenario,
    new_work_orders,
    avg_project_value,
    eligible_percentage,
    penetration_target,
    conversion_proposal,
    conversion_demo,
    conversion_qualified,
    conversion_lead,
    cost_per_lead,
    tam_projects,
    eligible_projects,
    signed_projects_target,
    proposals_required,
    demos_required,
    qualified_leads_required,
    raw_leads_required,
    planned_lead_cost,
    planned_budget_total
  };
};

// Generate all marketing funnel outputs for the entire period
export const generateMarketingFunnelOutputs = (assumptions: any[]): MarketingFunnelOutput[] => {
  const outputs: MarketingFunnelOutput[] = [];
  
  // Generate outputs for all 60 months (5 years)
  for (let i = 0; i < 60; i++) {
    outputs.push(calculateMarketingFunnelOutput(i, assumptions));
  }
  
  return outputs;
};

// Format currency values for display
export const formatCurrency = (value: number): string => {
  return `£${Math.round(value).toLocaleString()}`;
};

// Format percentage values for display
export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(1)}%`;
};

// Format integer values for display
export const formatInteger = (value: number): string => {
  return Math.round(value).toLocaleString();
};

// Test function to verify calculations work
export const testCalculations = () => {
  const testAssumptions = [
    {
      id: 'new_work_orders',
      months: ['£86,000,000', '£86,000,000', '£86,000,000']
    },
    {
      id: 'average_project_value',
      months: ['£200,000', '£200,000', '£200,000']
    },
    {
      id: 'eligible_percentage',
      months: ['20.0%', '20.0%', '20.0%']
    },
    {
      id: 'penetration_target',
      months: ['0.5%', '0.5%', '0.5%']
    },
    {
      id: 'proposal_to_win',
      months: ['25.0%', '25.0%', '25.0%']
    },
    {
      id: 'demo_to_proposal',
      months: ['40.0%', '40.0%', '40.0%']
    },
    {
      id: 'qualified_to_demo',
      months: ['35.0%', '35.0%', '35.0%']
    },
    {
      id: 'lead_to_qualified',
      months: ['60.0%', '60.0%', '60.0%']
    },
    {
      id: 'cost_per_lead',
      months: ['£50', '£50', '£50']
    }
  ];

  const result = calculateMarketingFunnelOutput(0, testAssumptions);
  console.log('Test calculation result:', result);
  return result;
}; 