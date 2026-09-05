import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Lock, Sparkles, Unlock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useAuthStore } from "../../store/useAuthStore";
import "./SignUpLogin.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email: formData.email, password: formData.password });
    navigate("/");
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://all-in-one-study-hub.onrender.com/api/auth/google";
  };

  return (
    <div className="hub-page">
      <div className="hub-frame">
        <div className="hub-tab">
          <Sparkles size={14} strokeWidth={2.5} />
        </div>

        <h1>Welcome back</h1>
        <p className="hub-subtitle">Pick up where you left off, and keep things moving.</p>

        <form onSubmit={handleSubmit} className="hub-form">
          <div className="hub-field">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="john.doe@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="hub-field has-toggle">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              className="hub-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <Unlock size={17} /> : <Lock size={17} />}
            </button>
          </div>

          <div className="hub-row">
            <Link to="/forgot-password" className="hub-forgot">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="hub-submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : (
              <>
                Log in <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div className="hub-divider">
          <span>or</span>
        </div>

        <button onClick={handleGoogleLogin} className="hub-google">
          <FcGoogle size={18} />
          Continue with Google
        </button>

        <p className="hub-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;