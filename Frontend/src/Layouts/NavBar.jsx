import React, { useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useAuthStore } from "../Store/useAuthStore";

export default function NavBar() {
  const navigate = useNavigate();
  const { authUser, fetchUser } = useAuthStore();

  useEffect(() => {
    if (authUser) fetchUser();
  }, []);

  return (
    <nav className="Lnavbar">
      <div className='Lnavbar-container'>
        <div className="Lnav-logo" onClick={() => navigate("/")}>
          ALL-IN<span>-ONE</span>
        </div>

        <ul className="Lnavbar-links">
          <li><Link to="/">Home</Link></li>
          <li><button className="nav-btn-link">Features</button></li>
          <li><Link className="ai-tools" to="/ai-tools">AI Tools</Link></li>
          <li><Link to="/it-jobs/ITjobsearch-platform">Job-Search</Link></li>
          <li><Link to="/dashboard/roadmap">RoadMap</Link></li>
          <li><button className="nav-btn-link">FAQ's</button></li>
        </ul>

        <div className="Lnavbar-auth-buttons">
          {!authUser ? (
            <Link to="/login" className="Llogin-btn">Login</Link>
          ) : (
            <div className="Lprofile-wrapper" onClick={() => navigate("/dashboard")}>
                <FaUserCircle size={38} className="nav-profile-icon" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}