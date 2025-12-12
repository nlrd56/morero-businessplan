export const title = "Primary Target Customer";
export const lastUpdated = new Date().toLocaleDateString();

export default function PrimaryTargetCustomer() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Primary Target Customer</h2>
      <p className="mb-6">
      Morero is built for organisations responsible for delivering, funding, or managing large-scale construction and development programmes.
      </p>

      <div className="space-y-8">
        <section>
          <p className="mb-4">
          Our primary customer segments are:
          </p>
          <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Segment</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Details</div>
            </div>

            {/* Rows */}
            <div className="flex">
            <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Strategic Land & Place Developers s</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
              Master developers, regeneration specialists (multi-phase, multi-decade, multi-stakeholder)
              </div>
            </div>

            <div className="flex bg-[#0d0d0d]">
            <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Traditional Capital Clients </div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
              Local authorities, housing associations, NHS trusts, universities (complex, high-risk projects; public accountability)
              </div>
            </div>

            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">High-Volume Non-Traditional Builders </div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
              Retail/food chains, energy providers, healthcare groups (rapid, repeatable builds; high compliance/brand risk)
              </div>
            </div>

            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Non-Enterprise Clients </div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
              Independent Project Managers, smaller asset owners (lower value, but scalable and product-led growth)
              </div>
            </div>
          </div>
          <p className="mt-6">
            All target customers typically manage annual construction or asset investments of £10m+ (or equivalent multi-site portfolios).
          </p>
        </section>

        <section>
          <h3 className="content-title text-lg mb-3">Ideal Customer Profile</h3>
          <p className="mb-4">
            Our ideal customer is a public or private organisation with significant capital investment responsibilities.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-5 ml-5">
            <li>
            Their teams include project sponsors, estates managers, or capital delivery leads who approve budgets, set goals, and answer to boards or regulators.
            </li>
            <li>
            They operate in complex environments with many internal and external stakeholders, frequent change events, and strict compliance or reporting obligations.
            </li>
            <li>
            They value structure, accountability, and the ability to demonstrate good governance. They are frustrated by fragmented processes, manual reporting, and lack of continuity when people move on.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

