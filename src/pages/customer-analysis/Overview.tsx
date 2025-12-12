export const title = "Overview";
export const lastUpdated = new Date().toLocaleDateString();

export default function Overview() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Industry & Competitor Analysis</h2>
      
      <section className="mb-6">
        <h3 className="content-title text-lg mb-3">Industry Overview</h3>
        <p>
        Construction is one of the world’s oldest industries and remains a cornerstone of economic development. In the UK, it contributes over £17.7 billion annually to the economy, with £9.9 billion from new works alone, representing 6% of GDP. The sector has grown by an average of 4.4% per year over the last five years and is forecast to grow at 2.4% annually between 2024 and 2028. With 365,000 construction companies employing 2.1 million people, approximately 9% of the UK workforce, the industry is a major employer. However, an additional 250,000 workers will be needed by 2028 to meet demand.
        </p>
        <p className="mt-3">
        Despite its scale, productivity remains below the UK average and has stagnated for over 50 years. Over the past decade, construction productivity has declined by 1% per year. Construction projects are becoming more complex, requiring increased collaboration, transparency, and governance to manage risks and drive efficiency. Recognising these inefficiencies, the UK Government’s Construction Playbook calls for better governance, risk management, and value-based decision-making to reinforce the urgent need for structured solutions like Morero.
        </p>
      </section>

      <section>
        <h3 className="content-title text-lg mb-3">Key Industry Challenges</h3>
        <ul className="list-disc list-inside mt-3 space-y-5">
          <li>
            <strong>Government Regulation & Compliance </strong><br />
            <div className="ml-5">Stricter governance and ESG reporting rules are increasing scrutiny on construction firms. Planning reforms aim to speed up approvals, requiring firms to adapt to faster processes and tighter deadlines. With the 2025 ESG deadline and Net Zero 2050 target approaching effective governance and risk management are now essential for success.</div>
          </li>
          <li>
            <strong>Cashflow & Insolvencies</strong><br />
            <div className="ml-5">Despite increased investment in transport, energy, and digital infrastructure, financial instability remains a major concern. Construction firms accounted for 16.2% of all insolvencies in the UK in 2024. Persistent cash flow issues, high interest rates, labour costs, and reduced public-sector spending continue to challenge the industry. With £250 billion pledged for infrastructure, firms must improve financial stability to seize opportunities, making robust project oversight and risk management essential.
            </div>
          </li>
          <li>
            <strong>Digital Technology and Big Data Adoption </strong><br />
            <div className="ml-5">Despite the push for digital transformation, many firms still rely on outdated, fragmented tools for governance and risk management. BIM adoption remains inconsistent, particularly among SMEs facing high costs, training gaps, and resource constraints. As regulatory pressures and client expectations grow, firms must accelerate digital adoption to stay competitive. Global standards are also raising benchmarks, making investment in skills, Digital Twins, and data-driven decision-making essential for long-term success.
            </div>
          </li>
          <li>
            <strong>Labour & Skills </strong><br />
            <div className="ml-5">The UK construction sector needs 251,500 more workers by 2028, but skills shortages are driving wage inflation, delays, and reduced productivity. With less than 25% under 25, an aging workforce and a limited talent pipeline pose long-term risks. A manual labour image and lack of career progression deter younger and more diverse entrants. To fill these gaps, digital adoption is critical to ensuring a more sustainable future.
            </div>
          </li>
          <li>
            <strong>Productivity & Efficiency </strong><br />
            <div className="ml-5">Despite sustained investment, UK construction productivity continues to underperform the wider economy. ONS analysis shows that output per hour in construction has remained broadly flat since the late 1990s, while productivity across the whole economy has increased significantly over the same period. In recent years, construction productivity has declined in real terms, with average output per hour falling by around 1% per year over the last decade.
            </div>
          </li>
          <li>
            <strong>Rework & Waste </strong><br />
            <div className="ml-5">Rework remains one of the largest hidden drains on construction value. Avoidable errors and defects typically account for around 5% of total project costs, with some projects experiencing far higher losses. 30% of all construction work is rework costing the UK £25 billion annually.
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

