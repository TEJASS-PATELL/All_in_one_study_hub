import React, { useEffect, useState } from 'react'
import { replace, useNavigate } from 'react-router';
import "../style/ForgotPassword.css";
import { useAuthStore } from '../stores/useAuth';
import toast from "react-hot-toast";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { verifyOtp, isLoading } = useAuthStore();
  const email = localStorage.getItem("verifyEmail");

  useEffect(() => {
    if (!email) {
      toast.error("Please sign up first.");
      navigate("/signup", { replace: true });
    }
  }, [email, navigate]);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (otp.length === 6) {
      const success = await verifyOtp(otp, email);
      if (success) {
        localStorage.removeItem("verifyEmail");
        navigate("/", { replace: true });
      }
      else {
        navigate("/signup/verify-email");
      }
    }
    else {
      toast.error("Enter a 6-digit OTP");
    }
  }

  return (
    <div className="auth-container">
      <div className="forgot-form">
        <h1>Enter OTP</h1>
        <p className="forgot-desc">
          We’ve sent a 6-digit code to your email. Please enter the code below.
        </p>

        <form className="forgot-div" onSubmit={handleOtpSubmit}>
          <input
            id="otp"
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 6-digit code"
            required
          />
          <button
            type="submit"
            className="forgot-btn"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail