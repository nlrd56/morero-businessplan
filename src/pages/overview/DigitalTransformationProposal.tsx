import pdLogo from "@/assets/pd-logo.jpg";

export const title = "Digital Transformation Proposal";
export const lastUpdated = new Date().toLocaleDateString();

export default function DigitalTransformationProposal() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">

      <h2 className="content-title">Digital Transformation Proposal</h2>
      <p className="mb-6 text-gray-300">
        P&D Environmental Ltd approached Morero to provide a proposal for digital transformation services to support 
        their strategic aspirations and operational development.
      </p>

      <div className="border border-white/20 rounded-md overflow-hidden mb-8">
        {/* Header */}
        <div className="flex bg-[#204E4A]">
          <div className="flex-1 border-r border-white/20 px-4 py-2 font-medium">Business Summary</div>
          <div className="flex-1 border-white/20 px-4 py-2 font-medium">Proposal Summary</div>
        </div>

        {/* Rows */}
        <div className="flex">
          <div className="flex-1 border-r border-b border-white/20 px-4 py-3 break-words whitespace-normal text-gray-300">
          <div className="mb-6">
            <img 
              src={pdLogo} 
              alt="P&D Environmental Ltd Logo" 
              className="h-16 w-auto mb-4"
            />
          </div>
            <p className="mb-0">
              P&D Environmental Ltd is a UK-based specialist marine and environmental 
              contracting company, founded in 2012, operating nationwide on inland water and marine civil engineering 
              projects. As part of the P&D Marine Group, the company focuses on high-barrier-to-entry work within sensitive 
              environments (SSSI, conservation areas) requiring advanced regulatory compliance. 
            </p>
            <p>
              <strong>Aspirations:</strong> Sustainable business growth and profit. 
            </p>
          </div>
          <div className="flex-1 border-b border-white/20 px-4 py-3 break-words whitespace-normal text-gray-300">
            <p className="mb-3">
              <strong>What We Can Support With:</strong> Addressing needs across four value areas:
            </p>
            <ul className="list-disc list-inside mb-3 text-gray-300 space-y-1">
              <li><strong>Transparency</strong> – governance and reporting</li>
              <li><strong>Simplicity</strong> – documented processes and digital tools</li>
              <li><strong>Resilience</strong> – risk management and compliance frameworks</li>
              <li><strong>Growth</strong> – team development and training systems</li>
            </ul>
            <p className="mb-3">
              <strong>Delivery:</strong> 3-year engagement via 
              3 days per week pattern. Includes 
              bi-weekly catch-ups, monthly reporting, quarterly reviews, and annual appraisals.
            </p>
            <p>
              <strong>Cost Options:</strong>
              <ul className="list-disc list-inside mt-2 mb-0 ml-4 text-gray-300 space-y-1">
                <li><strong>Option 1:</strong> £650/day fixed rate (preferred)</li>
                <li><strong>Option 2:</strong> £475/day + performance bonus</li>
              </ul>
              <p className="mt-2 mb-0 text-gray-300">
                Additional rates for weekend/night work, mileage, and software licenses and VAT.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

