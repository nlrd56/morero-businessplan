import React, { useState, useEffect } from "react";
import { assumptionsService } from "../data/assumptionsService";
// Use the type from the external file
import type { FinancialAssumption } from "../data/financialModel";
import { DataTable } from "@/components/ui/data-table";

export const title = "Assumptions";
export const lastUpdated = "13/12/2025 08:45"; // Final timestamp

const Assumptions: React.FC = () => {
  // --- STATE FOR 5 CATEGORIES ---
  const [marketAssumptions, setMarketAssumptions] = useState<FinancialAssumption[]>([]);
  const [budgetAssumptions, setBudgetAssumptions] = useState<FinancialAssumption[]>([]);
  const [funnelAssumptions, setFunnelAssumptions] = useState<FinancialAssumption[]>([]);
  const [churnAssumptions, setChurnAssumptions] = useState<FinancialAssumption[]>([]);
  const [growthAssumptions, setGrowthAssumptions] = useState<FinancialAssumption[]>([]);

  // --- Data Loading Effect (Unchanged) ---
  useEffect(() => {
    const loadAssumptions = async () => {
      console.log("Loading assumptions via service...");
      try {
        const [market, budgets, funnel, churn, growth] = await Promise.all([
          assumptionsService.getAssumptionsByCategory("market"),
          assumptionsService.getAssumptionsByCategory("budgets"),
          assumptionsService.getAssumptionsByCategory("funnel"),
          assumptionsService.getAssumptionsByCategory("churn"),
          assumptionsService.getAssumptionsByCategory("growth"),
        ]);
        
        setMarketAssumptions(market);
        setBudgetAssumptions(budgets);
        setFunnelAssumptions(funnel);
        setChurnAssumptions(churn);
        setGrowthAssumptions(growth);
      } catch (error) {
        console.error("Error loading assumptions:", error);
        setMarketAssumptions([]); setBudgetAssumptions([]); setFunnelAssumptions([]); 
        setChurnAssumptions([]); setGrowthAssumptions([]);
      }
    };
    loadAssumptions();
  }, []);

  // --- Column logic for Static (Non-Time-Series) Assumptions (Unchanged) ---
  const createStaticColumns = () => {
    const columns: any[] = [
      {
        title: "Assumption",
        data: "field",
      },
      
      {
        title: "Value",
        data: "value",
        render: (value: any) => {
          if (!value && value !== 0) return <span></span>;
          
          // If it's already a formatted string (contains £ or %), try to extract and reformat
          if (typeof value === 'string') {
            // Check if it's a currency string
            if (value.includes('£')) {
              const numValue = parseFloat(value.replace(/[£,]/g, ''));
              if (!isNaN(numValue)) {
                return <span>£{numValue.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>;
              }
            }
            // Check if it's a percentage string
            if (value.includes('%')) {
              const numValue = parseFloat(value.replace('%', ''));
              if (!isNaN(numValue)) {
                return <span>{numValue.toFixed(2)}%</span>;
              }
            }
            // If it's a plain number string, try to parse and format
            const numValue = parseFloat(value.replace(/,/g, ''));
            if (!isNaN(numValue)) {
              return <span>{numValue.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>;
            }
            return <span>{value}</span>;
          }
          
          // If it's a number, format to 2 decimal places
          if (typeof value === 'number') {
            return <span>{value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>;
          }
          
          return <span>{value}</span>;
        },
      },
      {
        title: "Description",
        data: "description",
        render: (description: any) => {
          return <span className="text-gray-400">{description || ""}</span>;
        },
      },
    ];
    return columns;
  };

  // --- Data logic for Static (Non-Time-Series) Assumptions (Unchanged) ---
  const createStaticTableData = (assumptions: FinancialAssumption[]) => {
    const data: any[] = [];
    assumptions.forEach((assumption) => {
      const row: any = {
        id: assumption.id, 
        field: assumption.field,
        description: assumption.description || "",
        value: assumption.months.length > 0 ? assumption.months[0] : "", 
      };
      data.push(row);
    });

    return data;
  };

  // --- Render Function (Unchanged) ---
  const renderStaticTable = (assumptions: FinancialAssumption[]) => {
    const columns = createStaticColumns(); 
    const data = createStaticTableData(assumptions);

    return (
      <div className="max-w-2xl text-left"> 
        <DataTable columns={columns} data={data} className="" />
      </div>
    );
  };

  // --- RENDER BLOCK (Unchanged) ---
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Future Development</h2>
      <p className="mb-6">Future development focuses on extending Morero’s governance capability in a controlled and modular way, guided by demonstrated customer need.</p>

      <div className="mt-4 text-left"> 
        <div className="font-be-vietnam-pro">
          <div className="space-y-4">
            
            <p className="mb-4 text-gray-400">
              <strong>Market:</strong> Market size, industry growth rates, and key metrics for external environment analysis.
            </p>
            {renderStaticTable(marketAssumptions)}

            <p className="mt-12 mb-4 text-gray-400">
              <strong>Budgets:</strong> Initial capital, operational spending percentages, and fixed fee assumptions.
            </p>
            {renderStaticTable(budgetAssumptions)}

            <p className="mt-12 mb-4 text-gray-400">
              <strong>Funnel:</strong> Conversion rates, outreach targets, and project difficulty multipliers for sales forecasting.
            </p>
            {renderStaticTable(funnelAssumptions)}

            <p className="mt-12 mb-4 text-gray-400">
              <strong>Churn:</strong> Assumptions related to project lifetime and customer retention over time.
            </p>
            {renderStaticTable(churnAssumptions)}

            <p className="mt-12 mb-4 text-gray-400">
              <strong>Growth & Development:</strong> Metrics defining the rate and size of product feature development.
            </p>
            {renderStaticTable(growthAssumptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assumptions;