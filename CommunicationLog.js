const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  campaignId: mongoose.Types.ObjectId,
  customerId: String,
  customerName: String,
  message: String,
  status: { type: String, default: 'PENDING' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CommunicationLog', logSchema);
