import React, { useState, useEffect, useMemo } from "react";
import { getMonthLabels } from "../data/financialModel";
import { assumptionsService } from "../data/assumptionsService";
import type { FinancialAssumption } from "../data/financialModel";
import { DataTable } from "@/components/ui/data-table";

export const title = "Assumptions";
export const lastUpdated = "28/06/2025 20:15";

const Assumptions: React.FC = () => {
  const [marketAssumptions, setMarketAssumptions] = useState<
    FinancialAssumption[]
  >([]);
  const [conversionAssumptions, setConversionAssumptions] = useState<
    FinancialAssumption[]
  >([]);
  const [costAssumptions, setCostAssumptions] = useState<FinancialAssumption[]>(
    []
  );
  const monthLabels = useMemo(() => getMonthLabels(), []);

  useEffect(() => {
    const loadAssumptions = async () => {
      console.log("Loading assumptions via service...");

      try {
        // Use the service to get assumptions with ONS data
        const [market, conversions, cost] = await Promise.all([
          assumptionsService.getAssumptionsByCategory("market"),
          assumptionsService.getAssumptionsByCategory("conversions"),
          assumptionsService.getAssumptionsByCategory("cost"),
        ]);

        console.log("Assumptions loaded via service:", {
          market: market.length,
          conversions: conversions.length,
          cost: cost.length,
        });

        // Log the new work orders value specifically
        const newWorkOrders = market.find((a) => a.id === "new_work_orders");
        if (newWorkOrders) {
          console.log(
            "New work orders January 2026 value:",
            newWorkOrders.months[0]
          );
        }

        setMarketAssumptions(market);
        setConversionAssumptions(conversions);
        setCostAssumptions(cost);
      } catch (error) {
        console.error("Error loading assumptions:", error);
        // Fallback to empty arrays if service fails
        setMarketAssumptions([]);
        setConversionAssumptions([]);
        setCostAssumptions([]);
      }
    };

    loadAssumptions();
  }, []);

  const createColumns = () => {
    const columns: any[] = [
      {
        title: "Assumption",
        data: "field",
      },
    ];

    // Add month columns
    monthLabels.forEach((label, index) => {
      columns.push({
        title: label,
        data: `month_${index}`,
        render: (value: any, _type: string, row: any) => {
          // Check if this is a status row by looking at the row data
          if (row.field === "Status") {
            return (
              <select>
                <option value="estimate">Estimate</option>
                <option value="reviewing">Reviewing</option>
                <option value="approved">Approved</option>
              </select>
            );
          }

          // Always render input for non-status rows
          let displayValue = "";
          if (value !== undefined && value !== null) {
            if (typeof value === "string") {
              // Remove currency symbols and formatting
              displayValue = value.replace(/[£,%]/g, "").replace(/,/g, "");
            } else {
              displayValue = value.toString();
            }
          }

          return (
            <div style={{ position: "relative", display: "inline-block" }}>
              <input
                type="text"
                defaultValue={displayValue}
                placeholder="Enter value"
                style={{
                  width: "60%",
                }}
              />
            </div>
          );
        },
      });
    });

    return columns;
  };

  const createTableData = (assumptions: FinancialAssumption[]) => {
    const data: any[] = [];

    // Add assumption rows
    assumptions.forEach((assumption) => {
      const row: any = {
        field: assumption.field,
        isStatusRow: false,
      };

      // Add month data
      monthLabels.forEach((_, index) => {
        row[`month_${index}`] = assumption.months[index];
      });

      data.push(row);
    });

    // Add status row
    const statusRow: any = {
      field: "Status",
      isStatusRow: true,
    };

    // Add empty month data for status row
    monthLabels.forEach((_, index) => {
      statusRow[`month_${index}`] = "";
    });

    data.push(statusRow);

    return data;
  };

  const renderTable = (assumptions: FinancialAssumption[]) => {
    const columns = createColumns();
    const data = createTableData(assumptions);

    return <DataTable columns={columns} data={data} className="" />;
  };

  const createScenarioColumns = () => {
    const columns: any[] = [
      {
        title: "Scenario",
        data: "scenario",
      },
    ];

    // Add month columns
    monthLabels.forEach((label, index) => {
      columns.push({
        title: label,
        data: `month_${index}`,
        render: (value: any, _type: string, row: any) => {
          // Base scenario should be read-only (fixed at 1)
          if (row.scenario === "Base") {
            return <span className="text-gray-500">1.00</span>;
          }
          // High and Low scenarios are editable
          return (
            <input
              type="number"
              step="0.01"
              min="0"
              defaultValue={
                value || (row.scenario === "High" ? "1.20" : "0.80")
              }
              style={{
                width: "60%",
              }}
            />
          );
        },
      });
    });

    return columns;
  };

  const createScenarioTableData = () => {
    const data: any[] = [];

    // Define scenarios
    const scenarios = [
      { name: "High", defaultMultiplier: "1.20" },
      { name: "Base", defaultMultiplier: "1.00" },
      { name: "Low", defaultMultiplier: "0.80" },
    ];

    scenarios.forEach((scenario) => {
      const row: any = {
        scenario: scenario.name,
      };

      // Add month data with default multipliers
      monthLabels.forEach((_, index) => {
        row[`month_${index}`] = scenario.defaultMultiplier;
      });

      data.push(row);
    });

    return data;
  };

  const renderScenarioTable = () => {
    const columns = createScenarioColumns();
    const data = createScenarioTableData();

    return <DataTable columns={columns} data={data} className="" />;
  };

  return (
    <div className="mt-4">
      <div className="font-be-vietnam-pro">
        <div className="space-y-4">
          <p className="mb-4 text-gray-400">
            <strong>Market:</strong> Market size, growth rates, and penetration
            assumptions that drive revenue projections.
          </p>
          {renderTable(marketAssumptions)}

          <p className="mt-12 mb-4 text-gray-400">
            <strong>Conversions:</strong> Sales funnel conversion rates from
            leads to customers across the sales process.
          </p>
          {renderTable(conversionAssumptions)}

          <p className="mt-12 mb-4 text-gray-400">
            <strong>Cost:</strong> Operational costs including marketing, sales,
            and technology expenses.
          </p>
          {renderTable(costAssumptions)}

          <p className="mt-12 mb-4 text-gray-400">
            <strong>Scenario:</strong> Multipliers for different scenarios.
          </p>
          {renderScenarioTable()}
        </div>
      </div>
    </div>
  );
};

export default Assumptions;
