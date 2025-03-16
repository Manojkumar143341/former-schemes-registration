const express = require("express");
const { getAllSchemes, createScheme } = require("../controllers/schemeController");

const router = express.Router();

// Get all schemes (GET)
router.get("/", getAllSchemes);

// Create a new scheme (POST)
router.post("/", createScheme);

module.exports = router;
