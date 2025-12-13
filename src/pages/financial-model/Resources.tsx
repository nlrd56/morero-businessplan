import { DataTable } from "@/components/ui/data-table";

export const title = "Resources";
export const lastUpdated = new Date().toLocaleDateString();

export default function Resources() {
  // Human Resources table columns
  const humanResourcesColumns = [
    {
      title: "Role",
      data: "role",
    },
    {
      title: "Description",
      data: "description",
      render: (description: any) => {
        return <span className="text-gray-400">{description || ""}</span>;
      },
    },
    {
      title: "Quantity",
      data: "quantity",
    },
    {
      title: "Monthly Cost",
      data: "monthlyCost",
      render: (value: any) => {
        if (!value && value !== 0) return <span></span>;
        if (typeof value === 'number') {
          return <span>£{value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>;
        }
        return <span>{value}</span>;
      },
    },
    {
      title: "Start Date",
      data: "startDate",
    },
  ];

  // Technical Resources table columns
  const technicalResourcesColumns = [
    {
      title: "Resource",
      data: "resource",
    },
    {
      title: "Description",
      data: "description",
      render: (description: any) => {
        return <span className="text-gray-400">{description || ""}</span>;
      },
    },
    {
      title: "Quantity",
      data: "quantity",
    },
    {
      title: "Monthly Cost",
      data: "monthlyCost",
      render: (value: any) => {
        if (!value && value !== 0) return <span></span>;
        if (typeof value === 'number') {
          return <span>£{value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>;
        }
        return <span>{value}</span>;
      },
    },
    {
      title: "Start Date",
      data: "startDate",
    },
  ];

  // Sample data - replace with actual data source
  const humanResourcesData = [
    {
      role: "CEO/Founder",
      description: "Leadership and strategic direction",
      quantity: 1,
      monthlyCost: 0,
      startDate: "Jan 2026",
    },
  ];

  const technicalResourcesData = [
    {
      resource: "Cloud Hosting",
      description: "Infrastructure and hosting costs",
      quantity: 1,
      monthlyCost: 0,
      startDate: "Jan 2026",
    },
  ];

  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Resources</h2>
      <p className="mb-6">Resource planning for human and technical resources.</p>

      <div className="space-y-8">
        <div>
          <h3 className="content-title text-lg mb-4">Human Resources</h3>
          <div className="max-w-full text-left">
            <DataTable columns={humanResourcesColumns} data={humanResourcesData} className="" />
          </div>
        </div>

        <div>
          <h3 className="content-title text-lg mb-4">Technical Resources</h3>
          <div className="max-w-full text-left">
            <DataTable columns={technicalResourcesColumns} data={technicalResourcesData} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

