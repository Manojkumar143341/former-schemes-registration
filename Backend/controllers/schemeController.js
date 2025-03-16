const Scheme = require("../models/Scheme");

// Get all schemes
exports.getAllSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    if (!schemes || schemes.length === 0) {
      return res.status(404).json({ message: "No schemes found" });
    }
    res.json(schemes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Create a new scheme
exports.createScheme = async (req, res) => {
  try {
    const { name, description, eligibility } = req.body;

    if (!name || !description || !eligibility) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const scheme = new Scheme({ name, description, eligibility });
    await scheme.save();

    res.status(201).json({ message: "Scheme added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
