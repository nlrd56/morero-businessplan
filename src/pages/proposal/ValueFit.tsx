export const title = "Value Fit";
export const lastUpdated = new Date().toLocaleDateString();

interface Question {
  text: string;
  answer?: string;
  comment?: string;
}

interface ValueSection {
  name: string;
  description: string;
  questions: Question[];
}

const valueSections: ValueSection[] = [
  {
    name: "Transparency",
    description: "One truth. structured data. clear communication.",
    questions: [
      { text: "Does their verifiable public information match what they've told us directly?", answer: "Yes", comment: "Public information matched what was disclosed. Financial history matches but latest year not filed yet ⚠️" },
      { text: "Is their information consistent and without contradictions?", answer: "Yes", comment: "No unexpected findings or contradictions." },
      { text: "Is the company's direction clear based on what they said and what we found?", answer: "Yes", comment: "Clear aspirations provided." },
      { text: "Is their organisational culture and structure well-aligned for growth?", answer: "No", comment: "Family business dynamics acknowledged, overstretched workload with a need for diversity." },
      { text: "Are they honest about weaknesses, challenges, and risks?", answer: "Yes", comment: "Transparent about finances, workload and governance challenges." },
    ],
  },
  {
    name: "Simplicity",
    description: "Clear goals. simple frameworks. defined success.",
    questions: [
      { text: "Have they presented clear, measurable goals for the business?", answer: "Yes", comment: "Goals are well defined and align with Morero's capabilities" },
      { text: "Is their business model and core operations easy to understand from the outside?", answer: "Yes", comment: "Specialist marine contracting is clear" },
      { text: "Is there a single point of decision-making authority we can work with?", answer: "Yes", comment: "Point of contact is clear and responsive. We can work with the directors directly." },
      { text: "Is communication clear and consistent during early engagement?", answer: "Yes", comment: "Communication is clear and consistent" },
      { text: "Do they have documented and repeatable processes and systems?", answer: "No", comment: "Reliance on traditional methods, processes are not fully documented" },
    ],
  },
  {
    name: "Resilience",
    description: "Honest risk. strong controls. stable governance.",
    questions: [
      { text: "Do public filings show financial and long-term operational stability?", answer: "No", comment: "Financial challenges evident, management of finances explained verbally but not in public filings ⚠️" },
      { text: "Have they demonstrated the discipline or history to survive operational peaks and troughs?", answer: "Yes", comment: "Strong regulatory compliance and safety management. Proven history of working through economic downturns." },
      { text: "Have they successfully implemented significant operational changes before?", answer: "Yes", comment: "Verbal explanation of structural changes during company merger." },
      { text: "Do they truly acknowledge that digital transformation is disruptive?", answer: "Yes", comment: "Expressed understanding of the effort required" },
      { text: "Do they maintain long-term relationships (clients, suppliers, staff)?", answer: "Yes", comment: "Evidence of repeat clients and consistent high quality delivery" },
    ],
  },
  {
    name: "Growth",
    description: "Knowledge retained. lessons learned. continuous improvement.",
    questions: [
      { text: "Did they express a clear ambition to improve long-term?", answer: "Yes", comment: "Clear Tier progression aspiration, financial, staff growth and governance improvements expressed" },
      { text: "Are they demonstrably open and willing to changing fundamental operating procedures?", answer: "Yes", comment: "Expressed openness to digital transformation as a tool to achieve aspirations" },
      { text: "Is there a culture of reinvesting profits or time back into internal capability and training over time?", answer: "Yes", comment: "Verbal explanation of plant investment and warehouse expansion planned, maintenance of certifications" },
      { text: "Does their digital presence demonstrate digital construction project delivery capabilities?", answer: "No", comment: "Digital presence is for marketing, internal systems are traditional. Limited evidence of digital construction project delivery methods." },
      { text: "Do leadership behaviours suggest they value learning?", answer: "Yes", comment: "Expressed desire to focus on strategic growth" },
    ],
  },
];

export default function ValueFit() {
  const calculateValueScore = (section: ValueSection): number => {
    return section.questions.reduce((score, question) => {
      const answer = question.answer?.toLowerCase().trim();
      // All questions are now positive: "Yes" = 5 points, "No" = 0 points
      return score + (answer === "yes" ? 5 : 0);
    }, 0);
  };

  const calculateTotalScore = (): number => {
    return valueSections.reduce((total, section) => total + calculateValueScore(section), 0);
  };

  const getFitCategory = (score: number): string => {
    if (score >= 80) return "Strong Alignment";
    if (score >= 60) return "Acceptable Alignment (Pilot recommended)";
    if (score >= 40) return "Weak Alignment (Proceed with caution)";
    return "Poor Fit (Avoid engagement)";
  };

  const totalScore = calculateTotalScore();
  const fitCategory = getFitCategory(totalScore);

  const generateSummary = (): string => {
    const sectionScores = valueSections.map(section => ({
      name: section.name,
      score: calculateValueScore(section),
      maxScore: 25
    }));

    const weakSections = sectionScores.filter(s => s.score < 15);

    let summary = `The company demonstrates ${totalScore >= 60 ? 'strong' : totalScore >= 40 ? 'moderate' : 'limited'} alignment with Morero's core values. `;
    
    if (weakSections.length > 0) {
      summary += `Areas requiring attention include ${weakSections.map(s => s.name.toLowerCase()).join(' and ')}. `;
    }
    
    summary += `Overall, this ${totalScore >= 80 ? 'represents an excellent fit' : totalScore >= 60 ? 'indicates a viable engagement opportunity' : totalScore >= 40 ? 'suggests proceeding with caution' : 'raises significant concerns about fit'}.`;
    
    return summary;
  };

  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <h2 className="content-title">Value Fit</h2>
      <p className="mb-6">
        Assessment of whether this company is the right fit for Morero's transformation approach.
        Evaluation against our 4 core values: Transparency, Simplicity, Resilience, and Growth.
        Each question is worth 5 points (Yes = 5, No = 0). Total score out of 100.
      </p>

      <div className="space-y-8">
        {valueSections.map((section, sectionIndex) => {
          const sectionScore = calculateValueScore(section);
          return (
            <section key={section.name}>
              <div className="mb-4">
                <h3 className="content-title text-lg mb-1">
                  {sectionIndex + 1}. {section.name}
                </h3>
                <p className="text-gray-500 italic mb-3">"{section.description}"</p>
                <p className="text-gray-300 text-sm">
                  Score: <strong>{sectionScore}</strong> / 25 points
                </p>
              </div>

              <div className="mt-4 border border-white/20 rounded-md overflow-hidden">
                {/* Header */}
                <div className="flex bg-[#204E4A]">
                  <div className="flex-[0_0_8%] border-r border-b border-white/20 px-4 py-2 text-center">VF #</div>
                  <div className="flex-1 border-r border-b border-white/20 px-4 py-2">Question</div>
                  <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2 text-center">Answer</div>
                  <div className="flex-1 border-b border-white/20 px-4 py-2">Comments</div>
                </div>

                {/* Rows */}
                {section.questions.map((question, qIndex) => (
                  <div key={qIndex} className={`flex ${qIndex % 2 === 0 ? '' : 'bg-[#0d0d0d]'}`}>
                    <div className="flex-[0_0_8%] border-r border-b border-white/20 px-4 py-2 text-center font-medium flex items-center justify-center">
                      VF{sectionIndex + 1}.{qIndex + 1}
                    </div>
                    <div className="flex-1 border-r border-b border-white/20 px-4 py-2 break-words whitespace-normal flex items-center">
                      {question.text}
                    </div>
                    <div className="flex-[0_0_15%] border-r border-b border-white/20 px-4 py-2 text-center flex items-center justify-center min-h-[3rem]">
                      {question.answer || ""}
                    </div>
                    <div className="flex-1 border-b border-white/20 px-4 py-2 break-words whitespace-normal min-h-[3rem]">
                      {question.comment || ""}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-8 p-6 border border-white/20 rounded-md bg-gray-900/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h3 className="content-title text-lg">Total Score</h3>
            <span className="text-gray-300">
              <strong>Fit Category:</strong> {fitCategory}
            </span>
          </div>
          <div className="text-2xl font-bold text-orange-400">
            {totalScore} / 100
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-gray-300"><strong>Summary:</strong> {generateSummary()}</p>
        </div>
      </div>
    </div>
  );
}

