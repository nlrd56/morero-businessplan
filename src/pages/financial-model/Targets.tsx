import { DataTable } from '@/components/ui/data-table';
import { getAllAssumptions, getMonthLabels } from '../data/financialModel';
import { 
  generateMarketingFunnelOutputs, 
  formatCurrency, 
  formatInteger,
  testCalculations,
  type MarketingFunnelOutput 
} from '../data/outputs';
import { useState, useEffect } from 'react';

export const title = "Targets";
export const lastUpdated = "28/06/2025 20:10";

export default function Targets() {
  const [marketingFunnelData, setMarketingFunnelData] = useState<MarketingFunnelOutput[]>([]);
  const [selectedYear] = useState<number>(2026);
  const [scenarioSelections, setScenarioSelections] = useState<string[]>([]);

  useEffect(() => {
    const assumptions = getAllAssumptions();
    console.log('Assumptions loaded:', assumptions.length);
    
    // Test calculations
    const testResult = testCalculations();
    console.log('Test result:', testResult);
    
    const outputs = generateMarketingFunnelOutputs(assumptions);
    console.log('Generated outputs:', outputs.length);
    console.log('First output:', outputs[0]);
    
    setMarketingFunnelData(outputs);
    
    // Initialize scenario selections to 'base' for all months
    const monthCount = outputs.filter(output => output.year === selectedYear).length;
    setScenarioSelections(new Array(monthCount).fill('base'));
  }, [selectedYear]);

  // Get scenario multipliers from assumptions
  const getScenarioMultipliers = () => {
    // This would normally come from the Assumptions table
    // For now, using hardcoded values that match the Scenario table
    return {
      high: 1.20,
      base: 1.00,
      low: 0.80
    };
  };

  // Apply scenario multiplier to a value
  const applyScenarioMultiplier = (value: number, monthIndex: number) => {
    const scenario = scenarioSelections[monthIndex] || 'base';
    const multipliers = getScenarioMultipliers();
    return value * multipliers[scenario as keyof typeof multipliers];
  };

  // Filter data for selected year
  const yearData = marketingFunnelData.filter(output => output.year === selectedYear);
  const monthLabels = getMonthLabels();

  // Create table data structure with only the specified calculated fields as rows
  const createTableData = () => {
    const tableData = [
      {
        field: 'TAM Projects',
        category: 'market',
        rowType: 'calculation',
        formula: 'New Work Orders ÷ Average Project Value',
        months: yearData.map(output => formatInteger(output.tam_projects))
      },
      {
        field: 'Eligible Projects',
        category: 'market',
        rowType: 'calculation',
        formula: 'TAM Projects × Eligible Percentage',
        months: yearData.map(output => formatInteger(output.eligible_projects))
      },
      {
        field: 'Signed Projects Target',
        category: 'market',
        rowType: 'calculation',
        formula: 'Eligible Projects × Penetration Target',
        months: yearData.map(output => output.signed_projects_target.toFixed(2))
      },
      {
        field: 'Proposals Required',
        category: 'conversions',
        rowType: 'calculation',
        formula: 'Signed Projects Target ÷ Proposal to Win Conversion',
        months: yearData.map(output => formatInteger(output.proposals_required))
      },
      {
        field: 'Demos Required',
        category: 'conversions',
        rowType: 'calculation',
        formula: 'Proposals Required ÷ Demo to Proposal Conversion',
        months: yearData.map(output => formatInteger(output.demos_required))
      },
      {
        field: 'Qualified Leads Required',
        category: 'conversions',
        rowType: 'calculation',
        formula: 'Demos Required ÷ Qualified to Demo Conversion',
        months: yearData.map(output => formatInteger(output.qualified_leads_required))
      },
      {
        field: 'Raw Leads Required',
        category: 'conversions',
        rowType: 'calculation',
        formula: 'Qualified Required ÷ Lead to Qualified Conversion',
        months: yearData.map(output => formatInteger(output.raw_leads_required))
      },
      {
        field: 'Planned Lead Cost',
        category: 'cost',
        rowType: 'calculation',
        formula: 'Raw Leads Required × Cost per Lead',
        months: yearData.map(output => formatCurrency(output.planned_lead_cost))
      },
      {
        field: 'Total Planned Spend',
        category: 'cost',
        rowType: 'calculation',
        formula: 'Planned Lead Cost + Marketing Spend + Sales Spend',
        months: yearData.map(output => formatCurrency(output.planned_budget_total))
      }
    ];

    return tableData;
  };

  // Create columns for the table (months only)
  const createColumns = () => {
    const monthColumns = yearData.map((_, index) => ({
      title: monthLabels[index + (selectedYear - 2026) * 12],
      data: `month${index}`,
      render: (value: any, _type: string, row: any) => {
        // Check if this is the scenario row
        if (row.field === 'Scenario') {
          return (
            <select 
              defaultValue="base"
              onChange={(e) => {
                const newSelections = [...scenarioSelections];
                newSelections[index] = e.target.value;
                setScenarioSelections(newSelections);
              }}
            >
              <option value="low">Low</option>
              <option value="base">Base</option>
              <option value="high">High</option>
            </select>
          );
        }
        return <span className="text-white font-be-vietnam-pro text-xs">{value}</span>;
      }
    }));

    return [
      { title: 'Field', data: 'field' },
      ...monthColumns
    ];
  };

  // Format data for DataTable
  const formatTableData = () => {
    const tableData = createTableData();
    
    const formattedData = tableData.map(row => {
      const formattedRow: any = {
        field: row.field,
      };

      // Add month data with scenario multipliers applied
      row.months.forEach((value, index) => {
        // Convert string values to numbers for calculation
        let numericValue = 0;
        if (typeof value === 'string') {
          // Remove currency symbols and formatting
          numericValue = parseFloat(value.replace(/[£,%]/g, '').replace(/,/g, '')) || 0;
        } else {
          numericValue = value as number;
        }
        
        // Apply scenario multiplier
        const adjustedValue = applyScenarioMultiplier(numericValue, index);
        formattedRow[`month${index}`] = typeof value === 'string' && value.includes('£') 
          ? `£${Math.round(adjustedValue).toLocaleString()}`
          : typeof value === 'string' && value.includes('%')
          ? `${adjustedValue.toFixed(1)}%`
          : Math.round(adjustedValue).toString();
      });

      return formattedRow;
    });

    // Add scenario row at the end
    const scenarioRow: any = {
      field: 'Scenario',
    };

    // Add scenario selections for each month
    yearData.forEach((_, index) => {
      scenarioRow[`month${index}`] = scenarioSelections[index] || 'base';
    });

    formattedData.push(scenarioRow);

    return formattedData;
  };

  return (
    <div>
      <div className="font-be-vietnam-pro">
        <p>Marketing funnel targets and projections based on current assumptions.</p>
        <DataTable columns={createColumns()} data={formatTableData()} />
      </div>
    </div>
  );
} 