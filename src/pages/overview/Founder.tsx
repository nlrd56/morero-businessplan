import nathanImage from "@/assets/Nathan.jpeg";

export const title = "Founder";
export const lastUpdated = new Date().toLocaleDateString();

export default function Founder() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <img 
              src={nathanImage} 
              alt="Nathan Reid" 
              className="w-72 h-72 object-cover rounded-md border border-white/20 scale-x-[-1]"
            />
          </div>
          
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="content-title mb-6">Founder</h2>
        
              <div className="flex flex-wrap gap-4 mb-4 text-gray-300">
                <div>
                  <strong className="text-gray-200">Nathan Reid CEng MICE MCIOB MIET AssocRICS</strong>
                </div>
                <div>
                  <strong className="text-gray-200">LinkedIn:</strong>{" "}
                  <a 
                    href="https://www.linkedin.com/in/nl-rd/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 underline"
                  >
                    linkedin.com/in/nl-rd/
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                A multi-disciplinary Chartered professional, that specialises in leveraging technology to deliver large, complex construction projects. 
                <br /><br />
                Experienced in full RIBA lifecycle, using a forward-thinking approach to empower teams, overcome challenges, and consistently deliver projects that exceed expectations in safety, quality, sustainability, profitability and social benefits. Regular speaker at engineering events, raising awareness of STEM and building connections with like-minded professionals. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

