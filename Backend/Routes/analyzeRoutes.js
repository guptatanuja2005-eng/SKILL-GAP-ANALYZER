const express = require("express");
const {
  analyzeResume,
  getReports,
  getReportById,
  deleteReport,
} = require("../controllers/analyzeController");

const router = express.Router();

router.post("/analyze", analyzeResume);
router.get("/reports", getReports);
router.get("/reports/:id", getReportById);
router.delete("/reports/:id", deleteReport);

module.exports = router;
