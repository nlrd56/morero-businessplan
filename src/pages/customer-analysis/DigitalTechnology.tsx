export const title = "Digital Technology";
export const lastUpdated = new Date().toLocaleDateString();

export default function DigitalTechnology() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Digital Technology in Construction</h2>
      <p className="mb-6">
      Despite a surge in digital adoption during the pandemic, uptake has plateaued, with 43% of firms not using digital tools across key project areas, up from 40% in 2021. This underutilisation presents a massive opportunity. Data currently contributes £50 billion annually to the UK economy, and AI could add 10.3% to GDP by 2030. The UK construction industry alone has saved £840 million through Building Information Modelling (BIM), while smart infrastructure presents around £3.4 trillion global opportunity. 

      <br /><br />
      Challenges like climate change, housing shortages, and infrastructure inefficiencies demand urgent digital transformation. As the industry lags in adoption, the demand for innovative, structured digital solutions is only increasing, creating a clear market need for tools that drive efficiency and better decision-making.
      </p>

      <div className="space-y-8">
        <section>
          <h3 className="content-title text-lg mb-3">Market Digital Challenges:</h3>
          <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Challenge</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Description</div>
            </div>
            
            {/* Rows */}
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Cost, effort and changes needed</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Implementing digital tools in construction requires significant investment and disruption to established processes, which firm may hesitate to undertake. This hindered by complexity, lack of training, and poor tool integration.</div>
            </div>
            
            <div className="flex bg-gray-800/50">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Low ESG Adoption</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Despite the growing emphasis on Environmental, Social, and Governance (ESG) factors, adoption rates remain low, highlighting a gap between their importance and the tools available for effective implementation.</div>
            </div>
            
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Access to Simplified Tools</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Developing more accessible, user-friendly tools, alongside education on their benefits and ROI, could accelerate adoption in critical areas like carbon calculations, ESG, and social value tracking.</div>
            </div>
          </div>
        </section>



        <section>
          <h3 className="content-title text-lg mb-3">Market Digital Opportunities:</h3>
          <div className="mt-4 border border-white/20 rounded-md overflow-hidden">

            {/* Header */}
            <div className="flex bg-[#204E4A]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Opportunity</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Description</div>
            </div>
            
            {/* Rows */}
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Lack of Digital Solutions for Clients</div>
                <div className="flex-1 border-b border-white/20 px-4 py-2">A review of the top 60 global construction softwares show that clients are almost invisible in this digital landscape. Years before a contractor arrives, the client is making choices that define the entire project. By the time delivery teams get involved, it’s often too late to influence the decisions that matter most. The client, the most influential person on a project, remains without meaningful digital support.</div>
            </div>
            
            <div className="flex bg-gray-800/50">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Focus on Sustainability</div>
                <div className="flex-1 border-b border-white/20 px-4 py-2">With the global push towards sustainability, there is significant growth potential in carbon reporting and ESG adoption, especially as regulatory trends create competitive advantages for compliant companies.</div>
                </div>
  
              <div className="flex">
                <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Untapped Social Value Potential</div>
                <div className="flex-1 border-b border-white/20 px-4 py-2">Standardising social value metrics and demonstrating tangible benefits can drive broader adoption, particularly for companies prioritising ESG initiatives.
              </div>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}

