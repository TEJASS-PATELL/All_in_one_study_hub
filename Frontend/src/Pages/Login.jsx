import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useAuthStore } from "../Store/useAuthStore";
import "./LoginPage.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email: formData.email, password: formData.password }, navigate);
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://all-in-one-study-hub.onrender.com/api/auth/google";
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <main className="login-form-container">
          <div className="glassmorphism-form">
            <div className="text-center">
              <img className="images" src="welcome-back.png" alt="Chat Icon" />
              <h1>Welcome Back!</h1>
              <p>Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <label className="labell">Email</label>
              <div className="inputt-container">
                <input
                  className="input-login"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <label className="labell">Password</label>
              <div className="inputt-container">
                <input
                  className="input-login"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </button>
              </div>

              <button type="submit" className="submit-btnn" disabled={isLoading}>
                {isLoading ? (
                  <div className="loader-container">
                    <div className="spinner"></div>
                    <span>Logging in...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>

              <Link to="/forgot-password" className='forgot-password'>Forgot password?</Link>
            </form>

            <div className="or-divider">
              <span>OR</span>
            </div>
            <button
              onClick={handleGoogleLogin}
              className="google-login-btn">
              <FcGoogle size={20} style={{ marginRight: "8px" }} />
              Continue with Google
            </button>

            <div className="text-center">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="signup-link">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </main>

        <footer className="login-footer">
          <p>&copy; 2025. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
