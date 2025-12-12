"use client";

import { type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ActualsData = {
  id: number;
  quarter: string;
  new_work_orders: string;
  market_growth_rate: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export const columns: ColumnDef<ActualsData>[] = [
  // {
  //   accessorKey: "id",
  //   header: "ID",
  //   cell: (info) => String(info.getValue()),
  // },
  {
    accessorKey: "quarter",
    header: "Quarter",
    cell: (info) => String(info.getValue()),
  },
  {
    accessorKey: "new_work_orders",
    header: "New Work Orders",
    cell: (info) => String(info.getValue()),
  },
  {
    accessorKey: "market_growth_rate",
    header: "Market Growth Rate",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: (info) =>
      new Intl.DateTimeFormat("en-US").format(
        new Date(info.getValue() as string)
      ),
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
    cell: (info) =>
      new Intl.DateTimeFormat("en-US").format(
        new Date(info.getValue() as string)
      ),
  },
  // {
  //   accessorKey: "deleted_at",
  //   header: "Deleted At",
  //   cell: (info) =>
  //     new Intl.DateTimeFormat("en-US").format(
  //       new Date(info.getValue() as string)
  //     ),
  // },
];
