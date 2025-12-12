export const title = "Company Overview";
export const lastUpdated = new Date().toLocaleDateString();

export default function CompanyOverview() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Company Overview</h2>
      <p className="mb-6">
        Company analysis of P&D Environmental Ltd (Company No. 08337862).
      </p>

      <div className="space-y-8">
        <section>
          <h3 className="content-title text-lg mb-3">Company Profile and Services</h3>
          <p>
            P & D Environmental Ltd is a UK-based specialist marine and environmental contracting company, 
            founded in late 2012 and headquartered at Repton House, Bretby Business Park in Burton-on-Trent, 
            Staffordshire. The company operates nationwide across the UK, focusing on inland water and marine 
            civil engineering projects which is detailed on their{' '}
            <a 
              href="https://www.pandd-environmental.co.uk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              official website
            </a>
            .
          </p>
          <p className="mt-3">
            <strong>Key Services:</strong>
          </p>
          <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Service</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Description</div>
            </div>
            
            {/* Rows */}
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Dredging & De-silting</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Removal of silt and sediment from lakes, canals, and waterways</div>
            </div>
            
            <div className="flex bg-gray-800/50">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Marine Civil Engineering</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Water-based civil engineering works including lake and river restoration, bank stabilization, rock armour installation, scour protection, and sheet piling</div>
            </div>
            
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Marine Plant Hire</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Provision of specialized marine equipment (work boats, barges, excavators, etc.) for projects on water, with custom-built plant and in-house fabrication facilities</div>
            </div>
            
            <div className="flex bg-gray-800/50">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">River & Watercourse Management</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Maintenance of rivers and waterways, including clearing debris, managing water flow, and environmental conservation tasks</div>
            </div>
            
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-white/20 px-4 py-2 font-medium">Site Clearance and Environmental Services</div>
              <div className="flex-1 px-4 py-2">Clearing vegetation or obstructions from sites, often preparatory work for marine projects</div>
            </div>
          </div>
          <p className="mt-3">
            The company emphasizes turnkey project delivery – from design through to installation – especially 
            for projects "on or near the water". P&D Environmental coordinates with authorities like the UK Environment 
            Agency and Canal & River Trust.
          </p>
          <p className="mt-3">
            <strong>Client Base:</strong> The client base spans public bodies (e.g. harbour commissioners, municipal 
            water authorities) and private sectors (marinas, construction and leisure industries). The company has 
            built heavy-duty pontoons for harbor authorities and undertaken dredging to improve flood defenses.
          </p>
        </section>

        <section>
          <h3 className="content-title text-lg mb-3">Certifications & Accreditations</h3>
          <p>
            P&D Environmental holds multiple industry accreditations, demonstrating commitment to quality, 
            safety, and environmental standards:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>CHAS (Contractors Health and Safety Assessment Scheme) accredited</li>
            <li>ISO 9001 (Quality Management System) certified</li>
            <li>ISO 14001 (Environmental Management System) certified</li>
            <li>Constructionline Gold member</li>
            <li>Safety Schemes in Procurement (SSIP) member</li>
            <li>British Marine Federation member</li>
            <li>All site staff carry CSCS certifications and DEFRA-approved water safety courses</li>
            <li>Registered waste carrier/broker (CBDL10689, since March 2014)</li>
          </ul>
        </section>

        <section>
          <h3 className="content-title text-lg mb-3">Company Structure & Group Affiliations</h3>
          <p>
            P&D Environmental Ltd is part of the broader P&D Marine Group, which also encompasses related 
            companies such as The Pontoon & Dock Company, P&D Marine Services, P&D Boats, and Multi-Mover UK. 
            This group structure resulted from an internal merger and rebranding in 2021, when the Pontoon & 
            Dock Company (founded 2009) was consolidated with its sister businesses under the P&D Marine Group umbrella, 
            as reported in{' '}
            <a 
              href="https://www.theconstructionindex.co.uk/news/view/pd-merger-creates-one-stop-solution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              The Construction Index
            </a>
            {' '}and the{' '}
            <a 
              href="https://www.openpr.com/news/2256269/p-d-merger-creates-one-stop-solution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              official press release
            </a>
            .
          </p>
          <p className="mt-3">
            <strong>Group Control Structure:</strong> Strategic control is highly concentrated, with Simon Nadin 
            serving as the "mutual person" linked across all core active entities in the P&D Marine Group. This 
            centralized model ensures streamlined decision-making and optimal resource deployment across complex, 
            asset-intensive business lines. P&D Environmental operates from the group's main office in Bretby 
            (Midlands) and shares access to a central warehouse facility in Shropshire for equipment and fabrication.
          </p>
          <p className="mt-3">
            As of 2025, the company is in its 13th year of operation, having been incorporated in December 2012.
          </p>
        </section>
      </div>
    </div>
  );
}

