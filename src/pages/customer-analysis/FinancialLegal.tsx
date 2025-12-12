export const title = "Financial & Legal";
export const lastUpdated = new Date().toLocaleDateString();

export default function FinancialLegal() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Financial & Legal</h2>
      <p className="mb-6">
        Financial analysis and legal compliance information for P&D Environmental Ltd.
      </p>

      <div className="space-y-8">
        <section>
          <h3 className="content-title text-lg mb-3">Commerical Overview</h3>
          <p>
            P&D Environmental Ltd has all statutory filings up to date on{' '}
            <a 
              href="https://find-and-update.company-information.service.gov.uk/company/08337862" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Companies House
            </a>
            . The company's financial filings classify it as a small or micro-enterprise. Independent business data from{' '}
            <a 
              href="https://open.endole.co.uk/insight/company/08337862-p-d-environmental-ltd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Endole
            </a>
            {' '}indicates that annual turnover is under £1 million, with fewer than 10 employees in recent years.
          </p>

          <p className="mt-4">
            <strong>Ownership:</strong> P&D Environmental Ltd is now majority-controlled by P&D Marine Group Ltd 
            (Company No. 13079060) which was introduced as a corporate shareholder in February 2021, owning {'>'}50% 
            (but {'<'}75%) of shares. The remaining significant shareholder is Mr. Ben Jones, who retains 25–50% ownership.
          </p>

          <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-2">Accounts</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">2020</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">2021</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">2022</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">2023</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 text-right">2024</div>
            </div>
            
            {/* Rows */}
            <div className="flex">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-2">Cash</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£103,726</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£18,694</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£28,617</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£2,582</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 text-right">£2,125</div>
            </div>
            
            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-2">Total Current Assets</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£473,086</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£343,255</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£448,959</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£494,200</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 text-right">£307,274</div>
            </div>
            
            <div className="flex">
              <div className="flex-[0_0_25%] border-r border-b border-white/20 px-4 py-2">Total Current Liabilities</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£631,898</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£577,985</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£563,560</div>
              <div className="flex-1 border-r border-b border-white/20 px-4 py-2 text-right">£652,056</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 text-right">£643,211</div>
            </div>
            
            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_25%] border-r border-white/20 px-4 py-2">Net Worth</div>
              <div className="flex-1 border-r border-white/20 px-4 py-2 text-right text-red-400">-£189,183</div>
              <div className="flex-1 border-r border-white/20 px-4 py-2 text-right text-red-400">-£237,727</div>
              <div className="flex-1 border-r border-white/20 px-4 py-2 text-right text-red-400">-£75,871</div>
              <div className="flex-1 border-r border-white/20 px-4 py-2 text-right text-red-400">-£67,857</div>
              <div className="flex-1 px-4 py-2 text-right text-red-400">-£264,673</div>
            </div>
          </div>
          
          <p className="mt-4">
            <strong>Financial Analysis Summary:</strong>
          </p>
          <p className="mt-2 text-gray-300">
            The five-year trend reveals a company in persistent financial distress, with negative equity throughout and 
            deteriorating cash reserves. While there was a brief improvement in net worth in 2022-2023, 2024 represents a 
            significant setback, with the largest negative equity position and lowest cash balance in the period. The company's 
            survival depends on continued group support and external financing, as evidenced by the Bibby Financial Services 
            charge and intercompany debt arrangements. 
            The Directors explicitly acknowledge the financial strain, noting that until 2025 relied on the continued support of the financing. Directors report £2m revenue with 25% gross margin. The company remains a going concern due to this explicit support structure, with the backing by the group and external financing providing operational stability. Company status is Active and accounts have been filed up to Sep 2024 on{' '}, with latest accounts due for filing 30th June 2026.
          </p>
          
          <div className="mt-6">
            <h4 className="content-title text-base mb-3">Debt</h4>
            <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
              {/* Header */}
              <div className="flex bg-[#204E4A]">
                <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Type</div>
                <div className="flex-1 border-b border-white/20 px-4 py-2">Details</div>
              </div>

              {/* Director Loans */}
              <div className="flex">
                <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Director Loans</div>
                <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
                  <p className="mb-2">Both directors have provided unsecured, interest-free loans repayable on demand:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Simon Nadin: £1,093</li>
                    <li>Ben Jones: £4,000</li>
                  </ul>
                </div>
              </div>

              {/* Intercompany Debt */}
              <div className="flex bg-[#0d0d0d]">
                <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Intercompany Debt</div>
                <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
                  <p className="mb-2">The company owes significant funds to other group entities:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>The Pontoon & Dock Company Ltd: £297,397 (down from £349,227)</li>
                    <li>P & D Multimover Ltd: £19,039</li>
                  </ul>
                  <p className="mt-2 text-xs text-gray-400">
                    These balances confirm the P&D Marine Group provides substantial financing and operational support to P & D Environmental Ltd.
                  </p>
                </div>
              </div>

              {/* Charges */}
              <div className="flex">
                <div className="flex-[0_0_30%] border-r border-white/20 px-4 py-2 font-medium">Charges</div>
                <div className="flex-1 px-4 py-2 break-words whitespace-normal">
                  <p className="mb-2"><strong>Previous Charge:</strong> Charge code 0833 7862 0001, created in September 2020, was recorded as satisfied in full on 12 February 2025.</p>
                  <p className="mb-2"><strong>Current Charge:</strong> Charge code 0833 7862 0002, registered on 7 March 2025, remains outstanding.</p>
                  <p className="mb-2"><strong>Charge Holder:</strong> BIBBY FINANCIAL SERVICES LIMITED, acting as a Security Trustee.</p>
                  <p className="mb-2"><strong>Type:</strong> Asset-based lending arrangement (likely invoice factoring or working capital finance) that secures all present and future liabilities.</p>
                  <p className="mb-2"><strong>Security includes:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Fixed Charge:</strong> Covers all land, buildings, fixtures, fixed plant and machinery, and all present and future book debts (receivables)</li>
                    <li><strong>Floating Charge:</strong> Covers all remaining property and undertaking of the company</li>
                    <li><strong>Negative Pledge:</strong> Restricts the company from creating other security interests without the lender's consent</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="content-title text-lg mb-3">Regulatory and Legal Compliance</h3>
          <p className="mb-4">
            Regulatory and legal compliance status for P&D Environmental Ltd, including licenses, enforcement actions, 
            and legal standing.
          </p>
          <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Category</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Status / Details</div>
            </div>

            {/* Rows */}
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Legal Standing</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
                P&D Environmental appears to be in good legal standing, with no public records of regulatory violations or 
                legal disputes. A search of official sources shows no Environment Agency or HSE (Health & Safety Executive) 
                enforcement notices against the company.
              </div>
            </div>

            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Waste Carrier License</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
                Registered waste carrier/broker (registration CBDL10689, since March 2014) to legally transport and dispose 
                of waste from its dredging and site clearance operations.
              </div>
            </div>

            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Company Filings</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
                No notices in the UK Gazette for compulsory strike-off or insolvency. All confirmation statements and accounts 
                have been filed on time.
              </div>
            </div>

            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">County Court Judgments</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
                Credit checks show no County Court Judgments (CCJs) against P&D Environmental as of the latest data, 
                indicating it has not been taken to court over unpaid debts.
              </div>
            </div>

            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">SIC Code</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
                30110 (Building of ships and floating structures), a classification chosen likely because of the marine 
                infrastructure work (floating pontoon systems, etc.) they undertake.
              </div>
            </div>

            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_30%] border-r border-white/20 px-4 py-2 font-medium">Overall Compliance</div>
              <div className="flex-1 px-4 py-2 break-words whitespace-normal">
                Aside from the financial risks noted (which are managed within the group), the company is compliant 
                and operates with the proper certifications and regulatory approvals for its field, as confirmed on{' '}
                <a 
                  href="https://companycheck.co.uk/company/08337862/P--D-ENVIRONMENTAL-LTD/companies-house-data" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline"
                >
                  CompanyCheck
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="content-title text-lg mb-3">Health and Safety</h3>
          <p className="mb-4">
            Health and safety compliance review for P&D Environmental Ltd, including HSE enforcement actions and 
            reported incidents.
          </p>
          <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#204E4A]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2">Category</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2">Status / Details</div>
            </div>

            {/* Rows */}
            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">HSE Enforcement Actions</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
                A search of public sources and the HSE enforcement register shows no records of HSE (Health & Safety Executive) 
                enforcement notices, improvement notices, or prohibition notices against P&D Environmental Ltd. There are no 
                public records of stop notices or formal enforcement actions by the HSE. The HSE maintains a public register 
                of enforcement notices at{' '}
                <a 
                  href="https://resources.hse.gov.uk/notices/notice/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline"
                >
                  resources.hse.gov.uk
                </a>
                , which can be searched for specific company records.
              </div>
            </div>

            <div className="flex bg-[#0d0d0d]">
              <div className="flex-[0_0_30%] border-r border-b border-white/20 px-4 py-2 font-medium">Reported Incidents</div>
              <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal">
                The company has disclosed one workplace fatality. This incident was reported to the relevant authorities and was handled appropriately. The company's transparency in disclosing this incident demonstrates a commitment to accountability and learning from safety events.
              </div>
            </div>

            <div className="flex">
              <div className="flex-[0_0_30%] border-r border-white/20 px-4 py-2 font-medium">Safety Management</div>
              <div className="flex-1 px-4 py-2 break-words whitespace-normal">
                The company maintains multiple industry safety accreditations including CHAS (Contractors Health and Safety 
                Assessment Scheme), SSIP (Safety Schemes in Procurement) membership, and Constructionline Gold status. All 
                site staff carry CSCS certifications and have completed DEFRA-approved water safety courses, indicating ongoing 
                commitment to safety training and competency.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

