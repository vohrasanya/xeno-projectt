import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginPage";
import CampaignBuilder from "./pages/CampaignBuilder";
import CampaignHistory from "./pages/CampaignHistory";
import CampaignDetail from "./pages/CampaignDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns/new" element={<CampaignBuilder />} />
        <Route path="/campaigns/history" element={<CampaignHistory />} />
        <Route path="/campaigns/:id" element={<CampaignDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
