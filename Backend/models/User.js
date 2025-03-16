const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhaar: { type: String, required: true, unique: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  income: { type: String, required: true },
  occupation: { type: String, required: true },
  disability: { type: String },
  state: { type: String, required: true },
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
