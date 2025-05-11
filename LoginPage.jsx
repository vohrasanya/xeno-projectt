// src/pages/Login.jsx
import React from "react";
import "./LoginPage.css"; // your CSS file

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome to Xeno Mini CRM</h1>
        <p>Your CRM for customer segmentation and smart campaigns.</p>
        <button className="google-login-btn" onClick={handleGoogleLogin}>
          <img
            className="google-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
