import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { signup, sendVerifyOtp, isLoading } = useAuthStore();

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
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters");
    if (password !== confirmPassword)
      return toast.error("Passwords do not match");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const result = await signup(form);

    if (result?.success) {
      localStorage.setItem("verifyEmail", form.email);
      navigate("/verify-account");
      toast.success(result.message);
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

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
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
