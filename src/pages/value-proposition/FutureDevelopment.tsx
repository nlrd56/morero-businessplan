export const title = "Future Development";
export const lastUpdated = new Date().toLocaleDateString();

export default function FutureDevelopment() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Future Development</h2>
      <p className="mb-6">Future development focuses on extending Morero’s governance capability in a controlled and modular way, guided by demonstrated customer need.</p>

      <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
        {/* Header */}
        <div className="flex bg-[#204E4A]">
          <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-2">Capability Area</div>
          <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Description</div>
          <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Governance Value</div>
          <div className="flex-[0_0_15%] border-b border-white/20 px-4 py-2">Phase</div>
        </div>

        {/* Rows */}
        <div className="flex">
          <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-2 font-medium">Core Governance Engines</div>
          <div className="flex-1 border-r border-b border-white/20 px-4 py-2 break-words whitespace-normal">
            Expansion of goal setting, business and commerical planning, and change control to extend governance across the full project lifecycle.
          </div>
          <div className="flex-1 border-r border-b border-white/20 px-4 py-2 break-words whitespace-normal">
            Strengthens accountability, traceability, and value-based decision-making.
          </div>
          <div className="flex-[0_0_15%] border-b border-white/20 px-4 py-2 break-words whitespace-normal">
            Post-MVP
          </div>
        </div>

        <div className="flex bg-[#0d0d0d]">
          <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-2 font-medium">Spatial and Environmental Intelligence</div>
          <div className="flex-1 border-r border-b border-white/20 px-4 py-2 break-words whitespace-normal">
            Enhanced use of location-based, environmental, and situational data to improve project context awareness and early risk foresight.
          </div>
          <div className="flex-1 border-r border-b border-white/20 px-4 py-2 break-words whitespace-normal">
            Improves early risk identification and project resilience.
          </div>
          <div className="flex-[0_0_15%] border-b border-white/20 px-4 py-2 break-words whitespace-normal">
            Future
          </div>
        </div>

        <div className="flex">
          <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-2 font-medium">Information and Stakeholder Structure</div>
          <div className="flex-1 border-r border-b border-white/20 px-4 py-2 break-words whitespace-normal">
            Improved structuring of project roles, contacts, and standardised governance templates to support consistency across projects and organisations.
          </div>
          <div className="flex-1 border-r border-b border-white/20 px-4 py-2 break-words whitespace-normal">
            Supports clarity of responsibility and repeatable governance.
          </div>
          <div className="flex-[0_0_15%] border-b border-white/20 px-4 py-2 break-words whitespace-normal">
            Future
          </div>
        </div>

        <div className="flex bg-[#0d0d0d]">
          <div className="flex-[0_0_25%] border-r border-white/20 px-4 py-2 font-medium">Portfolio Insight and Learning</div>
          <div className="flex-1 border-r border-white/20 px-4 py-2 break-words whitespace-normal">
          Aggregation of project-level governance data to support portfolio assessment, benchmarking, and organisational learning over time.
          </div>
          <div className="flex-1 border-r border-white/20 px-4 py-2 break-words whitespace-normal">
          Enables evidence-based oversight and continuous improvement across programmes.
          </div>
          <div className="flex-[0_0_15%] px-4 py-2 break-words whitespace-normal">
            Future
          </div>
        </div>
      </div>

    </div>
  );
}

