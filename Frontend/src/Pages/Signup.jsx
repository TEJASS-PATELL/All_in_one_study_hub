import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { useAuthStore } from "../Store/useAuthStore";
import toast from "react-hot-toast";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { signup, isLoading } = useAuthStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword } = form;
    if (!name.trim()) return toast.error("Full Name is required");
    if (!email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid email format");
    if (!password) return toast.error("Password is required");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");
    if (password !== confirmPassword) return toast.error("Passwords do not match");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const result = await signup({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      console.log("Signup Response:", result);

      if (result?.success && result?.redirectToVerify) {
        localStorage.setItem("verifyEmail", form.email);
        toast.success(result.message);
        navigate("/verify-account");
      } else if (result?.success) {
        toast.success(result.message);
        navigate("/login");
      } else {
        toast.error(result.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="lumina-page">
      <div className="auth-shell">
        <div className="auth-form-panel">
          <div className="brand">
            <span className="brand-dot" />
            <span className="brand-name">StudyHub</span>
          </div>

          <h1>Create your account</h1>
          <p className="subtitle">Join Study Hub and start learning smarter.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="john.doe@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <div className="password-field">
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
                className="show-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="spin" size={16} />
                  Creating account...
                </>
              ) : (
                <>
                  Sign up <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="signup-redirect">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>

        <div className="auth-illustration-panel">
          <svg viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EAF4FF" />
                <stop offset="55%" stopColor="#F2F9E4" />
                <stop offset="100%" stopColor="#E9F5D6" />
              </linearGradient>
              <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6DC9F1" />
                <stop offset="100%" stopColor="#3B82C4" />
              </linearGradient>
            </defs>

            <rect width="500" height="700" fill="url(#bgGrad)" />

            <circle cx="60" cy="80" r="70" fill="#DCEEFF" opacity="0.6" />
            <circle cx="440" cy="130" r="55" fill="#E6F5D8" opacity="0.6" />

            <path d="M300 150 L306 162 L300 174 L294 162 Z" fill="#FFD873" />
            <path d="M120 190 L125 200 L120 210 L115 200 Z" fill="#FFD873" opacity="0.9" />
            <path d="M400 250 L404 258 L400 266 L396 258 Z" fill="#FFD873" opacity="0.8" />

            <ellipse cx="250" cy="460" rx="210" ry="190" fill="#FFFFFF" opacity="0.3" />

            <rect x="0" y="644" width="500" height="56" fill="#E3EFD0" />
            <ellipse cx="250" cy="648" rx="210" ry="16" fill="#000000" opacity="0.07" />

            <rect x="50" y="480" width="400" height="20" rx="6" fill="#D9A066" />
            <rect x="50" y="500" width="400" height="144" rx="14" fill="#B97C48" />
            <line x1="70" y1="560" x2="430" y2="560" stroke="#8B5A2B" strokeWidth="2" />
            <rect x="230" y="552" width="40" height="8" rx="4" fill="#8B5A2B" />

            <polygon points="90,445 130,445 122,480 98,480" fill="#B9682E" />
            <ellipse cx="110" cy="445" rx="20" ry="5" fill="#9C5A28" />
            <ellipse cx="90" cy="410" rx="10" ry="28" fill="#7CB342" transform="rotate(-20 90 410)" />
            <ellipse cx="110" cy="395" rx="11" ry="32" fill="#9ED66B" />
            <ellipse cx="130" cy="412" rx="10" ry="28" fill="#5B9A2E" transform="rotate(20 130 412)" />

            <rect x="150" y="362" width="160" height="100" rx="10" fill="#1F2A3D" />
            <rect x="158" y="370" width="144" height="84" rx="6" fill="url(#screenGrad)" />
            <rect x="170" y="384" width="70" height="8" rx="4" fill="#ffffff" opacity="0.9" />
            <rect x="170" y="400" width="100" height="8" rx="4" fill="#ffffff" opacity="0.6" />
            <rect x="170" y="416" width="60" height="8" rx="4" fill="#ffffff" opacity="0.6" />
            <rect x="170" y="432" width="90" height="8" rx="4" fill="#ffffff" opacity="0.5" />
            <rect x="140" y="462" width="180" height="18" rx="4" fill="#DDE3EA" />
            <rect x="140" y="462" width="180" height="4" fill="#C7CDD3" />

            <rect x="330" y="460" width="110" height="20" rx="4" fill="#E4574C" transform="rotate(-3 385 470)" />
            <rect x="338" y="442" width="92" height="18" rx="4" fill="#F2B33D" transform="rotate(2 384 451)" />
            <rect x="344" y="426" width="80" height="16" rx="4" fill="#4C8EE0" transform="rotate(-1 384 434)" />
            <rect x="359" y="366" width="50" height="50" fill="#2B3A55" transform="rotate(45 384 391)" />
            <ellipse cx="384" cy="422" rx="16" ry="9" fill="#374357" />
            <circle cx="384" cy="391" r="4" fill="#F2B33D" />
            <line x1="384" y1="391" x2="406" y2="415" stroke="#F2B33D" strokeWidth="2" />
            <circle cx="406" cy="419" r="5" fill="#F2B33D" />

            <rect x="230" y="450" width="36" height="30" rx="6" fill="#ffffff" />
            <ellipse cx="248" cy="450" rx="18" ry="5" fill="#6B4226" />
            <path d="M266,456 q14,4 14,14 q0,10 -14,10" stroke="#ffffff" strokeWidth="5" fill="none" />
            <path d="M240,440 q4,-10 0,-20 q-4,-10 0,-20" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.6" />
            <path d="M256,440 q4,-10 0,-20 q-4,-10 0,-20" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.5" />

            <g transform="rotate(15 300 478)">
              <rect x="270" y="474" width="56" height="7" rx="3.5" fill="#F2B33D" />
              <polygon points="326,474 336,477.5 326,481" fill="#EFCB86" />
              <rect x="266" y="474" width="6" height="7" fill="#4C4C4C" />
            </g>

            <line x1="220" y1="286" x2="220" y2="276" stroke="#F2B33D" strokeWidth="2" />
            <line x1="192" y1="320" x2="182" y2="320" stroke="#F2B33D" strokeWidth="2" />
            <line x1="248" y1="320" x2="258" y2="320" stroke="#F2B33D" strokeWidth="2" />
            <line x1="236" y1="304" x2="244" y2="296" stroke="#F2B33D" strokeWidth="2" />
            <line x1="204" y1="304" x2="196" y2="296" stroke="#F2B33D" strokeWidth="2" />
            <circle cx="220" cy="320" r="22" fill="#FFF5D6" stroke="#F2B33D" strokeWidth="2" />
            <path d="M212,320 q8,-14 16,0" stroke="#F2B33D" strokeWidth="2" fill="none" />
            <rect x="210" y="340" width="20" height="12" rx="3" fill="#9AA0A6" />
            <path d="M250 290 L253 296 L250 302 L247 296 Z" fill="#FFD873" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;