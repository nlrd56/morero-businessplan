export const title = "Customer Pain Points";
export const lastUpdated = new Date().toLocaleDateString();

export default function CustomerPainPoints() {
  return (

    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Customer Pain Points</h2>
      <p className="mb-6">The following pain points are drawn from structured discovery sessions across professional services and client-side project teams, representing over 170 live projects annually.</p>

    <section>
        <div className="my-6 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
            <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Transparency</div>
            </div>
            
            <div className="flex">
                <div className="flex-1 border-r border-b border-white/20 px-4 py-2">
                    <p className="pain-statement">
                    <strong>Poor communication and inconsistent information exchange</strong>
                    </p>
                    <p className="description">
                    Projects suffer when information is scattered across emails, folders, and disconnected systems, making it difficult to confirm what is current, complete, or approved.
                    </p>
                    <strong>Evidence from discovery sessions:</strong>
                    <ul className="list-disc list-outside my-3 space-y-2 ml-8">
                        <li>Teams described inconsistent or overly complex templates, with some projects missing critical information and others over-engineered.</li>
                        <li>Multiple participants noted difficulty understanding roles, responsibilities, and approval routes, especially when joining projects mid-stream.</li>
                        <li>Smaller organisations reported manual processes that scale poorly beyond a limited number of projects.</li>
                    </ul>
                    <p className="impact"><strong>Impact: </strong>
                        Lack of transparency increases administrative burden, slows decision-making, and raises compliance risk
                    </p>
                </div>
            </div>
        </div>
     </section>
     <section>
        <div className="my-6 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
            <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Simplicity</div>
            </div>
            
            <div className="flex">
                <div className="flex-1 border-r border-b border-white/20 px-4 py-2">
                    <p className="pain-statement">
                    <strong>Unclear, undefined, and unmeasurable project objectives</strong>
                    </p>
                    <p className="description">
                    Projects often lack a clear structure for what needs to be delivered, by whom, and when, leading to confusion and inconsistent execution.                    </p>
                    <strong>Evidence from discovery sessions:</strong>
                    <ul className="list-disc list-outside my-3 space-y-2 ml-8">
                    <li>Teams described inconsistent or overly complex templates, with some projects missing critical information and others over-engineered.</li>
                    <li>Multiple participants noted difficulty understanding roles, responsibilities, and approval routes, especially when joining projects mid-stream.</li>
                    <li>Smaller organisations reported manual processes that scale poorly beyond a limited number of projects.</li>
                    </ul>
                    <p className="impact"><strong>Impact:</strong> Poor simplicity leads to duplicated effort, avoidable errors, and reduced confidence in project controls.
                    </p>
                </div>
            </div>
        </div>
     </section>
     <section>
        <div className="my-6 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
            <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Growth</div>
            </div>
            
            <div className="flex">
                <div className="flex-1 border-r border-b border-white/20 px-4 py-2">
                    <p className="pain-statement">
                    <strong>Limited knowledge retention and continuous improvement</strong>
                    </p>
                    <p className="description">
                    Lessons learned are rarely captured in a usable way, meaning mistakes are repeated across projects and teams.
                    </p>
                    <strong>Evidence from discovery sessions:</strong>
                    <ul className="list-disc list-outside my-3 space-y-2 ml-8">
                    <li>Participants noted that insights remain locked in individuals' inboxes or personal experience rather than shared systems.</li>
                    <li>There was strong interest in seeing historical decisions, costs, and outcomes to inform future work, but no consistent way to access this information.</li>
                    <li>Several teams expressed frustration that learning resets when staff change or projects close.</li>
                    </ul>
                    <p className="impact"><strong>Impact:</strong> The inability to retain and reuse knowledge limits organisational improvement and long-term performance.
                    </p>
                </div>
            </div>
        </div>
     </section>
     <section>
        <div className="my-6 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
            <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Resilience</div>
            </div>
            
            <div className="flex">
                <div className="flex-1 border-r border-b border-white/20 px-4 py-2">
                    <p className="pain-statement">
                    <strong>Optimism bias and poor risk awareness</strong>
                    </p>
                    <p className="description">
                    Risks are often identified late, managed reactively, or obscured by fragmented information.
                    </p>
                    <strong>Evidence from discovery sessions:</strong>
                    <ul className="list-disc list-outside my-3 space-y-2 ml-8">
                    <li>Teams reported difficulty seeing the "global picture" of projects, relying instead on snapshots that hide emerging issues.</li>
                    <li>Cost and programme changes were described as frequent but hard to track coherently, leading to misalignment and rushed decisions.</li>
                    <li>Compliance evidence gaps were cited as a reason projects had to pause or incur additional cost.</li>
                    </ul>
                    <p className="impact"><strong>Impact:</strong> Weak resilience increases exposure to delays, cost overruns, and regulatory intervention.
                    </p>
                </div>
            </div>
        </div>
     </section>
    </div>
  );
};
