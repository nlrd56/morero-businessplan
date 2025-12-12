export const title = "Aspirations";
export const lastUpdated = new Date().toLocaleDateString();

export default function Aspirations() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Aspirations</h2>
      <p className="mb-6">
        The following aspirations have been expressed by P&D Environmental Ltd's leadership as their 
        strategic goals for the next three years. These objectives will guide the digital transformation 
        and business development initiatives.
      </p>

      <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
        {/* Header */}
        <div className="flex bg-[#204E4A]">
          <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2">Value</div>
          <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-2">Aspiration</div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">Details</div>
        </div>
        
        {/* Transparency Group */}
        <div className="flex">
          <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2 font-medium">Transparency</div>
          <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-2"><strong>1. Exit Readiness</strong></div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">Structure the business so that it would be attractive to sellers or buyout in the future.</div>
        </div>
        <div className="flex bg-gray-800/50">
          <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2"></div>
          <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-2"><strong>2. Profitability</strong></div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">Maintain a 25% profit margin. While this margin is not currently reflected in the published financials, the company anticipates it may be visible in accounts due for filing in June 2026.</div>
        </div>
        
        {/* Simplicity Group */}
        <div className="flex">
          <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2 font-medium">Simplicity</div>
          <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-2"><strong>3. Digitalisation</strong></div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">Digitalise the business to improve and streamline output. This includes implementing digital tools, workflows, and systems that support the Tier 2-level operational efficiency.</div>
        </div>
        <div className="flex bg-gray-800/50">
          <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2"></div>
          <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-2"><strong>4. Director Focus</strong></div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">Introduce governance and management systems to free the directors from day-to-day operational tasks to focus on strategic growth, client relationships, and business development.</div>
        </div>
        
        {/* Resilience Group */}
        <div className="flex">
          <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2 font-medium">Resilience</div>
          <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-2"><strong>5. Tier Progression</strong></div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">
            Move from Tier 3 to Tier 2 operational status and capabilities for resilience and enhanced service delivery.
            <br /><br />
            <strong>Operate as Tier 2:</strong> Deliver major specialist packages directly to Tier 1 contractors, gaining more control over work, better margins, and more stable cashflow.
            <br /><br />
            <strong>Structure as Tier 1:</strong> Build capabilities including full management teams (project management, commercial, planning, design, HSE, quality, supply chain, finance), robust governance systems, and comprehensive risk management.
          </div>
        </div>
        <div className="flex bg-gray-800/50">
          <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2"></div>
          <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-2"><strong>6. Warehouse Expansion</strong></div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">Build a new warehouse to grow the steel fabrication side of the business. This expansion will support the company's diversification and growth strategy, enabling increased capacity for steel fabrication work and creating new revenue streams.</div>
        </div>
        
        {/* Growth Group */}
        <div className="flex">
          <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2 font-medium">Growth</div>
          <div className="flex-[0_0_20%] border-r border-b border-white/20 px-4 py-2"><strong>7. Revenue Growth</strong></div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">Grow revenue from £2 million to £3 million over the next 3 years (50% increase). Aligns with moving from Tier 3 to Tier 2 operational status, where package-based work typically commands higher values and better margins.</div>
        </div>
        <div className="flex bg-gray-800/50">
          <div className="flex-[0_0_15%] border-r border-white/20 px-4 py-2"></div>
          <div className="flex-[0_0_20%] border-r border-white/20 px-4 py-2"><strong>8. Team Growth</strong></div>
          <div className="flex-1 px-4 py-2">Invest in the people in the business and grow the teams from 3 to 4. This expansion will support the transition to Tier 2 operations and the development of Tier 1-level capabilities, ensuring the business has the right structure to deliver package work effectively.</div>
        </div>
      </div>
    </div>
  );
}

