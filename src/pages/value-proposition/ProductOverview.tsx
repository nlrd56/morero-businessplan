export const title = "Product Overview";
export const lastUpdated = new Date().toLocaleDateString();

export default function ProductOverview() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
        <h2 className="content-title">Product Overview</h2>
        <p className="mb-0">
            Morero is a governance-first construction platform designed to capture, structure, and preserve the decisions that shape project outcomes. It provides a coherent layer of oversight across the project lifecycle, ensuring that risk, context, and rationale are retained as projects evolve.
            <br /><br />

            The platform is intentionally modular, with AI engines that are able to be used in isolation externally. Morero’s MVP focuses on establishing a strong governance foundation through early-stage context definition, structured risk management, and controlled automation. Additional governance capabilities are introduced progressively as the platform matures. <br /><br />
        </p>

        <hr className="my-6 border-white/20" />

        <h2 className="content-title">Minimum Viable Product (MVP)</h2>
        <p className="mb-6">
            The MVP supports projects from inception by reducing early uncertainty and improving the quality of initial decisions. It focuses on three core capabilities that strengthen governance without disrupting existing delivery tools.
        </p>

        <hr className="my-6 border-white/20" />

        <section>
            <div className="my-6 border border-white/20 rounded-md overflow-hidden">
                {/* Header */}
                <div className="flex bg-[#204E4A]">
                <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Project Context Intelligence (PCI)</div>
                </div>
                
                <div className="flex">
                    <div className="flex-1 border-r border-b border-white/20 px-4 py-2">
                        <p className="statement">
                        Project Context Intelligence (PCI) provides a structured understanding of a project’s context, including statutory pre-construction information, environmental constraints, regulatory requirements, and relevant historical considerations.
                        <br /><br />
                        Rather than treating this information as a static document set, the PCI organises and contextualises it so it actively informs governance. Location-based, environmental, regulatory, and historic datasets are structured into a consistent project context, surfacing constraints and obligations that are often identified too late in the project lifecycle.
                        <br /><br />
                        This enables teams to begin projects with a clearer, evidence-based understanding of context, strengthening downstream risk, programme, and change decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <hr className="my-6 border-white/20" />

        <section>
            <div className="my-6 border border-white/20 rounded-md overflow-hidden">
                {/* Header */}
                <div className="flex bg-[#204E4A]">
                <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Risk Governance Engine</div>
                </div>
                
                <div className="flex">
                    <div className="flex-1 border-r border-b border-white/20 px-4 py-2">
                        <p className="statement">
                        The Risk Governance Engine combines Project Context Intelligence (PCI) with structured user inputs to assess project risk and programme realism. It applies rule-based checks against recognised guidance, historic benchmarks, and prior project patterns to help reduce optimism bias.
                        <br /><br />
                        Based on this analysis, the engine produces and maintains a live project risk register that evolves as the project develops. Risks are reassessed as goals change and decisions are made, ensuring governance remains aligned with current project conditions rather than outdated assumptions. Scenario comparison is supported to inform governance decisions, without automating judgement or replacing professional responsibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <hr className="my-6 border-white/20" />

        <section>
            <div className="my-6 border border-white/20 rounded-md overflow-hidden">
                {/* Header */}
                <div className="flex bg-[#204E4A]">
                <div className="flex-1 border-r border-b border-white/20 px-4 py-2">File Intelligence Engine</div>
                </div>
                
                <div className="flex">
                    <div className="flex-1 border-r border-b border-white/20 px-4 py-2">
                        <p className="statement">
                        The File Intelligence Engine allows project teams to connect their existing cloud storage systems without creating a central file repository within Morero. Each organisation retains ownership and control of its data, while Morero maintains structured links between documents, decisions, risks, and project context.
                        <br /><br />
                        By avoiding forced document migration, teams continue working within their preferred systems while improving traceability and governance. This ensures information remains accessible and auditable without duplicating storage or disrupting established workflows.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <hr className="my-6 border-white/20" />

        <section>
            <div className="my-6 border border-white/20 rounded-md overflow-hidden">
                {/* Header */}
                <div className="flex bg-[#204E4A]">
                <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Microsoft 365 Integration</div>
                </div>
                
                <div className="flex">
                    <div className="flex-1 border-r border-b border-white/20 px-4 py-2">
                        <p className="statement">
                        Morero includes a Microsoft 365 add-in within the MVP, enabling users to access and interact with governance workflows directly from familiar tools such as Microsoft Outlook and Microsoft Teams.
                        <br /><br />
                        This reduces context switching and supports adoption within enterprise environments, embedding governance activity into day-to-day working practices while maintaining secure data handling.
                        </p>
                    </div>
                </div>
            </div>
        </section>

         <p className="mb-6">Together, these components establish Morero as a governance layer that improves early-stage decision quality without disrupting existing delivery tools.</p>

         <hr className="my-6 border-white/20" />

         <h2 className="content-title">Designed to Complement Existing Tools</h2>
         <p className="mb-6">Morero is not a replacement for contractor, design, or delivery platforms. It operates alongside them, providing a governance and decision layer that integrates with existing workflows. This ensures adoption without disruption, while delivering the oversight, accountability, and continuity that traditional tools do not provide.</p>

    </div>
  );
}

