import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/useAuthStore";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import "./ForgotPassword.css";
import { useEffect } from "react";

export default function VerifyAccount() {
  const navigate = useNavigate();
  const { verifyOtp, isLoading } = useAuthStore();

  const [otp, setOtp] = useState("");

  const email = localStorage.getItem("verifyEmail");

  useEffect(() => {
    if (!email) {
      toast.error("No email found. Please signup again.");
      navigate("/signup");
    }
  }, []);

  const handleVerify = async () => {
    if (otp.length !== 6) return toast.error("Enter valid 6-digit OTP");

    const success = await verifyOtp(otp, email);

    if (success) {
      localStorage.removeItem("verifyEmail");
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <div className="forgot-form">
        <h1>Verify Your Email</h1>
        <p>Enter the OTP sent to <b>{email}</b></p>

        <div className="forgot-div">
          <input
            type="text"
            maxLength="6"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button disabled={isLoading} onClick={handleVerify} className="forgot-btn">
            {isLoading ? (
                <>
                  <Loader2 className="loader animate-spin mr-2" size={18} />
                  Verify Account...
                </>
              ) : (
                "Verify"
              )}
          </button>
        </div>
      </div>
    </div>
  );
}
