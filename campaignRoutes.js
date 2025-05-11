// src/routes/campaignRoutes.js
const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign"); // Ensure path is correct for your model

// Example route for retrieving campaigns
router.get("/campaigns", async (req, res) => {
  try {
    const campaigns = await Campaign.find().sort({ createdAt: -1 }); // Assuming createdAt is a field in your model
    res.status(200).json(campaigns);
  } catch (err) {
    console.error("Error fetching campaigns:", err);
    res.status(500).json({ error: "Error fetching campaign history" });
  }
});

module.exports = router;
