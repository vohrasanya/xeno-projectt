const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  conditions: Array,
  logic: String,
  createdAt: { type: Date, default: Date.now },
  sent: { type: Number, default: 0 },
  failed: { type: Number, default: 0 },
  audienceSize: { type: Number, default: 0 }
});

module.exports = mongoose.model('Campaign', campaignSchema);
