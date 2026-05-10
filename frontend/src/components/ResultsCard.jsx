const ResultsCard = ({ result }) => {
  if (!result) {
    return (
      <div className="mt-6 bg-white/80 rounded-2xl p-6 text-center text-gray-600">
        Paste your resume and job description, then click Analyze Skills.
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>

      <div className="mb-6">
        <p className="text-gray-600 mb-2">Match Score</p>
        <h3 className="text-5xl font-bold text-teal-600 mb-3">
          {result.matchScore}%
        </h3>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-teal-500 h-4 rounded-full"
            style={{ width: `${result.matchScore}%` }}
          ></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold mb-3 text-green-700">Matched Skills</h3>

          <div className="flex flex-wrap gap-2">
            {result.matchedSkills.length > 0 ? (
              result.matchedSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No matched skills found.</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-red-700">Missing Skills</h3>

          <div className="flex flex-wrap gap-2">
            {result.missingSkills.length > 0 ? (
              result.missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No missing skills. Great match!</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-bold mb-3">Suggestions</h3>

        {result.suggestions.length > 0 ? (
          <ul className="space-y-2">
            {result.suggestions.map((suggestion, index) => (
              <li key={index} className="bg-slate-100 p-3 rounded-xl">
                {suggestion}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No suggestions needed.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsCard;
