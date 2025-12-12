export const title = "History";
export const lastUpdated = "28/06/2025 20:10";

export default function History() {
  return (
    <div>
      <div className="font-be-vietnam-pro">
        <p>Track changes and updates to the financial model over time.</p>
        
        <h2 className="content-title">Model Updates</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Change</th>
              <th>Impact</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>28/06/2025</td>
              <td>Initial financial model created</td>
              <td>New baseline established</td>
              <td>Finance Team</td>
            </tr>
            <tr>
              <td>28/06/2025</td>
              <td>Updated customer acquisition cost from $160 to $150</td>
              <td>Improved profitability projections</td>
              <td>Marketing Team</td>
            </tr>
            <tr>
              <td>28/06/2025</td>
              <td>Adjusted monthly growth rate from 12% to 15%</td>
              <td>Higher revenue projections</td>
              <td>CEO</td>
            </tr>
            <tr>
              <td>28/06/2025</td>
              <td>Added new pricing tier - Enterprise at $299/month</td>
              <td>Increased ARPU potential</td>
              <td>Product Team</td>
            </tr>
          </tbody>
        </table>

        <h2 className="content-title">Assumption Changes</h2>
        <table>
          <thead>
            <tr>
              <th>Assumption</th>
              <th>Previous Value</th>
              <th>New Value</th>
              <th>Date Changed</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly Growth Rate</td>
              <td>12%</td>
              <td>15%</td>
              <td>28/06/2025</td>
              <td>Improved market conditions</td>
            </tr>
            <tr>
              <td>Customer Acquisition Cost</td>
              <td>$160</td>
              <td>$150</td>
              <td>28/06/2025</td>
              <td>Optimized marketing channels</td>
            </tr>
            <tr>
              <td>Churn Rate</td>
              <td>6%</td>
              <td>5%</td>
              <td>28/06/2025</td>
              <td>Enhanced customer success</td>
            </tr>
            <tr>
              <td>Enterprise Plan Adoption</td>
              <td>N/A</td>
              <td>10%</td>
              <td>28/06/2025</td>
              <td>New product tier launched</td>
            </tr>
          </tbody>
        </table>

        <h2 className="content-title">Version History</h2>
        <table>
          <thead>
            <tr>
              <th>Version</th>
              <th>Release Date</th>
              <th>Major Changes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>v1.0</td>
              <td>28/06/2025</td>
              <td>Initial financial model with basic assumptions</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>v1.1</td>
              <td>28/06/2025</td>
              <td>Updated growth assumptions and pricing model</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>v1.2</td>
              <td>28/06/2025</td>
              <td>Added enterprise pricing tier and updated CAC</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 