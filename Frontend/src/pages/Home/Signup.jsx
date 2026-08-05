import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, ArrowRight, Unlock, Lock, BookOpen, Layers, Sparkles } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import toast from "react-hot-toast";
import "./SignUpLogin.css";

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
        <div className="auth-illustration-panel">
          <svg viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect width="500" height="700" fill="#EAF0FF" />

            <circle cx="60" cy="80" r="70" fill="#0048FF" opacity="0.08" />
            <circle cx="440" cy="130" r="55" fill="#0048FF" opacity="0.1" />

            <path d="M300 150 L306 162 L300 174 L294 162 Z" fill="#0048FF" />
            <path d="M120 190 L125 200 L120 210 L115 200 Z" fill="#0048FF" opacity="0.7" />
            <path d="M400 250 L404 258 L400 266 L396 258 Z" fill="#0048FF" opacity="0.6" />
            <path d="M60 300 L63 306 L60 312 L57 306 Z" fill="#0048FF" opacity="0.5" />

            <rect x="0" y="644" width="500" height="56" fill="#0048FF" opacity="0.06" />
            <ellipse cx="250" cy="660" rx="175" ry="22" fill="#0048FF" opacity="0.1" />

            <rect x="40" y="478" width="420" height="22" rx="8" fill="#0048FF" />
            <rect x="40" y="498" width="420" height="146" rx="16" fill="#000000" />
            <line x1="60" y1="540" x2="440" y2="540" stroke="#FFFFFF" strokeWidth="1" opacity="0.08" />
            <line x1="60" y1="565" x2="440" y2="565" stroke="#FFFFFF" strokeWidth="1" opacity="0.06" />
            <rect x="212" y="548" width="72" height="9" rx="4.5" fill="#FFFFFF" opacity="0.9" />

            <ellipse cx="110" cy="480" rx="42" ry="8" fill="#000000" opacity="0.08" />
            <ellipse cx="230" cy="480" rx="95" ry="9" fill="#000000" opacity="0.08" />
            <ellipse cx="384" cy="480" rx="62" ry="8" fill="#000000" opacity="0.08" />
            <ellipse cx="248" cy="480" rx="26" ry="6" fill="#000000" opacity="0.1" />
            <ellipse cx="175" cy="480" rx="28" ry="6" fill="#000000" opacity="0.08" />

            <polygon points="88,445 132,445 124,482 96,482" fill="#000000" />
            <ellipse cx="110" cy="445" rx="22" ry="6" fill="#0048FF" />
            <path d="M110,445 C95,410 85,385 92,355 C110,385 112,415 110,445 Z" fill="#0048FF" />
            <path d="M110,445 C118,400 135,375 148,360 C138,400 122,430 110,445 Z" fill="#0048FF" opacity="0.6" />
            <path d="M110,445 C100,415 82,400 66,398 C82,420 96,438 110,445 Z" fill="#0048FF" opacity="0.4" />
            <path d="M104,415 C104,402 106,382 109,365" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.5" />

            <rect x="150" y="470" width="50" height="10" rx="2" fill="#FFFFFF" stroke="#000000" strokeWidth="1" transform="rotate(-3 175 475)" />
            <line x1="156" y1="474" x2="192" y2="473" stroke="#000000" strokeWidth="1" opacity="0.5" transform="rotate(-3 175 475)" />
            <line x1="156" y1="478" x2="192" y2="477" stroke="#000000" strokeWidth="1" opacity="0.5" transform="rotate(-3 175 475)" />
            <g transform="rotate(18 178 468)">
              <rect x="150" y="465" width="52" height="6" rx="3" fill="#0048FF" />
              <polygon points="202,465 210,468 202,471" fill="#FFFFFF" />
              <rect x="146" y="465" width="6" height="6" fill="#000000" />
            </g>

            <rect x="140" y="462" width="180" height="18" rx="5" fill="#000000" />
            <rect x="205" y="466" width="50" height="9" rx="3" fill="#FFFFFF" opacity="0.2" />
            <rect x="150" y="362" width="160" height="100" rx="10" fill="#000000" />
            <rect x="158" y="370" width="144" height="84" rx="6" fill="#0048FF" />
            <circle cx="230" cy="366" r="1.6" fill="#FFFFFF" />
            <rect x="170" y="384" width="70" height="8" rx="4" fill="#ffffff" opacity="0.9" />
            <rect x="170" y="400" width="100" height="8" rx="4" fill="#ffffff" opacity="0.5" />
            <rect x="170" y="416" width="60" height="8" rx="4" fill="#ffffff" opacity="0.5" />
            <rect x="170" y="432" width="90" height="8" rx="4" fill="#ffffff" opacity="0.4" />
            <polygon points="158,370 190,370 165,454 158,454" fill="#ffffff" opacity="0.08" />

            <rect x="325" y="458" width="118" height="22" rx="4" fill="#0048FF" transform="rotate(-3 384 469)" />
            <rect x="325" y="458" width="10" height="22" rx="3" fill="#FFFFFF" opacity="0.3" transform="rotate(-3 384 469)" />
            <rect x="335" y="439" width="98" height="20" rx="4" fill="#000000" transform="rotate(2 384 449)" />
            <rect x="335" y="439" width="9" height="20" rx="3" fill="#FFFFFF" opacity="0.2" transform="rotate(2 384 449)" />
            <rect x="342" y="422" width="84" height="18" rx="4" fill="#0048FF" opacity="0.6" transform="rotate(-1 384 431)" />
            <rect x="342" y="422" width="8" height="18" rx="3" fill="#FFFFFF" opacity="0.3" transform="rotate(-1 384 431)" />
            <rect x="357" y="364" width="52" height="52" fill="#000000" transform="rotate(45 384 390)" />
            <rect x="357" y="364" width="52" height="12" fill="#FFFFFF" opacity="0.12" transform="rotate(45 384 390)" />
            <ellipse cx="384" cy="420" rx="17" ry="9" fill="#000000" />
            <ellipse cx="384" cy="417" rx="17" ry="8" fill="#0048FF" opacity="0.3" />
            <circle cx="384" cy="390" r="4" fill="#0048FF" />
            <path d="M384,390 C398,398 406,406 406,417" stroke="#0048FF" strokeWidth="2" fill="none" />
            <line x1="406" y1="417" x2="400" y2="428" stroke="#0048FF" strokeWidth="1.5" />
            <line x1="406" y1="417" x2="406" y2="430" stroke="#0048FF" strokeWidth="1.5" />
            <line x1="406" y1="417" x2="412" y2="428" stroke="#0048FF" strokeWidth="1.5" />

            <ellipse cx="248" cy="481" rx="26" ry="6" fill="#000000" opacity="0.08" />
            <rect x="230" y="450" width="36" height="30" rx="7" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
            <ellipse cx="248" cy="450" rx="18" ry="5" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
            <ellipse cx="248" cy="450" rx="14" ry="3.5" fill="#0048FF" />
            <path d="M266,456 C280,458 282,472 268,476" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M240,440 C244,430 238,422 242,412" stroke="#0048FF" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round" />
            <path d="M250,438 C254,428 248,420 252,410" stroke="#0048FF" strokeWidth="3" fill="none" opacity="0.45" strokeLinecap="round" />
            <path d="M258,442 C262,432 256,424 260,414" stroke="#0048FF" strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round" />

            <line x1="220" y1="278" x2="220" y2="270" stroke="#0048FF" strokeWidth="2" />
            <line x1="188" y1="322" x2="180" y2="322" stroke="#0048FF" strokeWidth="2" />
            <line x1="252" y1="322" x2="260" y2="322" stroke="#0048FF" strokeWidth="2" />
            <line x1="238" y1="288" x2="244" y2="282" stroke="#0048FF" strokeWidth="2" />
            <line x1="202" y1="288" x2="196" y2="282" stroke="#0048FF" strokeWidth="2" />
            <path d="M220,300 C232,300 240,310 240,322 C240,332 234,338 230,342 L230,348 L210,348 L210,342 C206,338 200,332 200,322 C200,310 208,300 220,300 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
            <path d="M212,321 C216,311 224,311 228,321" stroke="#0048FF" strokeWidth="1.5" fill="none" />
            <rect x="212" y="348" width="16" height="5" fill="#000000" />
            <rect x="212" y="354" width="16" height="5" fill="#000000" opacity="0.7" />
            <line x1="212" y1="351" x2="228" y2="351" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.5" />
          </svg>
        </div>
        <div className="auth-form-panel">
          <div className="brand">
            <span className="brand-mark">
              <Sparkles size={16} strokeWidth={2.5} />
            </span>
            <span className="brand-name">
              Study <span className="brand-accent">Hub</span>
            </span>
          </div>
          <h1>Begin learning today</h1>
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
                {showPassword ? <Unlock size={18} /> : <Lock size={18} />}
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
      </div>
    </div>
  );
};

export default SignUpPage;