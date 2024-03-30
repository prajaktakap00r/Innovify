const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["Interview", "Rejected", "Pending"],
      default: "Pending",
    },
    jobType: {
      type: String,
      enum: ["Internship", "Part-Time", "Full-Time"],
      default: "Full-Time",
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
