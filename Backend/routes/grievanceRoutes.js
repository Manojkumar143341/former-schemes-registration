const express = require("express");
const { submitGrievance, getAllGrievances } = require("../controllers/grievanceController");

const router = express.Router();

router.post("/", submitGrievance);
router.get("/", getAllGrievances);

module.exports = router;
