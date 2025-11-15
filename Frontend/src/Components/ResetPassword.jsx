import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuthStore } from "../stores/useAuth";
import "../style/ForgotPassword.css";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { resetPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const result = await resetPassword(token, password);
    if (result) {
      navigate("/login");
    } else {
      toast.error("Invalid or expired link");
    }
  };

  return (
    <div className="auth-container">
      <div className="forgot-form">
        <h1>Reset Password</h1>
        <p className="forgot-desc">Enter your new password below.</p>

        <div className="forgot-div">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="forgot-btn" onClick={handleSubmit}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
