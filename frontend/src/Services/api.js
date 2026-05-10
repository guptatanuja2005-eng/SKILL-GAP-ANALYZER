const API_URL = "http://localhost:5050/api";


export const analyzeResume = async (resumeText, jobText) => {
  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resumeText, jobText }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze resume");
  }

  return response.json();
};

export const getReports = async () => {
  const response = await fetch(`${API_URL}/reports`);

  if (!response.ok) {
    throw new Error("Failed to fetch reports");
  }

  return response.json();
};

export const deleteReport = async (id) => {
  const response = await fetch(`${API_URL}/reports/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete report");
  }

  return response.json();
};
