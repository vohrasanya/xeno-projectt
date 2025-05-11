/*const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
require("./auth/googleStrategy");

const authRoutes = require("./auth/authRoutes");

const app = express();

// Campaign route
const Campaign = require('./models/Campaign'); // Assuming you have a Campaign model

/*const aiRoutes = require("./routes/aiRoutes");
app.use("/api/ai", aiRoutes);//

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);

// New route for campaign history
app.get('/api/campaigns', async (req, res) => {
  try {
    // Retrieve all campaigns from the database, sorted by the most recent
    const campaigns = await Campaign.find().sort({ createdAt: -1 }); // Assuming 'createdAt' is a field in the Campaign model
    res.status(200).json(campaigns);
  } catch (err) {
    console.error("Error fetching campaigns:", err);
    res.status(500).json({ error: "Error fetching campaign history" });
  }
});

app.use('/api', require('./src/campaign'));
// In server.js
app.use('/api', require('./routes'));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});*/
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
require("./auth/googleStrategy");

const authRoutes = require("./auth/authRoutes");

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);

// Use campaign routes
app.use('/api', require('./routes/campaignRoutes')); // Fixed path

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
