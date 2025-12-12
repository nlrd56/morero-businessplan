export const title = "Terms & Conditions";
export const lastUpdated = new Date().toLocaleDateString();

export default function TermsConditions() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Terms & Conditions</h2>
      <p className="mb-8 text-gray-300">
        Terms, conditions, and agreements for the business consultancy and digital transformation engagement.
      </p>

      {/* Definitions */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">1. Definitions</h3>
        <div className="space-y-1 text-gray-300">
          <p><strong>1.1</strong> <strong>Consultant</strong> means the party providing the services.</p>
          <p><strong>1.2</strong> <strong>Client</strong> means the party receiving the services.</p>
          <p><strong>1.3</strong> <strong>Services</strong> means the consultancy work described in this proposal.</p>
          <p><strong>1.4</strong> <strong>Deliverables</strong> means any outputs supplied to the Client as part of the Services.</p>
          <p><strong>1.5</strong> <strong>Agreement</strong> means these terms and the accompanying proposal.</p>
        </div>
      </section>

      {/* Engagement */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">2. Engagement</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>2.1</strong> The Client engages the Consultant to provide the Services. The Consultant will perform the Services 
            with reasonable skill and care. The Consultant will work with the Client to agree the scope, timelines and expected 
            outcomes.
          </p>
          <p>
            <strong>2.2</strong> This engagement is for an initial term of 3 years consisting of <strong>2.5 years of active transformation + 0.5 years of supported phase-out</strong> from the commencement date, unless terminated earlier in accordance with Section 10 
            (Termination).
          </p>
          <p>
            <strong>2.3</strong> Annually both parties will review and potentially revise the terms of engagement, including but not limited to pricing structure, scope of services, work pattern, and performance metrics.
          </p>
          <p>
            <strong>2.4</strong> All software licences are excluded from this engagement.
          </p>
        </div>
      </section>

      {/* Client Responsibilities */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">3. Client Responsibilities</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>3.1</strong> The Client will provide unrestricted access to information, data, systems and people needed for consultant to undertake the Services.
          </p>
          <p>
            <strong>3.2</strong> The Client will provide a single point of contact for communication and approvals.
          </p>
          <p>
            <strong>3.3</strong> The Client will review and approve the Deliverables in a timely manner.
          </p>
          <p>
            <strong>3.4</strong> The Client will ensure that decisions are made in a timely manner.
          </p>
          <p>
            <strong>3.5</strong> The Client will take responsibility for how any Deliverables are used in their business.
          </p>
        </div>
      </section>

      {/* Changes to Scope */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">4. Changes to Scope</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>4.1</strong> Any change to the agreed scope must be confirmed in writing. The Consultant will advise of any impact on cost or timeline. Work will only proceed once the change is agreed by both parties.
          </p>
          <p>
            <strong>4.2</strong> The Client acknowledges that delays in providing required information or approvals may impact project timelines and costs.
          </p>
        </div>
      </section>

      {/* Fees and Payment */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">5. Fees and Payment</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>5.1</strong> Fees are set out in the Cost Options section of this proposal. Invoices will be submitted monthly in arrears, covering the previous month's services and expenses.
          </p>
          <p>
            <strong>5.2</strong> Payment terms are due within 30 days from invoice date unless otherwise agreed in writing. Late payment may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998. Late payment may result in work being paused until payment is received.
          </p>
          <p>
            <strong>5.3</strong> For Option 2 (Base Rate + Performance Bonus), bonus payments will be calculated and invoiced separately based on agreed growth or delivery targets, as specified in the engagement agreement and agreed annually.
          </p>
          <p>
            <strong>5.4</strong> All rates are exclusive of VAT, which will be added where applicable.
          </p>
        </div>
      </section>

      {/* Expenses */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">6. Expenses</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>6.1</strong> Business mileage incurred in the performance of services will be reimbursed at the rate specified in the Cost Options section of this proposal. Mileage claims must be supported by appropriate records.
          </p>
          <p>
            <strong>6.2</strong> Where weekend or night work is required, the applicable day rate multiplier is specified in the Cost Options section of this proposal.
          </p>
          <p>
            <strong>6.3</strong> For services that the Consultant cannot provide directly (e.g., specialist software licenses, third-party services, external contractors), costs will be passed through to the Client at cost with no administrative markup or fee. All external service costs will be clearly identified and approved by the Client before incurring.
          </p>
        </div>
      </section>

      {/* Warranties */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">7. Warranties</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>7.1</strong> The Consultant warrants that the Services will be performed in a professional and workmanlike manner, in accordance with relevant industry standards.
          </p>
          <p>
            <strong>7.2</strong> The Consultant does not guarantee specific business results, cost savings, or return on investment from implementation of recommendations. The Client acknowledges that recommendations are based on information provided and circumstances as they exist at the time of engagement.
          </p>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">8. Intellectual Property</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>8.1</strong> The Consultant retains ownership of all background materials, methods and tools used in the delivery. The Client receives a licence to use the Deliverables for their internal business purposes.
          </p>
          <p>
            <strong>8.2</strong> Any bespoke materials created specifically for the Client will belong to the Client once payment is complete. This includes documentation and reports, process maps and frameworks, system configurations and implementations, and training materials developed for the Client.
          </p>
          <p>
            <strong>8.3</strong> The Consultant retains the right to use general methodologies, frameworks, and knowledge gained, but not Client-specific confidential information or proprietary materials. The Consultant may use knowledge and experience gained from the engagement for other clients, provided such use does not disclose Client Confidential Information.
          </p>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">9. Confidentiality</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>9.1</strong> Each party will keep all confidential information safe and will only use it for the purpose of this Agreement. Confidentiality continues after the Agreement ends.
          </p>
          <p>
            <strong>9.2</strong> Confidential information will not be disclosed to third parties without the Client's written consent, except where required by law or professional regulatory requirements.
          </p>
          <p>
            <strong>9.3</strong> The Consultant may reference the engagement in general terms for marketing purposes only with the Client's prior written consent.
          </p>
        </div>
      </section>

      {/* Termination */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">10. Termination</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>10.1</strong> Either party may terminate this engagement by providing 90 days' written notice. The Client will pay for all work completed up to the termination date.
          </p>
          <p>
            <strong>10.2</strong> Either party may terminate immediately if the other party commits a serious breach that is not corrected within 30 days of written notice.
          </p>
          <p>
            <strong>10.3</strong> Upon termination, the Consultant will provide a handover of work in progress and Deliverables. Confidentiality obligations will continue as specified in Section 9. Intellectual property rights will be transferred as specified in Section 8 upon full payment.
          </p>
        </div>
      </section>

      {/* Liability & Indemnity */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">11. Liability & Indemnity</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>11.1</strong> The Consultant is not liable for indirect or consequential loss. The Consultant's total liability for any claim arising from this Agreement will not exceed the total fees paid by the Client in the 12 months preceding the claim, or the Consultant's professional indemnity insurance coverage, whichever is lower.
          </p>
          <p>
            <strong>11.2</strong> Nothing in this Agreement limits liability for fraud or anything else that cannot be excluded by law.
          </p>
          <p>
            <strong>11.3</strong> The Client agrees to indemnify the Consultant against any claims arising from the Client's use of Deliverables or recommendations, where such use is outside the scope of the Consultant's advice or contrary to the Consultant's recommendations.
          </p>
        </div>
      </section>

      {/* Status & Relationship */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">12. Status & Relationship</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>12.1</strong> The Consultant is an independent contractor. Nothing in this Agreement creates an employment relationship, partnership or joint venture.
          </p>
          <p>
            <strong>12.2</strong> The Consultant is responsible for their own Tax, National Insurance, and other statutory obligations.
          </p>
          <p>
            <strong>12.3</strong> The Consultant has the right to determine how the services are performed, subject to meeting agreed deliverables and quality standards. The Consultant may engage subcontractors or associates with the Client's prior written consent.
          </p>
        </div>
      </section>

      {/* Data Protection */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">14. Data Protection</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>14.1</strong> Both parties will comply with all applicable data protection legislation, including the UK GDPR and Data Protection Act 2018. The Consultant will process personal data only as necessary for the performance of services and in accordance with the Client's instructions.
          </p>
          <p>
            <strong>14.2</strong> Where the Consultant acts as a data processor, appropriate data processing agreements will be put in place. The Consultant will implement appropriate technical and organisational measures to protect personal data.
          </p>
        </div>
      </section>

      {/* Force Majeure */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">15. Force Majeure</h3>
        <div className="space-y-1 text-gray-300">
          <p>
          <strong>15.1</strong> Neither party will be liable for delays caused by events outside their reasonable control, including but not limited to acts of nature, war, terrorism, and government restrictions. The affected party will notify the other and take reasonable steps to minimise impact.
          </p>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">16. Dispute Resolution</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>16.1</strong> In the event of any dispute arising from this engagement, the parties will first attempt to resolve the matter through good faith negotiation. If resolution cannot be achieved within 30 days, the parties may agree to mediation.
          </p>
          <p>
            <strong>16.2</strong> These terms are governed by English law and subject to the exclusive jurisdiction of the English courts.
          </p>
        </div>
      </section>

      {/* General Terms */}
      <section className="mb-8">
        <h3 className="content-title text-lg mb-3">17. General Terms</h3>
        <div className="space-y-1 text-gray-300">
          <p>
            <strong>17.1</strong> These terms may only be varied by written agreement signed by both parties.
          </p>
          <p>
            <strong>17.2</strong> If any provision is found to be unenforceable, the remaining provisions will continue in effect.
          </p>
          <p>
            <strong>17.3</strong> These terms and the proposal form the entire agreement between the parties.
          </p>
          <p>
            <strong>17.4</strong> No waiver of any term will be effective unless in writing.
          </p>
          <p>
            <strong>17.5</strong> Neither party may assign these terms without the other's written consent, except to a successor in a merger or acquisition.
          </p>
          <p>
            <strong>17.6</strong> All notices must be in writing.
          </p>
        </div>
      </section>
    </div>
  );
}
