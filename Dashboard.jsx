import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";
import Chatbot from "../components/Chatbot";


export default function Dashboard() {
  const location = useLocation();
  const videoRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const loginSuccess = params.get('loginSuccess');
    if (loginSuccess === 'true') {
      alert("Login successful!");
    }

    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-left">
          <h2>Welcome to Xeno Mini CRM</h2>
          <div className="dashboard-links">
            <Link to="/campaigns/new" className="cardd">➕ Create New Campaign</Link>
            <Link to="/campaigns/history" className="cardd">📜 View Campaign History</Link>
          </div>
        </div>
        <div className="dashboard-right">
        <video 
          width="100%" 
          controls 
          autoPlay 
          loop 
          muted 
          className="dashboard-video" 
          playsInline
        >
          <source src="/crm_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        
        
      </div>
      <Chatbot />

    </>
  );
}
