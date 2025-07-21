const PlannedTrip = require("../models/PlannedTrip");

exports.submitPlannedTrip = async (req, res) => {
  try {
    const data = req.body;
    const trip = new PlannedTrip(data);
    await trip.save();
    res.status(201).json({ message: "Trip planned successfully!", trip });
  } catch (err) {
    console.error("Error planning trip:", err);
    res.status(500).json({ message: "Failed to plan trip" });
  }
};
