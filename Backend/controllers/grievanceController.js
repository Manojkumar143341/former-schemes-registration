
const Grievance = require("../models/Grievance");

exports.submitGrievance = async (req, res) => {
  try {
    const { name, aadhaar, issue } = req.body;

    if (!name || !aadhaar || !issue) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const grievance = new Grievance({ name, aadhaar, issue });
    await grievance.save();

    res.status(201).json({ message: "Grievance submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getAllGrievances = async (req, res) => {
  try {
    const grievances = await Grievance.find();
    res.json(grievances);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
