import { useEffect, useState } from "react";
import AnalyzerForm from "./components/AnalyzerForm";
import ResultsCard from "./components/ResultsCard";
import ReportHistory from "./components/ReportHistory";
import { getReports } from "./services/api";

function App() {
  const [result, setResult] = useState(null);
  const [reports, setReports] = useState([]);

  const refreshReports = async () => {
    const data = await getReports();
    setReports(data);
  };

  useEffect(() => {
    refreshReports();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-800 via-slate-900 to-Navy-600 p-4 md:p-8">
      <section className="max-w-5xl mx-auto">
        <div className="text-center py-8">
        

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Skill Gap Analyzer
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto">
            Compare your resume with a job description, find missing skills,
            and get project suggestions to improve your profile.
          </p>
        </div>

        <AnalyzerForm setResult={setResult} refreshReports={refreshReports} />

        <ResultsCard result={result} />

        <ReportHistory
          reports={reports}
          refreshReports={refreshReports}
          setResult={setResult}
        />
      </section>
    </main>
  );
}

export default App;
