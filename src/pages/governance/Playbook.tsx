export const title = "Playbook";
export const lastUpdated = "23/05/2025 14:30";

export default function Playbook() {
    return (
        <div>
            <h2 className="content-title">Monthly Strategic Review</h2>
            <table>
                <tbody>
                <tr>
                    <td><strong>Purpose</strong></td>
                    <td>Track progress, cash, and targets before anything drifts off plan.</td>
                </tr>
                <tr>
                    <td><strong>When</strong></td>
                    <td>First week of each new month.<br /><em>(Except Jan, Apr, Jul, Oct, when this is replaced by the combined quarterly planning meeting.)</em></td>
                </tr>
                <tr>
                    <td><strong>Plan</strong></td>
                    <td>
                    <ul>
                        <li>Update actuals</li>
                        <li>Agree actions</li>
                        <li>Capture notes</li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td><strong>Review</strong></td>
                    <td>
                    <ul>
                        <li>Review actuals vs. targets</li>
                        <li>Flag variances</li>
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>

            <h2 className="content-title">Quarterly Strategic Review</h2>
            <table>
                <tbody>
                <tr>
                    <td><strong>Purpose</strong></td>
                    <td>Update market assumptions and generate new quarterly targets based on the latest ONS data.</td>
                </tr>
                <tr>
                    <td><strong>When</strong></td>
                    <td>Within 5 days of the ONS quarterly data release (Jan, Apr, Jul, Oct).<br /><em>This meeting replaces the standard monthly planning in these months.</em></td>
                </tr>
                <tr>
                    <td><strong>Plan</strong></td>
                    <td>
                    <ul>
                        <li>Import and review ONS market data</li>
                        <li>Approve drivers and key assumptions</li>
                        <li>Generate and agree new quarterly targets</li>
                        <li>Assign owners and next steps</li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td><strong>Review</strong></td>
                    <td>
                    <ul>
                        <li>Review P&amp;L forecast vs. plan</li>
                        <li>Adjust resource allocation if required</li>
                        <li>Record quarterly lessons learned</li>
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>

            <h2 className="content-title">Annual Strategic Review</h2>
            <table>
                <tbody>
                <tr>
                    <td><strong>Purpose</strong></td>
                    <td>Refresh long-term strategy, set or confirm vision and risk appetite, and archive annual assumptions for record keeping.</td>
                </tr>
                <tr>
                    <td><strong>When</strong></td>
                    <td>4th Tuesday in January (or first board/investor meeting of the year, after ONS Q4 data is published).</td>
                </tr>
                <tr>
                    <td><strong>Plan</strong></td>
                    <td>
                    <ul>
                        <li>Review and update 5-year strategic plan</li>
                        <li>Set high-level annual priorities</li>
                        <li>Confirm risk appetite</li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td><strong>Review</strong></td>
                    <td>
                    <ul>
                        <li>Snapshot and archive annual assumptions</li>
                        <li>Reflect on previous year's strategic results</li>
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
} 