import { useState } from "react";
import { analyzeResume } from "../services/api";

const AnalyzerForm = ({ setResult, refreshReports }) => {
  const [resumeText, setResumeText] = useState("");
  const [jobText, setJobText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeText.trim() || !jobText.trim()) {
      alert("Please enter both resume and job description.");
      return;
    }

    try {
      setLoading(true);

      const data = await analyzeResume(resumeText, jobText);
      setResult(data);

      if (refreshReports) {
        refreshReports();
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Check if backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Analyze Your Skills</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <textarea
          className="w-full h-56 p-4 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Paste your resume text here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />

        <textarea
          className="w-full h-56 p-4 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Paste job description here..."
          value={jobText}
          onChange={(e) => setJobText(e.target.value)}
        />
      </div>

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-5 w-full bg-blue-950 text-white py-3 rounded-xl font-semibold hover:bg-blue-950 disabled:bg-gray-400"
      >
        {loading ? "Analyzing..." : "Analyze Skills"}
      </button>
    </div>
  );
};

export default AnalyzerForm;
