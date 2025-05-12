# 📊 Mini CRM Platform - Xeno SDE Internship Assignment 2025

## 🚀 Project Overview

This is a full-stack CRM platform that allows customer segmentation, campaign creation, delivery, and AI-powered insights. Built for the Xeno SDE Internship Assignment 2025.

## ✨ Features Implemented

### ✅ 1. Data Ingestion APIs

* REST APIs to ingest customer and order data.
* Validation and pub-sub using Redis Streams for async data persistence.
* API demo via Swagger UI.

### ✅ 2. Campaign Creation UI

* React-based dynamic rule builder (AND/OR logic).
* Audience preview before saving.
* Campaign history dashboard showing:

  * Sent, failed stats
  * Sorted by latest

### ✅ 3. Campaign Delivery & Logging

* Each saved segment initiates a campaign.
* Dummy vendor API simulates 90% success, 10% failure.
* Logs all messages to `communication_log`.
* Delivery Receipt API updates statuses in batches.

### ✅ 4. Authentication

* Google OAuth 2.0 integration.
* Secured routes for campaign and audience management.

### ✅ 5. AI Integration

* **Natural Language to Segment Rules**: Converts prompts like "Users inactive for 6 months who spent over 5K" into logic.
* **Message Suggestions**: Generates 2–3 campaign message variants based on goal.
* **Campaign Summary Generator**: Creates human-readable delivery summaries.

## 🛠 Tech Stack

* **Frontend**: React.js, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **AI**: OpenAI API (GPT-4)
* **Auth**: Google OAuth via Passport.js
* **Pub/Sub**: Redis Streams

## 🧪 Local Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/xeno-crm-platform.git
```

2. Navigate and install dependencies:

```bash
cd backend && npm install
cd ../frontend && npm install
```

3. Set up `.env` files for backend/frontend:

```env
# backend/.env
MONGO_URI=your_mongo_uri
REDIS_URL=redis://localhost:6379
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx
JWT_SECRET=xxx
OPENAI_API_KEY=xxx
```

4. Run services:

```bash
# backend
npm run dev
# frontend
npm start
```

## 📐 Architecture Diagram

```
User → React UI → Express APIs → Redis Pub/Sub → MongoDB
     ↘ OpenAI API (for AI Features)
     ↘ Google OAuth
Vendor API ↔ Delivery Receipt API → Batch Updater
```



## 🚧 Known Limitations

* Audience size estimation is mocked.
* Batch job for delivery status uses a fixed interval.
* AI output might vary depending on prompt tuning.

## 🤝 Contributing

PRs are welcome for improvements, especially in UX and AI features.

---

Made with ❤️ for Xeno Internship 2025.
