const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');
const CommunicationLog = require('../models/CommunicationLog');
const axios = require('axios');

// Simulated customer database
const customers = [
  { id: 'u1', name: 'Mohit', spend: 15000, visits: 2, inactiveDays: 100 },
  { id: 'u2', name: 'Sara', spend: 8000, visits: 5, inactiveDays: 20 },
  { id: 'u3', name: 'Ravi', spend: 20000, visits: 1, inactiveDays: 120 },
  { id: 'u4', name: 'Anjali', spend: 5000, visits: 4, inactiveDays: 45 },
  { id: 'u5', name: 'Vikram', spend: 12000, visits: 2, inactiveDays: 91 }
];

// Simple rule evaluator
const evaluateConditions = (user, conditions, logic) => {
  const results = conditions.map(cond => {
    const val = user[cond.field];
    const cmp = cond.operator;
    const ref = Number(cond.value);
    if (cmp === '>') return val > ref;
    if (cmp === '<') return val < ref;
    if (cmp === '>=') return val >= ref;
    if (cmp === '<=') return val <= ref;
    if (cmp === '=') return val === ref;
    return false;
  });
  return logic === 'AND' ? results.every(Boolean) : results.some(Boolean);
};

// Preview audience size
router.post('/preview-segment', (req, res) => {
  const { conditions, logic } = req.body;
  const matched = customers.filter(user => evaluateConditions(user, conditions, logic));
  res.json({ size: matched.length });
});

// Create campaign and dispatch messages
router.post('/create-campaign', async (req, res) => {
  const { conditions, logic } = req.body;
  const matched = customers.filter(user => evaluateConditions(user, conditions, logic));

  const campaign = await Campaign.create({
    conditions,
    logic,
    audienceSize: matched.length
  });

  await Promise.all(
    matched.map(async (user) => {
      const message = `Hi ${user.name}, here’s 10% off on your next order!`;
      const log = await CommunicationLog.create({
        campaignId: campaign._id,
        customerId: user.id,
        customerName: user.name,
        message
      });

      await axios.post('http://localhost:5000/vendor/send', {
        message,
        customerId: user.id,
        logId: log._id
      });
    })
  );

  res.json({ message: 'Campaign created and dispatched.' });
});

module.exports = router;
