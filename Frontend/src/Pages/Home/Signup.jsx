import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, ArrowRight, Unlock, Lock, Sparkles } from "lucide-react";
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
    <div className="hub-page">
      <div className="hub-frame">
        <div className="hub-tab">
          <Sparkles size={14} strokeWidth={2.5} />
        </div>

        <h1>Begin learning today</h1>
        <p className="hub-subtitle">Join Study Hub and start learning smarter.</p>

        <form className="hub-form" onSubmit={handleSubmit}>
          <div className="hub-field">
            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              type="email"
              name="email"
              placeholder="john.doe@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="hub-field">
            <label htmlFor="signup-name">Full name</label>
            <input
              id="signup-name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="hub-field has-toggle">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
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

          <div className="hub-field">
            <label htmlFor="signup-confirm">Confirm password</label>
            <input
              id="signup-confirm"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="hub-submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="hub-spin" size={16} />
                Creating account...
              </>
            ) : (
              <>
                Sign up <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <p className="hub-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;