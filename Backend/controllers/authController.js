const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register user
exports.register = async (req, res) => {
  try {
    const { name, aadhaar, dob, gender, maritalStatus, income, occupation, disability, state, password } = req.body;
    
    if (!name || !aadhaar || !dob || !gender || !maritalStatus || !income || !occupation || !state || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      aadhaar,
      dob,
      gender,
      maritalStatus,
      income,
      occupation,
      disability,
      state,
      password: hashedPassword
    });

    // Save user to DB
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { aadhaar, password } = req.body;
    
    const user = await User.findOne({ aadhaar });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
