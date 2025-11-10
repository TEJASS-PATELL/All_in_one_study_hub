import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { useAuthStore } from "../Store/useAuthStore";
import toast from "react-hot-toast";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const navigate = useNavigate();

  const { signup } = useAuthStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isHuman: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword, isHuman } = form;
    if (!name.trim()) return toast.error("Full Name is required");
    if (!email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid email format");
    if (!password) return toast.error("Password is required");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");
    if (password !== confirmPassword) return toast.error("Passwords do not match");
    if (!isHuman) return toast.error("Please confirm you are not a robot");
    return true;
  };

  const handleVerifyEmail = () => {

  }

  const handleVerifyOtp = () => {

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSigningUp(true);
      await signup(
        {
          name: form.name.trim(),
          email: form.email.trim(),
          password: form.password,
        },
        navigate
      );
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="loginnn">
      <div className="signup-container">
        <main>
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Create an Account</h2>
            <p className="subtitle">It only takes a minute to get started</p>

            <div className="input-group">
              <label>Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="verify-btn"
                  onClick={handleVerifyEmail}
                >
                  Verify
                </button>
              </div>
            </div>

            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </button>
              </div>
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
            <label>Enter OTP</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="otp"
                placeholder="Enter 6-digit code"
                value={form.otp}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="verify-btn"
                onClick={handleVerifyOtp}
              >
                Verify
              </button>
            </div>
          </div>

            <button
              type="submit"
              className={`submit-btn ${isSigningUp ? "disabled" : ""}`}
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="loader animate-spin mr-2" size={18} />
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>

            <p className="login-redirect">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </main>
        <footer>
          <p>&copy; 2025 All rights reserved.</p>
        </footer>
      </div>
    </div>

  );
};

export default SignUpPage;
