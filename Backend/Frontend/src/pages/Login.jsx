import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../style/Login.css"
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
import { useAuthStore } from '../stores/useAuth';
import toast from 'react-hot-toast';

export default function Login() {
    const navigate = useNavigate();
    const [credentials, setcredentials] = useState({
        email: "",
        password: "",
    })

    const { login, isLoading } = useAuthStore();

    const validateForm = () => {
        const { email, password } = credentials;
        if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid email format");
        if (!password) return toast.error("Password is required");
        if (password.length < 8) return toast.error("Password must be at least 8 characters");
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        const success = await login(credentials);
        if (success) navigate("/");
    }

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:5000/api/auth/google";
    };

    const handleGithubLogin = () => {
        window.location.href = "http://localhost:5000/api/auth/github";
    };

    return (
        <div className="main-container">
            <form className='login-form' onSubmit={handleSubmit}>
                <h1>Welcome Back!!</h1>
                <div className='login-div'>
                    <label htmlFor='email'>Email
                        <input id='email' type='text' placeholder='Enter your email' required value={credentials.email} onChange={e => setcredentials({ ...credentials, email: e.target.value })}></input>
                    </label>
                    <div className="password-row">
                        <label htmlFor='password'>Password
                            <input id='password' type="password" placeholder='Enter password' autoComplete='off' required value={credentials.password} onChange={e => setcredentials({ ...credentials, password: e.target.value })}>
                            </input>
                        </label>
                        <Link to="/forgot-password" className='forgot-link'>Forgot password?</Link>
                    </div>
                    <button type='submit' className='loginbtn' disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                    <div className="dividerr"><span>OR</span></div>
                    <div className="social-buttons">
                        <button type="button" onClick={handleGoogleLogin} className="social-btn square-btn">
                            <FcGoogle size={35} />
                        </button>

                        <button type="button" onClick={handleGithubLogin} className="social-btn square-btn">
                            <FaGithub size={32} />
                        </button>
                    </div>
                </div>
                <p className='login-text'>
                    Don’t have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    )
}
