export const title = "Competitor Analysis";
export const lastUpdated = new Date().toLocaleDateString();

export default function CompetitorAnalysis() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Competitive Landscape</h2>
      <p className="mb-6">
      The construction software market is saturated with tools built for contractors and designers, emphasising scheduling, estimating, and site operations. Yet, clients remain underserved. There is no standard platform focused on project governance, long-term oversight, or strategic accountability. Existing tools track activity but rarely support the broader decisions that shape project outcomes.
      </p>

      <h3 className="content-title text-lg mb-">Analysis Methodology</h3>
      <p className="mb-6">We reviewed over 60 construction project management software solutions across three core dimensions:</p>
      <ul className="list-disc list-inside my-3 space-y-3 ml-5 mb-6">
        <ol>1.	Market Position & Customer Focus: Analysed descriptions and positioning to identify who they target.</ol> 
        <ol>2.	Feature & Pricing Comparison: Evaluated product plans, feature sets, and pricing tiers to assess scalability and strategic fit.</ol>
        <ol>3.	Brand & UX Performance: Studied social media reach, marketing strategy, user reviews, and interface design. A SWOT analysis was conducted for the top competitors.</ol>
      </ul>

     <p className="mb-6"><strong>Each competitor was classified as either:</strong></p>
      <ul className="list-disc list-inside my-3 space-y-3 ml-5">
        <ol>Direct – platforms with some governance functionality.</ol>
        <ol>Indirect – contractor or designer focused tools optimised for field, task and design management.</ol>
        <ol>Niche – tools offering digital twins, analytics, or asset lifecycle tracking without governance.</ol>
      </ul>

      <h3 className="content-title text-lg mt-6 mb-3">Results Summary</h3>
      <div className="mt-6 border border-white/20 rounded-md overflow-hidden">
        {/* Header */}
        <div className="flex bg-[#204E4A]">
          <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Category</div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">Summary</div>
        </div>
        
        {/* Transparency Group */}
        <div className="flex">
          <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Direct Competitors</div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">
            <strong>Project Governance & Risk Management</strong><br /><br />
            
            Asite, Projectmates and Oracle, Procure offer tools for document workflows, approvals, and compliance management. These are often used by contractors and, in some cases, lead designers to manage submissions and approvals. While this support project compliance, they fall short of delivering structured decision logging or strategic governance for clients. They lack structured audit trails or contextual decision history that long-term stakeholders need. 
          </div>
        </div>

        <div className="flex bg-gray-800/50">
          <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Indirect Competitors</div>
          <div className="flex-1 border-b border-white/20 px-4 py-2">
            <strong>Project & Task Management</strong><br /><br />
            
            Solutions such as Buildertrend, CoConstruct, Powered Now, and Fieldwire are built primarily for contractors. Their strengths lie in task management, site coordination, and scheduling, but they offer little for clients who need audit trails, board-level reporting, or risk oversight.
          </div>
        </div>
        
        {/* Simplicity Group */}
        <div className="flex">
          <div className="flex-[0_0_30%] border-r border-white/20 px-4 py-2 font-medium">Niche Competitors</div>
          <div className="flex-1 px-4 py-2">
            <strong>Vertical and Tech-Specific Solutions</strong><br /><br />
            
            Tools like Simpro, Tool Time, and BuildBook target specific trades or disciplines. Platforms such as Autodesk Construction Cloud and Revit cater largely to designers, focusing on BIM workflows and coordination. These tools are critical for delivery, but they do not address project governance or client-led decision-making.
          </div>
        </div>
      </div>

      <section> 
        <h3 className="content-title text-lg mt-6 mb-3">Themes and Strategic Insights</h3>
        <p className="mb-6">
          <strong>Contractor Dominance Leaves Clients Underserved</strong><br />
          Most tools are designed for the contractor or designer, not the client. Even where document workflows exist, there is no structured support for governance, change justification, or executive oversight.<br /><br />

          <strong>Fragmented Tools Result in Data Loss and Inefficiency</strong><br />
          Cost management, risks, and approvals are often handled across disconnected tools, spreadsheets, and systems leading to lost context and duplicated effort.<br /><br />

          <strong>Missed Opportunity for Long-Term Value</strong><br />
          Most systems focus on delivery, not legacy. Lessons learned, risk triggers, and stakeholder decisions are lost post-project.<br /><br />

          The market consistently overlooks both the needs and influence of the client, despite their role in shaping project outcomes. Tools prioritise delivery and designover governance, fragment data across systems, and neglect long-term value. Strategic oversight, accountability, and institutional learning remain underserved across the construction software landscape. This gap remains largely unchallenged.
        </p>

      </section>
    </div>
  );
}

