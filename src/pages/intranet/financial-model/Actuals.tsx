import React, { useState, useEffect, useCallback } from "react";
import { directusApiService } from "../../data/directusApi";
import type { ONSDataRecord } from "../../data/directusApi";
import { DataTable } from "../../../components/ui/data-table";

interface TableRow {
  metric: string;
  [key: string]: string | number;
}

const Actuals: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [columns, setColumns] = useState<any[]>([]);
  const [dataSource, setDataSource] = useState<string>("");

  const loadActualsData = useCallback(async () => {
    try {
      setLoading(true);
      console.log("Loading actuals data from Directus API...");

      const onsData = await directusApiService.fetchLatestONSData(6);
      console.log("ONS data received:", onsData);

      processDataForTable(onsData);
      setDataSource(new Date().toISOString());
      setError(null);
    } catch (err) {
      console.error("Error loading actuals data:", err);
      setError("Failed to load actuals data from API");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadActualsData();
  }, [loadActualsData]);

  const processDataForTable = (onsData: ONSDataRecord[]) => {
    console.log("Processing ONS data for table:", onsData);

    if (!onsData || onsData.length === 0) {
      console.log("No ONS data available");
      setColumns([]);
      setTableData([]);
      return;
    }

    // Create quarterly columns
    const columns: any[] = [
      {
        title: "Metric",
        data: "metric",
      },
    ];

    // Get unique quarters from the data
    const quarters = new Set<string>();
    onsData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth();
      let quarter: string;
      if (month <= 2) quarter = `Q1 ${year}`;
      else if (month <= 5) quarter = `Q2 ${year}`;
      else if (month <= 8) quarter = `Q3 ${year}`;
      else quarter = `Q4 ${year}`;
      quarters.add(quarter);
    });

    // Sort quarters chronologically
    const sortedQuarters = Array.from(quarters).sort((a, b) => {
      const [qA, yearA] = a.split(" ");
      const [qB, yearB] = b.split(" ");
      if (yearA !== yearB) return parseInt(yearA) - parseInt(yearB);
      return qA.localeCompare(qB);
    });

    // Add quarter columns
    sortedQuarters.forEach((quarter) => {
      columns.push({
        title: quarter,
        data: quarter,
      });
    });

    // Create rows for each metric
    const rows: TableRow[] = [
      {
        metric: "All new work (£m)",
        ...Object.fromEntries(
          sortedQuarters.map((quarter) => [quarter, "N/A"])
        ),
      },
      {
        metric: "Period on period growths (%)",
        ...Object.fromEntries(
          sortedQuarters.map((quarter) => [quarter, "N/A"])
        ),
      },
    ];

    // Fill in the data
    onsData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth();
      let quarter: string;
      if (month <= 2) quarter = `Q1 ${year}`;
      else if (month <= 5) quarter = `Q2 ${year}`;
      else if (month <= 8) quarter = `Q3 ${year}`;
      else quarter = `Q4 ${year}`;

      const row = rows.find((r) => r.metric === "All new work (£m)");
      if (row) {
        row[quarter] = item.new_work_orders.toLocaleString();
      }
    });

    onsData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth();
      let quarter: string;
      if (month <= 2) quarter = `Q1 ${year}`;
      else if (month <= 5) quarter = `Q2 ${year}`;
      else if (month <= 8) quarter = `Q3 ${year}`;
      else quarter = `Q4 ${year}`;

      const row = rows.find((r) => r.metric === "Period on period growths (%)");
      if (row) {
        row[quarter] = `${item.growth_rate.toFixed(1)}%`;
      }
    });

    console.log("Processed table data:", { columns, rows });
    setColumns(columns);
    setTableData(rows);
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-32">
          <div className="text-lg">Loading actuals data from API...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="rounded-md border border-red-200 bg-red-50 p-4">
          <div className="text-red-800">Error: {error}</div>
          <button
            onClick={loadActualsData}
            className="mt-2 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Market Data</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Quarterly construction industry data from Directus API - Last 6
          quarters
        </p>
        {dataSource && (
          <p className="text-muted-foreground text-xs">
            Last updated: {new Date(dataSource).toLocaleString()}
          </p>
        )}
      </div>

      {tableData.length > 0 && columns.length > 0 ? (
        <DataTable
          columns={columns}
          data={tableData}
          className="rounded-lg border"
        />
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          No data available from API
        </div>
      )}
    </div>
  );
};

export default Actuals;
