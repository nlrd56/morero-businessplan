export const title = "About Morero";
export const lastUpdated = new Date().toLocaleDateString();

export default function AboutMorero() {
  return (
    <div className="font-be-vietnam-pro font-light text-sm text-gray-400">
      <div className="mb-8">
        <h2 className="content-title mb-6">Morero - Every change, captured!</h2>
            <p className="mb-4 text-gray-300">
              Morero is a digital construction services and software company that offers digital transformation support and project governance to construction companies, utilising advanced technology to improve efficiency and help meet their regulatory responsibilities.
            </p>
            <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
              <div>
                <strong className="text-gray-200">Website:</strong>{" "}
                <a 
                  href="https://www.morero.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  morero.io
                </a>
              </div>
              <div>
                <strong className="text-gray-200">LinkedIn:</strong>{" "}
                <a 
                  href="https://www.linkedin.com/company/morero-io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  linkedin.com/company/morero-io/
                </a>
              </div>
            </div>

            <h2 className="content-title my-6">Vision</h2>
            <p className="text-gray-300 mb-4">
              To build the most complete construction project history.
            </p>

            <h2 className="content-title my-6">Mission</h2>
            <p className="text-gray-300 mb-4">
              To capture every change in a construction project.
            </p>

        <h2 className="content-title my-6">Values</h2>
        <p className="text-gray-300 mb-4">
          Transparency, Simplicity, Resilience, Growth
        </p>
      </div>
    </div>
  );
}

