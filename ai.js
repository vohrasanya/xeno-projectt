const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: completion.data.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI error:", err.message);
    res.status(500).json({ reply: "AI service error." });
  }
});

module.exports = router;
