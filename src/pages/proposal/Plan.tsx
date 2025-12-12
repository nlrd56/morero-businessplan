import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const title = "Plan";
export const lastUpdated = new Date().toLocaleDateString();

interface ValueCard {
  value: string;
  description: string;
  implementation: string;
}

const valueCards: ValueCard[] = [
  {
    value: "Transparency",
    description: "One truth. structured data. clear communication.",
    implementation: "Start by exposing how work is really done. Map processes. observe routines. clean up information flow. Keep building clarity as the programme moves forward.",
  },
  {
    value: "Simplicity",
    description: "Clear goals. simple frameworks. defined success.",
    implementation: "Remove unnecessary steps as soon as they are uncovered. Streamline repeatable tasks. introduce light digital tools. Keep simplifying as new insights appear.",
  },
  {
    value: "Resilience",
    description: "Honest risk. strong controls. stable governance.",
    implementation: "Stress test processes. strengthen what holds up. fix weak points. improve reporting rhythm. resilience work overlaps with both clarity and simplification.",
  },
  {
    value: "Growth",
    description: "Knowledge retained. lessons learned. continuous improvement.",
    implementation: "Build internal skills early. train people as systems settle. support planning cycles. finish by handing over a business that can run confidently without external support.",
  },
];

export default function Plan() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Proposed Plan</h2>
      <p className="mb-6">
        A structured 3-year engagement combining active transformation with supported phase-out, 
        delivered through a consistent work pattern and regular review cadence.
      </p>

      {/* Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {valueCards.map((card, index) => (
          <Card key={card.value} className="border-orange-400 bg-gray-900/30">
            <CardHeader className="pb-0">
              <CardTitle className="text-orange-400 text-xl font-bold pb-0">
                {index + 1}. {card.value}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div>
                <div className="text-xs text-gray-400 pb-1">Implementation Method</div>
                <p className="text-gray-300 text-xs leading-relaxed">{card.implementation}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Engagement Details */}
      <h3 className="content-title text-lg mb-4">Engagement Details</h3>
      <div className="border border-white/20 rounded-md overflow-hidden mb-8">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-2">Item</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Details</div>
            </div>

            {/* Rows */}
            <div className="flex">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-3 font-medium break-words whitespace-normal flex items-start">
                Contract Duration
              </div>
              <div className="flex-1 border-b border-white/20 px-4 py-3 break-words whitespace-normal">
                2.5 years of active transformation + 0.5 years of supported phase-out. 
              </div>
            </div>
            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-3 font-medium break-words whitespace-normal flex items-start">
                Work Pattern
              </div>
              <div className="flex-1 border-b border-white/20 px-4 py-3 break-words whitespace-normal">
                Standard commitment of <strong>3 days per week</strong>, structured as:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>1 day in the office:</strong> On-site presence for meetings, collaboration, and direct engagement</li>
                  <li><strong>1 day on site:</strong> On-site presence at operational locations, project sites, or client facilities</li>
                  <li><strong>1 day float:</strong> Flexible working (work from home, remote, or additional on-site as business needs dictate)</li>
                </ul>
                <p className="mt-2">Additional days beyond the standard 3 days per week may be arranged with advanced notice.</p>
              </div>
            </div>
            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-3 font-medium break-words whitespace-normal flex items-start">
                Bi-Weekly Catch-ups
              </div>
              <div className="flex-1 border-b border-white/20 px-4 py-3 break-words whitespace-normal">
                Regular operational catch-up meetings every two weeks to discuss progress, address immediate issues, and maintain alignment on priorities and deliverables.
              </div>
            </div>
            <div className="flex">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-3 font-medium break-words whitespace-normal flex items-start">
                Monthly Reporting
              </div>
              <div className="flex-1 border-b border-white/20 px-4 py-3 break-words whitespace-normal">
                Comprehensive digital monthly reports covering progress against deliverables, time and activities summary, key achievements, risks and issues, planned activities, and financial summary.
              </div>
            </div>
            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-3 font-medium break-words whitespace-normal flex items-start">
                Quarterly Reviews
              </div>
              <div className="flex-1 border-b border-white/20 px-4 py-3 break-words whitespace-normal">
                Formal quarterly review meetings to assess progress against strategic objectives, review performance metrics and KPIs, evaluate solution effectiveness, adjust priorities, and plan for the upcoming quarter.
              </div>
            </div>
            <div className="flex">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-3 font-medium break-words whitespace-normal flex items-start">
                Annual Appraisal
              </div>
              <div className="flex-1 border-b border-white/20 px-4 py-3 break-words whitespace-normal">
                Comprehensive annual appraisal to review overall engagement performance, assess achievement of annual objectives, evaluate the relationship, plan for the following year, and review/adjust any terms of appointment. For option 2 engagements, performance-linked bonuses will be calculated and agreed.
              </div>
            </div>
            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_25%] border-r border-white/20 px-4 py-3 font-medium break-words whitespace-normal flex items-start">
                Solutions
              </div>
              <div className="flex-1 px-4 py-3 break-words whitespace-normal">
                For each significant decision point, three solutions will be provided, with one recommended approach. This ensures informed decision-making and forms part of the business audit trail, maintaining transparency and accountability throughout the engagement. 
              </div>
            </div>
          </div>
    </div>
  );
}
