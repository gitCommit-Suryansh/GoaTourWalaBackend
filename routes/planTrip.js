const express = require("express");
const router = express.Router();
const planTripController = require("../controllers/planTripController");

router.post("/submit", planTripController.submitPlannedTrip);

module.exports = router;
