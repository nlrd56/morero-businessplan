import React, { useState, useEffect, useCallback } from "react";
import { DataTable } from "@/components/actual-table/data-table";
import { Loader } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";

const Actuals: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tableData, setTableData] = useState<any[]>([]);
  const [dataSource, setDataSource] = useState<string>("");

  const loadActualsData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.morero.io/items/onsdata");
      const { data } = await response.json();

      // Remove 'id' and 'deleted_at' fields from each record
      const filtered = data.map((item: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, deleted_at, ...rest } = item;

        return rest;
      });
      setTableData(filtered);
      setDataSource(new Date().toISOString());
      setError(null);
    } catch (error) {
      console.error("Error loading actuals data:", error);
      setError("Failed to load actuals data from API");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadActualsData();
  }, [loadActualsData]);

  const fields =
    tableData.length > 0
      ? Object.keys(tableData[0] as Record<string, any>).filter(
          (key) => key !== "quarter"
        )
      : [];

  // Transpose the data to make it easier to display in the table
  const transposedData = fields.map((key) => {
    const formattedField =
      key === "market_growth_rate"
        ? "Market Growth Rate %"
        : key
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    const row: Record<string, any> = {
      field: formattedField,
    };
    tableData.forEach((item, i) => {
      if (key === "updated_at" || key === "created_at") {
        row[`row_${i + 1}`] = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }).format(new Date(item[key as keyof typeof item] as string));
      } else {
        row[`row_${i + 1}`] = item[key as keyof typeof item];
      }
    });
    return row;
  });

  // Columns for the AC table
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "field",
      header: "Quarter",
    },
    ...tableData.map((item: any, i) => ({
      accessorKey: `row_${i + 1}`,
      header: `${item?.quarter}`,
      cell: (info: any) => {
        const value = info.getValue();
        const field = info.row.original.field;

        // Format numeric values (e.g. new_work_orders)
        if (field === "new_work_orders" || field === "market_growth_rate") {
          return Number(value).toLocaleString();
        }

        // Safely format ISO date strings
        const isValidDate =
          typeof value === "string" && !isNaN(Date.parse(value));

        if (isValidDate && (field === "created_at" || field === "updated_at")) {
          console.log("value", value);
          console.log("info", info.getValue());
          return new Date(value).toLocaleString();
        }

        return value ?? "-";
      },
    })),
  ];

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-32">
          <div className="text-sm flex flex-col items-center gap-2">
            <Loader className="animate-spin" />
            Loading actuals data from API...
          </div>
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
    <>
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
      {/* 
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
      )} */}
      {tableData.length > 0 && (
        <>
          <DataTable data={transposedData} columns={columns} />
        </>
      )}
    </>
  );
};

export default Actuals;
