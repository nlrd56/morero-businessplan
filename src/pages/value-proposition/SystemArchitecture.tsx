export const title = "System Architecture";
export const lastUpdated = new Date().toLocaleDateString();

export default function SystemArchitecture() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
        <h2 className="content-title">Platform Design and Deployment</h2>
        <p className="mb-0">
            Morero’s platform design is governed by the same four values that underpin its governance model: transparency, simplicity, growth, and resilience. These values act as design constraints, shaping how data is structured, how automation is applied, and how the platform integrates into regulated construction environments.  The platrofmr design is informed by recognised international standards, and is being developed with the intention of working towards formal ISO certifications. <br /><br />   
         
            <strong>Transparency (Aligned to ISO 27017 - Cloud Security)</strong> <br />
            Governance information is structured as linked, live records rather than static documents. Decisions, risks, and supporting evidence remain traceable across the project lifecycle, enabling clear oversight and defensible accountability when scrutiny is required.<br /><br />

            <strong>Simplicity (Aligned to ISO 27001 - Information Security Management Systems)</strong><br />
            Morero follows an integration-first deployment model. Teams continue working within their existing systems, with files remaining in their original cloud storage and governance workflows embedded into familiar tools such as Microsoft 365. This reduces duplication, avoids forced behavioural change, and lowers adoption friction. <br /><br />  

            <strong>Growth (Aligned to ISO 9001 - Quality Management Systems)</strong><br />
            The platform is modular by design, allowing governance capabilities to operate independently or together. Decisions, risks, and outcomes are retained across projects to support structured learning and continuous improvement, enabling organisations to build an evidence base rather than repeating past mistakes. <br /><br />  

            <strong>Resilience (Aligned to ISO 22301 - Business Continuity Management)</strong><br />
            Governance processes are supported by controlled, rule-based automation and structured analysis. Risks are reassessed as projects evolve, assumptions are tested, and governance records remain current, supporting reliable decision-making in complex and changing delivery environments.
        </p>
        <hr className="my-6 border-white/20" />
        <h2 className="content-title">Technology and Deployment (High-Level)</h2>
        <p className="mb-0">
            Morero is delivered as a cloud-based platform using a modern web application architecture. Structured governance data is stored in a relational database to support consistency and auditability. Analytical and AI-enabled components are used as bounded tools to support assessment and simulation, while decision ownership remains explicit and attributable. <br /><br />
            
            The platform integrates securely with Microsoft 365 and third-party cloud storage providers. Data ownership remains with originating organisations, supported by role-based access control and least-privilege principles.
        </p>

    </div>
  );
}