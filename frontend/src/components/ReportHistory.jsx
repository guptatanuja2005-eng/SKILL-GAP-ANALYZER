import { deleteReport } from "../services/api";

const ReportHistory = ({ reports, refreshReports, setResult }) => {
  const handleDelete = async (id) => {
    await deleteReport(id);
    refreshReports();
  };

  return (
    <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Previous Reports</h2>

      {reports.length === 0 ? (
        <p className="text-gray-500">No reports saved yet.</p>
      ) : (
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report._id}
              className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
            >
              <div>
                <p className="font-semibold">
                  Match Score:{" "}
                  <span className="text-teal-600">{report.matchScore}%</span>
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(report.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setResult(report)}
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800"

                >
                  View
                </button>

                <button
                  onClick={() => handleDelete(report._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportHistory;
