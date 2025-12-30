import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useAuthStore } from "../Store/useAuthStore"

export default function EnterEmail() {
  const [email, setemail] = useState("");
  const { sendPasswordResetLink, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid email format");

    const result = await sendPasswordResetLink(email);
    if (result) {
      navigate("/login");
    }
    else navigate("/signup"); return false;
  };

  return (
    <div className="auth-container">
      <div className="forgot-form">
        <h1>Forgot Password</h1>
        <p>
          Enter your email address below, and we'll send you a secure <b>link</b> to <b>reset password</b>.
        </p>
        <div className="forgot-div">
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button onClick={handleSubmit} type="submit" className="forgot-btn">
            {isLoading ? (
              <>
                <Loader2 className="loader animate-spin mr-2" size={18} />
                Sending Link...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>

          <p className="spam-notice">
            <b>Note:</b> If you don't see the email in your inbox, please check your <b>Spam or Junk folder</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
