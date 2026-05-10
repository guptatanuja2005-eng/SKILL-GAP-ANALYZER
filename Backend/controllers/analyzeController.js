const Report = require("../models/Report");
const analyzeSkills = require("../utils/analyzer");

const analyzeResume = async (req, res) => {
  try {
    const { resumeText, jobText } = req.body;

    if (!resumeText || !jobText) {
      return res.status(400).json({
        message: "Resume and job description are required",
      });
    }

    const result = analyzeSkills(resumeText, jobText);

    const report = await Report.create({
      resumeText,
      jobText,
      ...result,
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({
      message: "Server error while analyzing resume",
    });
  }
};

const getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({
      message: "Server error while fetching reports",
    });
  }
};

const getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        message: "Report not found",
      });
    }

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({
      message: "Server error while fetching report",
    });
  }
};

const deleteReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        message: "Report not found",
      });
    }

    await Report.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Report deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error while deleting report",
    });
  }
};

module.exports = {
  analyzeResume,
  getReports,
  getReportById,
  deleteReport,
};
