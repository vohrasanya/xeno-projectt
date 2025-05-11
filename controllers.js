// controllers/campaignController.js
const Campaign = require('../models/Campaign');

// Get all campaigns (campaign history)
exports.getCampaignHistory = async (req, res) => {
  try {
    const campaigns = await Campaign.find().sort({ createdAt: -1 });
    res.status(200).json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ error: 'Error fetching campaign history' });
  }
};

// Create a new campaign
exports.createCampaign = async (req, res) => {
  const { conditions, logic } = req.body;

  try {
    // Logic to calculate preview size
    const previewSize = 1000; // Example, modify as per actual calculation logic

    const newCampaign = new Campaign({
      name: "New Campaign",
      conditions,
      logic,
      previewSize,
      deliveryStats: {
        sent: 0,
        failed: 0,
        audienceSize: previewSize,
      },
    });

    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(500).json({ error: 'Error creating campaign' });
  }
};

// Preview audience for campaign
exports.previewAudience = (req, res) => {
  const { conditions, logic } = req.body;

  // Logic for previewing audience size
  const previewSize = 1000; // Example, modify based on conditions and logic
  res.status(200).json({ size: previewSize });
};
