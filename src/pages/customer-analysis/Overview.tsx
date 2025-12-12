export const title = "Overview";
export const lastUpdated = new Date().toLocaleDateString();

export default function Overview() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Analysis Overview</h2>
      
      <section className="mb-6">
        <h3 className="content-title text-lg mb-3">Purpose</h3>
        <p>
          This customer analysis was conducted to assess P&D Environmental Ltd's current position, 
          capabilities, and strategic aspirations. The analysis informs the digital transformation 
          proposal by providing a comprehensive understanding of the company's operations, financial 
          position, market positioning, and leadership objectives.
        </p>
        <p className="mt-3">
          The analysis is based on public records, company filings, industry sources, and direct 
          engagement with the company's leadership.
        </p>
      </section>

      <section>
        <h3 className="content-title text-lg mb-3">Summary</h3>
        <p className="mb-4">
          P&D Environmental Ltd is a UK-based specialist marine and environmental contracting company, 
          operating as a micro-entity within the P&D Marine Group with specialized expertise in 
          high-barrier-to-entry work within sensitive environments. The leadership has articulated strategic aspirations to transform the business through revenue and profitability growth, operational progression from Tier 3 to Tier 2 status with enhanced internal capabilities, digital transformation, and restructuring to enable strategic focus and future exit readiness.
        </p>
        <p>
          Detailed analysis is available in the following sections:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
          <li>
            <strong>Company Overview</strong> — Company profile, services, certifications, and group structure
          </li>
          <li>
            <strong>Financial & Legal</strong> — Financial analysis, legal compliance, and health & safety
          </li>
          <li>
            <strong>Operations & Market</strong> — Operational capabilities, market positioning, digital maturity, and leadership
          </li>
          <li>
            <strong>Aspirations</strong> — Strategic goals mapped to the four transformation values
          </li>
        </ul>
      </section>
    </div>
  );
}

