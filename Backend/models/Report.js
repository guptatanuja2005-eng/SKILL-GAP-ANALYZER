const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    resumeText: {
      type: String,
      required: true,
    },
    jobText: {
      type: String,
      required: true,
    },
    resumeSkills: [String],
    jobSkills: [String],
    matchedSkills: [String],
    missingSkills: [String],
    matchScore: Number,
    suggestions: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
