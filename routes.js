const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

const aiRoutes = require('./routes/ai');
app.use('/api/ai', aiRoutes);

router.post("/suggestions", async (req, res) => {
  const { objective } = req.body;

  try {
    const prompt = `Generate 3 short, engaging marketing messages for: "${objective}"`;
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    const suggestions = completion.data.choices[0].text
      .split("\n")
      .filter((line) => line.trim() !== "");

    res.json({ suggestions });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: "Failed to generate suggestions" });
  }
});

module.exports = router;
