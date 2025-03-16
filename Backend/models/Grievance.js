const mongoose = require("mongoose");

const GrievanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhaar: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, default: "Pending" }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Grievance", GrievanceSchema);
