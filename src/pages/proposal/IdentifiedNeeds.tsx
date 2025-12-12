import { useState } from "react";

export const title = "Identified Needs";
export const lastUpdated = new Date().toLocaleDateString();

interface Deliverable {
  text: string;
}

interface Need {
  text: string;
}

interface NeedSection {
  value: string;
  description: string;
  context: string;
  needs: Need[];
  enablesAspirations: string[];
  deliverables: Deliverable[];
}

const needSections: NeedSection[] = [
  {
    value: "Transparency",
    description: "One truth. structured data. clear communication.",
    context: "The current organisational culture and structure are not aligned for growth (VF1.4). This poses a risk to controlled scaling, exit readiness and sustained profitability. The business should establish clear and auditable governance and reporting processes to demonstrate the robust management systems required for exit readiness.",
    needs: [
      { text: "Establish clear governance and reporting processes to formalize decision-making, alleviate workload reliance on key individuals, and demonstrate the robust management systems required for exit readiness." },
      { text: "Align the company's internal structure with its aspirational strategic direction to ensure capacity for scalable growth." },
    ],
    enablesAspirations: [
      "Aspiration 1 (Exit Readiness): Creates attractive, well-governed business for buyers/investors",
      "Aspiration 2 (Profitability): Enables clear financial visibility and margin tracking",
      "Aspiration 4 (Director Focus): Frees directors from operational decision-making",
      "Aspiration 5 (Tier Progression): Builds internal Tier 1 capabilities for resilience",
    ],
    deliverables: [
      { text: "Guidance on regulatory expectations and industry standards." },
      { text: "Board quality reporting that keeps leadership aligned, gives a consistent view of performance and makes business ready to sell." },
      { text: "Policy and process development to demonstrate compliance and risk management." },
      { text: "Restructure company to ensure operational responsibility is clear and efficient." },
      { text: "Client and supply chain nurturing to strengthen relationships and support repeat business." },
    ],
  },
  {
    value: "Simplicity",
    description: "Clear goals. simple frameworks. defined success.",
    context: "The reliance on traditional documentation methods increases workload for repeatable processes (VF2.5). This ties leadership to day-to-day tasks, inhibiting focus on business operations. The business should institutionalise its ways of working to ensure consistent, repeatable delivery as it expands.",
    needs: [
      { text: "Implement simple, documented, and repeatable processes, systems, and templates for all core business functions to reduce workload and improve efficiency." },
      { text: "Formalize and digitize existing traditional methods to create reliable, simple frameworks for all staff to follow." },
    ],
    enablesAspirations: [
      "Aspiration 3 (Digitalisation): Provides foundation for digital tools and automation",
      "Aspiration 4 (Director Focus): Reduces operational friction, freeing leadership for strategic work",
      "Aspiration 2 (Profitability): Improves efficiency and reduces operational waste",
      "Aspiration 5 (Tier Progression - Structure as Tier 1): Enables handling of more complex projects",
    ],
    deliverables: [
      { text: "Formalise and digitalisation of recurring processes and workflows to create structured project delivery processes, ensuring information is captured consistently and stored appropriately for audit and compliance." },
      { text: "Identification and reduction of wasted time, duplicated tasks, and unnecessary costs." },
      { text: "Support with branding, messaging, online presence and social media to keep communication simple and professional." },
      { text: "Clear salary bands, career pathways, and role expectations." },
    ],
  },
  {
    value: "Resilience",
    description: "Honest risk. strong controls. stable governance.",
    context: "The business has experienced challenges in operational control, and financial stability and risk awareness which are prerequisites for larger contracts and tier progression (VF3.1). The business should establish systemised business modelling and audits to address instability concerns.",
  
    needs: [
      { text: "Establish systemised business risks, goals and key performance indicators to measure success and progress." },
      { text: "Establish compliance frameworks that support risk, safety, quality and environmental management to ensure business is ready for larger contracts." },
    ],
    enablesAspirations: [
      "Aspiration 2 (Profitability): Enables margin and progress tracking and maintain 25% target",
      "Aspiration 1 (Exit Readiness): Demonstrates financial health to potential buyers",
      "Aspiration 5 (Tier Progression): Provides stability and compliance controls for scaling",
      "Aspiration 6 (Warehouse Expansion): Secures operational stability for major internal development projects",
      "Aspiration 7 (Revenue Growth): Provides repeatable system to identify business aligned opportunities",
    ],
    deliverables: [
      { text: "Compliance frameworks that support safety, quality, environmental management, and accreditations." },
      { text: "Formal risk management structures that allow risks to be identified, reviewed, and tracked over time." },
      { text: "Progress reporting rhythms that support operational stability and predictable delivery." },
      { text: "Hardware and equipment strategy to ensure tools match operational needs." },
    ],
  },
  {
    value: "Growth",
    description: "Knowledge retained. lessons learned. continuous improvement.",
    context: "The business's current digital presence does not demonstrate digital construction project delivery capabilities (VF4.4), which is a tool needed for scaling. The business should build the sustainable digital infrastructure capabilities to support its long term growth ambitions.",
    needs: [
      { text: "Implement digital construction project delivery methods and tools to enable mature digital project delivery capabilities, supporting Tier 2 operations and client collaboration." },
      { text: "Implement structured training and knowledge retention systems, and create clear career pathways to attract and retain talent, to allow for team expansion." },
      { text: "Develop stronger support networks to support increased operational complexity, across specialist functions (project management, commercial, planning, design, HSE, quality, supply chain, finance)." },
    ],
    enablesAspirations: [
      "Aspiration 7 (Revenue Growth): Creates bandwidth to deliver larger package work",
      "Aspiration 8 (Team Growth): Directly delivers on 3-4 person expansion target",
      "Aspiration 5 (Tier Progression - Structure as Tier 1): Builds full management teams and capabilities",
      "Aspiration 6 (Warehouse Expansion): Provides capacity to manage diversification",
    ],
    deliverables: [
      { text: "Sector expansion guidance to help the company grow into areas that build on existing strengths." },
      { text: "Opportunities for industry exposure so the company collaborates rather than competes." },
      { text: "Career development and training frameworks that help retain and grow talent." },
      { text: "Strengthened digital delivery, social media and branding to support visibility and reputation." },
    ],
  },
];

export default function IdentifiedNeeds() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    transparency: false,
    simplicity: false,
    resilience: false,
    growth: false,
  });

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Identified Needs</h2>
      <p className="mb-6">
      These needs represent the critical structures and behaviors that must be put in place to achieve the client's strategic aspirations.
      </p>

      <div className="space-y-6">
        {needSections.map((section, index) => {
          const sectionKey = section.value.toLowerCase();
          const isExpanded = expandedSections[sectionKey];

          return (
            <section key={section.value} className="border border-white/20 rounded-md overflow-hidden">
              {/* Need Statement Header - Always Visible */}
              <div className="bg-[#204E4A] px-4 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="content-title text-lg mb-1">
                      {index + 1}. {section.value}
                    </h3>
                    <p className="text-gray-300 italic text-sm">"{section.description}"</p>
                  </div>
                  <button
                    onClick={() => toggleSection(sectionKey)}
                    className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                  >
                    {isExpanded ? "Hide Deliverables" : "Show Deliverables"}
                  </button>
                </div>
              </div>

              {/* Context and Needs - Always Visible */}
              <div className="px-4 py-4 bg-gray-900/30">
                <div className="flex gap-6">
                  {/* Left Column: Context and Needs */}
                  <div className="flex-1">
                    <p className="text-gray-300 leading-relaxed mb-4">{section.context}</p>
                    <ul className="space-y-2 ml-4">
                      {section.needs.map((need, nIndex) => (
                        <li key={nIndex} className="text-gray-300 list-disc">
                          <strong className="text-orange-400">Need:</strong> {need.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right Column: Enables Aspirations */}
                  <div className="flex-1 border-l border-white/20 pl-6">
                    <p className="text-gray-300 font-medium mb-2">Enables Aspirations:</p>
                    <ul className="space-y-1 ml-4">
                      {section.enablesAspirations.map((aspiration, aIndex) => (
                        <li key={aIndex} className="text-gray-400 text-sm list-disc">
                          {aspiration}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deliverables - Collapsible */}
              {isExpanded && (
                <div className="border-t border-white/20 bg-[#0d0d0d]">
                  <div className="px-4 py-4">
                    <h4 className="text-gray-300 font-medium mb-3">Morero Deliverables:</h4>
                    <ul className="space-y-2 ml-4">
                      {section.deliverables.map((deliverable, dIndex) => (
                        <li key={dIndex} className="text-gray-400 list-disc">
                          {deliverable.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
